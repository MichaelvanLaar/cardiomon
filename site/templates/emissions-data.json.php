<?php
/**
 * =============================================================================
 * Emissions Data JSON Export Template
 *
 * Uses variables from controller:
 * - $jsonData (JSON string)
 * =============================================================================
 */

header("Content-Type: application/json");
echo $jsonData;
