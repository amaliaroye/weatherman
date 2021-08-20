import React, { useContext } from 'react'
import { UnitContext } from '../UnitContext'

function DetailedView({ weatherData, location }) {
  const { units } = useContext(UnitContext)
  const { weather, sunrise, sunset, pop, humidity, uvi, rain, wind_speed } =
    weatherData.daily[0]
  const { temp, feels_like, visibility } = weatherData.current
  const today = new Date().getDay()
  function convertTime(dt) {
    return new Date(dt * 1000).toLocaleTimeString([], {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className='current-weather'>
      <h2>{location.name}</h2>
      <h3>{weather[0].main}</h3>
      <h1>{Math.round(temp)}°</h1>
      <p>Today: </p>
      <div className='column-container'>
        <div className='column'>
          <p>Sunrise: {convertTime(sunrise)}</p>
          <p>Chance of rain: {pop * 100}%</p>
          <p>
            Wind Speed: {Math.round(wind_speed)}
            {units.speed}
          </p>
          <p>Precipitation: {rain} mm</p>
        </div>
        <div className='column'>
          <p>Sunset: {convertTime(sunset)}</p>
          <p>Humidity: {humidity}%</p>
          <p>Feels Like: {Math.round(feels_like)}°</p>
          <p>UV Index: {Math.round(uvi)}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailedView
