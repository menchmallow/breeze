function TodaysForecast({ forecastToday }) {
  return (
    <div className="todays-forecast card sen">
      <span className="title-text">Today's Forecast</span>
      <div className="hourly-info">
        {forecastToday.map((info, index) => (
          <div className="hourly-info-card" key={index}>
            <span>{info.time.split(" ")[1]}</span>
            <img src={info.condition.icon} alt="weather icon" />
            <span>{info.temp_c} C°</span>
            <span className="chance-of-rain-text">
              <img
                src="img/drop.png"
                alt="raindrop icon"
                className="raindrop-icon"
              />
              {info.chance_of_rain} %
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodaysForecast;
