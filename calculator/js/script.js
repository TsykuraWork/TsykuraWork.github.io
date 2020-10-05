const btn1 = document.querySelector('#firstbtn');
const btn2 = document.querySelector('#secondbtn');
const btn3 = document.querySelector('#thirdbtn');
let firstnum, secondnum, sign;

function countSum() {
    firstnum = document.querySelector('#firstInput').value;
    secondnum = document.querySelector('#secondInput').value;
    sign = document.querySelector('.sign').textContent;
    console.log(sign);
    if (firstnum === '' || secondnum === '' || isNaN(firstnum) || isNaN(secondnum)) {
        alert('Ошибка ввода! Пожалуйста повторите ввод.');
    } else if (sign === '') {
        alert('Сначала выберите действие!');
    } else if (sign === '+'){
        result = parseInt(firstnum) + parseInt(secondnum);
        alert(firstnum + ' + ' + secondnum + ' = ' + result);
    }else {
        result = parseInt(firstnum) - parseInt(secondnum);
        alert(firstnum + ' - ' + secondnum + ' = ' + result);
    }
}


btn1.addEventListener('click', () => document.querySelector('.sign').textContent = '+');
btn2.addEventListener('click', () => document.querySelector('.sign').textContent = '-');
btn3.addEventListener('click', countSum);