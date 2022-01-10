const inputBox = document.getElementById("box");
const submitButton = document.getElementById("button");

const key = "3e4422d6e04655f7e63efa6a0266b041";

const logData = (data) => {
  console.dir(data);
  return data;
};

const extractMain = (cityInfo) => {
  const { main } = cityInfo;
  console.log(main);
  return main;
};

const tempDiv = document.getElementById("temperature");

const printTemps = (temps) => {
  for (let a in temps) {
    console.log(`${a}: ${temps[a]}`);

    let newLi = document.createElement("li");
    newLi.innerHTML = `${a}: ${temps[a]}`;
    tempDiv.appendChild(newLi);
  }
};

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  tempDiv.innerHTML = "";
  let cityName = inputBox.value;
  console.log(cityName);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
  console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then(logData)
    .then(extractMain)
    .then(printTemps);
});
