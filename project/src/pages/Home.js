import { useState } from 'react';
import BigTitle from '../components/BigTitle';
import SearchBar from '../components/SearchBar';
import WeatherCardsContainer from '../components/WeatherCardsContainer';
import { fetchWeatherData } from '../services/api'; 
import { getCache } from '../utils/cache';


const Home = () => {

      const cache = getCache();
      const currentList = cache.slice(0,3).reverse();
      const [weatherData, setWeatherData] = useState(currentList);

      const handleSearch = async (city, resetQuery) => {
        try {
          const newWeather = await fetchWeatherData(city); //  fetchWeatherData should return a weather object

          // Check if city obtained by API already exists in the UI state
          if (!currentList.find(e => e.city === newWeather.city)) {
            setWeatherData(prevData => {
              const updatedData = [...prevData, newWeather]; 
              if (updatedData.length > 3)  // Limit to 3 cards
                updatedData.shift();    
                resetQuery(); // Clear the search input after search        
            return updatedData;
            });
          } else {
            alert(newWeather.city + ' already exists in the list.');
          }
        } catch (error) {
          console.error('Error fetching weather data:', error); 
          alert( city+ ' not found. Please try another city.'); // Error popup an alert popup
        }
      };
    
    return (
      <div>
        <BigTitle title="Weather App"/>
        <SearchBar onSearch={handleSearch}/>
        <WeatherCardsContainer weatherData={weatherData}/>
      </div>
    );
  };
  
  export default Home;
  