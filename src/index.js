import fetch from "node-fetch";

async function getWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8726a04f59dfd35caedc4c81c1f18e66`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    const dataObject = {
      name: weatherData.name,
      temp: weatherData.temp,
      description: weatherData.description,
    };
    return dataObject;
  } catch (error) {
    console.log(error);
  }
}

const button = document.querySelector(".btn");

button.addEventListener("", (e) => {
  e.preventDefault();
  const cityName = document.getElementById("city").value;
  console.log(cityName);
  //   document.querySelector("form").reset();
  const processedWeatherData = getWeatherData(cityName);
  makeWeatherCard(processedWeatherData);
});

// Post weather info card
function makeWeatherCard(data) {
  let cardContainer = document.querySelector(".container");

  let card = document.createElement("div");
  card.style.width = "18rem";
  card.classList.add("card");

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let city = document.createElement("h5");
  city.classList.add("card-title");
  city.textContent = `City Name: ${data.name}`;

  let temperature = document.createElement("p");
  temperature.classList.add("card-text");
  temperature.textContent = `Temperature: ${data.temp}`;

  let description = document.createElement("p");
  description.classList.add("card-text");
  description.textContent = `Description: ${data.description}`;

  let deleteButton = document.createElement("btn");
  deleteButton.classList.add("btn", "btn-danger", "delete");
  deleteButton.textContent = "Delete";

  cardContainer.appendChild(card);
  card.appendChild(cardBody);
  cardBody.appendChild(city);
  cardBody.appendChild(temperature);
  cardBody.appendChild(description);
  cardBody.appendChild(deleteButton);
}

// event remove city
function removeCity(el) {
  if (el.classList.contains("delete")) {
    el.parentElement.parentElement.remove();
  }
}

let deleteBtn = document.querySelector(".delete");

if (deleteBtn) {
  deleteBtn.addEventListener("click", (e) => {
    removeCity(e.target);
  });
}
