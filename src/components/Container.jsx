import React from "react";
import { WeatherProvider } from "../context/WeatherContext";
import Header from "./Header";
import Form from "./Form";
import Weather from "./Weather";

export default function Container() {
  return (
    <WeatherProvider>
      <Header />
      <Form />
      <Weather />
    </WeatherProvider>
  );
}
