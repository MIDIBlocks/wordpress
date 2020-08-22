<?php

/**
 * Displays Daily Notes with timestamps
 * @use [daily-notes]
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

/**
 * Displays Daily Intentions and their completion status
 * @use [daily-intentions]
 */
add_shortcode('daily-intentions', function () {
  global $post;

  $intentions = get_field('intentions');

  ob_start(); ?>
    <table class="daily-intentions-list">
      <?php foreach ($intentions as $intention): ?>
        <tr class="daily-intentions-list-item">
          <td>
            <?= $intention['completed'] ? '✅' : '⏳' ?>
          </td>
          <td>
            <?= $intention['intention'] ?>
          </td>
        </tr>
      <?php endforeach ?>
    </table>
  <?php
  wp_reset_postdata();
  return ob_get_clean();
});