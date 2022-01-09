const inputBox = document.getElementById("name");
const inputText = inputBox.value;

let cityName = "";

const key = "3e4422d6e04655f7e63efa6a0266b041";
const url = `api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${key}`;

console.log(url);

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.dir(data))
//   .then();
