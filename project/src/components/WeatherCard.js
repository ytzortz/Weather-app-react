
const WeatherCard = ({ city, temperature, description }) => {
    return (
      <div className="weather-card">
        <h3>{city}</h3>
        <p>{temperature} °C</p>
        <p>{description}</p>
      </div>
    );
  };
  
  export default WeatherCard;
  