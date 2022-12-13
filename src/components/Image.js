import { useState, useEffect } from "react";
import "./Image.css";
// import ff14 from "%PUBLIC_URL%/ff14.jpg";


function Image() {
  let bgImage = [
    require("../images/ff14.jpg"),
    require("../images/mari.jpg"),
    require("../images/space.jpg"),
    require("../images/wat.jpg"),

    require("../images/ff14.jpg"),
    require("../images/mari.jpg"),
    require("../images/space.jpg"),
    require("../images/wat.jpg"),

    require("../images/ff14.jpg"),
    require("../images/mari.jpg"),
    require("../images/space.jpg"),
    require("../images/wat.jpg"),

    require("../images/ff14.jpg"),
    require("../images/mari.jpg"),
    require("../images/space.jpg"),
    require("../images/wat.jpg"),

    require("../images/ff14.jpg"),
    require("../images/mari.jpg"),
    require("../images/space.jpg"),
    require("../images/wat.jpg"),

    require("../images/ff14.jpg"),
    require("../images/mari.jpg"),
    require("../images/space.jpg"),
    require("../images/wat.jpg"),
   
  ];

  const [newBg, setNewBg] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().getHours();
      switch (time) {
        case 0:
          setNewBg(bgImage[0]);
          break;
        case 1:
          setNewBg(bgImage[1]);
          break;
        case 2:
          setNewBg(bgImage[2]);
          break;
        case 3:
          setNewBg(bgImage[3]);
          break;
        case 4:
          setNewBg(bgImage[4]);
          break;
        case 5:
          setNewBg(bgImage[5]);
          break;
        case 6:
          setNewBg(bgImage[6]);
          break;
        case 7:
          setNewBg(bgImage[7]);
          break;
        case 8:
          setNewBg(bgImage[8]);
          break;
        case 9:
          setNewBg(bgImage[9]);
          break;
        case 10:
          setNewBg(bgImage[10]);
          break;
        case 11:
          setNewBg(bgImage[11]);
          break;
        case 12:
          setNewBg(bgImage[12]);
          break;
        case 13:
          setNewBg(bgImage[13]);
          break;
        case 14:
          setNewBg(bgImage[14]);
          break;
        case 15:
          setNewBg(bgImage[15]);
          break;
        case 16:
          setNewBg(bgImage[16]);
          break;
        case 17:
          setNewBg(bgImage[17]);
          break;
        case 18:
          setNewBg(bgImage[18]);
          break;
        case 19:
          setNewBg(bgImage[19]);
          break;
        case 20:
          setNewBg(bgImage[20]);
          break;
        case 21:
          setNewBg(bgImage[21]);
          break;
        case 22:
          setNewBg(bgImage[22]);
          break;
        case 23:
          setNewBg(bgImage[23]);
          break;

        default:
          setNewBg(bgImage[2]);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
console.log(newBg)
  return (
  // <div className= "bg" style={{backgroundImage: `url(${newBg})`}} >
  // <div className= "bg" style={{backgroundImage: `url(https://images.unsplash.com/photo-1484591974057-265bb767ef71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)`}} >
      // <div className= "bg" style={{backgroundImage: `url(${newBg})`}} >
      // <div className= "bg">
      // {/* <img src={require('../images/ff14.jpg')} alt= '' className="bg"/> */}
      // <img src={newBg} alt= '' className="bg"/>
<div className= "bg" style={{backgroundImage: `url(${newBg})`}} >

    
   </div>
  )
}
export default Image;
