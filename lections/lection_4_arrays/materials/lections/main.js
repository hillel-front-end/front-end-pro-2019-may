/*
  Lection 4 - Array
  * Двумерные массивы
  * Зубчатые массива\ Ступенчатые массивы
*/

// -------- test
var a = [1,2,3,5,6];

document.write(a.join('+'));

// document.write('<ul>')
// for (var i = 0; i < a.length; i++) {
//   document.write('<li>' + a[i] + '</li>');
// }
// document.write('</ul>') 

// document.write('<ul><li>');
// document.write(a.join('<li>'));
// document.write('</ul>') ;
// console.log(a, 'a');
// var center = Math.ceil(a.length/2) - 1;
// console.log(center, 'center');

// if (a.length % 2 == 0)  {
//   a.splice(center, 2);
// } else {
//   a.splice(center, 1);
// }
// console.log(a, 'a finish');


//--------------------


var array = [
  [1,2,3,5,6],
  [7,8,9,10,7],
  [1,2,4,5,7]
];

console.log(array, 'array');
console.log(array[0][1], 'array[0]');

var array = new Array (5);

console.log(array, 'array');

for (var i = 0; i < array.length; i++) {
  array[i] = new Array(array.length);
}

for (var i = 0; i < array.length; i++) {
  for (var j = 0; j < array[i].length; j++){
    array[i][j] = Math.floor(Math.random() * (30 - 10) + 10);
  }
}
console.log(array, 'array finish');
document.write('<br/>')
document.write('<br/>')

for (var i = 0; i < array.length; i++) {
  for (var j = 0; j < array[i].length; j++){
    var k =  array[i].length;
    // if (i + j == k - 1 || i == j) {
    //   document.write(' ** ')
    // } else {
    //   document.write(' ' + i + '' + j + ' ')
    // }

      if (i <= j) {
      document.write(' ** ')
    } else {
      document.write(' ' + i + '' + j + ' ')
    }

  }
  document.write('<br/>')

}
