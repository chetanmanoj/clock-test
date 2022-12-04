import { useState } from "react";
import "./App.css";
import MyClock from "./components/MyClock";

function App() {
  let bgImage = [
    {src:'./images/ff14.jpg', title:'img1'},
    {src:'./images/mari.jpg', title:'img2'},
    {src:'./images/space.jpg', title:'img3'},
    {src:'./images/wat.jpg', title:'img4'},
  ]


  let quotes = [
    'Everything should be done in love.',
    'Glory to God, who is able to do far beyond all that we could ask or imagine by his power at work within us.',
    'May the God of hope fill you with all joy and peace in faith so that you overflow with hope by the power of the Holy Spirit.',
    'Love should be shown without pretending. Hate evil, and hold on to what is good.',
  ]

  const time = new Date().getHours();  
  
  return (
   

    <div className='bg'>
    <MyClock />
      <div className="textBox">
      <text className="text">
        {quotes[1]}
      </text>
      </div>
    </div>
  );
}

export default App;
