import api from "./api";

export async function getGallery() {
  const res = await api.get("/wp/v2/gallery?_embed&per_page=3");
  return res.data;
}