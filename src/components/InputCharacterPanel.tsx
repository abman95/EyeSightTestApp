import React, {RefObject, useCallback, useEffect, useRef} from "react";


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


    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        setRandomAlphanumericInput((prevState: string[]) => {
            const newState: string[] = [...prevState];
            console.log(e.target.value)
            newState[index] = e.target.value.toUpperCase();
            return newState;
        });
    }, []);
    
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

    
    return (
        <div style={ styles.inputCharacterPanelContainer}>
            {eightRandomAlphanumeric.map((randomAlphanumericValue: string, index: number) => (
                <input
                    key={index}
                    ref={(el: HTMLInputElement) => {
                        refs.current[index] = el as HTMLInputElement
                    }} // Refs dynamisch speichern
                    style={{
                        ...styles.randomAlphanumericInput,
                        color: randomAlphanumericValue === randomAlphanumericInput[index] ? "green" : "red" // Dynamische Farbänderung basierend auf dem Vergleich
                    }}
                    disabled={randomAlphanumericValue === randomAlphanumericInput[index]}
                    value={randomAlphanumericInput[index] || ''} // Use empty string if undefined
                    onChange={(e) => handleInputChange(e, index)}
                />
            ))}
        </div>
    );
}

const styles = {
    inputCharacterPanelContainer: {
        gap: "4vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "50vh"
    },
    randomAlphanumericInput: {
        marginTop: "5vh",
        height: "10vh",
        width: "4vw",
        fontSize: "4vw",
    },
}

export default InputCharacterPanel;