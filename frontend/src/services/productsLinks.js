import api from './api';

export async function getProductsLinksSection() {
  const res = await api.get("/wp/v2/prod_links?per_page=1");
  return res.data[0];
}
