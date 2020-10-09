console.clear();
fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=fc1378d4e91f84ad3c6c0eed07909642')
.then(function (resp) {return resp.json() })
.then(function (data) {
    console.log(data);
    document.querySelector('.city-name').innerHTML = data.name;
    const temp = `${(+data.main.temp - 273).toFixed(2)}°`;
    document.querySelector('.tempreture').innerHTML = temp;
    document.querySelector('.weather-judge').innerHTML = `Weather: ${data.weather[0].main}`;
    document.querySelector('.wind-speed').innerHTML = `Wind speed: ${data.wind.speed}m/s`;
    document.querySelector('.country').innerHTML = `Country: ${data.sys.country}`;
})
.catch(function () {

})



