import React from "react";
import { SelectCity, InformationCity, WeatherForcast } from "./features";

export default function App() {
  return (
    <div className="App">
      <WeatherForcast />
      <SelectCity />
    </div>
  );
}
