<?php

/**
 * Displays the title, prefixed with title_prefix
 * @use [title-with-prefix]
 */
add_shortcode('title-with-prefix', function () {
  global $post;

  $prefix = get_field('title_prefix');

  switch ($post->post_type) {
    case 'dailies':
      $prefix = 'Daily: ';
    break;
  }
  
  ob_start(); ?>
    <h1 class="title-with-prefix">
      <?php if ($prefix): ?>
        <span class="title-prefix"><?= esc_html($prefix) ?></span>
      <?php endif ?>
      <span><?= the_title() ?></span>
    </h1>
  <?php
  wp_reset_postdata();
  return ob_get_clean();
});