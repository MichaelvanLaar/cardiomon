<?php
/**
 * =============================================================================
 * Not Used Default Template for Emissions Data Page
 * =============================================================================
 */

// Get the current URL
$currentURL = $page->url();

// Construct the .json version of the current URL
$jsonURL = "{$currentURL}.json";

// Redirect to the .json version
go($jsonURL, 301);
