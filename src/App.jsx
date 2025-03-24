import { useState, useEffect } from "react";
import Header from "./components/Header";
import WeatherHeader from "./components/WeatherHeader";
import TodaysForecast from "./components/TodaysForecast";
import WeatherInfo from "./components/WeatherInfo";
import Astro from "./components/Astro";
import WeeklyForecast from "./components/WeeklyForecast";
import "./App.css";

const apiKey = "fc548e7b0291495e81e70439252303";
const baseUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}`;

function App() {
  const [location, setLocation] = useState("Baguio");
  const [data, setData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(`${position.coords.latitude},${position.coords.longitude}`);
      },
      (error) => {
        console.error(error);
        alert("Error getting location");
      }
    );
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}&q=${location}&days=7`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [location]);

  const updateStyles = () => {
    const hour = new Date().getHours();

    let bgColor;
    let cardColor;
    let innerCardColor;
    let scrollbarColor;

    if (hour >= 16 && hour < 17) {
      bgColor = "#a2caef";
      cardColor = "#96b7e3";
      innerCardColor = "#b1cef5";
      innerCardColor;
    } else if (hour >= 17 && hour < 18) {
      bgColor = "#fac55b";
      cardColor = "#f8aa27";
      innerCardColor = "#ffd47d";
      scrollbarColor = "#fcbf44 #ffda8f";
    } else if (hour >= 18) {
      bgColor = "rgb(29, 29, 29)";
      cardColor = "rgb(22, 22, 22)";
      innerCardColor = "rgb(41, 41, 41)";
      scrollbarColor = "#1c1c1c #2b2b2b";
    }

    document.documentElement.style.setProperty("--background-color", bgColor);
    document.documentElement.style.setProperty("--card-color", cardColor);
    document.documentElement.style.setProperty(
      "--inner-card-color",
      innerCardColor
    );
    document.documentElement.style.setProperty(
      "--scrollbar-color",
      scrollbarColor
    );
  };

  useEffect(() => updateStyles, []);

  const handleClick = (input) => {
    setLocation(input);
  };

  return (
    <>
      <Header handleClick={handleClick} />
      {data ? (
        <>
          <WeatherHeader
            location={data.location}
            currentForecast={data.current}
          />
          <TodaysForecast forecastToday={data.forecast.forecastday[0].hour} />
          <WeatherInfo info={data.current} />
          <Astro astro={data.forecast.forecastday[0].astro} />
          <WeeklyForecast week={data.forecast.forecastday} />
        </>
      ) : (
        <div className="card sen">Loading...</div>
      )}
    </>
  );
}

export default App;
