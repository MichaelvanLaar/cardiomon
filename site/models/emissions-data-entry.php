<?php
/**
 * =============================================================================
 * Model: Emissions Data Entry
 * =============================================================================
 */

use Kirby\Cms\Page;
use Kirby\Cms\Html;

class EmissionsDataEntryPage extends Page {
    /**
     * Returns the formatted carbon emission per year.
     *
     * @return string The formatted carbon emission per year.
     */
    public function carbonEmissionPerYearFormatted() {
        $locale = kirby()
            ->language()
            ->locale(LC_ALL);
        $emission = $this->carbonEmissionPerYear()->toInt();
        $formatter = new NumberFormatter($locale, NumberFormatter::DECIMAL);
        $formattedEmission = $formatter->format($emission);

        return $formattedEmission;
    }

    /**
     * Returns the language specific name version of the country associated with
     * the emissions data entry. This is required because the country
     * information is stored language independent as a country code.
     *
     * @return string The name of the country.
     */
    public function countryName() {
        return bvdputte\Countries::codeToName($this->country()->value());
    }

    /**
     * Generates a link to edit the entry in the Panel.
     *
     * @return string The HTML link to edit the entry.
     */
    public function panelHelperEditLink() {
        // Build the URL to the entry in the Panel.
        $panelUrl = kirby()->url("panel");
        $languageCode = kirby()->languageCode();
        $entryUrl = "{$panelUrl}/pages/{$this->panel()->id()}?language={$languageCode}";

        // Build the link label for the entry, taking the user language into
        // account.
        $userLanguageCode = kirby()
            ->user()
            ->language();
        $availableLanguages = kirby()->languages();
        $isLanguageAvailable =
            $availableLanguages->find($userLanguageCode) !== null;
        $linkLabelLanguage = $isLanguageAvailable ? $userLanguageCode : "en";
        $linkLabel = kirby()
            ->languages()
            ->get($linkLabelLanguage)
            ->translations()["Edit"];

        return Html::a($entryUrl, $linkLabel);
    }
}
