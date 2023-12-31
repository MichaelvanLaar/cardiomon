<?php

use JohannSchopplich\AssetUrls;
use Kirby\Cms\App;
use Kirby\Cms\Html;

if (!function_exists('hashedUrl')) {
    /**
     * Returns the URL of a hashed asset if present
     *
     * @param string $url Relative or absolute URL
     * @return string
     */
    function hashedUrl(string $url): string
    {
        $kirby = App::instance();
        $extension = pathinfo($url, PATHINFO_EXTENSION);
        return AssetUrls::handle($kirby, $url, [], $extension);
    }
}

if (!function_exists('cssTpl')) {
    /**
     * Creates the CSS link tag if template-specific CSS exists
     *
     * @param string|array $options
     * @return mixed
     */
    function cssTpl($options = [])
    {
        $kirby = App::instance();
        $url = AssetUrls::handle($kirby, '@template', $options, 'css');

        if ($url !== '@template') {
            return Html::css($url, $options);
        }
    }
}

if (!function_exists('jsTpl')) {
    /**
     * Creates a script tag if a template-specific JS exists
     *
     * @param string|array $options
     * @return mixed
     */
    function jsTpl($options = [])
    {
        $kirby = App::instance();
        $url = AssetUrls::handle($kirby, '@template', $options, 'js');

        if ($url !== '@template') {
            return Html::js($url, $options);
        }
    }
}
