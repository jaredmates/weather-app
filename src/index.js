// const img = document.querySelector("img");
// img.src = weatherData.data.images.original.url;

import fetch from "node-fetch";

async function getWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8726a04f59dfd35caedc4c81c1f18e66`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    console.log(weatherData);
  } catch (error) {
    console.log(error);
  }
}
getWeatherData("London");
