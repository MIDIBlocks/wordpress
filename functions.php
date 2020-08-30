<?php
include get_stylesheet_directory() . '/inc/shortcodes.php';
include get_stylesheet_directory() . '/cpts/dailies.php';

/**
 * Polyfills
 * @fixme Remove this when WPBakery/Impreza are updated
 */
function globalScripts () {
  wp_add_inline_script('jquery', ';$ = jQuery;', 'after');
  wp_enqueue_script('jquery-polyfills', get_stylesheet_directory_uri() . '/lib/jquery.live-polyfill.min.js', ['jquery']);
}
add_action('admin_enqueue_scripts', 'globalScripts');
add_action('wp_enqueue_scripts', 'globalScripts');

/**
 * Theme setup
 */
add_action('wp_enqueue_scripts', function () {
  wp_enqueue_style('theme', get_stylesheet_directory_uri() . '/style.css', null, '20-08-29-1');
});