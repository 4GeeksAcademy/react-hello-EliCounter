import React from "react";
import Number from "./numbers";

const SecondsCounter = (props) => {
    return (
        <div className="d-flex justify-content-center">
            <Number digit={Math.floor(props.timer / 100000 % 10)} />
            <Number digit={Math.floor(props.timer / 10000 % 10)} />
            <Number digit={Math.floor(props.timer / 1000 % 10)} />
            <Number digit={Math.floor(props.timer / 100 % 10)} />
            <Number digit={Math.floor(props.timer / 10 % 10)} />
            <Number digit={props.timer % 10} />
        </div>
    );
};

export default SecondsCounter;
