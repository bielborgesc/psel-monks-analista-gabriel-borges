import api from './api';

export async function getFooterInfo() {
  const res = await api.get('/wp/v2/footer_info?per_page=1');
  return res.data[0]; 
}

export async function getFooterLinks() {
  const res = await api.get('/wp/v2/footer_links?per_page=100');
  return res.data;
}
