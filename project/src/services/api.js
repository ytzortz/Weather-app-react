import axios from 'axios';
import { addToCache, getFromCache } from '../utils/cache'

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
  
  // Check if data already in cache
  const cachedData = getFromCache(city);
  if(cachedData)
    return cachedData;

  // Data not in cache, so fetch from the API
  try {
    const response = await api.get('/forecast.json', {
      params: { q: city, days: '3' }
    });

    console.log(response); // For debugging

    const newWeather = {
      id: Date.now(),
      city: response.data.location.name,
      country: response.data.location.country,
      temperature_c: response.data.current.temp_c, // Τemperature in Celsius
      temperature_f: response.data.current.temp_f,  // Temperature in Fahrenheit
      description: response.data.current.condition.text,
      icon: response.data.current.condition.icon, 
      forecast: response.data.forecast.forecastday // Array that contains current, tomorrow and the next day 

    };

    // Add the new weather data to cache
    addToCache(newWeather);

    return newWeather;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error; // Handle errors
    // an den yparxei na mis pernaei h poli mesa sta cards
  }
};
