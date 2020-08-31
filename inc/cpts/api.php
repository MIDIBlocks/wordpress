<?php

/**
 * Displays an API
 */
add_shortcode('api', function () {
  global $post;

  $methods = get_field('methods');
  
  ob_start(); ?>
    <div class="api-list">
      <?php foreach ($methods as $method): ?>
        <div class="api-list-item">
          <h2><?= $method['method'] ?></h2>
          <?php if ($method['payload']): ?>
            <h4>Payload: <code><?= $method['payload'] ?></code></h4>
          <?php endif ?>
          <?php if ($method['response']): ?>
            <pre><code><?= $method['response'] ?></code></pre>
          <?php endif ?>
          <p><?= $method['notes'] ?></p>
        </div>
      <?php endforeach ?>
    </div>
  <?php
  
  wp_reset_postdata();
  return ob_get_clean();
});