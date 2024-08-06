import useWindowResize from "./index.jsx"


export default function UseWindowResizeTest() {

    const windowSize = useWindowResize();
    const {width, height} = windowSize;


    return (
        <div>
            <h1>Use Windows resize hook</h1>
            <p>
                Width is {width} wiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            </p>
            <p>
                Height is {height}
            </p>
        </div>
    )
}