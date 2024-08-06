import { useRef, useState } from "react"
import useOutsideClick from "./index.jsx";




export default function UseOnclickOutsideTest() {
    const [showContent, setShowContent] = useState(false);
    const ref = useRef();


    useOutsideClick(ref, () => setShowContent(false))


    return (
        <div>
            {
                showContent 
                ? <div ref={ref}>
                    <h1>This is a random content</h1>
                    <p>Click outside of this to close it. Otherwise it will not close</p>
                </div>
                : <button onClick={() => setShowContent(true)}>Show Content</button> 
            }
        </div>
    )
}