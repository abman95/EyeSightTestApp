import {useCallback, useState} from "react";
import {applicationIcons, defaultRotateValue, rotateValue} from "../constants/constants";
import {shuffeLandoltCIconRotate} from "../utils/utils";


interface LandoltCEyeTestDisplayProps {
    isDarkMode: boolean;
    fontSizeState: number;
    landoltRotationDegree: number
    setLandoltRotationDegree: (degree: number) => void;
}

function LandoltCEyeTestDisplay({
                                    isDarkMode,
                                    fontSizeState,
                                    landoltRotationDegree,
                                    setLandoltRotationDegree
                         }: LandoltCEyeTestDisplayProps) {
    const [shuffeAlphanumericCharactersIconRotate, setShuffeAlphanumericCharactersIconRotate] = useState<string>(defaultRotateValue);

    const shuffeLandoltCIconRotateAndRefreshIcon: () => void = useCallback(() => {
        setLandoltRotationDegree(shuffeLandoltCIconRotate());
        setShuffeAlphanumericCharactersIconRotate(rotateValue);
        setTimeout(() => setShuffeAlphanumericCharactersIconRotate(defaultRotateValue), 500);
    }, []);

    return (
        <div style={styles.landoltCEyeTestDisplayContainer}>
            <div style={styles.landoltCEyeTestIcon}>
            <img
                style={{
                    ...styles.landoltCIcon,
                    filter: isDarkMode ? "invert(1)" : "invert(0)",
                    transform: `rotate(${landoltRotationDegree}deg)`,
                    width: `${fontSizeState}vw`,
                    height: `${fontSizeState}vw`,
                }}
                src={applicationIcons.landoltCIcon} alt="Landolt C Icon"/>
        </div>
            <div style={styles.refreshIconContainer}>
                <img onClick={() => {
                    shuffeLandoltCIconRotateAndRefreshIcon();
                }}
                     style={{
                         ...styles.refreshIcon,
                         filter: isDarkMode ? "invert(1)" : "invert(0)",
                         transform: `rotate(${shuffeAlphanumericCharactersIconRotate}deg)`
                     }}
                     src={applicationIcons.refreshIcon} alt="Landolt Degree Shuffle Icon"/>
            </div>
        </div>
    );
}

const styles = {
    landoltCEyeTestDisplayContainer: {
        gap: "4vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        height: "28vh",
        width: "100%",
    },
    landoltCEyeTestIcon: {
        marginLeft: "8.3vw"
    },
    landoltCIcon: {
        transition: "all .5s ease",
        cursor: "pointer",
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

export default LandoltCEyeTestDisplay;
