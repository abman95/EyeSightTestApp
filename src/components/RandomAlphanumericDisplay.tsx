import {useCallback, useEffect, useState} from "react";
import {
    applicationIcons,
    defaultRotateValue,
    fontSizeDecrementValue,
    fontSizeDecrementValue2,
    minimumFontSize,
    rotateValue
} from "../constants/constants";
import {getRandomAlphanumeric, truncateToTwoDecimalPlaces} from "../utils/utils";

interface RandomAlphanumericDisplayProps {
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
    const [shuffeAlphanumericCharactersIconRotate, setShuffeAlphanumericCharactersIconRotate] = useState<string>(defaultRotateValue);

    const shuffeAlphanumericCharacters: () => void = useCallback(() => {
        setEightRandomAlphanumeric(getRandomAlphanumeric());
        setShuffeAlphanumericCharactersIconRotate(rotateValue);
        setTimeout(() => setShuffeAlphanumericCharactersIconRotate(defaultRotateValue), 500);
    }, []);

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
        <div style={ styles.randomAlphanumericDisplayContainer}>
            {eightRandomAlphanumeric.map((value: string, index: number) => (
                <p key={index} style={{
                    ...styles.randomAlphanumeric,
                    fontSize: `${fontSizeState}vw`,
                    color: isDarkMode ? "white" : "black"
                }}>
                    {value}</p>
            ))}
            <div style={styles.refreshIconContainer}>
                <img onClick={() => {
                    shuffeAlphanumericCharacters();
                    setRandomAlphanumericInput([]);
                }}
                     style={{
                         ...styles.refreshIcon,
                         filter: isDarkMode ? "invert(1)" : "invert(0)",
                         transform: `rotate(${shuffeAlphanumericCharactersIconRotate}deg)`
                     }}
                     src={applicationIcons.refreshIcon} alt="Dark Mode Toggle Icon"/>
            </div>
        </div>
    );
}

const styles = {
    randomAlphanumericDisplayContainer: {
        gap: "4vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        height: "28vh",
        paddingLeft: "3vw"
    },
    randomAlphanumeric: {
        transition: "all .5s ease",
        height: "5vh"
    },
    refreshIconContainer: {
        height: "15.5vh",
        alignContent: "center",
    },
    refreshIcon: {
        transition: "all .5s ease",
        cursor: "pointer",
        height: "3vw",
        width: "3vw",
        marginLeft: "1.5vw",
    }
}

export default RandomAlphanumericDisplay;
