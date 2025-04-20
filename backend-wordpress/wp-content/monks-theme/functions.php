<?php
// Suporte a imagens destacadas
add_theme_support('post-thumbnails');

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

// CPT: Cards
function register_custom_post_type_card() {
    register_post_type('card', [
        'label' => 'Cards',
        'public' => true,
        'show_in_rest' => true,
        'supports' => ['title', 'editor', 'thumbnail'],
        'menu_icon' => 'dashicons-format-gallery',
    ]);
}
add_action('init', 'register_custom_post_type_card');

// CPT: Products Section (título e subtítulo da seção)
function register_custom_post_type_products_section() {
    register_post_type('products_section', [
        'label' => 'Seção de Produtos',
        'public' => true,
        'show_in_rest' => true,
        'supports' => ['title', 'editor'],
        'menu_icon' => 'dashicons-layout',
    ]);
}
add_action('init', 'register_custom_post_type_products_section');

