import axios from 'axios';

const API_BASE = 'http://localhost:8000';

export const uploadVCF = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return axios.post(`${API_BASE}/upload`, formData);
};
