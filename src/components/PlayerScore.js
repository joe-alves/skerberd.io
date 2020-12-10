import Counter from "./Counter";

const PlayerScore = ({playerName, playerCurrentScore, onScoreChange}) => {
    return (
        <div className="player-score">
            <h4>{playerName}</h4>
            <Counter 
                currentCount={playerCurrentScore} 
                onIncrement={() => {
                    onScoreChange(playerName, playerCurrentScore + 1)
                }}
                onDecrement={() => {
                    onScoreChange(playerName, playerCurrentScore - 1)
                }}
            />
        </div>
    );
};

export default PlayerScore;