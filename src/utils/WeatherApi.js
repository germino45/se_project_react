import { APIkey } from "./constants";
import { processServerResponse } from "./api";

const latitude = 41.8781;
const longitude = -87.6298;

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(processServerResponse);
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main.temp;
  const weather = {
    temperature: {
      F: `${Math.round(temperature)}`,
      C: `${Math.round(((temperature - 32) * 5) / 9)}`,
    },
  };

  console.log(weather);
  return weather;
};
