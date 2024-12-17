import './App.css';
import React, { useState } from "react";
import HeaderComponent from "./components/HeaderComponent";
import RandomAlphanumericDisplay from "./components/RandomAlphanumericDisplay";
import InputCharacterPanel from "./components/InputCharacterPanel";


const alphanumericCharacters: string[] = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
  "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Ä", "Ö", "Ü",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

export const getRandomAlphanumeric: () => string[] = () => {
  let eightRandomAlphanumeric: string[] = [];
  for (let i: number = 0; i < 8; i++) {
    eightRandomAlphanumeric.push(alphanumericCharacters[Math.floor(Math.random() * alphanumericCharacters.length)]);
  }
  return eightRandomAlphanumeric;
};

function App() {
  const [eightRandomAlphanumeric, setEightRandomAlphanumeric] = useState<string[]>(getRandomAlphanumeric());
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [fontSizeState, setFontSizeState] = useState<number>(3);
  const [randomAlphanumericInput, setRandomAlphanumericInput] = useState<string[]>([]);

  return (
      <div style={{...styles.container, backgroundColor: isDarkMode ? "black" : "white"}}>

          <HeaderComponent isDarkMode={isDarkMode}
                           setIsDarkMode={setIsDarkMode}
                           fontSizeState={fontSizeState}
                           setFontSizeState={setFontSizeState}
          />

          <RandomAlphanumericDisplay
                           eightRandomAlphanumeric={eightRandomAlphanumeric}
                           isDarkMode={isDarkMode}
                           setEightRandomAlphanumeric={setEightRandomAlphanumeric}
                           fontSizeState={fontSizeState}
                           setRandomAlphanumericInput={setRandomAlphanumericInput}
          />

          <InputCharacterPanel
                           eightRandomAlphanumeric={eightRandomAlphanumeric}
                           setRandomAlphanumericInput={setRandomAlphanumericInput}
                           randomAlphanumericInput={randomAlphanumericInput}
          />

      </div>
  );
}


const styles = {
    container: {
        transition: "all .5s ease",
        margin: 0,
        padding: 0,
        height: "100vh",
        width: "100%",
    },
}


export default App;
