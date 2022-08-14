/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const weatherDescription = document.querySelector(\".weather-description\");\r\nconst city = document.querySelector(\".city-name\");\r\nconst temperature = document.querySelector(\".temperature\");\r\nconst feelsLike = document.querySelector(\".feels-like\");\r\nconst wind = document.querySelector(\".wind\");\r\nconst humidity = document.querySelector(\".humidity\");\r\n\r\nconst submitForm = document.querySelector(\".form\");\r\nconst switchUnit = document.querySelector(\"#switch\");\r\nconst tempUnit = document.querySelector(\".temp-unit\");\r\nconst tempUnitSmall = document.querySelector(\".temp-unit-small\");\r\n\r\nlet weatherUnit = \"metric\";\r\n\r\nsubmitForm.addEventListener(\"submit\", (e) => {\r\n  e.preventDefault();\r\n  let cityName = document.querySelector(\".input\");\r\n  getWeatherData(cityName.value, weatherUnit);\r\n  cityName.value = \"\";\r\n});\r\n\r\nswitchUnit.addEventListener(\"click\", changeUnit);\r\n\r\nasync function changeUnit() {\r\n  if (weatherUnit === \"metric\") {\r\n    weatherUnit = \"imperial\";\r\n    await getWeatherData(city.textContent, weatherUnit);\r\n  } else {\r\n    weatherUnit = \"metric\";\r\n    await getWeatherData(city.textContent, weatherUnit);\r\n  }\r\n}\r\n\r\nasync function getCityCoordinates(city) {\r\n  try {\r\n    const response = await fetch(\r\n      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=8726a04f59dfd35caedc4c81c1f18e66`,\r\n      { mode: \"cors\" }\r\n    );\r\n    const cityData = await response.json();\r\n    const lat = cityData[0].lat;\r\n    const lon = cityData[0].lon;\r\n    const coordinates = {\r\n      lat: lat,\r\n      lon: lon,\r\n    };\r\n    return coordinates;\r\n  } catch (error) {\r\n    console.log(error.message);\r\n  }\r\n}\r\n\r\nasync function getWeatherData(input, unit) {\r\n  try {\r\n    const obj = await getCityCoordinates(input);\r\n    const lat = obj.lat;\r\n    const lon = obj.lon;\r\n\r\n    const response = await fetch(\r\n      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8726a04f59dfd35caedc4c81c1f18e66&units=${unit}`,\r\n      { mode: \"cors\" }\r\n    );\r\n    const weatherData = await response.json();\r\n    const dataObj = {\r\n      description: weatherData.weather[0].description,\r\n      temp: weatherData.main.temp,\r\n      feels_like: weatherData.main.feels_like,\r\n      humidity: weatherData.main.humidity,\r\n      speed: weatherData.wind.speed,\r\n      name: weatherData.name,\r\n    };\r\n    changeUI(dataObj);\r\n  } catch (error) {\r\n    console.log(error.message);\r\n  }\r\n}\r\n\r\nfunction changeUI(obj) {\r\n  weatherDescription.textContent = obj.description;\r\n  city.textContent = obj.name;\r\n  temperature.textContent = parseInt(obj.temp);\r\n  feelsLike.textContent = parseInt(obj.feels_like);\r\n  wind.textContent = obj.speed;\r\n  humidity.textContent = obj.humidity;\r\n\r\n  if (weatherUnit === \"metric\") {\r\n    tempUnit.textContent = \"°C\";\r\n    tempUnitSmall.textContent = \"°C\";\r\n  } else {\r\n    tempUnit.textContent = \"°F\";\r\n    tempUnitSmall.textContent = \"°F\";\r\n  }\r\n}\r\n\r\n// Start Page will show the weather for San Diego, CA\r\n(async () => {\r\n  await getWeatherData(\"San Diego\", weatherUnit);\r\n})();\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;