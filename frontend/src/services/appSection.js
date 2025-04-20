import api from "./api";

export async function getAppSection() {
  const res = await api.get("/wp/v2/app_section?per_page=1&_embed");
  return res.data[0];
}