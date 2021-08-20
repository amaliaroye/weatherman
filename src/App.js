import React, { useState, useContext, useEffect } from 'react'
import UpdateLocation from './components/UpdateLocation'
import { UnitContext, UnitProvider } from './UnitContext'
import CurrentWeather from './components/CurrentWeather'
import HourlyWeather from './components/HourlyWeather'
import DailyWeather from './components/DailyWeather'
import Header from './components/Header'
import Footer from './components/Footer'
import DetailedView from './components/DetailedView'

export default function App() {
  const [location, setLocation] = useState(null)
  const [weatherData, setWeatherData] = useState(null)
  const [showDetails, setShowDetails] = useState(false)

  const { units } = useContext(UnitContext)

  useEffect(() => {
    if (!location) return

    async function fetchWeatherData() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&limit=5&exclude=minutely&units=${units.type}&appid=${process.env.REACT_APP_API_KEY}`
      )
      setWeatherData(await response.json())
    }
    fetchWeatherData()
  }, [location, units.type])

  return (
    <main>
      <Header />
      {location && weatherData ? (
        showDetails ? (
          <DetailedView weatherData={weatherData} location={location} />
        ) : (
          <div>
            <CurrentWeather location={location} weatherData={weatherData} />
            <HourlyWeather weatherData={weatherData} />
            <DailyWeather weatherData={weatherData} />
          </div>
        )
      ) : (
        <UpdateLocation setLocation={setLocation} />
      )}
      <Footer
        setLocation={setLocation}
        setShowDetails={setShowDetails}
        showDetails={showDetails}
      />
    </main>
  )
}
