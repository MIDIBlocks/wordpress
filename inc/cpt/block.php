<?php

/**
 * Displays a grid of Midiblock building-blocks
 */
add_shortcode('blocks', function () {
  global $post;

  $posts = get_posts([
    'post_type' => 'block',
    'numberposts' => 16
  ]);

  ob_start(); ?>
    <div class="blocks-list row row-2">
      <?php foreach ($posts as $post): setup_postdata($post); ?>
        <div class="blocks-list-item">
          <div class="blocks-list-item-preview">
            <?= do_shortcode('[midiblocks-app path="block/' . $post->ID . '"]') ?>
            <h3><a href="<?= the_permalink() ?>"><?= the_title() ?></a></h3>
            <p><?= get_field('short_description') ?></p>
          </div>
        </div>
      <?php endforeach ?>
    </div>
  <?php
  wp_reset_postdata();
  return ob_get_clean();
});