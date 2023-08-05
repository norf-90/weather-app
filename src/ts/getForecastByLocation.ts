import axios from 'axios';

axios.defaults.baseURL = 'https://api.weatherapi.com/v1/';
const API_KEY = 'e61c823b290b48f284472748230308';

async function getForecastByLocation(latitude: number, longitude: number) {
  const weather = await axios.get(
    `forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=14&alerts=yes&aqi=yes`
  );
  return weather.data;
}

export { getForecastByLocation };
