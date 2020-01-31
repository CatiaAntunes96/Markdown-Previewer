import React, {useState} from "react";
import Previewer from "./Previewer";

const Textarea = () => {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.text)
        console.log(text)
    }

    const click = () => {
        setText(text)
        //console.log()
    }

    return (
        <div>
        <div className="left-side">
            <textarea id="editor" value={text} onChange={handleChange}/>
        </div>
        <div>
            <Previewer click={click} value={text}/>
        </div>
        </div>
    )
}

export default Textarea;