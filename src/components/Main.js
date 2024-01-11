import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import { useContext } from "react";
import { CurrentTempUnitContext } from "../contexts/CurrentTemperatureUnitContext";

const Main = ({ weatherTemp, onSelectCard, clothingItems }) => {
  const { currentTempUnit } = useContext(CurrentTempUnitContext);
  console.log(currentTempUnit);
  const temp = weatherTemp?.temperature?.[currentTempUnit] || 85;

  const getWeatherType = () => {
    if (currentTempUnit === "F") {
      if (temp >= 86) {
        return "hot";
      } else if (temp >= 66 && temp <= 85) {
        return "warm";
      } else if (temp <= 65) {
        return "cold";
      }
    } else {
      if (temp >= 30) {
        return "hot";
      } else if (temp >= 29 && temp <= 19) {
        return "warm";
      }
      if (temp <= 18) {
        return "cold";
      }
    }
  };

  const weatherType = getWeatherType();

  const filteredCards = clothingItems.filter((item) => {
    return item.weather === weatherType;
  });
  console.log(filteredCards);

  return (
    <main className="main">
      <WeatherCard
        day={false}
        type="cloudy"
        weatherTemp={`${temp}°${currentTempUnit}`}
      />
      <section id="card-section" className="card__section">
        <p className="cards__header">
          Today is {`${temp}°${currentTempUnit}`}, you may want to wear:
        </p>
        <div className="cards">
          {filteredCards.map((card) => (
            <ItemCard key={card._id} card={card} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
