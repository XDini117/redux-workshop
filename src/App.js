import { useSelector } from 'react-redux';

export default function App(props) {
    const data = useSelector(state => {
        console.log(state);
    });
    return (
        <div>
            <p>Redux - Workshop</p>
        </div>
    );
}
