// import './style.css';

// import { getForecastWeatherByLocation } from './ts/getCurrentWeather';
// import { renderWeatherPreview } from './ts/renderWeatherPreview';
// import getUserLocation from './ts/getCurrentLocation';

// let locationData: { accuracy: number; latitude: number; longitude: number } | null = null;
// getUserLocation().then(resp => (locationData = resp));

// let forecast: {} | null = null;
// if (locationData) {
//   // forecast = await
//   getForecastWeatherByLocation(locationData.latitude, locationData.longitude).then(resp => {
//     forecast = resp;
//   });

//   if (forecast) {
//     renderWeatherPreview(forecast.forecast.forecastday);
//     console.log('Forecaset weather: ', forecast.forecast.forecastday);

//     const location = document.querySelector('.location-text')! as HTMLParagraphElement;
//     const { name, region, country } = forecast.location;
//     location.textContent = `${name}, ${region}, ${country}`;
//   }
// }

import './style.css';
import { getForecastWeatherByLocation } from './ts/getCurrentWeather';
import { renderWeatherPreview } from './ts/renderWeatherPreview';
import getUserLocation from './ts/getCurrentLocation';

(async () => {
  let locationData: { accuracy: number; latitude: number; longitude: number } | null = null;

  try {
    locationData = await getUserLocation();
  } catch (error) {
    console.error('Error getting user location:', error);
    return;
  }

  if (locationData) {
    let forecast: any = null; // Replace 'any' with the actual type of your forecast data

    try {
      forecast = await getForecastWeatherByLocation(locationData.latitude, locationData.longitude);
    } catch (error) {
      console.error('Error getting forecast:', error);
      return;
    }

    if (forecast) {
      renderWeatherPreview(forecast.forecast.forecastday);
      console.log('Forecast weather:', forecast.forecast.forecastday);

      const location = document.querySelector('.location-text')! as HTMLParagraphElement;
      const { name, region, country } = forecast.location;
      location.textContent = `${name}, ${region}, ${country}`;
    }
  }
})();
