import { getDayOfWeek } from '../ts/getDayOfWeek';

type weatherPreviewForDay = {
  date: string;
  day: {
    avgtemp_c: number;
    condition: {
      icon: string;
    };
  };
};

function renderWeatherPreview(forecastDay: weatherPreviewForDay[]): void {
  const container = document.querySelector('.weather-preview')! as HTMLDivElement;
  let markup = '';

  forecastDay.map((weatherForDay, index) => {
    const { avgtemp_c: avgTemp, condition } = weatherForDay.day;
    const { dayOfWeek, dayOfMonth, month } = getDayOfWeek(new Date(weatherForDay.date));

    // console.log(`${dayOfWeek}  ${dayOfMonth}  ${month}`);
    markup += `<div class="weather-wrapper ${index === 0 ? 'weather-wrapper--active' : ' '}">
        <p class="day">${dayOfWeek}</p>
        <p class="date">${dayOfMonth}</p>
        <p class="date">${month}</p>
        <img src="${condition.icon}" alt="weather icon">
        <p>${avgTemp} °C</p>
      </div>`;
  });
  container.innerHTML = markup;
}

export { renderWeatherPreview };
