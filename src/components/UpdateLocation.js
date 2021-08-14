import React, { useState } from 'react'

export default function UpdateLocation({ setLocation }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  async function searchLocation(event) {
    event.preventDefault()
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
      )
      await setResults(await response.json())
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <form onSubmit={searchLocation}>
        <h2>Search your location to get weather data!</h2>
        <input
          value={query}
          type='text'
          placeholder='Search City'
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>

      <ul>
        {results &&
          results.map((location, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setLocation(location)
                  setResults([])
                }}
              >
                {location.name} {location?.state} {location.country}
              </li>
            )
          })}
      </ul>
    </div>
  )
}
