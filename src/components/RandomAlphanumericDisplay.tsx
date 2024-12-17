import {useCallback, useState} from "react";
import { getRandomAlphanumeric } from "../App";

const rotateValue: string = "180";
const defaultRotateValue: string = "0";

const applicationIcons = {
    refreshIcon: "./assets/images/refreshIcon.png",
};

interface RandomAlphanumericDisplayProps {
    eightRandomAlphanumeric: string[];
    isDarkMode: boolean;
    setEightRandomAlphanumeric: (randomAlphanumeric: string[]) => void;
    fontSizeState: number;
    setRandomAlphanumericInput: (empyAlphanumeric: []) => void;
}

function RandomAlphanumericDisplay({
                                       eightRandomAlphanumeric,
                                       isDarkMode,
                                       setEightRandomAlphanumeric,
                                       fontSizeState,
                                       setRandomAlphanumericInput,

                         }: RandomAlphanumericDisplayProps) {
    const [shuffeAlphanumericCharactersIconRotate, setShuffeAlphanumericCharactersIconRotate] = useState<string>(defaultRotateValue);


    const shuffeAlphanumericCharacters: () => void = useCallback(() => {
        setEightRandomAlphanumeric(getRandomAlphanumeric());
        setShuffeAlphanumericCharactersIconRotate(rotateValue);
        setTimeout(() => setShuffeAlphanumericCharactersIconRotate(defaultRotateValue), 500);
    }, []);

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
        height: "40vh",
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