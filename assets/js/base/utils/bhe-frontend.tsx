/**
 * External dependencies
 */
import { ReactElement } from 'react';

/**
 * Internal dependencies
 */
import { matcherFromSource, pickKeys } from './utils';
import { hydrate } from './bhe-element';

declare global {
	interface Window {
		blockRegistry: BlockRegistry;
	}
}

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace, @typescript-eslint/no-unused-vars
	namespace JSX {
		interface IntrinsicElements {
			// eslint-disable-next-line @typescript-eslint/naming-convention
			'wp-inner-blocks': React.DetailedHTMLProps<
				React.HTMLAttributes< HTMLElement >,
				HTMLElement
			>;
		}
	}
}

/**
 * A container for the block registry.
 * This could have been a simple `Map`, were it not for the need for the
 * `whenRegistered` method which is used to await the registration of a block
 * with a particular name.
 */
class BlockRegistry {
	// It's a static property so that I don't have to deal with the `this`
	// reference. Since this property is used inside of the proxy handler,
	// we would have to do a manual workaround to get the correct `this` reference.
	static #listeners = new Map< string, () => void >();

	// Normally, the registry would also be a Map, but I didn't want to complicate
	// the implementation as the Map cannot be transparently wrapped in a proxy.
	// More details in
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#no_private_property_forwarding
	// So, for now, we use a plain object.
	static #registry = new Proxy( {} as Record< string, ReactElement >, {
		set( target, prop, receiver, value ) {
			const val = Reflect.set( target, prop, receiver, value );
			const listener = BlockRegistry.#listeners.get( prop as string );
			if ( listener !== undefined ) listener();
			return val;
		},
	} );

	#addListener( name: string, listener: () => void ) {
		BlockRegistry.#listeners.set( name, listener );
	}

	get( name: string ) {
		return BlockRegistry.#registry[ name ];
	}

	set( name: string, block: ReactElement ) {
		return ( BlockRegistry.#registry[ name ] = block );
	}

	/**
	 * Returns a Promise that resolves when the named block is registered.
	 *
	 * @param  name    The name of the block that we want to await until it's registered.
	 * @param  timeout The optional timeout in milliseconds.
	 * @return 	A Promise that fulfills with the React component when the block becomes
	 * 					registered with the given name. If a block has already been defined with
	 *          the name, the promise will immediately fulfill. If the block does
	 *          not get registered within the timeout (default = 10s), the Promise will reject.
	 */
	whenRegistered( name: string, timeout = 10000 ) {
		return new Promise( ( resolve, reject ) => {
			let Comp = BlockRegistry.#registry[ name ];
			if ( Comp ) {
				resolve( Comp );
			} else {
				this.#addListener( name, () => {
					Comp = BlockRegistry.#registry[ name ];
					if ( Comp ) resolve( BlockRegistry.#registry[ name ] );
				} );
				setTimeout( () => {
					BlockRegistry.#listeners.delete( name );
					reject( new Error( `Block ${ name } not registered` ) );
				}, timeout );
			}
		} );
	}
}

// We assign `blockTypes` to window to make sure it's a global singleton.
//
// Have to do this because of the way we are currently bundling the code
// in this repo, each block gets its own copy of this file.
//
// We COULD fix this by doing some webpack magic to spit out the code in
// `gutenberg-packages` to a shared chunk but assigning `blockTypes` to window
// is a cheap hack for now that will be fixed once we can merge this code into Gutenberg.
if ( typeof window.blockRegistry === 'undefined' ) {
	window.blockRegistry = new BlockRegistry();
}

export const registerBlockType = ( name: string, Comp: ReactElement ) => {
	window.blockRegistry.set( name, Comp );
};

const Children = ( { value, providedContext } ) => {
	if ( ! value ) {
		return null;
	}
	return (
		<wp-inner-blocks
			ref={ ( el ) => {
				if ( el !== null ) {
					// listen for the ping from the child
					el.addEventListener( 'wp-block-context', ( event ) => {
						// We have to also destructure `event.detail.context` because there can
						// already exist a property in the context with the same name.
						event.detail.context = {
							...providedContext,
							...event?.detail?.context,
						};
					} );
				}
			} }
			suppressHydrationWarning={ true }
			dangerouslySetInnerHTML={ { __html: value } }
		/>
	);
};
Children.shouldComponentUpdate = () => false;

class WpBlock extends HTMLElement {
	connectedCallback() {
		setTimeout( async () => {
			const blockType = this.getAttribute( 'data-wp-block-type' );

			let Comp;
			try {
				Comp = await window.blockRegistry.whenRegistered( blockType );
			} catch ( e ) {
				// If the block does not get registered within 10 seconds, an error will
				// be thrown and we should bail out of hydrating this block.
				return;
			}

			// ping the parent for the context
			const event = new CustomEvent( 'wp-block-context', {
				detail: {},
				bubbles: true,
				cancelable: true,
			} );
			this.dispatchEvent( event );

			const usesContext = JSON.parse(
				this.getAttribute(
					'data-wp-block-uses-block-context'
				) as string
			);
			const providesContext = JSON.parse(
				this.getAttribute(
					'data-wp-block-provides-block-context'
				) as string
			);
			const attributes = JSON.parse(
				this.getAttribute( 'data-wp-block-attributes' ) as string
			);
			const sourcedAttributes = JSON.parse(
				this.getAttribute(
					'data-wp-block-sourced-attributes'
				) as string
			);

			for ( const attr in sourcedAttributes ) {
				attributes[ attr ] = matcherFromSource(
					sourcedAttributes[ attr ]
				)( this );
			}

			// pass the context to children if needed
			const providedContext =
				providesContext &&
				pickKeys( attributes, Object.keys( providesContext ) );

			// select only the parts of the context that the block declared in
			// the `usesContext` of its block.json
			const context = pickKeys( event.detail.context, usesContext );

			const blockProps = {
				className: this.children[ 0 ].className,
				style: this.children[ 0 ].style,
			};

			const innerBlocks = this.querySelector( 'wp-inner-blocks' );
			const technique = this.getAttribute( 'data-wp-block-hydrate' );
			const media = this.getAttribute( 'data-wp-block-media' );
			const hydrationOptions = { technique, media };
			hydrate(
				<>
					<Comp
						attributes={ attributes }
						blockProps={ blockProps }
						suppressHydrationWarning={ true }
						context={ context }
					>
						<Children
							value={ innerBlocks && innerBlocks.innerHTML }
							suppressHydrationWarning={ true }
							providedContext={ providedContext }
						/>
					</Comp>
					<template
						className="wp-inner-blocks"
						suppressHydrationWarning={ true }
					/>
				</>,
				this,
				hydrationOptions
			);
		} );
	}
}

// We need to wrap the element registration code in a conditional for the same
// reason we assing `blockTypes` to window (see top of the file).
//
// We need to ensure that the component registration code is only run once
// because it throws if you try to register an element with the same name twice.
if ( customElements.get( 'wp-block' ) === undefined ) {
	customElements.define( 'wp-block', WpBlock );
}
