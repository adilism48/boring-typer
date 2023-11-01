import {useState} from "react";

function TextArea() {
    const [inputText, setInputText] = useState('')
    const [bgColor, setBgColor] = useState('white')
    const [colorChangingEnabled, setColorChangingEnabled] = useState(false)

    const [titleText, setTitleText] = useState('type something');
    const [textAreaVisible, setTextAreaVisible] = useState(false);


    function makeUpper(text) {
        return text.replace(inputText, inputText.toUpperCase())
    }

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

    const handleTitleChange = (event) => {
        const newTitleText = event.target.value;
        setTitleText(newTitleText);
    }

    const handleCheckboxChange = () => {
        setColorChangingEnabled(!colorChangingEnabled);
    }

    const toggleTextAreas = () => {
        setTextAreaVisible(!textAreaVisible);
    }

    return (
        <>
            <h1>{makeUpper(titleText)}</h1>
            <textarea value={inputText} onChange={handleChange} style={{backgroundColor: bgColor}}
                      rows="10" cols="100"></textarea>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={colorChangingEnabled}
                        onChange={handleCheckboxChange}
                    />
                    Make not boring
                </label>
            </div>

            <button className="buttonColorful" onClick={toggleTextAreas}>
                {textAreaVisible ? 'Hide' : 'Change text'}
            </button>
            <div>
                {textAreaVisible && (<>
                    <p>You can copy text from somewhere and paste it here:</p>
                    <textarea rows="10" cols="100" value={titleText} onChange={handleTitleChange}/>
                </>)}
            </div>
        </>
    )
}

export default TextArea