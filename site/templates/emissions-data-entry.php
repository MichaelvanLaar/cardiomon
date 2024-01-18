<?php
/**
 * =============================================================================
 * Not Used Default Template for Emissions Data Entry Page
 * =============================================================================
 */

// Get the parent URL
$parentURL = $page->parent()->url();

// Construct the .json version of the arent URL
$jsonURL = "{$parentURL}.json";

// Redirect to the .json version of the parent page
go($jsonURL, 301);
