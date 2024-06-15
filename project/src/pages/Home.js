import React, { useState } from 'react';
import BigTitle from '../components/BigTitle';
import SearchBar from '../components/SearchBar';
import WeatherCardsContainer from '../components/WeatherCardsContainer';

const Home = () => {


      const [weatherData, setWeatherData] = useState([
        { id: 1, city: 'New York', temperature: 25, description: 'Partly cloudy' },
        { id: 2, city: 'Pietermaritzburg', temperature: 20, description: 'Cloudy' },
        { id: 3, city: 'Heraklion', temperature: 35, description: 'HELP' }
      ]);
    
      const handleSearch = (city) => {
        // Logic to update weatherData based on search query

        // Pernao to onoma apo to search stin poli me id = 1
        // einai paradigma apla gia katanoisi

        setWeatherData(prevWeatherData => {
          const updatedWeatherData = prevWeatherData.map(item => {
            if (item.id === 1) {
              return { ...item, city: city }; // Update city name for id 1
            }
            return item;
          });
          return updatedWeatherData;
        });
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
  