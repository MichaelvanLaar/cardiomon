<?php
/**
 * =============================================================================
 * Model: Emissions Data Entry
 * =============================================================================
 */

use Kirby\Cms\Page;

class EmissionsDataEntryPage extends Page {
    public function panelHelperCountryName() {
        return bvdputte\Countries::codeToName($this->country()->value());
    }
}
