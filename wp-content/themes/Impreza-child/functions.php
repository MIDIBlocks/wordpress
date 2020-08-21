<?php

/**
 * Polyfills
 * @fixme Remove this when WPBakery/Impreza are updated
 */
function globalScripts () {
  wp_add_inline_script('jquery', ';$ = jQuery;', 'after');
  wp_enqueue_script('jquery-polyfills', get_stylesheet_directory_uri() . '/lib/jquery.live-polyfill/dist/jquery.live-polyfill.min.js', ['jquery']);
}
add_action('admin_enqueue_scripts', 'globalScripts');
add_action('wp_enqueue_scripts', 'globalScripts');