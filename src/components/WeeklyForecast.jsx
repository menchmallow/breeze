function WeeklyForecast({ week }) {
  const getDayName = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  return (
    <div className="weekly-forecast card sen">
      <span className="title-text">7 Day Forecast</span>
      {week.map((info, index) => (
        <div key={index} className="week">
          <span className="day">{getDayName(info.date)}</span>
          <span className="chance-of-rain-text">
            <img
              src="img/drop.png"
              alt="raindrop icon"
              className="raindrop-icon"
            />
            {info.day.daily_chance_of_rain}%
          </span>
          <img
            src={info.day.condition.icon}
            alt="weather-icon"
            className="weekly-weather-icon"
          />
          <span className="weekly-condition-text">
            {info.day.condition.text}
          </span>
          <span className="min-max-temp">
            {Math.round(info.day.maxtemp_c)}° {Math.round(info.day.mintemp_c)}°
          </span>
        </div>
      ))}
    </div>
  );
}

export default WeeklyForecast;
