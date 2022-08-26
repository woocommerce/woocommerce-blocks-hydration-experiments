/**
 * External dependencies
 */
import { Icon, tag } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import { Edit } from './edit';
import Frontend from './frontend';
import { registerBlockType } from '../../../../base/utils/bhe-blocks';

registerBlockType( 'woocommerce/cart-order-summary-coupon-form-block', {
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
