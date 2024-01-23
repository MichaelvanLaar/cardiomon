<?php
/**
 * =============================================================================
 * Emissions Table Snippet
 * =============================================================================
 */

// Retrieve data entries
$emissionsEntries = page("emissions-data")
  ->children()
  ->filterBy("template", "emissions-data-entry");

// Sort the collection
$sortedEntries = $emissionsEntries->sortBy(
  "company",
  "asc",
  "countryName",
  "asc"
);
?>

<table>
  <thead>
    <tr>
      <th><?= t("Company") ?></th>
      <th><?= t("Country") ?></th>
      <th><?= t("Carbon emission per year (in tons)") ?></th>
    </tr>
  </thead>
  <tbody>
    <?php foreach ($sortedEntries as $entry): ?>
      <tr>
        <td data-label="<?= t("Company") ?>"><?= $entry->company() ?></td>
        <td data-label="<?= t("Country") ?>"><?= $entry->countryName() ?></td>
        <td data-label="<?= t("Carbon emission per year (in tons)") ?>"><?= $entry->carbonEmissionPerYearFormatted() ?></td>
      </tr>
    <?php endforeach; ?>
  </tbody>
</table>