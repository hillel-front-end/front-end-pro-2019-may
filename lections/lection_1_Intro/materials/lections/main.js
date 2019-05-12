/*
Lection 1 - JavaScript Intro

  1. JS Введение
  2. Подключение скриптов
  3. Консоль разработчика
  4. Переменные + типы(String, Number),  NaN,
  5. Именование переменных
  6. Operators
*/

/*
  # 1. JS Введение
   * LiveScript - JavaScript;
   * JavaScript — это язык программирования, который даёт возможность реализовывать сложное 
     поведение веб-страницы. Является интерпретируемым языком.
   * Интерпретация – это когда исходный код программы получает другой инструмент, который называют «интерпретатор», 
     выполняет его «как есть». При этом распространяется именно сам исходный код (скрипт). 
     Этот подход применяется в браузерах для JavaScript. 
*/


/*
   #2. Подключение скриптов
    <script src="[fileName].js"></script>
    <script>console.log('Hello world');</script>
*/



// ----- #4 Переменные  -------

var a = 6 , b = 15; //  Number,
var c = b, sum = 0;
var lastName = 'Ternavskiy'; // String 

// ----- #5  Именование переменных  -------

/*
  var querySelectorAll, query_selector_all;

  Имя переменной должно максимально чётко соответствовать хранимым в ней данным.
*/

// ----- #6 Базовые операторы( +,-,*,/,% ) -------

var personAge = a + b + c;

var fullName = firstName + ' ' + lastName;


// var personAge = '18';
var personInfo = fullName + personAge;
// var personInfo = 18 + parseInt(fullName);

 console.log("Значение переменной а, при a = ", personInfo);
