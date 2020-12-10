import {useContext} from "react";

import AppContext from "../AppContext";

const Counter = ({onIncrement, onDecrement, currentCount}) => {

    const whateverValue = useContext(AppContext);

    return (
        <div className="counter">
            <div className="counter__left-side">
                <h1>{currentCount}</h1>
            </div>
            <div className="counter__right-side">
                <button onClick={onIncrement}>+1</button>
                <button onClick={onDecrement}>-1</button>
            </div>
        </div>
    );
};

export default Counter;