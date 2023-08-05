import axios from 'axios';

const API_KEY = 'e61c823b290b48f284472748230308';

async function getCities(query: string) {
  const responce = await axios.get(`search.json?key=${API_KEY}&q=${query},`);
  return responce;
}

export { getCities };
