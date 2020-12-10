import {useContext} from "react";
import AppContext from "../AppContext";

const CSPO = ({state}) => {
    const testObject = useContext(AppContext);
    console.log(testObject);
    return (
        <pre id="cspo">
            {JSON.stringify(testObject)}
            {JSON.stringify(state, null, 4)}
        </pre>
    );
};

export default CSPO;