const weatherOptions = [
  {
    url: require("../images/weather/day/sunny.png"),
    day: true,
    type: "sunny",
  },
  {
    url: require("../images/weather/day/cloudy.png"),
    day: true,
    type: "cloudy",
  },
  {
    url: require("../images/weather/day/rain.png"),
    day: true,
    type: "rain",
  },
  {
    url: require("../images/weather/day/storm.png"),
    day: true,
    type: "storm",
  },
  {
    url: require("../images/weather/day/snow.png"),
    day: true,
    type: "snow",
  },
  {
    url: require("../images/weather/day/fog.png"),
    day: true,
    type: "fog",
  },
  {
    url: require("../images/weather/night/clear.png"),
    day: false,
    type: "clear",
  },
  {
    url: require("../images/weather/night/cloudy.png"),
    day: false,
    type: "cloudy",
  },
  {
    url: require("../images/weather/night/rain.png"),
    day: false,
    type: "rain",
  },
  {
    url: require("../images/weather/night/storm.png"),
    day: false,
    type: "storm",
  },
  {
    url: require("../images/weather/night/snow.png"),
    day: false,
    type: "snow",
  },
  {
    url: require("../images/weather/night/fog.png"),
    day: false,
    type: "fog",
  },
];

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section id="weather" className="weather">
      <div className="weather__info">{weatherTemp}</div>
      <img src={imageSrcUrl} alt="weather" className="weather__image" />
    </section>
  );
};

export default WeatherCard;
