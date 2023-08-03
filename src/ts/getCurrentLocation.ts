// import { loadConfigFromFile } from 'vite';

async function getUserLocation() {
  if (!navigator.geolocation) {
    throw new Error('Geolocation is not supported by your browser');
  }

  try {
    const position: GeolocationPosition = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => resolve(position),
        error => reject(error)
      );
    });
    const { accuracy, latitude, longitude } = position.coords;
    return { accuracy, latitude, longitude };
  } catch (error) {
    throw error;
  }
}

export default getUserLocation;
