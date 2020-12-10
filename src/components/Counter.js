const Counter = ({onIncrement, onDecrement, currentCount}) => {
    return (
        <div className="counter">
            <div className="counter__left-side">
                <h1>{currentCount}</h1>
            </div>
            <div classsName="counter__right-side">
                <button onClick={onIncrement}>+1</button>
                <button onClick={onDecrement}>-1</button>
            </div>
        </div>
    );
};

export default Counter;