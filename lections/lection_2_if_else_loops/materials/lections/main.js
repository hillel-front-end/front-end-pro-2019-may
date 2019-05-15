/*
Lection 2 - if else, loop

  + bool
  + typeof
  + logical operators [>,<, >=, <=, ==, ====, !] 
  + logical and or, 
  + if else
  + if else if else // at home
  + тернарный оператор ? // at home
  + циклы основы
  + while () {}
  + do {} while()
  + for(){}
*/


/*
 1.  ------ Boolean type -------
  var boolean = [true, false];
  var isChecked = false;
  var isPostHidden = true; 
*/

/*
  2.  ------ typeof -------
    var typeStr = typeof 'строка';
    var typeNum = typeof 123;
    var typeBool = typeof true
*/
var isVisible = true;

console.log(typeof isVisible, 'this typeof')



//3. ------ logical operators [>,<, >=, <=, ==, ====, !, !!] -------
/* 
  3.1 сравнение одно типных:
    1 == 1 -> true,  1 > 1 -> false
  3.2 сравнение разно типных - приводятся к числу при сравнении, 
      за исключением строгого равенства ===
   '1' == 1 -> true, false == 0 -> true, false === 0 -> false
  3.3 null == undefined, но не null === undefined
  3.4 !!'0'
    
*/

 var one = '10', two = 10, resault;
 
 console.log(one, two, 'one, two');
 console.log(one > two, 'one > two');
 console.log(one < two, 'one < two');
 console.log(one >= two, 'one >= two');
 console.log(one <= two, 'one <= two');
 console.log(one == two, 'one == two');
 console.log(one === two, 'one === two');

 var thisNUll = null, thiUndefined = undefined;

 console.log(thisNUll == thiUndefined, 'thisNUll == thiUndefined');
 console.log(thisNUll === thiUndefined, 'thisNUll === thiUndefined');

 console.log(!true);
 
 console.log(!'some text in bool', 'some text in bool');

 console.log('0')
 

/*
 4. --------- logical and or, -------------
  && - спотыкается на лжи
  || - спотыкается на правде 
  var
*/

var one = true; 
var two = false;


/*
5. ----- if else  -----
  Важно помнить что  такие значения как: 
    1)Число 0, 
    2)пустая строка "", //Любая строка, кроме пустой, в логическом контексте является true.
    3)null 
    4)undefined,
    5)NaN
  *При преобразовании в булевое значние будет = false;
  *Все остальное = true.

  if (условие справедливо) {
    .. то сделай что-то.
  } else {
    .. иначе сделай что-то другое
  }
*/


// var experience = prompt('Подвердите свой опыт работы');
// var isLearn = confirm('Будешь учиться?');

// console.log(isLearn, 'isLearn');
// ---------------------------------
//  var login = prompt('Введите логин');
//  var password = prompt('Введите пароль');

// console.log(login, !!login, 'login');
// console.log(password, !!password, 'login');
// var foo = false;

// if (login || (password && foo)) {
//    console.log('Окей  входите');
// } else {
//   console.log('Окей иди гуляй');
// }

// var firstPerson = prompt("возраст") + prompt("возраст");

// console.log(firstPerson, 'firstPerson')

// ---------------------------------

// if (age >= minAge &&  age <= maxAge) {
//   console.log('Вы нам подходите');
// } else {
//   console.log('Окей будем Вас учить');
// }

// ---------------------------------

// if (age === minAge ||  age == maxAge) {
//   console.log('Вы нам подходите');
// } else {
//   console.log('Окей будем Вас учить');
// }

// ---------------------------------


 //6.  ----- Loop  -----

 var i = 0;
 document.write('<ul>') 

//  while(i < 1 || i < 5){
//      console.log(i);
//      i = i + 1;
//       document.write('<li>' + i + ' Cтудент ' + '</li>')
//       // i++;
//  }
//  document.write('</ul>')
 // ---------------------------------

//  var j = 10;
// var foo ;
//  do {
//     foo = prompt('Введи число');
//  } while(!foo);


 for(var i = 1; i < 3 ; i++){ // i = i + 1 ||i += 1
    console.log(i)
 }

console.log('finish');


