/**
 * External dependencies
 */
import { StoreNoticesProvider } from '@woocommerce/base-context';
import { renderFrontend } from '@woocommerce/base-utils';

/**
 * Internal dependencies
 */
import Block from './block.js';
import { registerBlockType } from '../../../base/utils/bhe-frontend';

/**
 * Wrapper component to supply the notice provider.
 *
 * @param {*} props
 */
// const AllProductsFrontend = ( props ) => {
// 	return (
// 		<StoreNoticesProvider context="wc/all-products">
// 			<Block { ...props } />
// 		</StoreNoticesProvider>
// 	);
// };

// const getProps = ( el ) => ( {
// 	attributes: JSON.parse( el.dataset.attributes ),
// } );

// renderFrontend( {
// 	selector: '.wp-block-woocommerce-all-products',
// 	Block: AllProductsFrontend,
// 	getProps,
// } );

registerBlockType( 'woocommerce/all-products', Block );
