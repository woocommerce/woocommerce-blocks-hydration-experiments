/**
 * External dependencies
 */
import Title from '@woocommerce/base-components/title';
import classnames from 'classnames';
import { useState } from '@wordpress/element';

const Block = ( {
	className,
	content = '',
}: {
	className: string;
	content: string;
} ): JSX.Element => {
	const [ count, setCount ] = useState( 0 );
	return (
		<Title
			headingLevel="2"
			className={ classnames( className, 'wc-block-cart__totals-title' ) }
		>
			{ content }
			<button
				onClick={ () => setCount( count + 1 ) }
			>{ `Counter: ${ count }` }</button>
		</Title>
	);
};

export default Block;
