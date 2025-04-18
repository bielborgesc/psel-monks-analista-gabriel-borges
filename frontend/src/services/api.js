import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost/psel-monks-backend/wp-json",
});

export default api;
