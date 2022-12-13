import { useState, useEffect } from "react";

function Quotes() {
  let quotes = [
    "Everything should be done in love.",
    "Glory to God, who is able to do far beyond all that we could ask or imagine by his power at work within us.",
    "May the God of hope fill you with all joy and peace in faith so that you overflow with hope by the power of the Holy Spirit.",
    "Love should be shown without pretending. Hate evil, and hold on to what is good.",
    "May the God of hope fill you with all joy and peace in faith so that you overflow with hope by the power of the Holy Spirit.",
    "The Lord is my strength and my shield. My heart trusts him. I was helped, my heart rejoiced, and I thank him with my song.",
    "Love should be shown without pretending. Hate evil, and hold on to what is good.",
    "I can endure all these things through the power of the one who gives me strength.",
    "Taste and see how good the Lord is! The one who takes refuge in him is truly happy!",
    "So what are we going to say about these things? If God is for us, who is against us?",
    "I give thanks to you that I was marvelously set apart. Your works are wonderful—I know that very well.",
    "Be happy with those who are happy, and cry with those who are crying.",
    "Now faith, hope, and love remain—these three things—and the greatest of these is love.",
    "Pursue the Lord and his strength; seek his face always!",
    "Finally, be strengthened by the Lord and his powerful strength.",
    "He only is my rock and my salvation, my fortress; I shall not be shaken.",
    "And my God will supply every need of yours according to his riches in glory in Christ Jesus.",
    "This is my comfort in my affliction, that your promise gives me life.",
    "The LORD of hosts is with us; the God of Jacob is our fortress.",
    "Be on your guard; stand firm in the faith; be courageous; be strong.",
    "But seek first the kingdom of God and his righteousness, and all these things will be added to you.",
    "Let love be genuine. Abhor what is evil; hold fast to what is good.",
    "Now faith is the assurance of things hoped for, the conviction of things not seen.",
    "For we walk by faith, not by sight.",
  ];

  const [newQuote, setNewQuote] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().getSeconds();
      switch (time) {
        case 0:
          setNewQuote(quotes[time]);
          break;
        case 1:
          setNewQuote(quotes[time]);
          break;
        case 2:
          setNewQuote(quotes[time]);
          break;
        case 3:
          setNewQuote(quotes[time]);
          break;
        case 4:
          setNewQuote(quotes[time]);
          break;
        case 5:
          setNewQuote(quotes[time]);
          break;
        case 6:
          setNewQuote(quotes[time]);
          break;
        case 7:
          setNewQuote(quotes[time]);
          break;
        case 8:
          setNewQuote(quotes[time]);
          break;
        case 9:
          setNewQuote(quotes[time]);
          break;
        case 10:
          setNewQuote(quotes[time]);
          break;
        case 11:
          setNewQuote(quotes[time]);
          break;
        case 12:
          setNewQuote(quotes[time]);
          break;
        case 13:
          setNewQuote(quotes[time]);
          break;
        case 14:
          setNewQuote(quotes[time]);
          break;
        case 15:
          setNewQuote(quotes[time]);
          break;
        case 16:
          setNewQuote(quotes[time]);
          break;
        case 17:
          setNewQuote(quotes[time]);
          break;
        case 18:
          setNewQuote(quotes[time]);
          break;
        case 19:
          setNewQuote(quotes[time]);
          break;
        case 20:
          setNewQuote(quotes[time]);
          break;
        case 21:
          setNewQuote(quotes[time]);
          break;
        case 22:
          setNewQuote(quotes[time]);
          break;
        case 23:
          setNewQuote(quotes[time]);
          break;

        default:
          setNewQuote(quotes[time]);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <p>{newQuote}</p>;
}
export default Quotes;
