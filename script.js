const inputBox = document.getElementById("box");
const inputText = inputBox.value;
const submitButton = document.getElementById("button");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let number = "";

  number = inputBox.value;
  console.log(number);

  let url = `https://swapi.dev/api/people/${number}`;

  console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.dir(data));
});
