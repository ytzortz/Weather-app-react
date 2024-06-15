import '../styles/WeatherCard.css'; 

const WeatherCard = ({ city, temperature, description, onClick = () => {} }) => {
    return (
      <div className="weather-card" onClick={onClick}>
        <div className="weather-card-content">
          <h3>{city}</h3>
          <p>{temperature} °C</p>
          <p>{description}</p>
        </div>
      </div>
    );
  };
  
  export default WeatherCard;
  