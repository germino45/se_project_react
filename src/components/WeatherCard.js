import { useContext } from "react";

import { weatherOptions } from "../utils/constants";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
const WeatherCard = ({ day, type, weatherTemp }) => {
  const { currentTempUnit } = useContext(CurrentTemperatureUnitContext);

  console.log(currentTempUnit);
  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  const imageSrcUrl = weatherOption.url || "";

  return (
    <section id="weather" className="weather">
      <div className="weather__info">
        {weatherTemp}
        {currentTempUnit}
      </div>
      <img src={imageSrcUrl} alt="weather" className="weather__image" />
    </section>
  );
};

export default WeatherCard;
