import React from 'react'

function DetailedView({ weatherData, location }) {
  const { temp, weather } = weatherData.daily[0]
  const today = new Date().getDay()
  return (
    <div className='current-weather'>
      <h2>{location.name}</h2>
      <h3>{weather[0].main}</h3>
      <h1>{Math.round(weatherData.current.temp)}°</h1>
      <div className='inline-display'></div>
    </div>
  )
}

export default DetailedView
