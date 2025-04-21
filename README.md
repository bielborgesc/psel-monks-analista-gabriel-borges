# 🌍 Projeto Headless WordPress + React (Desafio Monks)

Este projeto foi desenvolvido como parte de um **teste técnico**, utilizando um mock visual definido no Figma:

🔗 [Protótipo no Figma](https://www.figma.com/design/LfpCfEPmP0DqyXnUDsPoOA/Desafio-Monks?m=auto\&t=03BFWtsMVodAwVUs-6)

A proposta é construir um site institucional responsivo e funcional com uma arquitetura **Headless**, onde o **WordPress** atua como backend (CMS) e **React + Vite** como frontend.

---

## 🔄 Demonstração (GIF)

- Desk [https://github.com/bielborgesc/psel-monks-analista-gabriel-borges/blob/main/Demonstra%C3%A7%C3%A3o/Desk.gif]
- Mobile [https://github.com/bielborgesc/psel-monks-analista-gabriel-borges/blob/main/Demonstra%C3%A7%C3%A3o/Mobile.gif]

---

## 🛠️ Tecnologias e Versões Utilizadas

### Frontend

- React 18+
- Vite
- Tailwind CSS
- Axios

### Backend

- WordPress 6+
- PHP 7.4+
- XAMPP (Apache + MySQL) ou similar

---

## 🌐 Como rodar o frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

Isso iniciará a aplicação React localmente em:
```
http://localhost:5173
```

> Obs: Certifique-se que o WordPress está rodando simultaneamente no `http://localhost/psel-monks-backend`

---

## 🚀 Instalação do ambiente WordPress com XAMPP

### 1. Baixar e instalar o [XAMPP](https://www.apachefriends.org/index.html)

### 2. Iniciar os serviços Apache e MySQL

### 3. Criar banco de dados no `http://localhost/phpmyadmin`

### 4. Baixar o WordPress [em pt-BR](https://wordpress.org/download/)

### 5. Colar os arquivos em:
```bash
/opt/lampp/htdocs/psel-monks-backend
```

### 6. Acessar `http://localhost/psel-monks-backend` no navegador

- Configurar o banco de dados criado
- Criar o usuário administrador e concluir a instalação

---

## 🎨 Configuração do tema e ativação

1. Baixe o repositório completo do projeto
2. Copie o conteúdo da pasta:

```bash
backend-wordpress/wp-content/monks-theme
```

3. Cole em:

```bash
/opt/lampp/htdocs/psel-monks-backend/wp-content/themes/monks-theme
```

4. Acesse o painel do WP e ative o tema "Monks Theme"

---

## 📂 Uso dos módulos personalizados no WP

O tema implementa diversos **CPTs (Custom Post Types)** que alimentam dinamicamente o frontend:

### 1. `hero`
- Define o título e subtítulo da seção principal do site
- Basta adicionar um novo item em "Hero" no admin, preencher o título e o conteúdo (que será usado como subtítulo)

### 2. `card`
- Exibe três cards com imagem, título e descrição (usado na SimpleGallery)
- Ao cadastrar um novo card, defina o título, o conteúdo e a imagem destacada (thumbnail)

### 3. `products_section`
- Define o título e subtítulo da seção "Produtos"
- Adicione um item único com título e descrição

### 4. `section_cards`
- Representa cada card da seção de produtos
- Cada item contém título e texto que serão renderizados em colunas no frontend

### 5. `prod_links`
- Renderiza "chips" clicáveis com links
- Para adicionar:
  1. Crie um novo item em `Seção de Links de Produtos`
  2. Preencha o título (que será o texto do chip)
  3. Adicione um campo personalizado chamado `url` e insira o link desejado
  4. O frontend verifica a presença da `meta.url` para tornar o chip clicável

### 6. `app_section`
- Mostra uma seção com título, subtítulo e botões para baixar o app
- Ao cadastrar:
  1. Preencha título e conteúdo
  2. Adicione links personalizados com os nomes `appstore_link` e `googleplay_link`
  3. Os botões só aparecem se os links forem preenchidos

### 7. `footer_info` & `footer_links`
- `footer_info` define os ícones sociais (Instagram, WhatsApp, Twitter, Facebook)
  - Cada campo deve ser cadastrado como um campo personalizado: `instagram_url`, `whatsapp_url`, etc.
- `footer_links` exibe links simples (usado em listas)
  - Preencha o título e crie o campo `url`

### 8. `mensagem`
- Recebe os dados enviados via formulário de contato (nome, email, mensagem...)
- O frontend envia os dados para o endpoint personalizado `monks/v1/send-form`
- As mensagens são salvas como posts do tipo `mensagem`
- Os campos são salvos como `custom fields` e o conteúdo do post exibe todos os dados recebidos

---

## 🔧 Considerações finais

O projeto é responsivo, estruturado e pronto para evoluir.
Todo o conteúdo textual e estrutural vem do CMS, e a renderização está 100% no frontend React, consumindo a REST API do WordPress.

---

📌 **Desenvolvido por Gabriel Borges**
