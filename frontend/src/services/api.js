const API_BASE = 'http://localhost/psel-monks-backend/wp-json/wp/v2';

export async function fetchPosts() {
  const response = await fetch(`${API_BASE}/posts`);
  return response.json();
}