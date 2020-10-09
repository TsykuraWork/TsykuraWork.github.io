

window.addEventListener('DOMContentLoaded', (event) => {


        setTimeout(() => {
        document.querySelector('.message').innerHTML+='.';
    },1000);
         setTimeout(() => {
        document.querySelector('.message').innerHTML+='.';
    },2000);
         setTimeout(() => {
        document.querySelector('.message').innerHTML+='.';
    },2990);

    

const fetches = ['London,uk', 'Kyiv,ua', 'Donetsk,ua', 'Moscow,ru']
let city_name = document.querySelectorAll('.city-name');
let temp = document.querySelectorAll('.tempreture');
let weather = document.querySelectorAll('.weather-judge');
let wind_speed = document.querySelectorAll('.wind-speed');
let country = document.querySelectorAll('.country');
setInterval(() => {
    for(let i = 0; i < city_name.length; i++){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${fetches[i]},ua&appid=fc1378d4e91f84ad3c6c0eed07909642`)
        .then(function (resp) {return resp.json() })
        .then(function (data) {
            city_name[i].innerHTML = data.name;
            const temperature = `${(+data.main.temp - 273).toFixed(2)}°`;
            temp[i].innerHTML = temperature;
            weather[i].innerHTML = `Weather: ${data.weather[0].main}`;
            wind_speed[i].innerHTML = `Wind speed: ${data.wind.speed}m/s`;
            country[i].innerHTML = `Country: ${data.sys.country}`;
        })
        .catch(function () {})
    }
},3000);
});



