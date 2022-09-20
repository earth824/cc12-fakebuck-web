import axios from 'axios';
import { API_ENDPOINT_URL } from './env';

axios.defaults.baseURL = API_ENDPOINT_URL;

export default axios;
