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

/**
 * Displays breadcrumbs in form: Home > Custom Post Type > Post
 * - Only shows if there are at least 3 crumbs
 * - If not shown, .breadcrumbs {display: none !important}
 * 
 * @use [breadcrumbs]
 */
add_shortcode('breadcrumbs', function () {
  global $post;

  $crumbs = [[
    'url' => '/',
    'label' => 'Home'
  ]];

  if (is_singular() && !in_array($post->post_type, ['page', 'post'])) {
    $cpt = get_post_type_object($post->post_type);
    
    $crumbs[] = [
      'url' => '/' . $post->post_type,
      'label' => $cpt->label
    ];
  }

  $crumbs[] = [
    'url' => '',
    'label' => $post->post_title
  ];

  if (count($crumbs) < 3) {
    return '<style>.breadcrumbs {display: none !important;}</style>';
  }
  
  ob_start(); ?>
    <div class="breadcrumbs-list">
      <i class="fas fa-sign" style="margin-right: 8px"></i>
      <?php foreach ($crumbs as $crumb): ?>
        <?php if ($crumb['url']): ?>
          <a href="<?= $crumb['url'] ?>" class="breadcrumbs-list-item"><?= $crumb['label'] ?></a>
        <?php else: ?>
          <span class="breadcrumbs-list-item"><?= $crumb['label'] ?></span>
        <?php endif ?>
      <?php endforeach ?>
    </div>
  <?php
  wp_reset_postdata();
  return ob_get_clean();
});

/**
 * Display a fullscreen Midiblocks app
 * @todo version the url
 */
add_shortcode('midiblocks-app', function () {
  global $post;
  global $midiblocksVersion;

  ob_start(); ?>
    <iframe class="midiblocks-app" src="<?= get_stylesheet_directory_uri() ?>/midiblocks/v/<?= $midiblocksVersion ?>/index.html">
    </iframe>
  <?php
  wp_reset_postdata();
  return ob_get_clean();
});

/**
 * Echos the Midiblocks app version
 */
add_shortcode('midiblocks-app-version', function () {
  global $midiblocksVersion;
  return $midiblocksVersion;
});