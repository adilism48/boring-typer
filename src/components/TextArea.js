import {useEffect, useState} from "react";

function TextArea() {
    const [inputText, setInputText] = useState('')
    const [key, setKey] = useState("Pres key")
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

    return (
        <>
            <h1>{makeUpper(mainText)}</h1>
            <h2>{key}</h2>
            <textarea id="1" cols="30" rows="10" value={inputText} onChange={(e) => setInputText(e.target.value)}></textarea>
        </>
    )
}

export default TextArea