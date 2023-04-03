import React, { useState, useEffect } from "react";
import { useWeather } from "../context/WeatherContext";
import axios from "axios";

const CITY_URL =
  "https://gist.githubusercontent.com/ozdemirburak/4821a26db048cc0972c1beee48a408de/raw/4754e5f9d09dade2e6c461d7e960e13ef38eaa88/cities_of_turkey.json";

function Location() {
  const { setCity } = useWeather();
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Ankara");

  useEffect(() => {
    axios
      .get(CITY_URL)
      .then((res) => {
        const cities = res.data;
        setCities(cities);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(selectedCity);
    setSelectedCity();
  };
  const handleChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <select value={selectedCity} onChange={handleChange}>
          <option value="">Select a city</option>
          {cities.map((city) => (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Location;
