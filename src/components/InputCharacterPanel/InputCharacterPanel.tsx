import React, {
    ChangeEvent,
    JSX,
    RefObject,
    useCallback,
    useEffect, useLayoutEffect,
    useRef,
    useState
} from "react";
import {OUTPUT_INPUT_MESSAGE,
    OUTPUT_INPUT_MESSAGE_DISPLAY_DURATION_MS} from "../../constants/constants";
import './styles/style.css';
import './styles/styleMobile.css';
import './styles/styleTablet.css';


type TInputCharacterPanelProps = {
    eightRandomAlphanumeric: string[];
    setRandomAlphanumericInput: (RandomAlphanumericInput: (prevState: string[]) => string[]) => void;
    randomAlphanumericInput: string[];
}

function InputCharacterPanel({
                                       eightRandomAlphanumeric,
                                       setRandomAlphanumericInput,
                                       randomAlphanumericInput
                                   }: TInputCharacterPanelProps) {
    const refs: RefObject<HTMLInputElement[]> = useRef<HTMLInputElement[]>([]);
    const [inputMessage, setInputMessage] = useState<JSX.Element>(<p></p>);

    useLayoutEffect(() => {
        if (refs.current !== null) {
            for (let i: number = 0; i < refs.current.length; i++) {
                const currentRef: HTMLInputElement = refs.current[i];
                if (currentRef && !currentRef.disabled) {
                    currentRef.focus();
                    break;
                }
            }
        }
    }, [randomAlphanumericInput, eightRandomAlphanumeric]);

    const handleInputChange:(e: ChangeEvent<HTMLInputElement>, index: number) => void = useCallback((e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const inputValue: string = e.target.value.toUpperCase();

        if (inputValue.length > 1) return;

        setRandomAlphanumericInput((prevState: string[]) => {
            const newState: string[] = [...prevState];
            newState[index] = inputValue;
            return newState;
        });

        if (inputValue === "") {
            setInputMessage(OUTPUT_INPUT_MESSAGE.defaultInputMessage);
            return;
        }

        const isCorrect: boolean = eightRandomAlphanumeric[index] === inputValue;
        setInputMessage(isCorrect ? OUTPUT_INPUT_MESSAGE.correctInputMessage : OUTPUT_INPUT_MESSAGE.wrongInputMessage);
    }, [eightRandomAlphanumeric, setRandomAlphanumericInput]);


    useEffect(() => {
        let timeoutId: NodeJS.Timeout | null = null;

        if (inputMessage) {
            timeoutId = setTimeout(() => {
                setInputMessage(<p></p>);
            }, OUTPUT_INPUT_MESSAGE_DISPLAY_DURATION_MS);
        }

        // Cleanup function to clear the timeout if the component unmounts or inputMessage changes
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [inputMessage, randomAlphanumericInput]);

    return (
        <>
        <div className="inputCharacterPanelContainer">
            {eightRandomAlphanumeric.map((randomAlphanumericValue: string, index: number) => (
                <input
                    key={index}
                    ref={(el: HTMLInputElement) => {
                        refs.current[index] = el as HTMLInputElement
                    }}
                    data-input-validation-color={randomAlphanumericValue === randomAlphanumericInput[index] ? "green" : "red"}
                    className="randomAlphanumericInput"
                    disabled={randomAlphanumericValue === randomAlphanumericInput[index]}
                    value={randomAlphanumericInput[index] || ''}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e, index)}
                />
            ))}
        </div>
            {inputMessage}
        </>
        );
}

export default InputCharacterPanel;