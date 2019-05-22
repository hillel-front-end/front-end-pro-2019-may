/*
Lection 3 - Array

 * Math
 * [], [].length
 * Доступ по индексу
 * Обращение к первому/последнему элементу массива
 * Добавление элемента в массив
 * [].length = 20 || data[30] = 'foo'
 * Заполнения массива случайными числами
 * Пример - перебор
 * new Array()
*/



/*
  1. Math
  Math​.round() - возвращает число, округлённое к ближайшему целом
  Math.floor() - возвращает целое число, которое меньше или равно данному 
  Math.ceil() - округляет аргумент до ближайшего большего целого.
  Math.random() - получени случайного числа от 0 - 1

  Форумула получени случайного числа в диапазоне от min (включительно) до max (не включительно):
    Math.random() * (max - min) + min;
*/

// ----------------------- Math -------------

// console.log(Math.round(1.3), 'Math.round');

// console.log(Math.ceil(1.5), 'math ceil');

// console.log(Math.floor(1.5), 'floor');

// console.log(Math.floor(Math.random()), 'random');


// console.log(Math.ceil(Math.random()), 'random');

// console.log(Math.ceil(Math.random() * (30 - 10) + 10));

// ----------------------- Array -------------

// var array = ["user1", "user2", "user3"];

// var a = 1, b  = 2, c = 3;
// console.log(array, 'array');

// var mass = [a, b, c];

// console.log(mass, 'mass');

// console.log(mass[1], 'mass[1]');
// console.log(mass[0], 'mass[0] -- last');
// console.log(mass.length, 'length');

// mass[mass.length] = 'foo';

// console.log(mass, 'mass');

// mass[mass.length] = 12321;

// console.log(mass.length, 'mass.length');

// console.log(mass[mass.length - 1], 'mass.length - 1');

// ------------------------------- new Array()
// var mass = new Array(10, 10, 'asdasd', 213);

// console.log(mass, 'mass with new Array(10)');


// mass.length = 50;
// var massSecond = [];


// massSecond[101] = '213213';

// console.log(massSecond, 'mass');

//----------------- 

var mass = [];

mass.length = 10;

for (var i = 0; i < mass.length ; i++) {
  mass[i] = Math.floor(Math.random()* (30 - 10) + 10);
}



for (var i = 0;  i < mass.length; i++) {
  var counter = 0;
  for (var j = 3; 15 <= 15; j++) {
    if(  15 % 3 == 0){
      counter ++;
    }
  }
}

