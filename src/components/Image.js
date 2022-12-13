import { useState, useEffect } from "react";
import "./Image.css";

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
      const time = new Date().getSeconds();
      switch (time) {
        case 0:
          setNewBg(bgImage[time]);
          break;
        case 1:
          setNewBg(bgImage[time]);
          break;
        case 2:
          setNewBg(bgImage[time]);
          break;
        case 3:
          setNewBg(bgImage[time]);
          break;
        case 4:
          setNewBg(bgImage[time]);
          break;
        case 5:
          setNewBg(bgImage[time]);
          break;
        case 6:
          setNewBg(bgImage[time]);
          break;
        case 7:
          setNewBg(bgImage[time]);
          break;
        case 8:
          setNewBg(bgImage[time]);
          break;
        case 9:
          setNewBg(bgImage[time]);
          break;
        case 10:
          setNewBg(bgImage[time]);
          break;
        case 11:
          setNewBg(bgImage[time]);
          break;
        case 12:
          setNewBg(bgImage[time]);
          break;
        case 13:
          setNewBg(bgImage[time]);
          break;
        case 14:
          setNewBg(bgImage[time]);
          break;
        case 15:
          setNewBg(bgImage[time]);
          break;
        case 16:
          setNewBg(bgImage[time]);
          break;
        case 17:
          setNewBg(bgImage[time]);
          break;
        case 18:
          setNewBg(bgImage[time]);
          break;
        case 19:
          setNewBg(bgImage[time]);
          break;
        case 20:
          setNewBg(bgImage[time]);
          break;
        case 21:
          setNewBg(bgImage[time]);
          break;
        case 22:
          setNewBg(bgImage[time]);
          break;
        case 23:
          setNewBg(bgImage[time]);
          break;

        default:
          setNewBg(bgImage[time]);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  console.log(newBg);
  return (
    <div className="bg" style={{ backgroundImage: `url(${newBg})` }}>

    </div>
  );
}
export default Image;
