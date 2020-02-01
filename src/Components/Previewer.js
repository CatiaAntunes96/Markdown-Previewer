import React, {useMemo} from "react";
import marked from "react-markdown";
import renderer from "react-markdown";

const Previewer = (props) => {

    return (
        <div>
            <p id="preview" dangerouslySetInnerHTML={{__html: marked(props.markdown)}}></p>
        </div>
    )
}

export default Previewer;