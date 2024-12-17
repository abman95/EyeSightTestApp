import React, {ChangeEvent, JSX, RefObject, useCallback, useEffect, useMemo, useRef, useState} from "react";


interface InputCharacterPanelProps {
    eightRandomAlphanumeric: string[];
    setRandomAlphanumericInput: (RandomAlphanumericInput: (prevState: string[]) => string[]) => void;
    randomAlphanumericInput: string[];
}

function InputCharacterPanel({
                                       eightRandomAlphanumeric,
                                       setRandomAlphanumericInput,
                                       randomAlphanumericInput
                                   }: InputCharacterPanelProps) {
    const refs: RefObject<HTMLInputElement[]> = useRef<HTMLInputElement[]>([]);
    const [inputMessage, setInputMessage] = useState<JSX.Element>(<p></p>);

    useEffect(() => {
        if (refs.current !== null) {
            for (let i: number = 0; i < refs.current.length; i++) {
                const currentRef: HTMLInputElement = refs.current[i];
                if (currentRef && !currentRef.disabled) {
                    currentRef.focus();
                    break;
                }
            }
        }
    }, [randomAlphanumericInput]);

    const handleInputChange:(e: ChangeEvent<HTMLInputElement>, index: number) => void = useCallback((e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const inputValue: string = e.target.value.toUpperCase();

        if (inputValue.length > 1) return;

        setRandomAlphanumericInput((prevState: string[]) => {
            const newState: string[] = [...prevState];
            newState[index] = inputValue;
            return newState;
        });

        if (inputValue === "") {
            setInputMessage(outputInputMessage.defaultInputMessage);
            return;
        }

        const isCorrect: boolean = eightRandomAlphanumeric[index] === inputValue;
        setInputMessage(isCorrect ? outputInputMessage.correctInputMessage : outputInputMessage.wrongInputMessage);
    }, [eightRandomAlphanumeric, setRandomAlphanumericInput]);



    const outputInputMessage = useMemo(() => {
        const correctInputMessage: JSX.Element = <p style={styles.correctInputMessage}>RICHTIG!</p>;
        const wrongInputMessage: JSX.Element = <p style={styles.wrongInputMessage}>FALSCH!</p>;
        const defaultInputMessage: JSX.Element = <p></p>;

        return {
            correctInputMessage,
            wrongInputMessage,
            defaultInputMessage
        };
    }, []);

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
    }, [inputMessage, randomAlphanumericInput]);

    return (
        <>
        <div style={ styles.inputCharacterPanelContainer}>
            {eightRandomAlphanumeric.map((randomAlphanumericValue: string, index: number) => (
                <input
                    key={index}
                    ref={(el: HTMLInputElement) => {
                        refs.current[index] = el as HTMLInputElement
                    }}
                    style={{
                        ...styles.randomAlphanumericInput,
                        color: randomAlphanumericValue === randomAlphanumericInput[index] ? "green" : "red"
                    }}
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

const styles = {
    inputCharacterPanelContainer: {
        gap: "4vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "20vh"
    },
    randomAlphanumericInput: {
        marginTop: "5vh",
        height: "10vh",
        width: "4vw",
        fontSize: "4vw",
        textAlign: 'center' as 'center'
    },
    correctInputMessage: {
        transition: "all .2s ease",
        margin: 0,
        width: "100%",
        textAlign: "center" as "center",
        color: "green",
        fontSize: "3vw",
    },
    wrongInputMessage: {
        transition: "all .2s ease",
        margin: 0,
        width: "100%",
        textAlign: "center" as "center",
        color: "red",
        fontSize: "3vw",
    },
}

export default InputCharacterPanel;