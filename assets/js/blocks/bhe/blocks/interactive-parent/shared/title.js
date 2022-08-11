import { RichText } from 'bhe/src/gutenberg-packages/wordpress-blockeditor';

const Title = ( { children, ...props } ) => (
	<RichText tagName="h2" className="title" { ...props }>
		{ children }
	</RichText>
);

export default Title;
