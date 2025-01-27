import React, { useState } from 'react';
import './WeatherWidget.css'; // Import the styles from the original CSS file

const WeatherWidget = () => {
  const [unit, setUnit] = useState('°C'); // Default unit is °C

  // Weather data with both Celsius and Fahrenheit values
  const weatherData = [
    { condition: 'Cloudy', icon: '☁️', tempC: 20, tempF: 68, date: 'August 16', day: 'Monday' },
    { condition: 'Sunny', icon: '☀️', tempC: 37, tempF: 98.6, date: 'August 17', day: 'Tuesday' },
    { condition: 'Rainy', icon: '🌧️', tempC: 7, tempF: 44.6, date: 'August 18', day: 'Wednesday' },
    { condition: 'Snowy', icon: '❄️', tempC: -10, tempF: 14, date: 'August 19', day: 'Thursday' }
  ];

  // Function to toggle between °C and °F
  const toggleUnit = (newUnit) => {
    setUnit(newUnit);
  };

  return (
    <div className="weather-widget">
      <h1>Simple Weather Widget</h1>
      <div className="weather-container">
        <div className="weather-header">
          <span>☀ Weather</span>
          <div className="unit-toggle">
            <button onClick={() => toggleUnit('°F')}>°F</button>
            <button onClick={() => toggleUnit('°C')}>°C</button>
          </div>
        </div>
        <div className="weather-days">
          {weatherData.map((day, index) => (
            <div className="weather-day" key={index}>
              <p className="condition">{day.condition}</p>
              <div className="icon">{day.icon}</div>
              <p className="temp">{unit === '°C' ? day.tempC : day.tempF}°</p>
              <p className="date">{day.date}<br />{day.day}</p>
            </div>
          ))}
        </div>
      </div>
      <footer>
        <p>© Simple Weather Widget</p>
      </footer>
    </div>
  );
};

export default WeatherWidget;
