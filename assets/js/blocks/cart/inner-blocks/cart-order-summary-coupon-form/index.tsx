/**
 * External dependencies
 */
import { Icon, tag } from '@wordpress/icons';
import { registerBlockType } from 'assets/js/base/utils/bhe-blocks';

/**
 * Internal dependencies
 */
import { Edit } from './edit';
import Frontend from './block';

registerBlockType( 'woocommerce/cart-order-summary-coupon-form', {
	frontend: Frontend,
	edit: Edit,
	icon: {
		src: (
			<Icon
				icon={ tag }
				className="wc-block-editor-components-block-icon"
			/>
		),
	},
} );
