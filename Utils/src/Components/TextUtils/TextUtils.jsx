import { useState } from "react";
import "./TextUtils.css";

export default function TextUtils() {
    const [text, setText] = useState("");
    const [character, setCharacter] = useState(0);
    const [words, setWords] = useState(0);
    const [upperCase, setUpperCase] = useState("");
    const [lowerCase, setLowerCase] = useState("");

    const handleText = (e) => setText(e.target.value);

    const handleCharacter = () => setCharacter(text.length);

    const handleWords = () => {
        const newWord = text.split(" ");
        setWords(newWord.length);
    };

    const handleUpperCase = () => setUpperCase(text.toUpperCase());

    const handleLowerCase = () => setLowerCase(text.toLowerCase());

    

    return (
        <div className="textutils-container">
            <h2>📝 Text Utility Tool</h2>

            <textarea
                rows="4"
                value={text}
                onChange={handleText}
                placeholder="Type something here..."
            ></textarea>

            <div className="btn-group">
                <button onClick={handleCharacter}>Count Characters</button>
                <button onClick={handleWords}>Count Words</button>
                <button onClick={handleUpperCase}>UPPERCASE</button>
                <button onClick={handleLowerCase}>lowercase</button>
            </div>

            <div className="result-box">
                <h3>Character length: {character}</h3>
                <h3>Word count: {words}</h3>
                <h3>Uppercase: {upperCase}</h3>
                <h3>Lowercase: {lowerCase}</h3>
            </div>
        </div>
    );
}
