import { useContext, useState } from "react";

import AppContext from "../AppContext";

const Form = () => {
  
  const appObject = useContext(AppContext);
  const [possibleNewPlayerName, setName] = useState("Joe");
  const [nameEmptyError, setNameEmptyError] = useState(false);
  return (
    <form id="add-new-player-form" onSubmit={e => {
        e.preventDefault();
        setNameEmptyError(false);
        if (possibleNewPlayerName.trim().length === 0) {
          setNameEmptyError(true);
          return;
        }
        appObject.addNewPlayer(possibleNewPlayerName.trim());
        setName("");
    }}>
      <h3>Add a New Player</h3>
      {nameEmptyError && <span className="error-message">Please enter a name.</span>}
      <input
        type="text"
        placeholder="Player Name"
        onChange={(e) => setName(e.target.value)}
        value={possibleNewPlayerName}
      />
    </form>
  );
};

export default Form;
