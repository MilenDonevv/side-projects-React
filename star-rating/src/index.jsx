
import { useState } from 'react'
import {FaStar} from 'react-icons/fa'


export default function StarRating({noOfStars = 5}) {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {

    }

    function handleMouseEnter(getCurrentIndex) {

    }

    function handleMouseLeave(getCurrentIndex) {

    }


    return (
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_, index) => {
                    index += 1

                    return 
                    <FaStar
                    key={index}
                    onClick={() => handleClick(index)}
                    onMouseMove={() => FaStar(props: IconBaseProps): JSX.Element }
                    onMouseLeave={() => handleMouseLeave}
                    />
                })
            }
        </div>
    )
}