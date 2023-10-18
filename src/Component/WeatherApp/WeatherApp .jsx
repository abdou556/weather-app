// src/WeatherApp.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherApp.css'
import Weather from './../../Weather';

const WEATHER_API_KEY  = "32539abb9b9e86aa17c0b0661993a3fb";
const UNSPLASH_API_KEY = 'zXBCIERIuzPZKKkVn1meyhQ6vAryfOr5TL5qvlKKJTc';
const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');
  
    const fetchWeatherData = async () => {
      try {
        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`);
        const backgroundResponse = await axios.get(`https://api.unsplash.com/photos/random?query=${city}&orientation=landscape&client_id=${UNSPLASH_API_KEY}`);
        
        setWeatherData(weatherResponse.data);
        document.body.style.backgroundImage = `url(${backgroundResponse.data.urls.regular})`;
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      if (city) {
        fetchWeatherData();
      }
    }, [city]);
  
    return (
      <div className="weather-app">
        <h1>Weather App</h1>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {weatherData && <Weather data={weatherData} />}
      </div>
    );
  };
  
  export default WeatherApp;
  
