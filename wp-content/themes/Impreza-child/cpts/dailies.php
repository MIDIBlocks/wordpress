<?php

/**
 * Displays Daily Notes with timestamps
 * @use [daily-notes]
 */
add_shortcode('daily-notes', function () {
  global $post;

  $notes = get_field('notes');
  if (!$notes) return;

  ob_start(); ?>
    <h2>Notes</h2>
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
  $incompleteIcon = strtotime(get_the_date()) > time() + 86400 ? '❌' : '⏳';

  ob_start(); ?>
    <table class="daily-intentions-list">
      <?php foreach ($intentions as $intention): ?>
        <tr class="daily-intentions-list-item">
          <td>
            <?= $intention['completed'] ? '✅' : $incompleteIcon ?>
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

/**
 * Displays Daily goals and their completion status
 * @use [daily-goals]
 */
add_shortcode('daily-goals', function () {
  global $post;

  $goals = get_field('goals');
  $incompleteIcon = strtotime(get_the_date()) > time() + 86400 ? '❌' : '⏳';

  ob_start(); ?>
    <table class="daily-goals-list">
      <?php foreach ($goals as $goal): ?>
        <tr class="daily-goals-list-item">
          <td>
            <?= $goal['completed'] ? '✅' : $incompleteIcon ?>
          </td>
          <td>
            <?= $goal['goal'] ?>
          </td>
        </tr>
      <?php endforeach ?>
    </table>
  <?php
  wp_reset_postdata();
  return ob_get_clean();
});

/**
 * Displays Daily reminders and their completion status
 * @use [daily-reminders]
 */
add_shortcode('daily-reminders', function () {
  global $post;

  $reminders = get_field('reminders');
  $incompleteIcon = strtotime(get_the_date()) > time() + 86400 ? '❌' : '⏳';

  ob_start(); ?>
    <?php if ($reminders): ?>
      <h2>Reminders</h2>
    
      <table class="daily-reminders-list">
        <?php foreach ($reminders as $reminder): ?>
          <tr class="daily-reminders-list-item">
            <td>
              <?= $reminder['completed'] ? '✅' : $incompleteIcon ?>
            </td>
            <td>
              <?= $reminder['reminder'] ?>
            </td>
          </tr>
        <?php endforeach ?>
      </table>
    <?php endif ?>
  <?php
  wp_reset_postdata();
  return ob_get_clean();
});