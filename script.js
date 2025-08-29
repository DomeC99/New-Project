let cityAndDate = document.querySelector("form");
cityAndDate.addEventListener("submit", search);

function search(event) {
event.preventDefault();
let apiKey = "28fac95a24b3ba61410a05dt43ob3b30";
let city = document.querySelector("#typecity").value;
let apiURl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(apiURl).then(displayWeather);
}

function displayWeather(response) {

let h1 = document.querySelector(".current-city");
h1.innerHTML = response.data.city;

let currentDate = document.querySelector(".date");
currentDate.innerHTML = formatDate();

let temperature = document.querySelector(".temp");
temperature.innerHTML = Math.round(response.data.temperature.current);
temperature.classList.add("temp");

let icon = document.querySelector(".sun");
icon.innerHTML = `<img src="${response.data.condition.icon_url}" alt="icon">`;
icon.classList.add("sun");
}

function formatDate() {
let time = new Date();
let days = [
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
];
let day = days[time.getDay()];
let hour = time.getHours();
let minutes = time.getMinutes();

if (minutes < 10) minutes = `0${minutes}`;
if (hour < 10) hour = `0${hour}`;

return `${day} ${hour}:${minutes}`;
}