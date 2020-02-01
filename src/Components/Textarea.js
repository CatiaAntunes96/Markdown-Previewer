import React from "react";
import "../css/TextArea.css"

const Textarea = (props) => {
    
    return (
        <div>
        <div className="left-side">
            <textarea id="editor" value={props.markdown} onChange={props.onChange} type="text"/>
        </div>
        </div>
    )
}

export default Textarea;