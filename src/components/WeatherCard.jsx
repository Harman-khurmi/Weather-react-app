import React from 'react'
import { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import humidity from '../assets/humidity.png'
import wind from '../assets/wind.png'

const WeatherCard = () => {

    const [weatherData, setWeatherData] = useState(null);
    const [searchCity, setSearchCity] = useState("");
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    const search = async (city) => {
        if (!city.trim()) alert("Please enter a city name");
        setLoading(true);
        try {

            const apiKey = import.meta.env.VITE_API_KEY;
            if (!apiKey) throw new Error("API key is missing. Please set it in the .env file.");
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Failed to fetch weather data');
            }
            const iconImage = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            setWeatherData({
                temperature: Math.round(data.main.temp),
                city: data.name,
                icon: iconImage,
                status: data.weather[0].main,
                windspeed: data.wind.speed,
                humidity: data.main.humidity,
            });
            setErrorMsg(null);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching weather data:", error.message || error);
            setErrorMsg(error.message || 'An error occurred while fetching weather data.');
            setWeatherData(null);
            setLoading(false);
        }
    }

    const handleSearch = () => {
        search(searchCity);
        setSearchCity("");
    };

    const handleEnterKey = (e) => {
        if (e.key === 'Enter') {
            search(searchCity);
            setSearchCity("");
        }
    };

    return (
        <div className='flex flex-col gap-6 bg-white/60 backdrop-blur-md rounded-xl p-8 min-w-sm w-fit mx-4 min-h-fit py-10  text-center text-gray-900'>
            <div className='flex items-center justify-center gap-4 w-full'>
                <input type='text' value={searchCity} onChange={(e) => { setSearchCity(e.target.value) }} placeholder="Search city" className='flex-1 rounded-full p-1 pl-4 bg-white py-2 md:text-xl text-orange-800' onKeyDown={handleEnterKey} />
                <button type="button" className='bg-white text-orange-800 p-[0.6rem] rounded-full cursor-pointer hover:bg-orange-800 hover:text-white' onClick={handleSearch}><IoIosSearch size={20} /></button>
            </div>

            {loading && !weatherData ? (
                <div className='text-orange-900 text-xl font-semibold'>Loading...</div>
            ) : weatherData ?
                (<>
                    <div className='flex flex-col gap-2 items-center justify-center'>
                        <img src={weatherData?.icon} alt="weather image" className='h-24' />
                        <h1 className='text-6xl font-bold text-orange-900'>{weatherData?.temperature}°C</h1>
                        {/* <h2 className='text-xl font-semibold'>{weatherData?.status}</h2> */}
                        <h2 className='text-xl font-semibold text-orange-800'>{weatherData?.city}</h2>
                    </div>
                    <div className='flex items-center justify-around gap-2'>
                        <div className='flex gap-2'><img src={humidity} alt="humidity" className='h-12' />
                            <div className='flex flex-col items-start justify-center'>
                                <p className='font-semibold text-orange-800'>{weatherData?.humidity}%</p>
                                <p className='text-sm'>Humidity</p>
                            </div>
                        </div>
                        <div className='flex gap-2'><img src={wind} alt="wind" className='h-12' />
                            <div className='flex flex-col items-start justify-center'>
                                <p className='font-semibold text-orange-800'>{weatherData?.windspeed} km/h</p>
                                <p className='text-sm'>Wind speed</p>
                            </div>
                        </div>
                    </div>
                </>
                ) : errorMsg ? (
                    <div className='text-orange-900 text-xl font-semibold'>{errorMsg}</div>
                ) : !searchCity.trim() ? (
                    <h2 className='text-lg font-semibold'>Search for a city to get weather information</h2>
                ) : null}
        </div>
    )
}

export default WeatherCard
