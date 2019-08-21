// console.log('Lection_1');


// /*
// - let,const
// - Arrow Functions
// - Template Literals // tag templates

// - Object Properties
// - Destructuring

// */

// var x = 10;

// function f() {
//     console.log(x);
//     var x;

//     return x;
// }

// f();


// // let, const
// function f() {
//     console.log(x);
//     let x;

//     return x;
// }


// if (true) {
//     var foo = 12;
// }

// console.log(foo, 'foo');



// for(let i = 0; i < 3; i++) {
//     setTimeout(function(){
//         console.log(i, 'i');
//     },5000);
// }


// const b = 12;

// const PI = 3.14;

// // PI = 4.14;

// const j = {
//     name:12
// }

// foo = {
//     fff: 13
// }


// j.name ='abc';

// j = [];

// // ----------------------



// // ------------------- arrow func -----------------


// var aa = function() {

// };





// var obj = {
//     foo: function() {
//         var a = (c,b) => { 
//             //  this -- нету !!!!!!!!!!!!!!!!!!!!!
        
//             console.log(this, 'this');
//             return c + b; 
        
//         };

//         a(1,3);
//     },
//     a: c => {
//         console.log(this, 'this');        
//     }
// }

// console.log(a(1,3));

// obj.a();//

// obj.foo();


let arr = [21, 71, 8, 74, 8, 3, 4, 12];

let res = arr.filter(function(item){
    return item < 10;
})
// .map(function(item){
//     return item < 10;
// })

// .reduce(function(item){
//     return item < 10;
// })


// var a = (c,b) => { 
//     //  this -- нету !!!!!!!!!!!!!!!!!!!!!

//     console.log(this, 'this');
//     return c + b; 

// };


// var a = (c,b) => { 
//     //  this -- нету !!!!!!!!!!!!!!!!!!!!!

//     console.log(this, 'this');
//     return c + b; 

// };

// var b = item => item > 12;


// let res = arr.filter( b )
//             .map(item => item * 10)
//             .reduce((prev, currnt) => prev * currnt, 0);


//             arr.forEach(item => console.log(item, 'item'))




// // ------------------- Template Literals ------------------- 


// let a = 123, b = 'Gggg', c = "Gfff";


// var str = (a * 10) + 'aasdas' + '@' + 'dasdasdasdasdasd' +  b + '!' + c + 'px';

// var j = 'dasdasdasdas
// dasd' ;

// function getValue() {
//     return 1 + 1;
// }

// let str = `${a * 10 * getValue()} aasdasd

// asdasds`;

// //${}
// console.log(str);

// let list = [{title: 'save', color:'red', href:'https://learn.javascript.ru/array-iteration'}, {title: 'copy'}, {title: 'edit'}];

// let menu = `
// <ul> ${list.map(li =>`
//     <li style="color:${li.color};">
//         <a href="${li.href}"> ${li.title}</a>
//     </li>`).join('')} 
// </ul>`;

// console.log(menu, 'menu');

// document.write(menu);






// -----------------------------------------

// --------------- defaults params -------------------

// function sum(a, b, data){
//     if (a === undefined || b === undefined) {
//         return console.error('parametr not found')
//     }
//     a = a || 0;
//     b = b || 0;

//     if(!data || !data.x) {
//         data = {
//             x: 0
//         }
//     }
    
//     return a + b;
// }


// function sum(a = 0, b = 1, data = {c:123}){
//     console.log(a,b,data);
//     return a + b;
// }

// sum(2,3,{a:123});

// // ---------------- object method --------------

// let obj = {
//     x: 10,
//     f() {
//         console.log(this, 'this');

//     }

// }

// obj.f();

// console.log(obj);

//  -------------------------------------

// -------------------- Destructuring (obj, arr) ---------------------

var obj = {
    a: 1,
    b: 'abc',
    c: true,
    name: 'Valera',
    adress: {
        city: "Kiev"
    }
}

console.log(a,b,c, name, city); // obj.adress.city



var { a,b,c, name, adress: { city } } = obj; // var name = obj.name;

var mass = [1,2,3,5];

// var [a,,c] = mass; // var [a,b,c] = [1,2,3,5];

console.log(a,c);

[mass[0], mass[1]] = [mass[1], mass[0]];

// var buffer = mass[0];
// mass[0] = mass[1];
// mass[1] = buffer;


console.log(mass, 'mass');



//---------------------------------------------------


