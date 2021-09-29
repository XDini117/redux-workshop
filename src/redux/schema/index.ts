interface UserI {
    id: number;
    name: string;
    username: string;
}

export interface UsersDataI {
    isLoading: boolean;
    users: Array<UserI>;
    errorMessage: any;
}

export const defaultState: UsersDataI = Object.freeze({
    isLoading: false,
    users: [],
    errorMessage: null,
});

export interface StoreI {
    usersData: UsersDataI;
}
