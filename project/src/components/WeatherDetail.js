import '../styles/WeatherDetail.css'

const WeatherDetail = ({ day, icon, currentTemp, minTemp, maxTemp, sunRise, sunSet, avghumidity }) => {
    return (
      <div className="weather-detail">
        <div className="weather-detail-content">
          <div className="weather-detail-left">
            <h5 className="weather-detail-day">{day}</h5>
              {currentTemp !== undefined && (
              <div className="weather-icon-temp">
                <img src={icon} alt={`Weather icon for ${day}`} />
                <p>{currentTemp} °C</p>
              </div>
              )}
            </div>
            <div className="weather-detail-right">
              <p>Low: {minTemp} °C</p>
              <p>High: {maxTemp} °C</p>
              <p>Sun Rise: {sunRise}</p>
              <p>Sun Set: {sunSet}</p>
              <p>Average Humidity: {avghumidity}%</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default WeatherDetail;
  