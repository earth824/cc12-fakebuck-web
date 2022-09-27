import axios from '../config/axios';

export const createComment = (input, postId) =>
  axios.post(`/posts/${postId}/comments`, input);
