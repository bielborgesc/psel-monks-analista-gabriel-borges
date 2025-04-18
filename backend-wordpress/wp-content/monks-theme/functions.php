<?php
// Suporte a imagens destacadas
add_theme_support('post-thumbnails');

// CPT: Cards
function register_custom_post_type_card() {
    register_post_type('card', [
        'label' => 'Cards',
        'public' => true,
        'show_in_rest' => true,
        'supports' => ['title', 'editor', 'thumbnail'],
    ]);
}
add_action('init', 'register_custom_post_type_card');

// CPT: Mensagens do formulário
function register_custom_post_type_form_message() {
    register_post_type('mensagem', [
        'label' => 'Mensagens',
        'public' => true,
        'show_in_rest' => false,
        'supports' => ['title', 'editor'],
    ]);
}
add_action('init', 'register_custom_post_type_form_message');

// CORS
function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
}
add_action('init','add_cors_http_header');

// Endpoint REST para o formulário
add_action('rest_api_init', function () {
    register_rest_route('monks/v1', '/send-form', [
        'methods' => 'POST',
        'callback' => 'handle_form_submission',
        'permission_callback' => '__return_true',
    ]);
});

function handle_form_submission($request) {
    $params = $request->get_json_params();

    $nome = sanitize_text_field($params['nome'] ?? '');
    $email = sanitize_email($params['email'] ?? '');
    $mensagem = sanitize_textarea_field($params['mensagem'] ?? '');

    if (!$nome || !$email || !$mensagem) {
        return new WP_REST_Response(['success' => false, 'message' => 'Todos os campos são obrigatórios.'], 400);
    }

    $post_id = wp_insert_post([
        'post_type' => 'mensagem',
        'post_title' => $nome,
        'post_content' => "Email: $email\n\nMensagem: $mensagem",
        'post_status' => 'publish',
    ]);

    if (is_wp_error($post_id)) {
        return new WP_REST_Response(['success' => false, 'message' => 'Erro ao salvar.'], 500);
    }

    return new WP_REST_Response(['success' => true, 'message' => 'Mensagem enviada com sucesso.']);
}
