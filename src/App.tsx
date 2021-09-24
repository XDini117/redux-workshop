import { useDispatch, useSelector } from 'react-redux';

import { State, depositMoney, withdrawMoney, bankrupt } from './state';

function App() {
    const dispatch = useDispatch();

    const amount = useSelector((state: State) => state.bank);

    return (
        <div>
            <h1>{amount}</h1>
            <button onClick={() => dispatch(depositMoney(1000))}>Deposit</button>
            <button onClick={() => dispatch(withdrawMoney(500))}>Withdraw</button>
            <button onClick={() => dispatch(bankrupt())}>Bankrupt</button>
        </div>
    );
}

export default App;
