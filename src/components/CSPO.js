import {useContext} from "react";
import AppContext from "../AppContext";

const CSPO = () => {
    const {appState} = useContext(AppContext);
    return (
        <pre id="cspo">
            {JSON.stringify(appState, null, 4)}
        </pre>
    );
};

export default CSPO;