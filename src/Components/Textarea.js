import React, {useState} from "react";
import Previewer from "./Previewer";
import marked from "react-markdown";

const Textarea = () => {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value)
        console.log(text)
    }

    const createMarkup = () => {
        return { __html: marked(text) }
    }
    const getMarkdownText =  () => {
        return { __html: createMarkup() };
    }

    return (
        <div>
        <div className="left-side">
            <textarea id="editor" value={text} onChange={handleChange} placeholder="Enter Markdown"/>
        </div>
        <div className="right-side">
            <Previewer text={text} dangerouslySetInnerHTML={getMarkdownText}/>
        </div>
        </div>
    )
}

export default Textarea;