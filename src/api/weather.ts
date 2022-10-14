interface Coordinates {
  latitude: number
  longitude: number
}

const getWeatherURL = ({ latitude, longitude }: Coordinates) => {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=51f808ad6044666815ba2f99bc610f0b&units=imperial`
}

export { getWeatherURL }
