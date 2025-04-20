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

// CPT: Galeria simples (título e subtítulo da seção)
function register_custom_post_type_gallery() {
    register_post_type('gallery', [
        'label' => 'Galeria',
        'public' => true,
        'show_in_rest' => true,
        'supports' => ['title', 'editor', 'thumbnail'],
        'menu_icon' => 'dashicons-format-gallery',
    ]);
}
add_action('init', 'register_custom_post_type_gallery');

// CPT: App Section
function register_custom_post_type_app_section() {
    register_post_type('app_section', [
        'label' => 'App Section',
        'public' => true,
        'show_in_rest' => true,
        'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
    ]);
}
add_action('init', 'register_custom_post_type_app_section');

// CPT: Section Cards
function register_custom_post_type_section_cards() {
    register_post_type('section_cards', [
        'label' => 'Cards da Seção',
        'public' => true,
        'show_in_rest' => true,
        'supports' => ['title', 'editor'],
        'menu_icon' => 'dashicons-feedback',
    ]);
}
add_action('init', 'register_custom_post_type_section_cards');
