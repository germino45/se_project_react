import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import { defaultClothingItems } from "../utils/constants";

const Main = ({ weatherTemp, onSelectCard }) => {
  const getWeatherType = () => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  };

  const weatherType = getWeatherType();

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather === weatherType;
  });
  console.log(filteredCards);

  return (
    <main className="main">
      <WeatherCard day={false} type="cloudy" weatherTemp={`${weatherTemp}°F`} />
      <section id="card-section" className="card__section">
        <p className="cards__header">
          Today is {`${weatherTemp}°F`}, you may want to wear:
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
