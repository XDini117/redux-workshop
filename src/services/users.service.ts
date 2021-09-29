import apiClient from '../helper/apiClient';

export const getAllUsers = () => apiClient.get('users');
