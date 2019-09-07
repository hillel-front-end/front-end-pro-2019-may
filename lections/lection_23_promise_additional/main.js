

// var promise = new Promise(function(resolve, reject) {
//     var goods = true;

//     setTimeout(function() {
//          reject('Helllo catch');
//     }, 1000);
// })

// .then(function(value){
//     console.log(2);
// })

// .then(function(value){
//     return  value + '123';
// })

// .then(function(value){
//     console.log(value);
// })

// .catch(function(value){
//     console.log(value)
// });



// function random(min, max) {
//     return Math.round((Math.random() * (max - min) + min));
// }

// var promise = new Promise(function(resolve, reject) {
//     var goods = true;

//     setTimeout(function() {
//          resolve('Helllo catch');
//     }, 5000);
// });

// console.log(promise, 'promise');

// promise.then(function(value){
//      var a = 0;

//      return new Promise(function(resolve, reject) {
//         setTimeout(() => {
    
//           var a = random(100, 200);

//           reject(a );
//         }, 1000);
//     });
// })

// .then(function(value){
//      console.log(value + '123 hello');
//     return Promise.reject();
// }, function() {

// })

// .then(function(value){
//     console.log(value);
// }, function(){

// })

// .catch(function(value){
//     console.log(value)
// });




// var promise1 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         // reject('reject')
//         resolve(1);
    
//     }, 1000);
// });

// var promise2 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve(2);
//         // reject("7");
//     }, 2000);
// });

// var promise3 = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve(3);
//     }, 2500);
    
// });

// Promise.all([promise1, promise2, promise3])

// .then(function(data){
//     console.log(data.for, 'data');
// }, function(value){
//     console.log(value)
// });





// ------------------------------------------


function* SomethingGenerator(items){
    // for(let i = 0; i < items.length; i++){
    //     yield items[i];

    //     // console.log('end for')
    // }

    yield setTimeout(() => {
        console.log(1);
    }, 1000);


    yield setTimeout(() => {
        console.log(2);
    }, 1000);


    yield setTimeout(() => {
        console.log(3);
    }, 1000);

}


var list = ["Hello", "world", "!"]

var data = SomethingGenerator(list); // data => generator {next: () => ..}

console.log(data, 'data');

// console.log(data.next());

console.log('sync')
