import React, {useState} from 'react';
import Textarea from "./Textarea";
import Markdown from "react-markdown";
import "../css/App.css";

const placeholder = `# Welcome to my React Markdown Previewer! 
## Here are some cool stuff that you can do:
Heres some code , \`<div><div>\`, between 2 backsticks.
\`\`\`
// this is multi-line code 
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)`

;

function App() {
  const [text, setText] = useState(placeholder);

    const handleChange = (event) => {
        setText(event.target.value)
        console.log(text)
    }

   let ContentMarkdown = text;

  return (
    <div>
      <h1>Markdown Previewer</h1>
      <div className="container">
        <Textarea markdown={text} onChange={handleChange}/>
        <div className="rigth-side">
          <div id="preview">
          <Markdown escapeHtml={true} source={ContentMarkdown}/>
          </div>
        </div>
       
      </div>
    </div>
   
  );
}

export default App;
