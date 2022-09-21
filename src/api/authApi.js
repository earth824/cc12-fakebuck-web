import axios from '../config/axios';

export const register = input => axios.post('/auth/register', input);
export const login = ({ emailOrMobile, password }) =>
  axios.post('/auth/login', { emailOrMobile, password });
export const getMe = () => axios.get('/auth/me');
