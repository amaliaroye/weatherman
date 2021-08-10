import React, { useContext } from 'react'

export default function DailyWeather({ weatherData }) {
  const daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const today = new Date(weatherData.current.dt).getUTCDay()

  return (
    <div>
      <ul>
        {weatherData.daily.map((day, index) => {
          const { temp, weather, dt } = day

          const weekday = () => {
            const addedDates = today + index
            if (addedDates >= 7) return daysOfTheWeek[addedDates - 7]
            else return daysOfTheWeek[addedDates]
          }

          return (
            <li key={dt} className='inline-display'>
              <div className='weekday'>{weekday()}</div>
              <div>{weather[0].main}</div>
              <div className='temp-min-max'>
                <span>{Math.round(temp.max)}</span>
                <span>{Math.round(temp.min)}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
