import React, {JSX, useCallback, useEffect, useMemo, useState} from "react";
import {
    fontSizeDecrementValue,
    fontSizeDecrementValue2,
    landoltDegrees,
    minimumFontSize,
    outputInputMessage
} from "../../constants/constants";
import {shuffeLandoltCIconRotate, truncateToTwoDecimalPlaces} from "../../utils/utils";
import './styles/style.css';
import './styles/styleMobile.css';
import './styles/styleTablet.css';

interface InputCharacterPanelProps {
    isDarkMode: boolean;
    landoltRotationDegree: number
    setLandoltRotationDegree: (degree: number) => void;
    fontSizeState: number;
    setFontSizeState: (value: (prevFontSize: number) => any) => void;
}

function LandoltGapSelector({
                                       isDarkMode,
                                       landoltRotationDegree,
                                       setLandoltRotationDegree,
                                       fontSizeState,
                                       setFontSizeState
                                   }: InputCharacterPanelProps) {
    const [inputMessage, setInputMessage] = useState<JSX.Element>(<p></p>);
    const isDarkModeColor: string = useMemo(() => (isDarkMode ? "white" : "black"), [isDarkMode]);
    const gapPickerColor: string = useMemo(() => (isDarkModeColor === "white" ? "black" : "white"), [isDarkModeColor]);


    useEffect(() => {
        let timeoutId: NodeJS.Timeout | null = null;

        if (inputMessage) {
            timeoutId = setTimeout(() => {
                setInputMessage(<p></p>);
            }, 2000);
        }

        // Cleanup function to clear the timeout if the component unmounts or inputMessage changes
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [inputMessage]);

    const handleSegmentClick = useCallback((e: React.MouseEvent<SVGPathElement>) => {
            const target = e.target as SVGPathElement;
            const dataIndex: number = Number(target.getAttribute("data-index")) ?? 0;
            if(landoltDegrees[dataIndex] === landoltRotationDegree) {
                setInputMessage(outputInputMessage.correctInputMessage);
                setLandoltRotationDegree(shuffeLandoltCIconRotate())
                if (truncateToTwoDecimalPlaces(fontSizeState) > minimumFontSize || truncateToTwoDecimalPlaces(fontSizeState) < fontSizeDecrementValue) {
                    setFontSizeState(prevFontSize =>
                        truncateToTwoDecimalPlaces(fontSizeState) < fontSizeDecrementValue
                            ? prevFontSize - fontSizeDecrementValue
                            : prevFontSize - fontSizeDecrementValue2
                    );
                }
            } else {
                setInputMessage(outputInputMessage.wrongInputMessage);
            }
    }, [landoltRotationDegree]);

    const handleMouseEnter = useCallback(
        (e: React.MouseEvent<SVGPathElement>) => {
            const target = e.target as SVGPathElement;

            target.setAttribute("fill", gapPickerColor);
            target.setAttribute("stroke", "grey");
            target.setAttribute("stroke-width", "1");
        },
        [gapPickerColor]
    );

    const handleMouseLeave = useCallback(
        (e: React.MouseEvent<SVGPathElement>) => {
            const target = e.target as SVGPathElement;

            target.setAttribute("fill", isDarkModeColor);
            target.removeAttribute("stroke");
            target.removeAttribute("stroke-width");
        },
        [isDarkModeColor]
    );

    return (
        <>
            <div className="landoltGapSelectorContainer">
                <svg width="250" height="250" viewBox="-21 -21 300 300">
                    <g>
                        <path
                            d="M158.934 57.545a77.47 77.47 0 00-13.211-3.957 78.642 78.642 0 00-31.437 0 77.47 77.47 0 00-13.211 3.957l-19.9-48.059a130.162 130.162 0 0197.674 0z"
                            fill={isDarkModeColor}
                            onClick={(e: React.MouseEvent<SVGPathElement>) => handleSegmentClick(e)}
                            data-index={1}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className="gapSelector"
                        />
                        <path
                            d="M201.693 99.226a78.216 78.216 0 00-40.914-40.914l19.906-48.059a130.414 130.414 0 0169.066 69.066l-48.059 19.907z"
                            fill={isDarkModeColor}
                            onClick={(e: React.MouseEvent<SVGPathElement>) => handleSegmentClick(e)}
                            data-index={2}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className="gapSelector"
                        />
                        <path
                            d="M202.459 158.933a77.41 77.41 0 003.959-13.213 78.785 78.785 0 000-31.437 77.477 77.477 0 00-3.957-13.209l48.057-19.9a129.319 129.319 0 016.844 22.635 130.2 130.2 0 01-6.844 75.036z"
                            fill={isDarkModeColor}
                            onClick={(e: React.MouseEvent<SVGPathElement>) => handleSegmentClick(e)}
                            data-index={3}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className="gapSelector"
                        />
                        <path
                            d="M160.779 201.692a78.193 78.193 0 0024.379-16.535 78.8 78.8 0 009.525-11.545 77.993 77.993 0 007.008-12.833l48.061 19.907a130.393 130.393 0 01-69.068 69.064z"
                            fill={isDarkModeColor}
                            onClick={(e: React.MouseEvent<SVGPathElement>) => handleSegmentClick(e)}
                            data-index={4}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className="gapSelector"
                        />
                        <path
                            d="M130 260.001a130.826 130.826 0 01-26.2-2.641 129.332 129.332 0 01-22.639-6.846l19.906-48.058a77.615 77.615 0 0013.213 3.957 78.642 78.642 0 0031.438 0 77.47 77.47 0 0013.211-3.957l19.906 48.058a129.181 129.181 0 01-22.639 6.846A130.778 130.778 0 01130 260.001z"
                            fill={isDarkModeColor}
                            onClick={(e: React.MouseEvent<SVGPathElement>) => handleSegmentClick(e)}
                            data-index={5}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className="gapSelector"
                        />
                        <path
                            d="M79.316 249.75a130.42 130.42 0 01-69.066-69.063l48.057-19.9a78.285 78.285 0 0028.084 33.9 77.645 77.645 0 0012.836 7.015z"
                            fill={isDarkModeColor}
                            onClick={(e: React.MouseEvent<SVGPathElement>) => handleSegmentClick(e)}
                            data-index={6}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className="gapSelector"
                        />
                        <path
                            d="M9.486 178.84a130.148 130.148 0 010-97.673l48.055 19.9a78.1 78.1 0 000 57.865z"
                            fill={isDarkModeColor}
                            onClick={(e: React.MouseEvent<SVGPathElement>) => handleSegmentClick(e)}
                            data-index={7}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className="gapSelector"
                        />
                        <path
                            d="M10.252 79.316a130.414 130.414 0 0169.064-69.064l19.908 48.059a77.664 77.664 0 00-12.834 7.014 78.166 78.166 0 00-28.084 33.9z"
                            fill={isDarkModeColor}
                            onClick={(e: React.MouseEvent<SVGPathElement>) => handleSegmentClick(e)}
                            data-index={8}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className="gapSelector"
                        />
                    </g>
                </svg>
            </div>
            {inputMessage}
        </>
    );
}

export default LandoltGapSelector;