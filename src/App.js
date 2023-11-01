import './App.css';
import TextArea from "./components/TextArea";
import {useEffect, useState} from "react";

function App() {
    const [key, setKey] = useState("Pres key")

    const onKey = (event) => {
        setKey(event.key)
    }

    useEffect(() => {
        document.addEventListener("keydown", onKey)
        return () => {
            document.removeEventListener("keydown", onKey)
        }
    }, [])

    return (
        <div className="App">
            <TextArea/>
            <h2>{key}</h2>
        </div>
    )
}

export default App