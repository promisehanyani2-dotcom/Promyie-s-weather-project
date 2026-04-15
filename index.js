function changeWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#place");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchPlace(city) {
  let apiKey = "e5f2b33t5a4924f02bo250f1a930212e";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(changeWeather);
}

function changePlace(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searching-input");

  searchPlace(searchInput.value);
}

let searchFormElement = document.querySelector("#searching-form");
searchFormElement.addEventListener("submit", changePlace);
