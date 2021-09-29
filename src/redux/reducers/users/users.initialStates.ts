export interface DefaultStateI {
    isLoading: false;
    users: any;
    errorMessage: any;
}

export const defaultState: DefaultStateI = {
    isLoading: false,
    users: [],
    errorMessage: null,
};

export interface StoreI {
    usersData: DefaultStateI;
}
