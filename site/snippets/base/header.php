<?php
/**
 * =============================================================================
 * Header Snippet for All Pages
 *
 * Uses “header.controller.php” via the Kirby Snippet Controller plugin
 * Plugin details: https://github.com/lukaskleinschmidt/kirby-snippet-controller
 *
 * Receives variables from snippet controller:
 * - $pageLanguageCode
 * - $pageLanguageLocale
 * - $languages
 * - $defaultLanguage
 * - $pageLanguageDirection
 * - $hasMoreThanOneLanguage
 * - $metaTitle
 * - $metaDescription
 * - $socialShareTitleOutput
 * - $socialShareDescriptionOutput
 * - $socialShareImageUrlOutput
 * - $twitterSiteHandle
 * - $twitterCreatorHandle
 * - $siteLogoFile
 * =============================================================================
 */
?>
<!DOCTYPE html>
<html class="no-js" lang="<?= $pageLanguageCode ?>" dir="<?= $pageLanguageDirection ?>">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title><?= $metaTitle ?></title>
    <?php if (strlen($metaDescription) > 0): ?>
      <meta name="description" content="<?= $metaDescription ?>" />
    <?php endif; ?>

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="theme-color" content="#ffffff" />

    <!-- Change “no-js” class in <html> to “js” if JavaScript is enabled -->
    <script>
      (function (H) {
        H.className = H.className.replace(/\bno-js\b/, "js");
      })(document.documentElement);
    </script>

    <style>
      /* Local webfont: readex-pro-200 - arabic_latin */
      @font-face {
        font-display: swap;
        font-family: 'Readex Pro';
        font-style: normal;
        font-weight: 200;
        src: url('/assets/fonts/readex-pro-v21-arabic_latin-200.woff2') format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
            url('/assets/fonts/readex-pro-v21-arabic_latin-200.ttf') format('truetype'); /* Chrome 4+, Firefox 3.5+, IE 9+, Safari 3.1+, iOS 4.2+, Android Browser 2.2+ */
      }

      /* Local webfont: readex-pro-300 - arabic_latin */
      @font-face {
        font-display: swap;
        font-family: 'Readex Pro';
        font-style: normal;
        font-weight: 300;
        src: url('/assets/fonts/readex-pro-v21-arabic_latin-300.woff2') format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
            url('/assets/fonts/readex-pro-v21-arabic_latin-300.ttf') format('truetype'); /* Chrome 4+, Firefox 3.5+, IE 9+, Safari 3.1+, iOS 4.2+, Android Browser 2.2+ */
      }

      /* Local webfont: readex-pro-regular - arabic_latin */
      @font-face {
        font-display: swap;
        font-family: 'Readex Pro';
        font-style: normal;
        font-weight: 400;
        src: url('/assets/fonts/readex-pro-v21-arabic_latin-regular.woff2') format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
            url('/assets/fonts/readex-pro-v21-arabic_latin-regular.ttf') format('truetype'); /* Chrome 4+, Firefox 3.5+, IE 9+, Safari 3.1+, iOS 4.2+, Android Browser 2.2+ */
      }

      /* Local webfont: readex-pro-500 - arabic_latin */
      @font-face {
        font-display: swap;
        font-family: 'Readex Pro';
        font-style: normal;
        font-weight: 500;
        src: url('/assets/fonts/readex-pro-v21-arabic_latin-500.woff2') format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
            url('/assets/fonts/readex-pro-v21-arabic_latin-500.ttf') format('truetype'); /* Chrome 4+, Firefox 3.5+, IE 9+, Safari 3.1+, iOS 4.2+, Android Browser 2.2+ */
      }

      /* Local webfont: readex-pro-600 - arabic_latin */
      @font-face {
        font-display: swap;
        font-family: 'Readex Pro';
        font-style: normal;
        font-weight: 600;
        src: url('/assets/fonts/readex-pro-v21-arabic_latin-600.woff2') format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
            url('/assets/fonts/readex-pro-v21-arabic_latin-600.ttf') format('truetype'); /* Chrome 4+, Firefox 3.5+, IE 9+, Safari 3.1+, iOS 4.2+, Android Browser 2.2+ */
      }

      /* Local webfont: readex-pro-700 - arabic_latin */
      @font-face {
        font-display: swap;
        font-family: 'Readex Pro';
        font-style: normal;
        font-weight: 700;
        src: url('/assets/fonts/readex-pro-v21-arabic_latin-700.woff2') format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
            url('/assets/fonts/readex-pro-v21-arabic_latin-700.ttf') format('truetype'); /* Chrome 4+, Firefox 3.5+, IE 9+, Safari 3.1+, iOS 4.2+, Android Browser 2.2+ */
      }

      body {
        /* Used to trigger early font detection and download,
        see https://web.dev/articles/font-best-practices?hl=en#inline_font_declarations */
        font-family: "Readex Pro", sans-serif;

        /* Set site header height */
        --site-header-initial-height: 5rem;
        --site-header-scroll-height: 3rem;
        --site-header-height: var(--site-header-initial-height);

        /* Set site header vertical padding */
        --site-header-initial-padding-y: 0.5rem;
        --site-header-scroll-padding-y: 0.3rem;
        --site-header-padding-y: var(--site-header-initial-padding-y);

        /* Calculate site logo dimensions */
        --site-logo-initial-height: calc(var(--site-header-height) * 1.2);
        --site-logo-height: calc(var(--site-header-height) * 1.2);
        --site-logo-aspect-ratio: <?= $siteLogoFile->dimensions()->ratio() ?>;

        /* Calculate navigation toggle width  */
        --main-navigation-toggle-width: calc(var(--site-header-scroll-height) - (2 * var(--site-header-scroll-padding-y)) + 1.5rem);

        /* Calculate stroke width of navigation toggle icon  */
        --nav-toggle-icon-stroke-width: calc(var(--site-header-scroll-height) / 24);
      }
    </style>
      <?= css("assets/css/main.css") ?>

    <!-- Open Graph Data -->
    <meta property="og:title" content="<?= $socialShareTitleOutput ?>" />
    <?php if (strlen($socialShareDescriptionOutput) > 0): ?>
      <meta property="og:description" content="<?= $socialShareDescriptionOutput ?>" />
    <?php endif; ?>
    <?php if (strlen($socialShareImageUrlOutput) > 0): ?>
      <meta property="og:image" content="<?= $socialShareImageUrlOutput ?>" />
    <?php endif; ?>
    <meta property="og:locale" content="<?= $pageLanguageLocale ?>" />

    <!-- Twitter Data -->
    <meta name="twitter:card" content="summary_large_image" />
    <?php if (strlen($twitterSiteHandle) > 0): ?>
      <meta name="twitter:site" content="<?= $twitterSiteHandle ?>" />
    <?php endif; ?>
    <?php if (strlen($twitterCreatorHandle) > 0): ?>
      <meta name="twitter:creator" content="<?= $twitterCreatorHandle ?>" />
    <?php endif; ?>
    <meta name="twitter:title" content="<?= $socialShareTitleOutput ?>" />
    <?php if (strlen($socialShareDescriptionOutput) > 0): ?>
      <meta name="twitter:description" content="<?= $socialShareDescriptionOutput ?>" />
    <?php endif; ?>
    <?php if (strlen($socialShareImageUrlOutput) > 0): ?>
      <meta name="twitter:image" content="<?= $socialShareImageUrlOutput ?>" />
    <?php endif; ?>

    <!-- Hreflang annotations -->
    <?php if ($hasMoreThanOneLanguage): ?>
      <?php foreach ($languages as $lang): ?>
        <link 
          rel="alternate" 
          hreflang="<?= $lang->code() ?>" 
          href="<?= $page->url($lang->code()) ?>" 
        />
      <?php endforeach; ?>
      <link 
        rel="alternate" 
        hreflang="x-default" 
        href="<?= $page->url($defaultLanguage->code()) ?>" 
      />
    <?php endif; ?>

    <link rel="canonical" href="<?= $page->url() ?>" />
    <?php if (!$page->seoIndex()->toBool()): ?>
      <meta name="robots" content="noindex, nofollow">
    <?php endif; ?>
  </head>

  <body class="flex min-h-screen flex-col bg-white dark:bg-neutral-800 dark:text-white print:block">

    <!-- PAGE HEADER -->
    <!-- Row -->
    <header
      id="page-header"
      class="z-30 flex h-[var(--site-header-height)] w-full bg-lime-100 js:fixed dark:bg-lime-900 print:h-[var(--site-header-initial-height)] print:bg-transparent print:js:static"
      role="banner"
    >
      <!-- Inner row container -->
      <div class="row-container-default relative flex items-center justify-end pt-[calc(0.25_*_var(--site-header-height))]">
        <!-- Site logo -->
        <a
          href="<?= $site->url() ?>"
          title="<?= $site->title() ?> → <?= $site->homePage()->title() ?>"
          aria-label="<?= $site->title() ?> Logo"
          class="[&_svg]:hover:brightness-125 [&_svg]:hover:transition-all site-logo-container absolute start-medium top-0 -ms-[calc(0.0521_*_var(--site-header-height))] print:start-0 print:ms-0 lg:start-large"
        >
          <?= $siteLogoFile->extension() == "svg"
            ? svg($siteLogoFile)
            : $siteLogoFile ?>
        </a>

        <?php snippet("base/main-menu", [
          "pageLanguageCode" => $pageLanguageCode,
          "languages" => $languages,
          "defaultLanguage" => $defaultLanguage,
          "hasMoreThanOneLanguage" => $hasMoreThanOneLanguage,
        ]); ?>

      </div>
    </header>
