/**
 * External dependencies
 */
import { ReactElement } from 'react';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { registerBlockType as gutenbergRegisterBlockType } from '@wordpress/blocks';

const Wrapper =
	( Comp: ReactElement ) =>
	( { attributes } ) =>
		(
			<>
				{ /* Block Context is not available during save
				https://wordpress.slack.com/archives/C02QB2JS7/p1649347999484329 */ }
				<Comp
					blockProps={ useBlockProps.save() }
					attributes={ attributes }
					context={ {} }
				>
					<wp-inner-blocks { ...useInnerBlocksProps.save() } />
				</Comp>
			</>
		);

export const registerBHEBlockType = ( name, { edit, view, ...rest } ) => {
	gutenbergRegisterBlockType( name, {
		edit,
		save: Wrapper( view ),
		...rest,
	} );
};
