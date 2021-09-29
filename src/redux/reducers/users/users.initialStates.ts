interface UserI {
    id: number;
    name: string;
    username: string;
}

export interface DefaultStateI {
    isLoading: boolean;
    users: Array<UserI>;
    errorMessage: any;
}

export const defaultState: DefaultStateI = Object.freeze({
    isLoading: false,
    users: [],
    errorMessage: null,
});

export interface StoreI {
    usersData: DefaultStateI;
}
