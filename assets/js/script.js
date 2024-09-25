// 1
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');

button1.addEventListener('click', function(){
    button1.style.backgroundColor = 'green';
})

button2.addEventListener('dblclick',function(){
    button2.style.border = 'thin red solid';
})

button3.addEventListener('mouseover', (event)=>{
    button3.classList.toggle('shadow');
})




// 2

const btnRed = document.getElementById('btn-red');
const btnGreen = document.getElementById('btn-green');
const btnBlue = document.getElementById('btn-blue');
let bg = document.querySelector('.task2'); 

function changeBackgroundColor(color) {
    bg.style.backgroundColor = color;
}

btnRed.addEventListener('click', () => changeBackgroundColor('red'));
btnGreen.addEventListener('click', () => changeBackgroundColor('green'));
btnBlue.addEventListener('click', () => changeBackgroundColor('blue'));

btnRed.addEventListener('dblclick', () => {
    bg.style.backgroundColor = '';
});

btnGreen.addEventListener('dblclick', () => {
    bg.style.backgroundColor = '';
});

btnBlue.addEventListener('dblclick', () => {
    bg.style.backgroundColor = '';
});



// 3

const controlUp = document.querySelector('.control-up');
const controlDown = document.querySelector('.control-down');
const controlLeft = document.querySelector('.control-left');
const controlRight = document.querySelector('.control-right');

const square = document.querySelector('.square');

// Начальные координаты
let posX = 0;
let posY = 0;

// Функция для перемещения квадрата
function moveSquare(dx, dy) {
    posX += dx;
    posY += dy;
    square.style.transform = `translate(${posX}px, ${posY}px)`;
}

// Добавляем обработчики событий для управления движением
controlUp.addEventListener('click', () => moveSquare(0, -10));
controlDown.addEventListener('click', () => moveSquare(0, 10));
controlLeft.addEventListener('click', () => moveSquare(-10, 0));
controlRight.addEventListener('click', () => moveSquare(10, 0));

