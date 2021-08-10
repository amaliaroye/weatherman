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
    <div className='current-weather'>
      <h2>{location.name}</h2>
      <h3>{weather[0].main}</h3>
      <h1>
        {Math.round(weatherData.current.temp)}
        {unit.temp}
      </h1>
      {/* <div className='inline-display'>
        <div className='weekday'>{weekday}</div>
        <div className='temp-min-max'>
          <span>{Math.round(temp.max)}</span>
          <span>{Math.round(temp.min)}</span>
        </div>
      </div> */}
    </div>
  )
}

export default CurrentWeather
