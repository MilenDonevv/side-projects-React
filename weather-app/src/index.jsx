import { useState } from "react";
import Search from "./search.jsx";





export default function Weather() {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);



    async function handleSearch() {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d30104027345aff21a359fe29e432ebd`)

            const data = await response.json();
            console.log(data);


            
        } catch (error) {
            console.log(error);
            
        }
    }


    return (
        <div>
            <Search 
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
            />
            Weather
        </div>
    )
}


// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//  API key - d30104027345aff21a359fe29e432ebd