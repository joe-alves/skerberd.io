import { useState } from "react";

import Scoreboard from "./components/Skerberd";
import AddPlayerForm from "./components/AddPlayerForm";
import CurrentStatePrintOut from "./components/CSPO";

function App() {
  const [fullApplicationState, setFullApplicationState] = useState({
    players: [
      {
        name: "Bandit",
        score: 35,
      },
      {
        name: "Penny",
        score: 50,
      },
      {
        name: "Pepper",
        score: 1,
      },
    ],
  });

  // State managing functions.
  // Here be rest operator dragons.
  const addNewPlayer = (playerName) => {
    setFullApplicationState({
      ...fullApplicationState,
      players: [
        ...fullApplicationState.players,
        { name: playerName, score: 0 },
      ],
    });
  };
  const updateScore = (playerName, newScore) => {
    const copyOfPlayers = fullApplicationState.players.map((player) => ({
      ...player,
    }));
    const copiedPlayerToUpdate = copyOfPlayers.find(
      (p) => p.name === playerName
    );
    if (!copiedPlayerToUpdate) return;
    copiedPlayerToUpdate.score = newScore;
    setFullApplicationState({
      ...fullApplicationState,
      players: copyOfPlayers,
    });
  };

  return (
    <div id="app">
      <div id="scoreboard-container">
        <Scoreboard
          playersWithScores={fullApplicationState.players}
          onScoreUpdate={updateScore}
        />
      </div>
      <div id="other-stuff-container">
        <div>
          <AddPlayerForm onAddNewPlayer={addNewPlayer} />
        </div>
        <div>
          <CurrentStatePrintOut state={fullApplicationState} />
        </div>
      </div>
    </div>
  );
}

export default App;
