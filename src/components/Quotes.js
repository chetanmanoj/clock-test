import { useState, useEffect, } from "react";


function Quotes(){
  let quotes = [
    'Everything should be done in love.',
    'Glory to God, who is able to do far beyond all that we could ask or imagine by his power at work within us.',
    'May the God of hope fill you with all joy and peace in faith so that you overflow with hope by the power of the Holy Spirit.',
    'Love should be shown without pretending. Hate evil, and hold on to what is good.',
    'May the God of hope fill you with all joy and peace in faith so that you overflow with hope by the power of the Holy Spirit.',
    'The Lord is my strength and my shield. My heart trusts him. I was helped, my heart rejoiced, and I thank him with my song.',
    'Love should be shown without pretending. Hate evil, and hold on to what is good.',
    'I can endure all these things through the power of the one who gives me strength.',
    'Taste and see how good the Lord is! The one who takes refuge in him is truly happy!',
    'So what are we going to say about these things? If God is for us, who is against us?',
    'I give thanks to you that I was marvelously set apart. Your works are wonderful—I know that very well.',
    'Be happy with those who are happy, and cry with those who are crying.',
    'Now faith, hope, and love remain—these three things—and the greatest of these is love.',
    'Pursue the Lord and his strength; seek his face always!',
    'Finally, be strengthened by the Lord and his powerful strength.',
    'He only is my rock and my salvation, my fortress; I shall not be shaken.',
    'And my God will supply every need of yours according to his riches in glory in Christ Jesus.',
    'This is my comfort in my affliction, that your promise gives me life.',
    'The LORD of hosts is with us; the God of Jacob is our fortress.',
    'Be on your guard; stand firm in the faith; be courageous; be strong.',
    'But seek first the kingdom of God and his righteousness, and all these things will be added to you.',
    'Let love be genuine. Abhor what is evil; hold fast to what is good.',
    'Now faith is the assurance of things hoped for, the conviction of things not seen.',
    'For we walk by faith, not by sight.',

  ]
   
      const time = new Date().getSeconds();  
      // const [Time, setTime] = useState(new Date().getSeconds());
      const [newQuote, setnewQuote] = useState("");
    //   const shuffle = useCallback(() => {
    //     const index = Math.floor(Math.random() * quotes.length);
    //     setnewQuote(quotes[index]);
    
    // }, []);
    useEffect(() => {
      // setTime = new Date().getSeconds(); 
      // setTime(time) 
      // console.log("time set : ", Time);
      // const intervalID = setInterval(shuffle, 2000);
      // return () => clearInterval(intervalID);
      const interval = setInterval(() => {
      switch(time){
        case 0: setnewQuote(quotes[0]);
        break;
        case 1: setnewQuote(quotes[1]);
        break;
        case 2: setnewQuote(quotes[2]);
        break;
        case 3: setnewQuote(quotes[3]);
        break;
        case 4: setnewQuote(quotes[4]);
        break;
        case 5: setnewQuote(quotes[5]);
        break;
        case 6: setnewQuote(quotes[6]);
        break;
        case 7: setnewQuote(quotes[7]);
        break;
        case 8: setnewQuote(quotes[8]);
        break;
        case 9: setnewQuote(quotes[9]);
        break;
        case 10: setnewQuote(quotes[10]);
        break;
        case 11: setnewQuote(quotes[11]);
        break;
        case 12: setnewQuote(quotes[12]);
        break;
        case 13: setnewQuote(quotes[13]);
        break;
        case 14: setnewQuote(quotes[14]);
        break;
        case 15: setnewQuote(quotes[15]);
        break;
        case 16: setnewQuote(quotes[16]);
        break;
        case 17: setnewQuote(quotes[17]);
        break;
        case 18: setnewQuote(quotes[18]);
        break;
        case 19: setnewQuote(quotes[19]);
        break;
        case 20: setnewQuote(quotes[20]);
        break;
        case 21: setnewQuote(quotes[21]);
        break;
        case 22: setnewQuote(quotes[22]);
        break;
        case 23: setnewQuote(quotes[23]);
        break;
    
        default: setnewQuote(quotes[0]);


      }},1000);
      return() => {
        clearInterval(interval)
      }

      
  }, [time])
      return(
        <p>
        {newQuote}
        </p>
      )
    
}
export default Quotes;