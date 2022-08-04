/**
 * External dependencies
 */
import { StoreNoticesProvider } from '@woocommerce/base-context';

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
const AllProductsFrontend = ( props ) => {
	return (
		<StoreNoticesProvider context="wc/all-products">
			<Block { ...props } />
		</StoreNoticesProvider>
	);
};

registerBlockType( 'woocommerce/all-products', AllProductsFrontend );
