import React from 'react';
import Textarea from "./Textarea";
import Previewer from "./Previewer";
//import './App.css';

function App() {
  return (
    <div>
      <h1>Markdown Previewer</h1>
      <div className="container">
        <Textarea />
        <Previewer />

      </div>
    </div>
   
  );
}

export default App;
