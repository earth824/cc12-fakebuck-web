import axios from '../config/axios';

export const register = input => axios.post('/auth/register', input);
