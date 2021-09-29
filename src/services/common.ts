import apiClient from './api';

type UsersDataI = {
    data: [
        {
            id: number;
            name: string;
            username: string;
        }
    ];
};

export const getAllUsers = () => apiClient.get('users').then(({ data }): UsersDataI => data);
