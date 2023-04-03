import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("İstanbul");
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    const api = "56c2c87193e1777c4ddb53b6736a335a";
    const baseURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=en&appid=${api}&cnt=40`;
    if (city) {
      axios(baseURL)
        .then((res) => {
          const dailyData = res.data.list.filter(
            (data, index) => index % 8 === 0
          );
          setWeatherData(dailyData);
        })
        .catch((e) => alert("Please Enter valid City Name"));
    }
  }, [city]);

  const values = {
    city,
    setCity,
    weatherData,
    setWeatherData,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
