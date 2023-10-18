// src/Weather.js
import React from 'react';

const Weather = ({ data }) => {
  return (
    <div className="weather">
      <h1>{data.name}, {data.sys.country}</h1>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Weather: {data.weather[0].description}</p>
    </div>
  );
};

export default Weather;
