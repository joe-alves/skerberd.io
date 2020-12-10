const CSPO = ({state}) => {
    return (
        <pre id="cspo">
            {JSON.stringify(state, null, 4)}
        </pre>
    );
};

export default CSPO;