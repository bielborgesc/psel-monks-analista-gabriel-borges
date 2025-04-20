import api from './api';

export async function sendContactForm(data) {
  const response = await api.post('/monks/v1/send-form', data);
  return response.data;
}
