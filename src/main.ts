import './style.css';

import { getForecastWeatherByLocation } from './ts/getCurrentWeather';
import { renderWeatherPreview } from './ts/renderWeatherPreview';
import getUserLocation from './ts/getCurrentLocation';

const locationData = await getUserLocation();

let forecast;
if (locationData) {
  forecast = await getForecastWeatherByLocation(locationData.latitude, locationData.longitude);
  renderWeatherPreview(forecast.forecast.forecastday);
  console.log('Forecaset weather: ', forecast.forecast.forecastday);
}

const location = document.querySelector('.location-text')! as HTMLParagraphElement;
const { name, region, country } = forecast.location;
location.textContent = `${name}, ${region}, ${country}`;
