// #456789 - HEX color
// rgb(25,45,65) - rgb color

import { useState } from "react";

// 2 states - 1 for the type and 1 for the color


export default function RandomColorGenerator() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }

    function handleCreateRandomHexColor() {

        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }

        setColor(hexColor);
    }

    function handleCreateRandomRgbColor() {

    }

    

    return (
        <div style={{
            width: "1000vw",
            height: "100vh",
            background: color
        }}>
            <button onClick={() => setTypeOfColor('hex')}>Generate HEX Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Generate RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
        </div>
    );
}