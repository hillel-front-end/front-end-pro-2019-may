// /*
//   Lection 5 - Array
//     * example func declaration
//     * example func expression
//     * use/call func
//     * use/call func without args
//     * use/call func with args
//     * arguments
//     * callback
//     * scope
// */

// // function name () {
// //   console.log('Hello world');
// // }

// // var nameFoo = function () {
// //   console.log('Hello');
// // }


// // console.log(nameFoo(), 'nameFoo');
// var foo2 = (function () {
//   function getArray(size, a, b, c) {
//     var copyArg = [].slice.call(arguments);

//     console.log(copyArg, 'copyArg');

//     if (copyArg.length > 1) {
//       return copyArg;
//     }  

//     return new Array(size);
//   }

//   function random () {

//     for(var i = 0; i < mass.length; i++) {
//       mass[i] = Math.ceil(Math.random() * 30 + 10 - 10);
//     }

//     console.log(mass, 'mass');
//   }

//   function rendeInDocument () {
//     document.write(mass.join(','));
//     document.write('<br/>')
//   }

  

//   function main () {
//     random();
//     rendeInDocument();
//   // }


//   // main();

//   function sendAJAX () {
//     console.log('Start sanding AJAX');
//     return true;
//   }


//   function validation (userName, userLastName) {
//     if (!(userName && userLastName)) {
//       return false;
//     }

//     return sendAJAX();
//   }

//   var isValid = validation('Pety', 'Petrov');

//   console.log(isValid, 'isValid');

//   var mass = getArray(5);



//   // ----- scope 
//   var mass1 = getArray(5);


//   function foo2 () {
//     var b = 'cool';
//     console.log(c, 'c');
//   }


//   function main () {




//     foo();
//     foo2();
//     foo();
//   }


//   main();

//   console.log(foo2, 'foo')
//   console.log(a, 'a');
//   return foo2;
// })();

// console.log(foo2, 'foo');



var moduleBank = (function() {
  var a = '123213213';
  console.log('moduleBank')
  return true;
})();

// console.log(moduleBank, 'moduleBank');

// console.log(a, 'a');

function foo() {
  return '213';
}


function toDo(callback) { // func = moduleBank
  var a = 1, b = 2 , c = 3;
 
  callback();

  console.log(a,b,c);
  
}
// foo()
toDo(foo) /// function () {   return '213';}
// toDo(window) // '213' 

// function toDo2() {
//   moduleBank();
// }



function add() {
  var a = 1, b = 2, c = 3;

  return [
    a,b,c
  ]
}

var res = add();
console.log(res[2], 'res');
