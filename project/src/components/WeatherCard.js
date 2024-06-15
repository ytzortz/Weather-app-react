import '../styles/WeatherCard.css'; 

const WeatherCard = ({ city, temperature, description, onClick = () => {}, icon }) => {
    return (
      <div className="weather-card" onClick={onClick}>
        <div className="weather-card-content">
          <div className="weather-city-container">
            <h3 className="weather-city">{city}</h3>
            <img src={"https:"+icon} alt={`${city} icon`} />
          </div>
          <p className="weather-temperature">{temperature} °C</p>
          <p>{description}</p>
        </div>
      </div>
    );
  };
  
  export default WeatherCard;
  