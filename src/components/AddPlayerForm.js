import { useState } from "react";

const Form = ({ onAddNewPlayer }) => {
  const [possibleNewPlayerName, setName] = useState("");
  return (
    <form id="add-new-player-form" onSubmit={e => {
        e.preventDefault();
        onAddNewPlayer(possibleNewPlayerName);
    }}>
      <h3>Add a New Player</h3>
      <input
        type="text"
        placeholder="Player Name"
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  );
};

export default Form;
