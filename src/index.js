const weatherDescription = document.querySelector(".weather-description");
const city = document.querySelector(".city-name");
const temperature = document.querySelector(".temperature");
const feelsLike = document.querySelector(".feels-like");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");

const submitForm = document.querySelector(".form");

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let cityName = document.querySelector(".input");
  getWeatherData(cityName.value);
  cityName.value = "";
});

async function getCityCoordinates(city) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=8726a04f59dfd35caedc4c81c1f18e66`,
      { mode: "cors" }
    );
    const cityData = await response.json();
    const lat = cityData[0].lat;
    const lon = cityData[0].lon;
    const coordinates = {
      lat: lat,
      lon: lon,
    };
    return coordinates;
  } catch (error) {
    console.log(error.message);
  }
}

async function getWeatherData(input) {
  try {
    const obj = await getCityCoordinates(input);
    const lat = obj.lat;
    const lon = obj.lon;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8726a04f59dfd35caedc4c81c1f18e66&units=metric`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    // console.log(weatherData);
    const dataObj = {
      description: weatherData.weather[0].description,
      temp: weatherData.main.temp,
      feels_like: weatherData.main.feels_like,
      humidity: weatherData.main.humidity,
      speed: weatherData.wind.speed,
      name: weatherData.name,
    };
    changeUI(dataObj);
    // console.log(dataObj);
    // return dataObj;
  } catch (error) {
    console.log(error.message);
  }
}

function changeUI(obj) {
  weatherDescription.textContent = obj.description;
  city.textContent = obj.name;
  temperature.textContent = parseInt(obj.temp);
  feelsLike.textContent = parseInt(obj.feels_like);
  wind.textContent = obj.speed;
  humidity.textContent = obj.humidity;
}

// TODO: default should be san diego weather have this hardcoded in html I think

// TODO: &units=metric
// TODO: &units=imperial

// const weatherContainer = document.querySelector(".weather-container");
// const tempContainer = document.querySelector(".temp-container");
// const detailsContainer = document.querySelector(".details-container");
// const tempUnit = document.querySelector(".temp-unit");
// const tempUnitSmall = document.querySelector(".temp-unit-small");
