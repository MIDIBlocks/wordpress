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
      $args = shortcode_atts([
        'id' => null
      ], $args);

      // Build the query
      $query = [
        'post_type' => 'block',
        'numberposts' => 1
      ];
      if (is_numeric($args['id'])) {
        $query['include'] = [$args['id']];
      } else {
        $query['name'] = $args['id'];
      }
      $posts = get_posts($query);

      // Build the response
      $json = ['blocks' => []];
      foreach ($posts as $post) {
        setup_postdata($post);

        $json['blocks'][] = [
          'title' => $post->post_title,
          'short_description' => get_field('short_description', $post->ID),
          'block_definition' => get_field('block_definition', $post->ID),
          'generator_stub' => get_field('generator_stub', $post->ID)
        ];
      }

      wp_reset_postdata();
      return $json;
    }
  ]);
});
