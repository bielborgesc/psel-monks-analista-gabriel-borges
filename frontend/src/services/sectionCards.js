import api from './api';

export async function getSectionCards() {
  const res = await api.get('/wp/v2/section_cards?per_page=100');
  return res.data;
}
