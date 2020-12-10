import { useState } from "react";

import Scoreboard from "./components/Skerberd";
import AddPlayerForm from "./components/AddPlayerForm";
import CurrentStatePrintOut from "./components/CSPO";

import AppContext from "./AppContext";

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
    <AppContext.Provider value={{ 
      appState: fullApplicationState, 
      updateScore: updateScore, 
      addNewPlayer: addNewPlayer
    }}>
      <div id="app">
        <div id="scoreboard-container">
          <Scoreboard
            // We probably shouldn't pass this prop down at this point.
            // CAN YOU REFACTOR?
            // Utilize `useContext` with the `AppContext` in the `<Scoreboard>` component
            // to get access to the players data instead of receiving it as a prop.
            playersWithScores={fullApplicationState.players}
          />
        </div>
        <div id="other-stuff-container">
          <div>
            <AddPlayerForm />
          </div>
          <div>
            <CurrentStatePrintOut />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
