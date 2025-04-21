import api from './api';

export async function sendContactForm(data) {
  const response = await api.post('/monks/v1/send-form', data);
  return response.data;
}

export async function getFormConfig() {
  const response = await api.get('/wp/v2/form_config?per_page=1');
  const config = response.data[0];

  return config?.meta?.campos_formulario?.split(',').map(campo => campo.trim()) || [];
}
