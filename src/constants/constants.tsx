import React from "react";
import "./styles/style.css"
import "./styles/styleMobile.css"
import "./styles/styleTablet.css"

export const alphanumericCharacters: string[] = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Ä", "Ö", "Ü",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

export const applicationIcons: {
    [key: string]: string;
} = {
    lightDarkModeToggleIcon: "./assets/images/lightDarkModeToggleIcon.png",
    fontSizeincreaseIcon: "./assets/images/fontSizeIncrease.png",
    fontSizedecreaseIcon: "./assets/images/fontSizeDecrease.png",
    landoltCIcon: "./assets/images/landoltCEyeTest.png",
    alphanumericIcon: "./assets/images/alphanumericIcon.png",
    refreshIcon: "./assets/images/refreshIcon.png",
};

export const fontSizeIconsStatus: string[] = ["decrease", "increase"]

export const maximumFontSize: number = 13;
export const minimumFontSize: number = 0.2;
export const fontSizeIncrementValue: number = 0.1;
export const fontSizeDecrementValue: number = 0.1;
export const fontSizeDecrementValue2: number = 0.1;

export const increaseFontScaleButton: number  = 1.15;
export const decreaseFontScaleButton: number  = 0.85;
export const defaultFontScaleButton: number  = 1;

export const rotateValue: string = "180";
export const defaultRotateValue: string = "0";

export const landoltRotationValues: number[] = [0, 45, 90, 135, 180, 225, 270, 315, 360];

export const landoltDegrees: {
    [key: number]: number[];
} = {
    1: [360, 0],
    2: [45],
    3: [90],
    4: [135],
    5: [180],
    6: [225],
    7: [270],
    8: [315]
};

export const outputInputMessage: {[key: string]: React.JSX.Element} = {
    correctInputMessage: <p className="correctInputMessage">RICHTIG!</p>,
    wrongInputMessage: <p className="wrongInputMessage">FALSCH!</p>,
    defaultInputMessage: <p></p>,
};