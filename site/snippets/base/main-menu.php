<?php
/**
 * =============================================================================
 * Main Menu Snippet for All Pages
 * 
 * Uses “main-menu.controller.php” via the Kirby Snippet Controller plugin
 * Plugin details: https://github.com/lukaskleinschmidt/kirby-snippet-controller
 * 
 * Receives variables from snippet controller:
 * - $mainMenuItems
 * 
 * Requires variables from the snippet call:
 * - $pageLanguageCode
 * - $languages
 * - $defaultLanguage
 * - $hasMoreThanOneLanguage
 * =============================================================================
 */
?>
        <!-- Main menu -->
        <div class="-me-medium flex justify-end ps-medium lg:me-0 print:hidden">
          <input
            type="checkbox"
            id="main-menu-state"
            class="hidden"
            aria-hidden="true"
          />
          <nav class="flex items-center" role="navigation">
            <!-- Toggle button for mobile menu, see:
                 https://www.pausly.app/blog/accessible-hamburger-buttons-without-javascript
                 (with animated toogle icon instead of two unicode characters) -->
            <div class="relative h-[var(--site-logo-height)] w-[var(--main-navigation-toggle-width)] lg:hidden">
              <a
                href="#main-menu-state"
                class="main-menu-open absolute inset-0"
                role="button"
              >
                <span class="absolute m-[-1px] h-px w-px overflow-hidden whitespace-nowrap border-0 p-0">
                <?= t("Open menu", "Open menu") ?>
                </span>
              </a>
              <a
                href="#"
                class="main-menu-close absolute inset-0 hidden"
                role="button"
              >
                <span class="absolute m-[-1px] h-px w-px overflow-hidden whitespace-nowrap border-0 p-0">
                <?= t("Close menu", "Close menu") ?>
                </span>
              </a>
              <label
                for="main-menu-state"
                class="absolute inset-0 flex cursor-pointer items-center justify-end pe-medium"
                aria-hidden="true"
              >
                <!-- Animated hamburger icon -->
                <div class="nav-toggle-icon relative h-[calc(var(--site-header-scroll-height)_/_4)] w-[calc(var(--site-header-scroll-height)_/_3)]">
                  <span class="absolute left-0 top-0 block h-[var(--nav-toggle-icon-stroke-width)] w-full rotate-0 rounded-sm bg-yellow-900 transition-[left,_width,_top,_transform] duration-300 ease-in-out dark:bg-yellow-400"></span>
                  <span class="absolute left-0 top-[calc(50%_-_(var(--nav-toggle-icon-stroke-width)_/_2))] block h-[var(--nav-toggle-icon-stroke-width)] w-full rotate-0 rounded-sm bg-yellow-900 transition-[left,_width,_top,_transform] duration-300 ease-in-out dark:bg-yellow-400"></span>
                  <span class="absolute left-0 top-[calc(50%_-_(var(--nav-toggle-icon-stroke-width)_/_2))] block h-[var(--nav-toggle-icon-stroke-width)] w-full rotate-0 rounded-sm bg-yellow-900 transition-[left,_width,_top,_transform] duration-300 ease-in-out dark:bg-yellow-400"></span>
                  <span class="absolute left-0 top-[calc(100%_-_var(--nav-toggle-icon-stroke-width))] block h-[var(--nav-toggle-icon-stroke-width)] w-full rotate-0 rounded-sm bg-yellow-900 transition-[left,_width,_top,_transform] duration-300 ease-in-out dark:bg-yellow-4 00"></span>
                </div>
              </label>
            </div>

            <!-- Main menu items -->
            <ul id="main-menu" class="invisible absolute end-small top-[var(--site-header-height)] flex max-h-[calc(100vh_-_var(--site-header-height)_-_0.75rem)] max-w-2xl flex-col overflow-y-auto bg-lime-200 py-small opacity-0 transition-[opacity,_visibility] duration-300 ease-in-out dark:bg-lime-800 lg:visible lg:static lg:max-h-none lg:flex-row lg:overflow-y-visible lg:bg-transparent dark:lg:bg-transparent lg:py-0 lg:opacity-100">
              <?php foreach ($mainMenuItems as $menuItem): ?>
                <li class="<?= $menuItem["isActive"] ?> lg:ms-medium">
                  <a
                    href="<?= $menuItem["url"] ?>"
                    target="<?= $menuItem["target"] ?>"
                    class="block px-medium py-small text-yellow-900 lg:static lg:px-0 lg:py-0 dark:text-yellow-400"
                    <?= $menuItem["target"] == "_blank"
                      ? "rel=\"noopener\""
                      : "" ?>
                  >
                    <?= $menuItem["title"] ?>
                  </a>
                </li>
              <?php endforeach; ?>
              
              <?php if ($hasMoreThanOneLanguage): ?>
                <!-- Language switcher -->
                <li class="lg:ms-large">
                  <div class="flex px-medium pb-small pt-medium uppercase lg:static lg:px-0 lg:py-0">
                    <?php
                    $languageCount = count($languages);
                    $counter = 0;
                    foreach ($languages as $lang): ?>
                      <?php
                      $counter++;
                      if ($pageLanguageCode != $lang->code()): ?>
                        <a
                          href="<?= $page->url($lang->code()) ?>"
                          class="text-yellow-900 dark:text-yellow-400"
                          aria-label="<?= t(
                            "Switch to",
                            "Switch to",
                            $lang->code()
                          ) .
                            " " .
                            t(
                              "Language name for language switch",
                              $lang->name(),
                              $lang->code()
                            ) ?>"
                        >
                      <?php else: ?>
                        <span class="text-lime-700 dark:text-lime-300">
                      <?php endif;
                      ?>
                          <small><?= t(
                            "Label for language switch",
                            $lang->code(),
                            $lang->code()
                          ) ?></small>
                      <?php if ($kirby->language()->code() != $lang->code()): ?>
                        </a>
                      <?php else: ?>
                        </span>
                      <?php endif; ?>
                      <?php if ($counter < $languageCount): ?>
                        <span class="px-1 text-lime-700 dark:text-lime-300"><small>/</small></span>
                      <?php endif; ?>
                    <?php endforeach;
                    ?>
                  </div>
                </li>
              <?php endif; ?>

            </ul>
          </nav>
        </div>
