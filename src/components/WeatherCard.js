import { weatherOptions } from "../utils/constants";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  const imageSrcUrl = weatherOption.url || "";

  return (
    <section id="weather" className="weather">
      <div className="weather__info">{weatherTemp}</div>
      <img src={imageSrcUrl} alt="weather" className="weather__image" />
    </section>
  );
};

export default WeatherCard;
