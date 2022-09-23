import axios from '../config/axios';

export const updateUser = input => axios.patch('/users', input);
export const getUserFriends = id => axios.get(`/users/${id}/friends`);
