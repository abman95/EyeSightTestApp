import {useEffect} from "react";
import {
    FONT_SCALE_DECREMENT_THRESHOLD,
    FONT_SIZE_DECREMENT_VALUE, FONT_SIZE_DECREMENT_VALUE_2,
    MINIMUM_FONT_SIZE

} from "../../constants/constants";
import {getRandomAlphanumeric, truncateToTwoDecimalPlaces} from "../../utils/utils";
import './styles/style.css';
import './styles/styleMobile.css';
import './styles/styleTablet.css';

type TRandomAlphanumericDisplayProps = {
    eightRandomAlphanumeric: string[];
    isDarkMode: boolean;
    setEightRandomAlphanumeric: (randomAlphanumeric: string[]) => void;
    fontSizeState: number;
    randomAlphanumericInput: string[];
    setRandomAlphanumericInput: (empyAlphanumeric: []) => void;
    setFontSizeState: (newFontSize: number) => void;
}

function RandomAlphanumericDisplay({
                                       eightRandomAlphanumeric,
                                       isDarkMode,
                                       setEightRandomAlphanumeric,
                                       fontSizeState,
                                       randomAlphanumericInput,
                                       setRandomAlphanumericInput,
                                       setFontSizeState

                         }: TRandomAlphanumericDisplayProps) {

    useEffect(() => {
        const fontSizeStateTruncatedToTwoDecimalPlaces = truncateToTwoDecimalPlaces(fontSizeState);
        for (let i: number = 0; i < eightRandomAlphanumeric.length; i++) {
            if(eightRandomAlphanumeric[i] !== randomAlphanumericInput[i]) return;
        }
        setEightRandomAlphanumeric(getRandomAlphanumeric());
        setRandomAlphanumericInput([]);

        if (fontSizeStateTruncatedToTwoDecimalPlaces > MINIMUM_FONT_SIZE) {
            fontSizeStateTruncatedToTwoDecimalPlaces > FONT_SCALE_DECREMENT_THRESHOLD ?
                setFontSizeState(fontSizeState - FONT_SIZE_DECREMENT_VALUE_2) :
                setFontSizeState(fontSizeState - FONT_SIZE_DECREMENT_VALUE);
        }
    }, [randomAlphanumericInput, fontSizeState]);

    return (
        <div className="randomAlphanumericDisplayContainer">
            {eightRandomAlphanumeric.map((value: string, index: number) => (
                <p key={index} style={{
                    ...styles.randomAlphanumeric,
                    fontSize: `${fontSizeState}vw`,
                    color: isDarkMode ? "white" : "black"
                }}>
                    {value}</p>
            ))}
        </div>
    );
}

const styles = {
    randomAlphanumeric: {
        transition: "all .5s ease",
        height: "1vh"
    },
}

export default RandomAlphanumericDisplay;
