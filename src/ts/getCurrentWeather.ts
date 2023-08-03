import axios from 'axios';

axios.defaults.baseURL = 'http://api.weatherapi.com/v1/';
const API_KEY = 'e61c823b290b48f284472748230308';
console.log(API_KEY);

async function getCurrentWeatherByLocation(latitude: number, longitude: number) {
  const weather = await axios.get(`current.json?key=${API_KEY}&q=${latitude},${longitude}`);
  return weather;
}

async function getForecastWeatherByLocation(latitude: number, longitude: number) {
  const weather = await axios.get(
    `forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=14&alerts=yes&aqi=yes`
  );
  return weather.data;
}

export { getCurrentWeatherByLocation, getForecastWeatherByLocation };
