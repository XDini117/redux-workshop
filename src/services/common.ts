import apiClient from './api';

type UsersData = {
    data: [
        {
            id: number;
            name: string;
            username: string;
        }
    ];
};

export const getAllUsers = () => apiClient.get('users').then(({ data }): UsersData => data);
