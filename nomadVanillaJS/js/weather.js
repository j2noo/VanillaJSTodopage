const API_KEY="36059beb5c642aa6331d21e1d36b81fe";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(`you live in ${lat} ${ lon}`);
  const APIurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(APIurl).then(response => response.json()).then(data => {
    const city = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:last-child");

    city.innerText =  data.name;
    weather.innerText = `${data.weather[0].main} ${data.main.temp}`;
  });
} 
function onGeoError() {
  alert("Cant find your position");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);