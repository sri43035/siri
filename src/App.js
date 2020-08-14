import React from "react";
import Deck from "./components/Deck";
import yara from "./styles/css/yara.mp3";
let audio = new Audio(yara);
const start = () => {
  alert("Happy Birthday siri !!!😍😍 i Miss you so muchh");
  audio.play();
};
const App = () => (
  <>
    <Deck />
    <button onClick={start}> Oi SIRI click me</button>
  </>
);

export default App;
