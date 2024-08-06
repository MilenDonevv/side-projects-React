/*

useEffect - it will only load when all the DOM elements are rendered in the browser.
useLayoutEffect - it will be called before that


*/


import { useLayoutEffect } from "react";
import { useState } from "react";




export default function useWindowResize() {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    })


    function handleResize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useLayoutEffect(() => {

        handleResize();


        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },[])

    return windowSize;
}