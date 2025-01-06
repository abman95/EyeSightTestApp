import React from "react";
import "./styles/style.css"
import "./styles/styleMobile.css"
import "./styles/styleTablet.css"

export const ALPHANUMERIC_CHARACTERS: string[] = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];
export const NUMBER_OF_RANDOM_ALPHANUMERIC_CHARACTERS: number = 8;

export const APPLICATION_ICONS: {
    [key: string]: string;
} = {
    lightDarkModeToggleIcon: "./assets/images/lightDarkModeToggleIcon.png",
    fontSizeincreaseIcon: "./assets/images/fontSizeIncrease.png",
    fontSizedecreaseIcon: "./assets/images/fontSizeDecrease.png",
    landoltCIcon: "./assets/images/landoltCEyeTest.png",
    alphanumericIcon: "./assets/images/alphanumericIcon.png",
    refreshIcon: "./assets/images/refreshIcon.png",
};

export const FONT_SIZE_ICONS_STATUS: string[] = ["decrease", "increase"]

export const INITIAL_FONT_SIZE_SCALE: number = 1.5;
export const DEFAULT_FONT_SIZE_SCALE: number = 1;
export const FONT_SIZE_SCALE_ANIMATION_START_TIME_MS: number = 0;
export const FONT_SIZE_SCALE_ANIMATION_DURATION_MS: number = 1000;

export const DEFAULT_FONT_SIZE: number = 3;
export const MAXIMUM_FONT_SIZE: number = 13;
export const MINIMUM_FONT_SIZE_MANUAL_MODE: number = 0.1;
export const MINIMUM_FONT_SIZE: number = 0.8;
export const FONT_SCALE_INCREMENT_THRESHOLD: number = 2.5;
export const FONT_SCALE_DECREMENT_THRESHOLD: number = 2.5;
export const FONT_SIZE_INCREMENT_VALUE: number = 0.1;
export const FONT_SIZE_INCREMENT_VALUE_2: number = 0.5;
export const FONT_SIZE_DECREMENT_VALUE: number = 0.1;
export const FONT_SIZE_DECREMENT_VALUE_2: number = 0.5;

export const INCREASE_FONT_SCALE_BUTTON: number = 1.15;
export const DECREASE_FONT_SCALE_BUTTON: number = 0.85;
export const DEFAULT_FONT_SCALE_BUTTON: number = 1;
export const FONT_SCALE_BUTTON_ANIMATION_DURATION_MS: number = 500;

export const ROTATE_VALUE: string = "180";
export const DEFAULT_ROTATE_VALUE: string = "0";

export const LANDOLT_ROTATION_VALUES: number[] = [0, 45, 90, 135, 180, 225, 270, 315, 360];

export const LANDOLT_DEGREES: {
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

export const OUTPUT_INPUT_MESSAGE_DISPLAY_DURATION_MS: number = 2000;
export const OUTPUT_INPUT_MESSAGE: {[key: string]: React.JSX.Element} = {
    correctInputMessage: <p className="correctInputMessage">RICHTIG!</p>,
    wrongInputMessage: <p className="wrongInputMessage">FALSCH!</p>,
    defaultInputMessage: <p></p>,
};