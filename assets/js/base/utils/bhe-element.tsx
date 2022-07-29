/**
 * External dependencies
 */
import { hydrate as ReactHydrate } from 'react-dom';
import { ReactElement } from 'react';

type HydrateOptions = {
	technique?: 'media' | 'view' | 'idle';
	media?: string;
};

export const hydrate = (
	element: ReactElement,
	container: Element,
	hydrationOptions: HydrateOptions = {}
) => {
	const { technique, media } = hydrationOptions;
	const cb = () => {
		ReactHydrate( element, container );
	};
	switch ( technique ) {
		case 'media':
			if ( media ) {
				const mql = matchMedia( media );
				if ( mql.matches ) {
					cb();
				} else {
					mql.addEventListener( 'change', cb, { once: true } );
				}
			}
			break;
		// Hydrate the element when is visible in the viewport.
		// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
		case 'view':
			try {
				const io = new IntersectionObserver( ( entries ) => {
					for ( const entry of entries ) {
						if ( ! entry.isIntersecting ) {
							continue;
						}
						// As soon as we hydrate, disconnect this IntersectionObserver.
						io.disconnect();
						cb();
						break; // break loop on first match
					}
				} );
				io.observe( container.children[ 0 ] );
			} catch ( e ) {
				cb();
			}
			break;
		case 'idle':
			// Safari does not support requestIdleCalback, we use a timeout instead. https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback
			if ( 'requestIdleCallback' in window ) {
				window.requestIdleCallback( cb );
			} else {
				setTimeout( cb, 200 );
			}
			break;
		// Hydrate this component immediately.
		default:
			cb();
	}
};
