import { getCities } from './getCities';

const onInputChange = async (evt: Event) => {
  const inputElement = evt.target! as HTMLInputElement;
  const currentValue = inputElement.value;
  const cities = await getCities(currentValue);
  console.log(cities);
};

export { onInputChange };
