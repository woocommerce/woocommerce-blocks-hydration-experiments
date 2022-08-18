/**
 * External dependencies
 */
import { TotalsCoupon } from '@woocommerce/base-components/cart-checkout';
import { getSetting } from '@woocommerce/settings';
import { TotalsWrapper } from '@woocommerce/blocks-checkout';
import { useStoreCartCoupons } from '@woocommerce/base-context/hooks';

/**
 * Internal dependencies
 */
import { useBlockEnvironment } from '../../../../base/utils/bhe-element';

const Block = ( { className }: { className: string } ): JSX.Element | null => {
	const couponsEnabled = getSetting( 'couponsEnabled', true );
	const environment = useBlockEnvironment();
	const { applyCoupon, isApplyingCoupon } =
		environment === 'frontend'
			? // eslint-disable-next-line
			  useStoreCartCoupons( 'wc/cart' )
			: {
					applyCoupon: () => null,
					isApplyingCoupon: false,
			  };
	if ( ! couponsEnabled ) {
		return null;
	}

	return (
		<TotalsWrapper className={ className }>
			<TotalsCoupon
				onSubmit={ applyCoupon }
				isLoading={ isApplyingCoupon }
			/>
		</TotalsWrapper>
	);
};

export default Block;
