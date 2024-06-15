import WeatherCard from './WeatherCard';
import '../styles/WeatherCardsContainer.css'; 

const WeatherCardsContainer = ({ weatherData }) => {

  const handleCardClick = (city) => {
    console.log('Card clicked:', city);
    // TO-DO: Will add more functionalities later on
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
