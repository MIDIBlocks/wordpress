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

/**
 * Displays the block definition
 * @use [block-code field="block_definition|generator_stub"]
 */
add_shortcode('block-code', function ($atts) {
  global $post;
  wp_enqueue_style('highlightjs', '//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/shades-of-purple.min.css');
  wp_enqueue_script('highlightjs', '//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/highlight.min.js');
  wp_add_inline_script('highlightjs', ';hljs.initHighlightingOnLoad();', 'after');
  
  $atts = shortcode_atts([
    'field' => 'block_definition'
  ], $atts);
  
  $code = get_field($atts['field'], $post->ID);
  if ($atts['field'] === 'block_definition') {
    $code = esc_html(json_encode(json_decode($code), JSON_PRETTY_PRINT));
    $language = 'json';
  } else {
    $code = esc_html($code);
    $language = 'javascript';
  }
  
  wp_enqueue_script('highlightjs-language', "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/languages/$language.min.js", ['highlightjs']);
  return "<pre class='p-0'><code class='language-$language'>$code</code></pre>";
});
/**
 * Aliases
 */
add_shortcode('block-definition', function () {
  return do_shortcode('[block-code]');
});
add_shortcode('block-generator', function () {
  return do_shortcode('[block-code field="generator_stub"]');
});