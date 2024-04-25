import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

const Main = ({
  weatherTemp,
  onSelectCard,
  clothingItems,
  onCardLike,
  isLoggedIn,
}) => {
  const { currentTempUnit } = useContext(CurrentTemperatureUnitContext);

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
    } else if (currentTempUnit === "C") {
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

  const filteredCards = clothingItems.filter((data) => {
    return data.weather === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={false} type="cloudy" weatherTemp={`${temp}°`} />
      <section id="card-section" className="card__section">
        <p className="cards__header">
          Today is {`${temp}°${currentTempUnit}`}, you may want to wear:
        </p>
        <div className="cards">
          {filteredCards.map((card) => {
            return (
              <ItemCard
                key={card._id}
                card={card}
                onSelectCard={onSelectCard}
                onCardLike={onCardLike}
                isLoggedIn={isLoggedIn}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Main;
