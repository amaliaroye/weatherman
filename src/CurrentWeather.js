import React, { useContext } from 'react'
import { UnitContext } from './index.js'

function CurrentWeather({ weatherData, location }) {
  const unit = useContext(UnitContext)
  const daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const { temp, dt, weather } = weatherData.daily[0]
  const date = new Date(dt)
  const weekday = daysOfTheWeek[date.getUTCDay()]

  return (
    <div>
      <h2>{location.name}</h2>
      <h3>{weather[0].main}</h3>
      <h1>
        {Math.round(weatherData.current.temp)}°{unit.temp}
      </h1>
      {weekday} TODAY
      {Math.round(temp.max)}° {Math.round(temp.min)}°
    </div>
  )
}

export default CurrentWeather
