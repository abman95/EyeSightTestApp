import {alphanumericCharacters, landoltRotationValues} from "../constants/constants";


export function truncateToTwoDecimalPlaces(value: number): number {
    return Math.floor(value * 100) / 100;
}

export const getRandomAlphanumeric: () => string[] = () => {
    let eightRandomAlphanumeric: string[] = [];
    for (let i: number = 0; i < 8; i++) {
        eightRandomAlphanumeric.push(alphanumericCharacters[Math.floor(Math.random() * alphanumericCharacters.length)]);
    }
    return eightRandomAlphanumeric;
};

export const shuffeLandoltCIconRotate: () => number = () => {
    const randomRotationValue  = Math.floor(Math.random() * 360);
    let finalRotationValue  = 0;
    for (let i: number = 0; i < landoltRotationValues.length; i++) {
        if (landoltRotationValues[i] >= randomRotationValue) {
            finalRotationValue = landoltRotationValues[i];
            break;
        }
    }
    return finalRotationValue;
}