import axios from '../config/axios'

const getCharacter = async (page) => {
  try {
    const data = await axios.get(`https://swapi.py4e.com/api/people/?page=${page}`);
    return data;
  } catch (error) {
    throw new Error('Failed to fetch character data');
  }
}

export default getCharacter;
