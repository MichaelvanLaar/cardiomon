<?php
/**
 * =============================================================================
 * Controller for Emissions Data JSON Export Template
 *
 * Provides variables for use in the template:
 * - $jsonData (JSON string)
 * =============================================================================
 */

return function ($page) {
    // Retrieve data entries
    $childPages = $page
        ->children()
        ->filterBy("intendedTemplate", "emissions-data-entry");

    // Extract data
    $data = [];
    foreach ($childPages as $child) {
        $data[] = [
            t("Company") => $child->company()->value(),
            t("Country") => bvdputte\Countries::codeToName(
                $child->country()->value()
            ),
            t("Carbon emission per year (in tons)") => $child
                ->carbonEmissionPerYear()
                ->value(),
        ];
    }

    // Format data as JSON
    $jsonData = json_encode($data);

    return ["jsonData" => $jsonData];
};
