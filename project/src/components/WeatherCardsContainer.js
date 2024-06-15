import WeatherCard from './WeatherCard';
import '../styles/WeatherCardsContainer.css'; 

const WeatherCardsContainer = ({ weatherData }) => {

  const handleCardClick = (city) => {
    console.log('Card clicked:', city);
    // Will add more functionalities later on
  };


  return (
    <div className="weather-cards-container">
      {weatherData.map((weather) => (
        <WeatherCard
          key={weather.id}
          city={weather.city}
          temperature={weather.temperature}
          description={weather.description}
          onClick={() => handleCardClick(weather.city)}
        />
      ))}
    </div>
  );
};

export default WeatherCardsContainer;
