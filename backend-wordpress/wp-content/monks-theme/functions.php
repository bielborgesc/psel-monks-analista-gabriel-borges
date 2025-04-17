<?php
// Ativa o suporte a imagens destacadas
add_theme_support('post-thumbnails');

// Registrar um Custom Post Type chamado "Card"
function register_custom_post_type_card() {
    register_post_type('card', [
        'label' => 'Cards',
        'public' => true,
        'show_in_rest' => true, // Isso habilita o acesso via REST API
        'supports' => ['title', 'editor', 'thumbnail'],
    ]);
}
add_action('init', 'register_custom_post_type_card');
