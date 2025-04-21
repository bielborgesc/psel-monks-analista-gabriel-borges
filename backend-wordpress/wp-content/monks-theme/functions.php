<?php
// CORS (para o frontend React acessar a API)
function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
}
add_action('init','add_cors_http_header');

// Suporte a imagens destacadas
add_theme_support('post-thumbnails');

// CPT: Hero
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

// Link de seleção de produtos
function register_prod_links_section_cpt() {
    register_post_type('prod_links', [
        'label' => 'Seção de Links de Produtos',
        'public' => true,
        'show_in_rest' => true,
        'supports' => ['title', 'editor'],
        'menu_icon' => 'dashicons-tag'
    ]);
    
}
add_action('init', 'register_prod_links_section_cpt');

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

// CPT: Footer
function register_footer_info_cpt() {
    register_post_type('footer_info', [
        'label' => 'Footer - Informações',
        'public' => true,
        'show_in_rest' => true,
        'supports' => ['title', 'custom-fields'],
        'menu_icon' => 'dashicons-share',
    ]);
}
add_action('init', 'register_footer_info_cpt');

function register_footer_links_cpt() {
    register_post_type('footer_links', [
        'label' => 'Footer - Links',
        'public' => true,
        'show_in_rest' => true,
        'supports' => ['title', 'custom-fields'],
        'menu_icon' => 'dashicons-admin-links',
    ]);
}
add_action('init', 'register_footer_links_cpt');

// Expor os campos personalizados dos CPTs footer_info e footer_links na REST API
add_action('rest_api_init', function () {
    $footer_info_fields = ['facebook_url', 'instagram_url', 'twitter_url', 'whatsapp_url'];
    foreach ($footer_info_fields as $field) {
        register_meta('post', $field, [
            'show_in_rest' => true,
            'single' => true,
            'type' => 'string',
        ]);
    }

    register_meta('post', 'url', [
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    ]);
});


// CPT: Formulario
add_action('rest_api_init', function () {
    register_rest_route('monks/v1', '/send-form', [
      'methods' => 'POST',
      'callback' => 'handle_contact_form',
      'permission_callback' => '__return_true',
    ]);
  });
  
  function handle_contact_form($request) {
    $params = $request->get_json_params();
  
    // Captura os dados
    $nome = sanitize_text_field($params['nome'] ?? '');
    $email = sanitize_email($params['email'] ?? '');
    $mensagem = sanitize_textarea_field($params['mensagem'] ?? '');
    $verificacao = intval($params['verificacao'] ?? 0);
  
    // Validação básica
    if (empty($nome) || empty($email) || empty($mensagem)) {
      return new WP_Error('missing_fields', 'Preencha todos os campos obrigatórios.', ['status' => 400]);
    }
  
    if ($verificacao !== 427 + 628) {
      return new WP_Error('invalid_verification', 'Verificação incorreta.', ['status' => 400]);
    }
  
    // Cria um post tipo "mensagem"
    $post_id = wp_insert_post([
      'post_type' => 'mensagem',
      'post_title' => "Mensagem de $nome",
      'post_content' => $mensagem,
      'post_status' => 'publish',
      'meta_input' => [
        'email' => $email
      ]
    ]);
  
    if (is_wp_error($post_id)) {
      return new WP_Error('insert_failed', 'Não foi possível salvar a mensagem.', ['status' => 500]);
    }
  
    return ['message' => 'Mensagem enviada com sucesso.'];
}

function register_custom_post_type_mensagem() {
    register_post_type('mensagem', [
        'label' => 'Mensagens',
        'public' => true,
        'show_in_rest' => false, // não precisa aparecer na API
        'supports' => ['title', 'editor', 'custom-fields'],
        'menu_icon' => 'dashicons-email'
    ]);
}
add_action('init', 'register_custom_post_type_mensagem');

