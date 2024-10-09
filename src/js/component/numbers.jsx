import React from "react";

const Number = (props) => {
    return (
        <div className="card text-bg-dark m-1">
            <div className="card-body">
                <h5 className="card-title">{props.digit}</h5>
            </div>
        </div>
    );
};

export default Number;

