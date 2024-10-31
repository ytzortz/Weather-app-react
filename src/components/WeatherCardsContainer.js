import WeatherCard from './WeatherCard';
import '../styles/WeatherCardsContainer.css'; 
import { useNavigate } from 'react-router-dom';


const WeatherCardsContainer = ({ weatherData }) => {

  const navigate = useNavigate();
  const handleCardClick = (city) => {
    console.log('Card clicked:', city);   //for debugging
    navigate('/details/${city}');
  };
  return (
    <div className="weather-cards-container">
      {weatherData.map((weather) => (
        <WeatherCard
          key={weather.id}
          {...weather}   // matching same atributes names with values from the object with the same name
          onClick={() => handleCardClick(weather.city)}
        />
      ))}
    </div>
  );
};

export default WeatherCardsContainer;
