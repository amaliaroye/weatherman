# Weatherman

Weatherman is an iOS-inspired web application that allows users to search a location and see the current and forcasted weather for that area using data from [Open Weather API](https://openweathermap.org/).

## Demo
[![Weatherman Screenshot](https://i.imgur.com/QR5WGcO.png)](https://amaliaroye.github.io/weatherman)


## API

- First search by city using the [Geocoding API](https://openweathermap.org/api/geocoding-api) to get the location data.

- Then make a call to the [One Call API](https://openweathermap.org/api/one-call-api#current) using the returned latitude and longitude of the location.
`https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`
