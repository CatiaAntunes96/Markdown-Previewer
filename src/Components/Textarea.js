import React from "react";
import "../css/Textarea.css";

const Textarea = (props) => {
    
    return (
        <div className="left-side">
            <textarea id="editor" value={props.markdown} onChange={props.onChange} type="text"/>
        </div>
    )
}

export default Textarea;