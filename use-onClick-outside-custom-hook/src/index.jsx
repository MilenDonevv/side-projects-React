import { useState } from "react"




export default function UseOnclickOutsideTest() {

    const [showContent, setShowContent] = useState(false);

    return (
        <div>
            {
                showContent 
                ? <div>
                    <h1>This is a random content</h1>
                    <p>Click outside of this to close it. Otherwise it will not close</p>
                </div>
                : <button onClick={() => setShowContent(true)}>Show Content</button> 
            }
        </div>
    )
}