<?php
// Hero
function register_custom_post_type_hero() {
    register_post_type('hero', [
        'label' => 'Hero',
        'public' => true,
        'show_in_rest' => true,
        'supports' => ['title', 'editor'],
        'menu_icon' => 'dashicons-welcome-view-site',
    ]);
}
add_action('init', 'register_custom_post_type_hero');
