/**
 * External dependencies
 */
import { createBlock, registerBlockType } from '@wordpress/blocks';
import {
	isExperimentalBuild,
	WC_BLOCKS_IMAGE_URL,
} from '@woocommerce/block-settings';
import { useBlockProps } from '@wordpress/block-editor';
import { Button, Placeholder } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import { box, Icon } from '@wordpress/icons';
import { useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import './editor.scss';
import './style.scss';
import { TEMPLATES } from './constants';

interface Props {
	attributes: {
		template: string;
		align: string;
	};
	clientId: string;
}

const Edit = ( { clientId, attributes }: Props ) => {
	const { replaceBlock } = useDispatch( 'core/block-editor' );

	const blockProps = useBlockProps();
	const templateTitle =
		TEMPLATES[ attributes.template ]?.title ?? attributes.template;
	const templatePlaceholder =
		TEMPLATES[ attributes.template ]?.placeholder ?? 'fallback';
	return (
		<div { ...blockProps }>
			<Placeholder
				icon={ box }
				label={ templateTitle }
				className="wp-block-woocommerce-classic-template__placeholder"
			>
				<div className="wp-block-woocommerce-classic-template__placeholder-copy">
					<p className="wp-block-woocommerce-classic-template__placeholder-warning">
						<strong>
							{ __(
								'Attention: Do not remove this block!',
								'woo-gutenberg-products-block'
							) }
						</strong>{ ' ' }
						{ __(
							'Removal will cause unintended effects on your store.',
							'woo-gutenberg-products-block'
						) }
					</p>
					<p>
						{ sprintf(
							/* translators: %s is the template title */
							__(
								'This is an editor placeholder for the %s. On your store this will be replaced by the template and display with your product image(s), title, price, etc. You can move this placeholder around and add further blocks around it to extend the template.',
								'woo-gutenberg-products-block'
							),
							templateTitle
						) }
					</p>
				</div>
				<div className="wp-block-woocommerce-classic-template__placeholder-wireframe">
					{ isExperimentalBuild() && (
						<div className="wp-block-woocommerce-classic-template__placeholder-migration-button-container">
							<Button
								isPrimary
								onClick={ () => {
									replaceBlock(
										clientId,
										// TODO: Replace with the blockified version of the Product Grid Block when it will be available.
										createBlock( 'core/paragraph', {
											content:
												'Instead of this block, the new Product Grid Block will be rendered',
										} )
									);
								} }
								text={ __(
									'Use the blockified Product Grid Block',
									'woo-gutenberg-products-block'
								) }
							/>
						</div>
					) }
					<img
						className="wp-block-woocommerce-classic-template__placeholder-image"
						src={ `${ WC_BLOCKS_IMAGE_URL }template-placeholders/${ templatePlaceholder }.svg` }
						alt={ templateTitle }
					/>
				</div>
			</Placeholder>
		</div>
	);
};

/**
 * The 'WooCommerce Legacy Template' block was renamed to 'WooCommerce Classic Template', however, the internal block
 * name 'woocommerce/legacy-template' needs to remain the same. Otherwise, it would result in a corrupt block when
 * loaded for users who have customized templates using the legacy-template (since the internal block name is
 * stored in the database).
 *
 * See https://github.com/woocommerce/woocommerce-gutenberg-products-block/issues/5861 for more context
 */
registerBlockType( 'woocommerce/legacy-template', {
	title: __( 'WooCommerce Classic Template', 'woo-gutenberg-products-block' ),
	icon: (
		<Icon icon={ box } className="wc-block-editor-components-block-icon" />
	),
	category: 'woocommerce',
	apiVersion: 2,
	keywords: [ __( 'WooCommerce', 'woo-gutenberg-products-block' ) ],
	description: __(
		'Renders classic WooCommerce PHP templates.',
		'woo-gutenberg-products-block'
	),
	supports: {
		align: [ 'wide', 'full' ],
		html: false,
		multiple: false,
		reusable: false,
		inserter: false,
	},
	example: {
		attributes: {
			isPreview: true,
		},
	},
	attributes: {
		/**
		 * Template attribute is used to determine which core PHP template gets rendered.
		 */
		template: {
			type: 'string',
			default: 'any',
		},
		align: {
			type: 'string',
			default: 'wide',
		},
	},
	edit: Edit,
	save: () => null,
} );
