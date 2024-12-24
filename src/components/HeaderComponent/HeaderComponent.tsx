import {useCallback, useState} from "react";
import {
    applicationIcons,
    decreaseFontScaleButton,
    defaultFontScaleButton, defaultRotateValue,
    fontSizeDecrementValue,
    fontSizeIconsStatus,
    fontSizeIncrementValue,
    increaseFontScaleButton,
    maximumFontSize,
    minimumFontSize, rotateValue
} from "../../constants/constants";
import {getRandomAlphanumeric, shuffeLandoltCIconRotate, truncateToTwoDecimalPlaces} from "../../utils/utils";
import './styles/style.css';
import './styles/styleMobile.css';
import './styles/styleTablet.css';

type HeaderComponentProps = {
    isDarkMode: boolean;
    setIsDarkMode: (darkMode: boolean) => void;
    fontSizeState: number;
    setFontSizeState: (newFontSize: number) => void;
    isLandoltCOrAlphanumericActive: boolean;
    setIsLandoltCOrAlphanumericActive: (LandoltCOrAlphanumericActive: boolean) => void;
    setLandoltRotationDegree: (degree: number) => void;
    setEightRandomAlphanumeric: (randomAlphanumeric: string[]) => void;
}

function HeaderComponent({
                             isDarkMode,
                             setIsDarkMode,
                             fontSizeState,
                             setFontSizeState,
                             isLandoltCOrAlphanumericActive,
                             setIsLandoltCOrAlphanumericActive,
                             setLandoltRotationDegree,
                             setEightRandomAlphanumeric,
                         }: HeaderComponentProps) {
    const [decreaseScale, setDecreaseScale] = useState(defaultFontScaleButton);
    const [increaseScale, setIncreaseScale] = useState(defaultFontScaleButton);
    const [landoltCOrAlphanumericIIconScale, setLandoltCOrAlphanumericIIconScale] = useState(defaultFontScaleButton);
    const [shuffeAlphanumericCharactersIconRotate, setShuffeAlphanumericCharactersIconRotate] =
        useState<string>(defaultRotateValue);

    const shuffeLandoltCIconRotateAndRefreshIcon = useCallback(() => {
        setLandoltRotationDegree(shuffeLandoltCIconRotate());
        setEightRandomAlphanumeric(getRandomAlphanumeric());
        setShuffeAlphanumericCharactersIconRotate(rotateValue);
        setTimeout(() => setShuffeAlphanumericCharactersIconRotate(defaultRotateValue), 500);
    }, []);

    const handleDarkModeButton = useCallback(() => {
        setIsDarkMode(!isDarkMode);
    }, [isDarkMode]);

    const toggleLandoltCOrAlphanumericTest = useCallback(() => {
        setIsLandoltCOrAlphanumericActive(!isLandoltCOrAlphanumericActive);
    }, [isLandoltCOrAlphanumericActive]);

    const handleIconScaleDeIncreaser = useCallback((value: string) => {
        if (value === "increase" && fontSizeState < maximumFontSize) {
            setFontSizeState(fontSizeState + fontSizeIncrementValue);
            setIncreaseScale(increaseFontScaleButton);
            setTimeout(() => setIncreaseScale(defaultFontScaleButton), 500);
        }
        if (value === "decrease" && truncateToTwoDecimalPlaces(fontSizeState) > minimumFontSize) {
            setFontSizeState(fontSizeState - fontSizeDecrementValue);
            setDecreaseScale(decreaseFontScaleButton);
            setTimeout(() => setDecreaseScale(defaultFontScaleButton), 500);
        }
        if (value === "landoltCOrAlphanumeric") {
            setLandoltCOrAlphanumericIIconScale(increaseFontScaleButton);
            setTimeout(() => setLandoltCOrAlphanumericIIconScale(defaultFontScaleButton), 500);
        }
    }, [fontSizeState, setFontSizeState]);

    return (
        <>
            <div className="headerElements">
                <div>
                    <img
                        onClick={handleDarkModeButton}
                        data-dark-mode={isDarkMode}
                        className="lightDarkModeToggleButton"
                        src={applicationIcons.lightDarkModeToggleIcon}
                        alt="Dark Mode Toggle Icon"
                    />
                </div>
                <div>
                    {fontSizeIconsStatus.map((fontSizeIcon: string, index: number) => (
                        <img
                            key={index}
                            data-dark-mode={isDarkMode}
                            onClick={() => handleIconScaleDeIncreaser(fontSizeIcon)}
                            className={`${fontSizeIcon === 'increase' ? 'fontSizeincreaseIcon' : 'fontSizedecreaseIcon'}`}
                            style={{
                                transform: `scale(${fontSizeIcon === "increase" ? increaseScale : decreaseScale})`
                            }}
                            src={applicationIcons[`fontSize${fontSizeIcon === 'increase' ? 'increase' : 'decrease'}Icon`]}
                            alt={`Fontsize ${fontSizeIcon} Icon`}
                        />
                    ))}
                </div>
            </div>
            <div className="headerElements2">
                <img
                    data-dark-mode={isDarkMode}
                    className="refreshIcon"
                    onClick={shuffeLandoltCIconRotateAndRefreshIcon}
                    style={{
                        transform: `rotate(${shuffeAlphanumericCharactersIconRotate}deg)`
                    }}
                    src={applicationIcons.refreshIcon}
                    alt="Landolt Degree Shuffle Icon"
                />
                <img
                    onClick={() => {
                        toggleLandoltCOrAlphanumericTest();
                        handleIconScaleDeIncreaser("landoltCOrAlphanumeric");
                    }}
                    data-dark-mode={isDarkMode}
                    className="isLandoltCOrAlphanumericTestButton"
                    style={{
                        transform: `scale(${landoltCOrAlphanumericIIconScale})`
                    }}
                    src={isLandoltCOrAlphanumericActive ? applicationIcons.alphanumericIcon : applicationIcons.landoltCIcon}
                    alt="Landolt C or Alphanumeric Toggle Icon"
                />
            </div>
        </>
    );
}

export default HeaderComponent;