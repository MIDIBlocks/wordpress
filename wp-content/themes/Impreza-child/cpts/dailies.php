<?php

/**
 * Displays Daily Notes with timestamps
 */
add_shortcode('daily-notes', function () {
  global $post;

  $notes = get_field('notes');

  ob_start(); ?>
    <ul class="daily-notes-list">
      <?php foreach ($notes as $note): ?>
        <li class="daily-notes-list-item">
          <time datetime="<?= $note['timestamp'] ?>">
            <?= $note['timestamp'] ?>
          </time>
          <article>
            <?= $note['note'] ?>
          </article>
        </li>
      <?php endforeach ?>
    </ul>
  <?php
  wp_reset_postdata();
  return ob_get_clean();
});