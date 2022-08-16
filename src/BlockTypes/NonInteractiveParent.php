<?php
namespace Automattic\WooCommerce\Blocks\BlockTypes;

/**
 * NonInteractiveParent class.
 */
class NonInteractiveParent extends AbstractBlock {
	/**
	 * Block namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'bhe';

	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'non-interactive-parent';

	/**
	 * Get the frontend script handle for this block type.
	 *
	 * @param string $key Data to get, or default to everything.
	 * @return null
	 */
	protected function get_block_type_script( $key = null ) {
		return null;
	}
}
