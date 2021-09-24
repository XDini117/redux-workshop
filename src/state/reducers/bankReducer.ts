interface DepositAction {
    type: 'deposit';
    payload: number;
}

interface WithdrawAction {
    type: 'withdraw';
    payload: number;
}

interface BankrupAction {
    type: 'bankrupt';
}

type Action = DepositAction | WithdrawAction | BankrupAction;

const initialState = 0;

const reducer = (state: number = initialState, action: Action) => {
    switch (action.type) {
        case 'deposit':
            return state + action.payload;
        case 'withdraw':
            return state - action.payload;
        case 'bankrupt':
            return 0;
        default:
            return state;
    }
};

export default reducer;
