import React from "react";

const Previewer = props => {
    

    return (
        <div className="right-side">
            <button onClick={props.click}>click</button>
            <p id="preview" >{props.value}</p>
        </div>
    )
}

export default Previewer;