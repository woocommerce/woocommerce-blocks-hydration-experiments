/**
 * External dependencies
 */
import { TotalsCoupon } from '@woocommerce/base-components/cart-checkout';
import { useStoreCartCoupons } from '@woocommerce/base-context/hooks';
import { getSetting } from '@woocommerce/settings';
import { TotalsWrapper } from '@woocommerce/blocks-checkout';
import { useState } from '@wordpress/element';

const Block = ( { className }: { className: string } ): JSX.Element | null => {
	const couponsEnabled = getSetting( 'couponsEnabled', true );

	const [ count, setCount ] = useState( 0 );

	const { applyCoupon, isApplyingCoupon } = useStoreCartCoupons( 'wc/cart' );

	if ( ! couponsEnabled ) {
		return null;
	}

	return (
		<TotalsWrapper className={ className }>
			<TotalsCoupon
				onSubmit={ applyCoupon }
				isLoading={ isApplyingCoupon }
			/>
			<button
				onClick={ () => setCount( count + 1 ) }
			>{ `Counter update: ${ count }` }</button>
		</TotalsWrapper>
	);
};

export default Block;
