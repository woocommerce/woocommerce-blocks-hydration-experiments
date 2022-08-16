import CounterContext from '../../context/counter';
import ThemeContext from '../../context/theme';
import { registerBlockType } from 'bhe/src/gutenberg-packages/frontend';
import View from './view';

registerBlockType( 'bhe/interactive-parent', View, {
	providesContext: [ ThemeContext, CounterContext ],
} );
