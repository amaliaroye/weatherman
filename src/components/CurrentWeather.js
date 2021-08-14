import React from 'react'

const daysOfTheWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
function CurrentWeather({ weatherData, location }) {
  const { temp, weather } = weatherData.daily[0]
  const today = new Date().getDay()
  const weekday = daysOfTheWeek[today]

  return (
    <div className='current-weather'>
      <h2>{location.name}</h2>
      <h3>{weather[0].main}</h3>
      <h1>{Math.round(weatherData.current.temp)}°</h1>
      <div className='inline-display'>
        <span className='weekday'>
          {weekday}
          <span className='weekday-today'>Today</span>
        </span>

        <span className='temp-min-max'>
          <span className='temp-max'>{Math.round(temp.max)}</span>
          <span className='temp-min'>{Math.round(temp.min)}</span>
        </span>
      </div>
    </div>
  )
}

export default CurrentWeather
