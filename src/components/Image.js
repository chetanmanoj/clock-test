import {useState, useEffect, useCallback} from "react";
import './Image.css';

function Image(){
    let bgImage = [
        '../images/ff14.jpg',
        '../images/mari.jpg',
        '../images/space.jpg',
        '../images/wat.jpg',
      ]

    // var bgImage = new Array();

    // bgImage[0] = new Image();
    // bgImage[0].src = './images/mari.jpg';

    // bgImage[1] = new Image();
    // bgImage[1].src = './images/space.jpg';
      
      const [newBg, setNewBg] = useState("");
      const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * bgImage.length);
        setNewBg(bgImage[index]);
      }, []);
      useEffect(() => {
        const intervalID = setInterval(shuffle, 2000);
        return () => clearInterval(intervalID);
      }, [shuffle]);

      return (
        <div className="bg">
            <img src = {newBg} alt=''></img>
        </div>
      )
}
export default Image;