import {useCallback, useState} from "react";
import {
    applicationIcons,
    decreaseFontScaleButton,
    defaultFontScaleButton, fontSizeDecrementValue, fontSizeIconsStatus,
    fontSizeIncrementValue,
    increaseFontScaleButton,
    maximumFontSize,
    minimumFontSize
} from "../constants/constants";
import {truncateToTwoDecimalPlaces} from "../utils/utils";


interface HeaderComponentProps {
    isDarkMode: boolean;
    setIsDarkMode: (darkMode: boolean) => void;
    fontSizeState: number;
    setFontSizeState: (newFontSize: number) => void;
    isLandoltCOrAlphanumericActive: boolean;
    setIsLandoltCOrAlphanumericActive: (LandoltCOrAlphanumericActive: boolean) => void;
}

function HeaderComponent({   isDarkMode,
                             setIsDarkMode,
                             fontSizeState,
                             setFontSizeState,
                             isLandoltCOrAlphanumericActive,
                             setIsLandoltCOrAlphanumericActive
                         }: HeaderComponentProps) {
    const [decreaseScale, setDecreaseScale] = useState(defaultFontScaleButton);
    const [increaseScale, setIncreaseScale] = useState(defaultFontScaleButton);
    const [landoltCOrAlphanumericIIconScale, setLandoltCOrAlphanumericIIconScale] = useState(defaultFontScaleButton);

    const handleDarkModeButton: () => void = useCallback(() => {
        setIsDarkMode(!isDarkMode);
    }, [isDarkMode])

    const toggleLandoltCOrAlphanumericTest: () => void = useCallback(() => {
        setIsLandoltCOrAlphanumericActive(!isLandoltCOrAlphanumericActive);
    }, [isLandoltCOrAlphanumericActive])

    const handleIconScaleDeIncreaser: (value: string) => void = useCallback((value: string) => {
        if (value === "increase") {
            if (fontSizeState < maximumFontSize) {
                setFontSizeState(fontSizeState + fontSizeIncrementValue);
                setIncreaseScale(increaseFontScaleButton);
                setTimeout(() => setIncreaseScale(defaultFontScaleButton), 500);
            }
        }
        if (value === "decrease") {
            if (truncateToTwoDecimalPlaces(fontSizeState) > minimumFontSize) {
                setFontSizeState(fontSizeState - fontSizeDecrementValue);
                setDecreaseScale(decreaseFontScaleButton);
                setTimeout(() => setDecreaseScale(defaultFontScaleButton), 500);
            }
        }
        if (value === "landoltCOrAlphanumeric") {
            setLandoltCOrAlphanumericIIconScale(increaseFontScaleButton);
            setTimeout(() => setLandoltCOrAlphanumericIIconScale(defaultFontScaleButton), 500);
        }
    }, [fontSizeState, setFontSizeState]);

  return (
      <>
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
                              onClick={() => handleIconScaleDeIncreaser(fontSizeIcon)}
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
          <div style={styles.headerElements2}>
              <img onClick={() => {
                  toggleLandoltCOrAlphanumericTest();
                  handleIconScaleDeIncreaser("landoltCOrAlphanumeric");
              }
              }
                   style={{...styles.isLandoltCOrAlphanumericTestButton,
                       filter: isDarkMode ? "invert(1)" : "invert(0)",
                       transform: `scale(${landoltCOrAlphanumericIIconScale})`

                   }}
                   src={isLandoltCOrAlphanumericActive ? applicationIcons.alphanumericIcon : applicationIcons.landoltCIcon} alt="Landolt C or Alphanumeric Toggle Icon"/>
          </div>
      </>
  );
}

const styles = {
    headerElements: {
        width: "100%",
        height: "10vh",
        display: "flex",
        justifyContent: "space-between",
    },
    headerElements2: {
        width: "100%",
        height: "12vh",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end"
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
    },
    isLandoltCOrAlphanumericTestButton: {
        transition: "all .5s ease",
        width: "2.2vw",
        height: "2.2vw",
        marginRight: "3vw",
        cursor: "pointer",
    }
}


export default HeaderComponent;
