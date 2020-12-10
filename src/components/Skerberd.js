import PlayerScore from "./PlayerScore";

const Scoreboard = ({onScoreUpdate, playersWithScores}) => {
    return (
        <div id="scoreboard">
            {playersWithScores.map(player => {
                return <PlayerScore
                    playerName={player.name}
                    playerCurrentScore={player.score}
                    onScoreChange={(playerName, newScore) => {
                        onScoreUpdate(playerName, newScore);
                    }}
                />
            })}
        </div>
    );
};

export default Scoreboard;