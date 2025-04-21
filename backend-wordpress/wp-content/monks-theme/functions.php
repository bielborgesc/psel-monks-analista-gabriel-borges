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

// Incluir 'meta' na resposta da API do CPT app_section
add_filter('rest_prepare_app_section', function ($response, $post, $request) {
    $response->data['meta'] = [
        'appstore_link' => get_post_meta($post->ID, 'appstore_link', true),
        'googleplay_link' => get_post_meta($post->ID, 'googleplay_link', true),
    ];
    return $response;
}, 10, 3);


// CPT: App Section com campos personalizados e metabox
function register_custom_post_type_app_section() {
    register_post_type('app_section', [
        'label' => 'App Section',
        'public' => true,
        'show_in_rest' => true,
        'supports' => ['title', 'editor', 'thumbnail'],
        'menu_icon' => 'dashicons-smartphone',
    ]);
}
add_action('init', 'register_custom_post_type_app_section');

function register_appsection_meta_fields() {
    register_post_meta('app_section', 'appstore_link', [
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
        'auth_callback' => '__return_true',
    ]);

    register_post_meta('app_section', 'googleplay_link', [
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
        'auth_callback' => '__return_true',
    ]);
}
add_action('init', 'register_appsection_meta_fields');

function add_appsection_meta_box() {
    add_meta_box(
        'appsection_links_meta_box',
        'Links dos Apps',
        'render_appsection_meta_box',
        'app_section',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'add_appsection_meta_box');

function render_appsection_meta_box($post) {
    $appstore = get_post_meta($post->ID, 'appstore_link', true);
    $googleplay = get_post_meta($post->ID, 'googleplay_link', true);
    wp_nonce_field('save_appsection_meta', 'appsection_meta_nonce');

    echo '<p><label for="appstore_link">Link da App Store:</label></p>';
    echo '<input type="text" id="appstore_link" name="appstore_link" value="' . esc_attr($appstore) . '" style="width:100%;" />';

    echo '<p><label for="googleplay_link">Link do Google Play:</label></p>';
    echo '<input type="text" id="googleplay_link" name="googleplay_link" value="' . esc_attr($googleplay) . '" style="width:100%;" />';
}

function save_appsection_meta_box($post_id) {
    if (!isset($_POST['appsection_meta_nonce']) || !wp_verify_nonce($_POST['appsection_meta_nonce'], 'save_appsection_meta')) return;
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (!current_user_can('edit_post', $post_id)) return;

    if (isset($_POST['appstore_link'])) {
        update_post_meta($post_id, 'appstore_link', sanitize_text_field($_POST['appstore_link']));
    }
    if (isset($_POST['googleplay_link'])) {
        update_post_meta($post_id, 'googleplay_link', sanitize_text_field($_POST['googleplay_link']));
    }
}
add_action('save_post', 'save_appsection_meta_box');

// CPT: Links de Produtos
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

// Endpoint: Formulário
add_action('rest_api_init', function () {
    register_rest_route('monks/v1', '/send-form', [
      'methods' => 'POST',
      'callback' => 'handle_contact_form',
      'permission_callback' => '__return_true',
    ]);
});

function handle_contact_form($request) {
    $params = $request->get_json_params();
    $nome = sanitize_text_field($params['nome'] ?? '');
    $email = sanitize_email($params['email'] ?? '');
    $mensagem = sanitize_textarea_field($params['mensagem'] ?? '');
    $verificacao = intval($params['verificacao'] ?? 0);

    if (empty($nome) || empty($email) || empty($mensagem)) {
        return new WP_Error('missing_fields', 'Preencha todos os campos obrigatórios.', ['status' => 400]);
    }

    if ($verificacao !== 427 + 628) {
        return new WP_Error('invalid_verification', 'Verificação incorreta.', ['status' => 400]);
    }

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

// CPT: Mensagem (do formulário)
function register_custom_post_type_mensagem() {
    register_post_type('mensagem', [
        'label' => 'Mensagens',
        'public' => true,
        'show_in_rest' => false,
        'supports' => ['title', 'editor', 'custom-fields'],
        'menu_icon' => 'dashicons-email'
    ]);
}
add_action('init', 'register_custom_post_type_mensagem');

