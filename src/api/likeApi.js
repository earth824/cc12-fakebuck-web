import axios from '../config/axios';

export const toggleLike = postId => axios.post(`/posts/${postId}/likes`);
