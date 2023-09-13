// import Temperature from "./models/Temperature";
// import Precipitation from "./models/Precipitation";
// import Wind from "./models/Wind";

const city = document.querySelector("#city");
const url = "http://localhost:8080";
let selectedCity = "Horsens";

let temperatures = [];
let precipitations = [];
let windSpeeds = [];

document.getElementById("city").addEventListener("change", selectCity(), false);

async function selectCity() {
  selectedCity = city.options[city.selectedIndex].value;

  const result = await fetch(`${url}/data/${selectedCity}`, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });

  const json = await result.json();

  json.map((item) => {
    if (item.type === "temperature") {
      temperatures.push(item);
    }

    if (item.type === "precipitation") {
      precipitations.push(item);
    }

    if (item.type === "wind speed") {
      windSpeeds.push(item);
    }
  });

  console.log(temperatures);
  console.log(precipitations);
  console.log(windSpeeds);
}
