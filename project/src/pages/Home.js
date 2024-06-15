import React, { useState } from 'react';
import BigTitle from '../components/BigTitle';
import SearchBar from '../components/SearchBar';
import WeatherCardsContainer from '../components/WeatherCardsContainer';
import { fetchWeatherData } from '../services/api'; 


const Home = () => {

      const [weatherData, setWeatherData] = useState([
        { id: 1, city: 'Heraklion', temperature: 35, description: 'HELP' }
      ]);

    
      const handleSearch = async (city, resetQuery) => {

        try {
          const newWeather = await fetchWeatherData(city); //  fetchWeatherData should return a weather object
          setWeatherData(prevData => {
            const updatedData = [...prevData, newWeather]; 
            if (updatedData.length > 3)  // Limit to 3 cards
              updatedData.shift();            
            return updatedData;
          });
        } catch (error) {
          console.error('Error fetching weather data:', error); 

          // TO-DO: I should display an error message here
        }
    
        resetQuery(); // Clear the search input after search
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
  