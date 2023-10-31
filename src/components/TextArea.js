import {useEffect, useState} from "react";

function TextArea() {
    const [inputText, setInputText] = useState('')
    const [key, setKey] = useState("Pres key")
    const [bgColor, setBgColor] = useState('white')
    const [colorChangingEnabled, setColorChangingEnabled] = useState(false)

    let mainText = "type something"

    const onKey = (event) => {
        setKey(event.key)
    }

    function makeUpper(text) {
        return text.replace(inputText, inputText.toUpperCase())
    }

    useEffect(() => {
        document.addEventListener("keydown", onKey)
        return () => {
            document.removeEventListener("keydown", onKey)
        }
    }, []);

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const handleChange = (e) => {
        setInputText(e.target.value)

        if (colorChangingEnabled && e.target.value.length % 2 === 1) {
            setBgColor(getRandomColor)
        } else if (colorChangingEnabled && e.target.value.length % 2 === 0) {
            setBgColor(getRandomColor)
        } else {
            setBgColor('white')
        }
    }

    const handleCheckboxChange = () => {
        setColorChangingEnabled(!colorChangingEnabled);
    };

    return (
        <>
            <h1>{makeUpper(mainText)}</h1>
            <h2>{key}</h2>
            <textarea value={inputText} onChange={handleChange} style={{backgroundColor: bgColor}}
            rows="10" cols="100"></textarea>
            <label>
                Enable Color Change
                <input
                    type="checkbox"
                    checked={colorChangingEnabled}
                    onChange={handleCheckboxChange}
                />
            </label>
        </>
    )
}

export default TextArea