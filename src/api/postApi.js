import axios from '../config/axios';

export const createPost = input => axios.post('/posts', input);
export const getUserPosts = (id, include) =>
  axios.get(`/users/${id}/posts${include ? '?include=' + include : ''}`);
