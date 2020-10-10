
export function loadingPage() {
        

    setTimeout(() => {
        document.querySelector('.message').innerHTML+='.';
    },1000);
    setTimeout(() => {
        document.querySelector('.message').innerHTML+='.';
    },2000);
    setTimeout(() => {
        document.querySelector('.message').innerHTML+='.';
        },3000);
    setTimeout( () => {
        document.querySelector('.message').style.visibility = 'hidden';
        document.querySelector('.container').style.visibility = 'visible';
    },5000)



    const fetches = ['London,uk', 'Kyiv,ua', 'Donetsk,ua', 'Moscow,ru']
    let city_name = document.querySelectorAll('.city-name');
    let temp = document.querySelectorAll('.tempreture');
    let weather = document.querySelectorAll('.weather-judge');
    let wind_speed = document.querySelectorAll('.wind-speed');
    let country = document.querySelectorAll('.country');
    let weather_icon = document.querySelectorAll('.weather-icon');
    let add_info = document.querySelectorAll('.additional-info');
    let isOpen = [true,true,true,true];


    setInterval(() => {
        for(let i = 0; i < city_name.length; i++){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${fetches[i]}&appid=fc1378d4e91f84ad3c6c0eed07909642`)
            .then(function (resp) {return resp.json() })
            .then(function (data) {
                
                console.log(data);
                weather_icon[i].innerHTML = `<img style ="width: 7em; height: 7em;" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
                weather_icon[i].style.textAlign = "center";  
                weather_icon[i].style.backgroundColor = "lightblue";   
                isOpen[i] = !isOpen[i];

                city_name[i].innerHTML = data.name;
                const temperature = `${(+data.main.temp - 273).toFixed(1)}°`;
                temp[i].innerHTML = temperature;
                weather[i].innerHTML = `Weather: ${data.weather[0].main}`;
                wind_speed[i].innerHTML = `Wind speed: ${data.wind.speed}m/s`;
                country[i].innerHTML = `Country: ${data.sys.country}`;
            })
            .catch(function () {})
        }
    },3000);
}
let a = 123;


export default { loadingPage };
