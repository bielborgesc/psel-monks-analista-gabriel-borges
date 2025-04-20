import api from "./api";

export async function getHeroContent() {
  const res = await api.get("/wp/v2/hero?per_page=1");
  return res.data[0];
}

export async function getCategories() {
  const res = await api.get("/wp/v2/categories");
  return res.data;
}