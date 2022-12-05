// import { useState, useEffect } from "react";
import "./App.css";
import MyClock from "./components/MyClock";
import Quotes from "./components/Quotes";
import Image from "./components/Image";

function App() {

  // const key = Object.key(bgImage);
  // const image = Math.floor(Math.random() * key.length);

  return (
    <div>
      <Image/>
      <div>
      <MyClock/>
      </div>
      <div className="textBox">
        <div className="text">
          <Quotes />
        </div>
      </div>
      </div>
      
  
  );
}

export default App;
