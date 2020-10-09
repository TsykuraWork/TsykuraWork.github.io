console.clear();
fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=fc1378d4e91f84ad3c6c0eed07909642')
.then(function (resp) {return resp.json() })
.then(function (data) {
    console.log(data);
})
.catch(function () {

})
