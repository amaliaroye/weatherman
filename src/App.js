import React, { useState, useContext, useEffect } from 'react'
import UpdateLocation from './UpdateLocation'
import { UnitContext } from './index.js'
import CurrentWeather from './CurrentWeather'
import HourlyWeather from './HourlyWeather'
import DailyWeather from './DailyWeather'

export default function App() {
  const [location, setLocation] = useState(null)
  const [weatherData, setWeatherData] = useState(null)

  const { type } = useContext(UnitContext)

  useEffect(() => {
    if (!location) return

    async function fetchWeatherData() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&limit=5&exclude=minutely&units=${type}&appid=${process.env.REACT_APP_API_KEY}`
      )
      setWeatherData(await response.json())
    }
    fetchWeatherData()
  }, [location, type])

  return (
    <main>
      {location && weatherData ? (
        <div>
          <CurrentWeather location={location} weatherData={weatherData} />
          <HourlyWeather weatherData={weatherData} />
          <DailyWeather weatherData={weatherData} />
        </div>
      ) : (
        <UpdateLocation setLocation={setLocation} />
      )}
    </main>
  )
}
