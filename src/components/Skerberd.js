import PlayerScore from "./PlayerScore";

const Scoreboard = ({ playersWithScores }) => {
  return (
    <div id="scoreboard">
      {playersWithScores.map((player, i) => {
        return (
          <PlayerScore
            playerName={player.name}
            playerCurrentScore={player.score}
          />
        );
      })}
    </div>
  );
};

export default Scoreboard;
