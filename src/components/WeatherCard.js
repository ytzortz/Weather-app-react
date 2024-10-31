import '../styles/WeatherCard.css';
import { Link } from 'react-router-dom';


const WeatherCard = ({ city, temperature_c, description, onClick = () => {}, icon }) => {
    return (
      <Link to={`/details/${city}`} className="weather-card-link">
        <div className="weather-card" onClick={onClick}>
          <div className="weather-card-content">
            <div className="weather-city-container">
              <h3 className="weather-city">{city}</h3>
              <img src={"https:"+icon} alt=''/>
            </div>
            <p className="weather-temperature">{temperature_c} °C</p>
            <p>{description}</p>
          </div>
        </div>      
      </Link>
    );
  };
  
  export default WeatherCard;
  