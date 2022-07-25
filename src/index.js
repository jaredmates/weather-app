// TODO: replace {london} with whatever my input value is
// TODO: Get lat and Lon and chain the promise to use the results in getting weather data

async function getCityName() {
  const response = await fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=8726a04f59dfd35caedc4c81c1f18e66",
    { mode: "cors" }
  );
  const cityName = await response.json();
  console.log(parseInt(cityName[0].lat));
}

(async () => {
  await getCityName();
})();

// TODO: &units=metric
// TODO: &units=imperial

// weatherData.weather.description
// weatherData.main.temp
// weatherData.main.feels_like
// weatherData.main.humidity
// weatherData.wind.speed
// weatherData.name

async function getWeatherData() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=8726a04f59dfd35caedc4c81c1f18e66",
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);
}

(async () => {
  await getWeatherData();
})();

// TODO: default should be san diego weather have this hardcoded in html I think

let cityName = document.querySelector(".city-name");
let inputData = cityName.value;

// let Inputdata = () => {
//   let cityName = document.querySelector(".city-name");
//   return cityName.value;
// }
