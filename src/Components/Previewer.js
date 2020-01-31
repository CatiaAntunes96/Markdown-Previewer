import React from "react";
import marked from "react-markdown";

const Previewer = props => {
    
   
    return (
        <div>
            <p id="preview" dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}></p>
        </div>
    )
}

export default Previewer;