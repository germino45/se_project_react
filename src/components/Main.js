import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import { useMemo } from "react";
import { defaultClothingItems } from "../utils/constants";

const Main = ({ weatherTemp, onSelectCard, onSelectWeatherCard }) => {
  const weather = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  console.log(weather);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather === weather;
  });
  console.log(filteredCards);

  return (
    <main className="main">
      <WeatherCard day={false} type="clear" weatherTemp={`${weatherTemp}°F`} />
      <section id="card-section" className="card__section">
        <p className="cards__header">
          Today is {`${weatherTemp}°F`}, you may want to wear:
        </p>
        <div className="cards">
          {filteredCards.map((x) => (
            <ItemCard x={x} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
