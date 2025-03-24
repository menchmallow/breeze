function WeatherHeader({ location, currentForecast }) {
  return (
    <div className="card weather-header sen">
      <div className="location-info">
        <span className="location">
          {location.name}, {location.country}
        </span>
        <span className="temperature">{currentForecast.temp_c} C°</span>
        <span className="weather-condition">
          {currentForecast.condition.text}
        </span>
      </div>
      <div className="image-container">
        <img
          src={currentForecast.condition.icon}
          alt="weather icon"
          className="weather-icon"
        />
      </div>
    </div>
  );
}

export default WeatherHeader;
