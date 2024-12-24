import {useEffect} from "react";
import {
    fontSizeDecrementValue,
    fontSizeDecrementValue2,
    minimumFontSize,
} from "../../constants/constants";
import {getRandomAlphanumeric, truncateToTwoDecimalPlaces} from "../../utils/utils";
import './styles/style.css';
import './styles/styleMobile.css';
import './styles/styleTablet.css';

type RandomAlphanumericDisplayProps = {
    eightRandomAlphanumeric: string[];
    isDarkMode: boolean;
    setEightRandomAlphanumeric: (randomAlphanumeric: string[]) => void;
    fontSizeState: number;
    randomAlphanumericInput: string[];
    setRandomAlphanumericInput: (empyAlphanumeric: []) => void;
    setFontSizeState: (value: (prevFontSize: number) => any) => void;
}

function RandomAlphanumericDisplay({
                                       eightRandomAlphanumeric,
                                       isDarkMode,
                                       setEightRandomAlphanumeric,
                                       fontSizeState,
                                       randomAlphanumericInput,
                                       setRandomAlphanumericInput,
                                       setFontSizeState

                         }: RandomAlphanumericDisplayProps) {

    useEffect(() => {
        for (let i: number = 0; i < eightRandomAlphanumeric.length; i++) {
            if(eightRandomAlphanumeric[i] !== randomAlphanumericInput[i]) return;
        }
        setEightRandomAlphanumeric(getRandomAlphanumeric());
        setRandomAlphanumericInput([]);

        if (truncateToTwoDecimalPlaces(fontSizeState) > minimumFontSize || truncateToTwoDecimalPlaces(fontSizeState) < fontSizeDecrementValue) {
            setFontSizeState(prevFontSize =>
                truncateToTwoDecimalPlaces(fontSizeState) < fontSizeDecrementValue
                    ? prevFontSize - fontSizeDecrementValue
                    : prevFontSize - fontSizeDecrementValue2
            );
        }
    }, [randomAlphanumericInput]);

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
