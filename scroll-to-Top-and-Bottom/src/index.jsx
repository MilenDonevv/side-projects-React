import { useRef } from 'react';
import useFetch from '../../use-fetch-custom-hook/src/index.jsx'



export default function ScrollToTopAndBottom() {
    const {error, data, pending} = useFetch('https://dummyjson.com/products?limit=100', {});
    const bottomRef = useRef(null);


    function handleScrollToTop() {
        window.scrollTo({
            top: 0,  // goes to the top
            left: 0, // goes to the most left
            behavior: 'smooth' // does it smoothly.. there's also 'auto' and 'instant'
        })
    }

    function handleScrollToBottom() {
        bottomRef.current.scrollIntoView({behavior: 'smooth'})
    }






    if (error) {
        return <h1>Error occurred! Please try again! </h1>
    }

    if (pending) {
        return <h1>Loading! Please wait!</h1>
    }


    return (
        <div>
            <h1>Scroll to Top and Bottom Feature</h1>
            <h3>This is the top section</h3>
            <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
            <ul style={{listStyle: 'none'}}>
                {
                    data && data.products && data.products.length ?
                    data.products.map(item => <li key={item.id}>{item.title}</li>) :
                    null
                }
            </ul>
            <button onClick={handleScrollToTop}>Scroll to Top</button>
            <div ref={bottomRef}></div>
            <h3>This is the bottom of the page!</h3>
        </div>
    )
}