function changePlace(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searching-input");
  let cityElement = document.querySelector("#place");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#searching-form");
searchFormElement.addEventListener("submit", changePlace);
