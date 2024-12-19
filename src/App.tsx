import './App.css';
import React, {useEffect, useState} from "react";
import HeaderComponent from "./components/HeaderComponent";
import RandomAlphanumericDisplay from "./components/RandomAlphanumericDisplay";
import InputCharacterPanel from "./components/InputCharacterPanel";


const alphanumericCharacters: string[] = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
  "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Ä", "Ö", "Ü",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

export function truncateToTwoDecimalPlaces(value: number): number {
    return Math.floor(value * 100) / 100;
}

export const getRandomAlphanumeric: () => string[] = () => {
  let eightRandomAlphanumeric: string[] = [];
  for (let i: number = 0; i < 8; i++) {
    eightRandomAlphanumeric.push(alphanumericCharacters[Math.floor(Math.random() * alphanumericCharacters.length)]);
  }
  return eightRandomAlphanumeric;
};

function App() {
  const [eightRandomAlphanumeric, setEightRandomAlphanumeric] = useState<string[]>(getRandomAlphanumeric());
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        const savedIsDarkMode: string | null = localStorage.getItem('isDarkMode');
        return savedIsDarkMode === "true";
    });
  const [fontSizeState, setFontSizeState] = useState<number>(() => {
        const savedFontSize: string | null = localStorage.getItem('fontSizeState');
        return savedFontSize ? Number(savedFontSize) : 3;
    });
  const [randomAlphanumericInput, setRandomAlphanumericInput] = useState<string[]>([]);

    useEffect(() => {
        const savePreferences: () => Promise<void> = async () => {
            try {
                localStorage.setItem('fontSizeState', fontSizeState?.toString() ?? '3');
                localStorage.setItem('isDarkMode', isDarkMode?.toString() ?? 'true');
                console.log('Einstellungen gespeichert:', { fontSizeState, isDarkMode });
            } catch (error) {
                console.error('Fehler beim Speichern in localStorage:', error);
            }
        };
        void savePreferences();
    }, [fontSizeState, isDarkMode]);


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
                           randomAlphanumericInput={randomAlphanumericInput}
                           setRandomAlphanumericInput={setRandomAlphanumericInput}
                           setFontSizeState={setFontSizeState}
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
