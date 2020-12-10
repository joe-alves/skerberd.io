import { useContext, useState } from "react";

import AppContext from "../AppContext";

const Form = () => {
  
  const appObject = useContext(AppContext);
  const [possibleNewPlayerName, setName] = useState("Joe");
  return (
    <form id="add-new-player-form" onSubmit={e => {
        e.preventDefault();
        appObject.addNewPlayer(possibleNewPlayerName);
        setName("");
    }}>
      <h3>Add a New Player</h3>
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
