import {
    ALPHANUMERIC_CHARACTERS,
    LANDOLT_ROTATION_VALUES,
    NUMBER_OF_RANDOM_ALPHANUMERIC_CHARACTERS
} from "../constants/constants";


export function truncateToTwoDecimalPlaces(value: number): number {
    return Math.floor(value * 100) / 100;
}

export const getRandomAlphanumeric: () => string[] = () => {
    let eightRandomAlphanumeric: string[] = [];
    for (let i: number = 0; i < NUMBER_OF_RANDOM_ALPHANUMERIC_CHARACTERS; i++) {
        eightRandomAlphanumeric.push(ALPHANUMERIC_CHARACTERS[Math.floor(Math.random() * ALPHANUMERIC_CHARACTERS.length)]);
    }
    return eightRandomAlphanumeric;
};

export const shuffeLandoltCIconRotate: () => number = () => {
    const randomRotationValue  = Math.floor(Math.random() * 360);
    let finalRotationValue  = 0;
    for (let i: number = 0; i < LANDOLT_ROTATION_VALUES.length; i++) {
        if (LANDOLT_ROTATION_VALUES[i] >= randomRotationValue) {
            finalRotationValue = LANDOLT_ROTATION_VALUES[i];
            break;
        }
    }
    return finalRotationValue;
}