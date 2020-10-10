import {loadingPage} from './load.js';
loadingPage();


document.getElementById('fir').onclick = () => {
    document.querySelector('.first').classList.toggle('height');     
} 

document.getElementById('sec').onclick = () => {
     document.querySelector('.second').classList.toggle('height');   
  
}
document.getElementById('thir').onclick = () => {
    document.querySelector('.third').classList.toggle('height');      
}
document.getElementById('four').onclick = () => {
    document.querySelector('.fourth').classList.toggle('height');      
}


// document.querySelector('.second').onclick = () => {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kyiv,ua&appid=fc1378d4e91f84ad3c6c0eed07909642`)
//             .then(function (resp) {return resp.json() })
//             .then(function (data) {

//             })
// }


// document.querySelector('.first').onclick = () => {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Donetsk,ua&appid=fc1378d4e91f84ad3c6c0eed07909642`)
//             .then(function (resp) {return resp.json() })
//             .then(function (data) {

//             })
// }


// document.querySelector('.first').onclick = () => {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=Moscow,ru&appid=fc1378d4e91f84ad3c6c0eed07909642`)
//             .then(function (resp) {return resp.json() })
//             .then(function (data) {

//             })
// }