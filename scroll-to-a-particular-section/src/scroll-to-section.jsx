import { useRef } from "react"




export default function ScrollToSection() {

    const ref = useRef();

    const data = [
        {
            label: 'First Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'red'
            }
        },
        {
            label: 'Second Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'orange'
            }
        },
        {
            label: 'Third Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'green'
            }
        },
        {
            label: 'Forth Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'blue'
            }
        },
        {
            label: 'Fifth Card',
            style: {
                width: '100%',
                height: '600px',
                background: 'yellow'
            }
        },
    ]

    function handleScrollToSection() {
        let position = ref.current.getBoundingClientRect().top;

        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    }

    return (
        <div>
            <h1>Scroll to a particular section</h1>
            <button onClick={handleScrollToSection}>Click to Scroll</button>
            {
                data.map((item, index) => 
                <div key={index} ref={index === 1 ? ref : null} style={item.style}>
                    <h3>{item.label}</h3>
                </div>)
            }
        </div>
    )
}

// index === 1 ?   --- here we set which paragraph we need to go to