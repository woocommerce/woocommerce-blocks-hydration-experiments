/**
 * External dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import Noninteractive from '@woocommerce/base-components/noninteractive';

/**
 * Internal dependencies
 */
import Block from './frontend';

export const Edit = ( {
	attributes,
}: {
	attributes: {
		className: string;
	};
	setAttributes: ( attributes: Record< string, unknown > ) => void;
} ): JSX.Element => {
	const { className } = attributes;
	const blockProps = useBlockProps();
	return (
		<div { ...blockProps }>
			<Noninteractive>
				<Block className={ className } />
			</Noninteractive>
		</div>
	);
};
