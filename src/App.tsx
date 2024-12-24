import './App.css';
import React, {useEffect, useState} from "react";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import RandomAlphanumericDisplay from "./components/RandomAlphanumericDisplay/RandomAlphanumericDisplay";
import InputCharacterPanel from "./components/InputCharacterPanel/InputCharacterPanel";
import LandoltCEyeTestDisplay from "./components/LandoltCEyeTestDisplay/LandoltCEyeTestDisplay";
import LandoltGapSelector from "./components/LandoltGapSelector/LandoltGapSelector";
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
            } catch (error) {
                console.error('Fehler beim Speichern in localStorage:', error);
            }
        };
        void savePreferences();
    }, [fontSizeState, isDarkMode, isLandoltCOrAlphanumericActive]);

    useEffect(() => {
        const setViewportHeight = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        setViewportHeight();
        window.addEventListener('resize', setViewportHeight);
        window.addEventListener('orientationchange', setViewportHeight);

        return () => {
            window.removeEventListener('resize', setViewportHeight);
            window.removeEventListener('orientationchange', setViewportHeight);
        };
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.body.setAttribute('data-dark-mode', 'true');
        } else {
            document.body.setAttribute('data-dark-mode', 'false');
        }
    }, [isDarkMode]);

  return (
      <div
          className="appContainer"
          data-dark-mode={isDarkMode}
      >
          <HeaderComponent isDarkMode={isDarkMode}
                           setIsDarkMode={setIsDarkMode}
                           fontSizeState={fontSizeState}
                           setFontSizeState={setFontSizeState}
                           isLandoltCOrAlphanumericActive={isLandoltCOrAlphanumericActive}
                           setIsLandoltCOrAlphanumericActive={setIsLandoltCOrAlphanumericActive}
                           setLandoltRotationDegree={setLandoltRotationDegree}
                           setEightRandomAlphanumeric={setEightRandomAlphanumeric}

          />
          {isLandoltCOrAlphanumericActive ?
                <>
                    <LandoltCEyeTestDisplay
                        isDarkMode={isDarkMode}
                        fontSizeState={fontSizeState}
                        landoltRotationDegree={landoltRotationDegree}
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

export default App;
