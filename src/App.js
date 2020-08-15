import React from "react";
import Deck from "./components/Deck";
import yara from "./styles/css/yara.mp3";
let audio = new Audio(yara);
const start = () => {
  alert("Happy Birthday siri !!!😍😍");
  audio.play();
};
const App = () => (
  <>
    <Deck />
    <button onClick={start}> Oi SIRI 👸 click me </button>
    <img
      className="imgleft"
      src="http://www.iconhot.com/icon/png/event-people/512/balloons-1.png"
      alt=""
    />
    <img
      className="imgright"
      src="http://www.iconhot.com/icon/png/event-people/512/balloons-1.png"
      alt=""
    />
  </>
);

export default App;
