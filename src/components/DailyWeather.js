import React, { useContext } from 'react'
import WeatherIcon from '../WeatherIcon'

const daysOfTheWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
export default function DailyWeather({ weatherData }) {
  const today = new Date().getDay()

  return (
    <ul>
      {weatherData.daily.slice(1).map((day, index) => {
        const { temp, weather, dt } = day

        const weekday = () => {
          const addedDates = today + index + 1
          if (addedDates >= 7) return daysOfTheWeek[addedDates - 7]
          else return daysOfTheWeek[addedDates]
        }

        return (
          <li key={dt} className='inline-display'>
            <span className='weekday'>{weekday()}</span>

            <WeatherIcon className='weather-icon' condition={weather[0].main} />

            <span className='temp-min-max'>
              <span className='temp-max'>{Math.round(temp.max)}</span>
              <span className='temp-min'>{Math.round(temp.min)}</span>
            </span>
          </li>
        )
      })}
    </ul>
  )
}
