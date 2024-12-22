import './App.css';
import React, {useEffect, useState} from "react";
import HeaderComponent from "./components/HeaderComponent";
import RandomAlphanumericDisplay from "./components/RandomAlphanumericDisplay";
import InputCharacterPanel from "./components/InputCharacterPanel";
import LandoltCEyeTestDisplay from "./components/LandoltCEyeTestDisplay";
import LandoltGapSelector from "./components/LandoltGapSelector";
import {getRandomAlphanumeric, shuffeLandoltCIconRotate} from "./utils/utils";


function App() {
  const [eightRandomAlphanumeric, setEightRandomAlphanumeric] = useState<string[]>(getRandomAlphanumeric());
  const [randomAlphanumericInput, setRandomAlphanumericInput] = useState<string[]>([]);
  const [landoltRotationDegree, setLandoltRotationDegree] = useState(() => shuffeLandoltCIconRotate());
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        const savedIsDarkMode: string | null = localStorage.getItem('isDarkMode');
        return savedIsDarkMode === "true";
    });
  const [fontSizeState, setFontSizeState] = useState<number>(() => {
        const savedFontSize: string | null = localStorage.getItem('fontSizeState');
        return savedFontSize ? Number(savedFontSize) : 3;
    });
  const [isLandoltCOrAlphanumericActive, setIsLandoltCOrAlphanumericActive] = useState<boolean>(() => {
      const savedisLandoltCOrAlphanumericActive: string | null = localStorage.getItem('isLandoltCOrAlphanumericActive');
      return savedisLandoltCOrAlphanumericActive === "true";
  });


    useEffect(() => {
        const savePreferences: () => Promise<void> = async () => {
            try {
                localStorage.setItem('fontSizeState', fontSizeState?.toString() ?? '3');
                localStorage.setItem('isDarkMode', isDarkMode?.toString() ?? 'true');
                localStorage.setItem('isLandoltCOrAlphanumericActive', isLandoltCOrAlphanumericActive?.toString() ?? 'true');
                console.log('Einstellungen gespeichert:', { fontSizeState, isDarkMode, isLandoltCOrAlphanumericActive });
            } catch (error) {
                console.error('Fehler beim Speichern in localStorage:', error);
            }
        };
        void savePreferences();
    }, [fontSizeState, isDarkMode, isLandoltCOrAlphanumericActive]);


  return (
      <div style={{...styles.container, backgroundColor: isDarkMode ? "black" : "white"}}>
          <HeaderComponent isDarkMode={isDarkMode}
                           setIsDarkMode={setIsDarkMode}
                           fontSizeState={fontSizeState}
                           setFontSizeState={setFontSizeState}
                           isLandoltCOrAlphanumericActive={isLandoltCOrAlphanumericActive}
                           setIsLandoltCOrAlphanumericActive={setIsLandoltCOrAlphanumericActive}
          />
          {isLandoltCOrAlphanumericActive ?
                <>
                    <LandoltCEyeTestDisplay
                        isDarkMode={isDarkMode}
                        fontSizeState={fontSizeState}
                        landoltRotationDegree={landoltRotationDegree}
                        setLandoltRotationDegree={setLandoltRotationDegree}
                    />
                    <LandoltGapSelector
                        isDarkMode={isDarkMode}
                        landoltRotationDegree={landoltRotationDegree}
                        setLandoltRotationDegree={setLandoltRotationDegree}
                        fontSizeState={fontSizeState}
                        setFontSizeState={setFontSizeState}
                    />
                </>
              :
                <>
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
                </>
          }
      </div>
  );
}


const styles = {
    container: {
        margin: 0,
        padding: 0,
        height: "100vh",
        width: "100%",

    },
}


export default App;
