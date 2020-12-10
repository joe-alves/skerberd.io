import Counter from "./Counter";

import {useContext} from "react";
import AppContext from "../AppContext";

const PlayerScore = ({playerName, playerCurrentScore}) => {
    const appObject = useContext(AppContext);
    const updateScore = appObject.updateScore;
    return (
        <div className="player-score">
            <h4>{playerName}</h4>
            <Counter 
                currentCount={playerCurrentScore} 
                onIncrement={() => {
                    updateScore(playerName, playerCurrentScore + 1)
                }}
                onDecrement={() => {
                    updateScore(playerName, playerCurrentScore - 1)
                }}
            />
        </div>
    );
};

export default PlayerScore;