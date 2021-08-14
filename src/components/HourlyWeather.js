import React from 'react'
import WeatherIcon from './../WeatherIcon'

function HourlyWeather({ weatherData }) {
  return (
    <div className='hourly-weather'>
      {weatherData.hourly.map((hour, index) => {
        const { temp, weather, dt, pop } = hour
        let time = new Date(dt * 1000).getHours().toString()

        if (time === 0) {
          time = '12 AM'
        } else if (time === 12) {
          time = '12 PM'
        } else if (time > 12) {
          time = `${time - 12} PM`
        } else if (time < 12 && time !== 0) {
          time = `${time} AM`
        }
        const precipitation = Math.round(pop * 10)
        return (
          <div key={dt} className='hourly-card'>
            <p className='hourly-time'>{index === 0 ? 'Now' : time}</p>
            <p className='hourly-precipitation'>
              {precipitation > 2 ? precipitation * 10 + '%' : '.'}
            </p>
            <WeatherIcon className='weather-icon' condition={weather[0].main} />
            <p className='hourly-temp'>{Math.round(temp)}</p>
          </div>
        )
      })}
    </div>
  )
}

export default HourlyWeather
