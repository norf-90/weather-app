import './style.css';
import { getForecastByLocation } from './ts/getForecastByLocation';
import { renderWeatherPreview } from './ts/renderWeatherPreview';
import getUserLocation from './ts/getCurrentLocation';
import debounce from 'lodash.debounce';
import { onInputChange } from './ts/onInputChange';

(async () => {
  const refs = {
    locationOuput: document.querySelector('.location-text')! as HTMLParagraphElement,
    cityInput: document.querySelector('input')! as HTMLInputElement,
  };

  let locationData: { accuracy: number; latitude: number; longitude: number } | null = null;

  locationData = await getUserLocation();

  if (locationData) {
    let forecast: any = null;
    forecast = await getForecastByLocation(locationData.latitude, locationData.longitude);

    if (forecast) {
      renderWeatherPreview(forecast.forecast.forecastday);
      const { name, region, country } = forecast.location;
      refs.locationOuput.textContent = `${name}, ${region}, ${country}`;
    }
  }

  // ========== ADD INPUT AUTOCOMPLITE ===================
  refs.cityInput.addEventListener('input', debounce(onInputChange, 1000));
})();
