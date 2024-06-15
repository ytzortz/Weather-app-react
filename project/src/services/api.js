import axios from 'axios';

const API_KEY = '5236c0bd8emshf7a1cb40b7371e4p16ae74jsnb9f1911703d5';
const BASE_URL = 'https://weatherapi-com.p.rapidapi.com';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
    'x-rapidapi-key': API_KEY
  }
});

export const fetchWeatherData = async (city) => {
  try {
    const response = await api.get('/forecast.json', {
      params: { q: city, days: '3' }
    });

    console.log(response);

    return {
        id: Date.now(),
        city: response.data.location.name,
        temperature: response.data.current.temp_c, //temperature in Celcius
        description: response.data.current.condition.text,
        icon: response.data.current.condition.icon
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error; // Handle errors
    // an den yparxei na mis pernaei h poli mesa sta cards
  }
};
