import { useState, useEffect, useCallback } from "react";


function Quotes(){
  
    let quotes = [
        'Everything should be done in love.',
        'Glory to God, who is able to do far beyond all that we could ask or imagine by his power at work within us.',
        'May the God of hope fill you with all joy and peace in faith so that you overflow with hope by the power of the Holy Spirit.',
        'Love should be shown without pretending. Hate evil, and hold on to what is good.',
      ]
      const [newQuote, setnewQuote] = useState("");
      const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * quotes.length);
        setnewQuote(quotes[index]);
    }, []);
    useEffect(() => {
      const intervalID = setInterval(shuffle, 2000);
      return () => clearInterval(intervalID);
  }, [shuffle])
      return(
        <p>
        {newQuote}
        </p>
      )
    
}
export default Quotes;