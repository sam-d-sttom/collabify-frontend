import api from './api';

const authService = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  logout: () => api.post('/auth/logout', {}, { withCredentials: true }),
  getProfile: () => api.get('/auth/profile', { withCredentials: true }),
  refreshToken: () => api.post('/auth/refresh-token'),
};

export default authService;