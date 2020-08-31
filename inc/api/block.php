<?php

/**
 * Returns data needed to recreate a block inside of Midiblocks
 * /block/{id|slug|post_title}
 */
add_action('rest_api_init', function ($data) {
  register_rest_route('midiblocks', '/block/(?P<id>[a-zA-Z0-9-_]+)', [
    'methods' => 'GET',
    'args' => [
      'id'
    ],
    'callback' => function ($args) {
      // Defaults
      $args = $atts = shortcode_atts([
        'id' => null
      ], $atts);

      // Build the query
      $query = [
        'post_type' => 'block',
        'numberposts' => 1
      ];
      if (is_string($args['id'])) {
        $query['name'] = $args['id'];
      } else {
        $query['include'] = $args['id'];
      }
      $posts = get_posts($query);

      // Build the response
      $json = [];
      foreach ($posts as $post) {
        setup_postdata($post);

        $json[] = [
          'title' => $post->post_title
        ];
      }

      wp_reset_postdata();
      return $json;
    }
  ]);
});
