function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-tempurature-value");
  let temperature = Math.round(response.data.temperature.current);
  let cityInputElement = document.querySelector("#current-city");
  cityInputElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function searchCity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-text-input");
  let city = searchInputElement.value;

  let apiKey = "8dcoa24b0fb7aa495436f440dt9ca24e";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let currentDayElement = document.querySelector("#current-day");
let currentDay = new Date();

currentDayElement.innerHTML = formatDate(currentDay);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);
