import { useEffect, useState } from "react";
import Search from "./search.jsx";





export default function Weather() {
    const [search, setSearch] = useState('Chirpan');
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);


    async function fetchWeatherData(param) {

        if (!param) {
            console.log('Search term is empty!')
            return;  // Prevent fetching if search term is empty
        }

        setLoading(true);

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d30104027345aff21a359fe29e432ebd`)
    
            const data = await response.json();
            
            if(data) {
                setWeatherData(data);
                setLoading(false);
            }
    
            
        } catch (error) {
            setLoading(false);
            console.log(error);
            
        }
    }
    
    
    async function handleSearch() {
        fetchWeatherData(search);
    }
    
    useEffect(() => {
        fetchWeatherData('Chirpan');
    }, [])

    console.log(weatherData)
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