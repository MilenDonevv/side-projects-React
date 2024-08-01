// key - the name of the key I want to store
// default value - it will be passed from the main component

import { useEffect } from "react";
import { useState } from "react";


export default function useLocalStorage(key, defaultValue) {

    const [value, setValue] = useState(() => {
        let currentValue;

        try {
            currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue))
        } catch (error) {
            console.log(error);
            currentValue = defaultValue;
        }

        return currentValue;
    })


    useEffect(() => {

        localStorage.setItem(key, JSON.stringify(value))
    },[key, value])

    return [value, setValue]
}