/**
 * External dependencies
 */
import { Icon, tag } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import { Edit } from './edit';
import Frontend from './frontend';
import { registerBHEBlockType } from '../../../../base/utils/bhe-blocks';

registerBHEBlockType( 'woocommerce/cart-order-summary-coupon-form-block', {
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
