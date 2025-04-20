import api from "./api";

export async function getProductsSection() {
  const res = await api.get("/wp/v2/products_section?per_page=1");
  return res.data[0];
}

export async function getCards() {
  const res = await api.get("/wp/v2/card?_embed&per_page=100");
  return res.data;
}