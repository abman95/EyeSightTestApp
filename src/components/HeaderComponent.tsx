import {useCallback, useState} from "react";
import {truncateToTwoDecimalPlaces} from "../App";

const applicationIcons = {
    lightDarkModeToggleIcon: "./assets/images/lightDarkModeToggleIcon.png",
    fontSizeincreaseIcon: "./assets/images/fontSizeIncrease.png",
    fontSizedecreaseIcon: "./assets/images/fontSizeDecrease.png",
};

const fontSizeIconsStatus: string[] = ["decrease", "increase"]

const maximumFontSize: number = 8;
const minimumFontSize: number = 0.2;
const fontSizeIncrement: number = 0.1;
const fontSizeDecrement: number = 0.1;

const increaseFontScaleButton = 1.15;
const decreaseFontScaleButton = 0.85;
const defaultFontScaleButton = 1;



interface HeaderComponentProps {
    isDarkMode: boolean;
    setIsDarkMode: (darkMode: boolean) => void;
    fontSizeState: number
    setFontSizeState: (newFontSize: number) => void
}

function HeaderComponent({   isDarkMode,
                             setIsDarkMode,
                             fontSizeState,
                             setFontSizeState
                         }: HeaderComponentProps) {
    const [decreaseScale, setDecreaseScale] = useState(defaultFontScaleButton);
    const [increaseScale, setIncreaseScale] = useState(defaultFontScaleButton);


  const handleDarkModeButton: () => void = useCallback(() => {
      setIsDarkMode(!isDarkMode);
  }, [isDarkMode])

    const handleFontSizeDeIncreaser: (value: string) => void = useCallback((value: string) => {
        if (value === "increase") {
            if (fontSizeState < maximumFontSize) {
                setFontSizeState(fontSizeState + fontSizeIncrement);
                setIncreaseScale(increaseFontScaleButton);
                setTimeout(() => setIncreaseScale(defaultFontScaleButton), 500);
            }
        }
        if (value === "decrease") {
            if (truncateToTwoDecimalPlaces(fontSizeState) > minimumFontSize) {
                setFontSizeState(fontSizeState - fontSizeDecrement);
                setDecreaseScale(decreaseFontScaleButton);
                setTimeout(() => setDecreaseScale(defaultFontScaleButton), 500);
            }
        }
    }, [fontSizeState, setFontSizeState]);


  return (
          <div style={styles.headerElements}>
              <div>
                      <img onClick={handleDarkModeButton}
                           style={{...styles.lightDarkModeToggleButton, filter: isDarkMode ? "invert(1)" : "invert(0)" }}
                           src={applicationIcons.lightDarkModeToggleIcon} alt="Dark Mode Toggle Icon" />
              </div>
              <div>
                  {fontSizeIconsStatus.map((fontSizeIcon: string, index: number) => {
                      return (
                          <img
                              key={index}
                              onClick={() => handleFontSizeDeIncreaser(fontSizeIcon)}
                              style={{
                                  ...(fontSizeIcon === 'increase' ? styles.fontSizeincreaseIcon : styles.fontSizedecreaseIcon),
                                  filter: isDarkMode ? "invert(1) brightness(100)" : "invert(0) brightness(0)",
                                  transform: `scale(${fontSizeIcon === "increase" ? increaseScale : decreaseScale})`
                              }}
                              src={applicationIcons[`fontSize${fontSizeIcon === 'increase' ? 'increase' : 'decrease'}Icon`]}
                              alt={`Fontsize ${fontSizeIcon} Icon`}
                          />
                      );
                  })}
              </div>
          </div>
  );
}

const styles = {
    headerElements: {
        width: "100%",
        height: "10vh",
        display: "flex",
        justifyContent: "space-between",
    },
    lightDarkModeToggleButton: {
        transition: "all .5s ease",
        cursor: "pointer",
        height: "3vw",
        width: "3vw",
        marginTop: "3vw",
        marginLeft: "3vw",
    },
    fontSizedecreaseIcon: {
        transition: "all .5s ease",
        cursor: "pointer",
        height: "2vw",
        width: "2vw",
        marginTop: "3vw",
        marginRight: "1.5vw",
    },
    fontSizeincreaseIcon: {
        transition: "all .5s ease",
        cursor: "pointer",
        height: "2.5vw",
        width: "2.5vw",
        marginTop: "3vw",
        marginRight: "3vw",
    }
}


export default HeaderComponent;
