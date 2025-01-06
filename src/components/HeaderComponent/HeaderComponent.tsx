import {useCallback, useState} from "react";
import {
    APPLICATION_ICONS,
    DECREASE_FONT_SCALE_BUTTON,
    DEFAULT_FONT_SCALE_BUTTON,
    DEFAULT_ROTATE_VALUE,
    FONT_SCALE_BUTTON_ANIMATION_DURATION_MS,
    FONT_SCALE_DECREMENT_THRESHOLD,
    FONT_SCALE_INCREMENT_THRESHOLD,
    FONT_SIZE_DECREMENT_VALUE,
    FONT_SIZE_DECREMENT_VALUE_2,
    FONT_SIZE_ICONS_STATUS,
    FONT_SIZE_INCREMENT_VALUE,
    FONT_SIZE_INCREMENT_VALUE_2,
    INCREASE_FONT_SCALE_BUTTON,
    MAXIMUM_FONT_SIZE,
    MINIMUM_FONT_SIZE_MANUAL_MODE,
    ROTATE_VALUE
} from "../../constants/constants";
import {getRandomAlphanumeric, shuffeLandoltCIconRotate, truncateToTwoDecimalPlaces} from "../../utils/utils";
import './styles/style.css';
import './styles/styleMobile.css';
import './styles/styleTablet.css';

type THeaderComponentProps = {
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
                         }: THeaderComponentProps) {
    const [decreaseScale, setDecreaseScale] = useState(DEFAULT_FONT_SCALE_BUTTON);
    const [increaseScale, setIncreaseScale] = useState(DEFAULT_FONT_SCALE_BUTTON);
    const [landoltCOrAlphanumericIIconScale, setLandoltCOrAlphanumericIIconScale] = useState(DEFAULT_FONT_SCALE_BUTTON);
    const [shuffeAlphanumericCharactersIconRotate, setShuffeAlphanumericCharactersIconRotate] =
        useState<string>(DEFAULT_ROTATE_VALUE);

    const shuffeLandoltCIconRotateAndRefreshIcon = useCallback(() => {
        setLandoltRotationDegree(shuffeLandoltCIconRotate());
        setEightRandomAlphanumeric(getRandomAlphanumeric());
        setShuffeAlphanumericCharactersIconRotate(ROTATE_VALUE);
        setTimeout(() => setShuffeAlphanumericCharactersIconRotate(DEFAULT_ROTATE_VALUE), FONT_SCALE_BUTTON_ANIMATION_DURATION_MS);
    }, []);

    const handleDarkModeButton = useCallback(() => {
        setIsDarkMode(!isDarkMode);
    }, [isDarkMode]);

    const toggleLandoltCOrAlphanumericTest = useCallback(() => {
        setIsLandoltCOrAlphanumericActive(!isLandoltCOrAlphanumericActive);
    }, [isLandoltCOrAlphanumericActive]);

    const handleIconScaleDeIncreaser = useCallback((value: string) => {
        const fontSizeStateTruncatedToTwoDecimalPlaces = truncateToTwoDecimalPlaces(fontSizeState);

        if (value === "increase" && fontSizeState < MAXIMUM_FONT_SIZE) {
            fontSizeStateTruncatedToTwoDecimalPlaces >= FONT_SCALE_INCREMENT_THRESHOLD ?
                setFontSizeState(fontSizeState + FONT_SIZE_INCREMENT_VALUE_2) :
                setFontSizeState(fontSizeState + FONT_SIZE_INCREMENT_VALUE);
            setIncreaseScale(INCREASE_FONT_SCALE_BUTTON);
            setTimeout(() => setIncreaseScale(DEFAULT_FONT_SCALE_BUTTON), FONT_SCALE_BUTTON_ANIMATION_DURATION_MS);
        }
        if (value === "decrease" && fontSizeStateTruncatedToTwoDecimalPlaces > MINIMUM_FONT_SIZE_MANUAL_MODE) {
            fontSizeStateTruncatedToTwoDecimalPlaces > FONT_SCALE_DECREMENT_THRESHOLD ?
                setFontSizeState(fontSizeState - FONT_SIZE_DECREMENT_VALUE_2) :
                setFontSizeState(fontSizeState - FONT_SIZE_DECREMENT_VALUE);
            setDecreaseScale(DECREASE_FONT_SCALE_BUTTON);
            setTimeout(() => setDecreaseScale(DEFAULT_FONT_SCALE_BUTTON), FONT_SCALE_BUTTON_ANIMATION_DURATION_MS);
        }
        if (value === "landoltCOrAlphanumeric") {
            setLandoltCOrAlphanumericIIconScale(INCREASE_FONT_SCALE_BUTTON);
            setTimeout(() => setLandoltCOrAlphanumericIIconScale(DEFAULT_FONT_SCALE_BUTTON), FONT_SCALE_BUTTON_ANIMATION_DURATION_MS);
        }
    }, [fontSizeState, fontSizeState]);

    return (
        <>
            <div className="headerElements">
                <div>
                    <img
                        onClick={handleDarkModeButton}
                        data-dark-mode={isDarkMode}
                        className="lightDarkModeToggleButton"
                        src={APPLICATION_ICONS.lightDarkModeToggleIcon}
                        alt="Dark Mode Toggle Icon"
                    />
                </div>
                <div>
                    {FONT_SIZE_ICONS_STATUS.map((fontSizeIcon: string, index: number) => (
                        <img
                            key={index}
                            data-dark-mode={isDarkMode}
                            onClick={() => handleIconScaleDeIncreaser(fontSizeIcon)}
                            className={`${fontSizeIcon === 'increase' ? 'fontSizeincreaseIcon' : 'fontSizedecreaseIcon'}`}
                            style={{
                                transform: `scale(${fontSizeIcon === "increase" ? increaseScale : decreaseScale})`
                            }}
                            src={APPLICATION_ICONS[`fontSize${fontSizeIcon === 'increase' ? 'increase' : 'decrease'}Icon`]}
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
                    src={APPLICATION_ICONS.refreshIcon}
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
                    src={isLandoltCOrAlphanumericActive ? APPLICATION_ICONS.alphanumericIcon : APPLICATION_ICONS.landoltCIcon}
                    alt="Landolt C or Alphanumeric Toggle Icon"
                />
            </div>
        </>
    );
}

export default HeaderComponent;