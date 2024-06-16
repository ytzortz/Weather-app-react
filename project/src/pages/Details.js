import { useParams } from 'react-router-dom';
import { getFromCache } from '../utils/cache';
import BackButton from '../components/BackButton';
import WeatherDetail from '../components/WeatherDetail'; 
import '../styles/Details.css';
import getDayNames from '../utils/computeDays';



const Details = () => {
    const { city } = useParams();
    const weatherData = getFromCache(city);
    const days = getDayNames();
  
    if (!weatherData) 
      return <div>No data found for {city}</div>;
    
  return (
    <div>
      <h1>{weatherData.city + ", " + weatherData.country}</h1>
      <div className="weather-details-container">
        <WeatherDetail 
          day= {days.today}
          icon = {weatherData.icon}
          currentTemp = {weatherData.temperature_c}
          minTemp = {weatherData.forecast[0].day.mintemp_c}
          maxTemp = {weatherData.forecast[0].day.maxtemp_c}
          sunRise = {weatherData.forecast[0].astro.sunrise}
          sunSet = {weatherData.forecast[0].astro.sunset}
          avghumidity={weatherData.forecast[0].day.avghumidity}
        />

        <WeatherDetail 
          day= {days.tomorrow}
          minTemp = {weatherData.forecast[1].day.mintemp_c}
          maxTemp = {weatherData.forecast[1].day.maxtemp_c}
          sunRise = {weatherData.forecast[1].astro.sunrise}
          sunSet = {weatherData.forecast[1].astro.sunset}
          avghumidity={weatherData.forecast[1].day.avghumidity}
        />

        <WeatherDetail 
          day= {days.dayAfterTomorrow}
          minTemp = {weatherData.forecast[2].day.mintemp_c}
          maxTemp = {weatherData.forecast[2].day.maxtemp_c}
          sunRise = {weatherData.forecast[2].astro.sunrise}
          sunSet = {weatherData.forecast[2].astro.sunset}
          avghumidity={weatherData.forecast[2].day.avghumidity}
        />
      </div>

      <BackButton />
    </div>
  );
};

export default Details;