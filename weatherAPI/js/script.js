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

