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
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=d30104027345aff21a359fe29e432ebd`);

            const data = await response.json();

            if (data) {
                setWeatherData(data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    function getCurrentData() {
        return new Date().toLocaleDateString('en-us', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
    }

    async function handleSearch() {
        fetchWeatherData(search);
    }

    useEffect(() => {
        fetchWeatherData('Chirpan');
    }, []);

    console.log(weatherData);

    return (
        <div>
            <Search
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />
            {
                loading ?
                    <div>Loading...</div> : (
                    <div>
                        <div className="city-name">
                            <h2>{weatherData?.name}, <span>{weatherData?.sys?.country}</span></h2>
                        </div>
                        <div className="date">
                            <span>{getCurrentData()}</span>
                        </div>
                        <div>
                            {weatherData?.main?.temp}
                            <p>description</p>
                            {weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description : ''}
                        </div>
                        <div className="weather-info">
                            <div>
                                <div>
                                    <p>Wind Speed</p>
                                    <p className="wind">{weatherData?.wind?.speed}</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>Humidity</p>
                                    <p className="humidity">{weatherData?.main?.humidity}%</p>
                                </div>
                            </div>

                        </div>
                    </div>
                )
            }
        </div>
    );
}



// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//  API key - d30104027345aff21a359fe29e432ebd