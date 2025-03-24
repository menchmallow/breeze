function WeatherInfo({ info }) {
  const uvMeasurement = (uvIndex) => {
    if (uvIndex <= 2) {
      return "Low";
    } else if (uvIndex <= 5) {
      return "Moderate";
    } else if (uvIndex <= 7) {
      return "High";
    } else if (uvIndex <= 10) {
      return "Very High";
    } else if (uvIndex >= 11) {
      return "Extreme";
    }
  };

  return (
    <div className="weather-info card sen">
      <div className="weather-info-card">
        <span className="weather-info-title">UV</span>
        <span>
          {info.uv} {uvMeasurement(info.uv)}
        </span>
      </div>
      <div className="weather-info-card">
        <span className="weather-info-title">Humidity</span>
        <span>{info.humidity}</span>
      </div>
      <div className="weather-info-card">
        <span className="weather-info-title">Pressure</span>
        <span>{info.pressure_mb} mb</span>
      </div>
      <div className="weather-info-card">
        <span className="weather-info-title">Wind</span>
        <span>{info.wind_kph} kph</span>
      </div>
    </div>
  );
}

export default WeatherInfo;
