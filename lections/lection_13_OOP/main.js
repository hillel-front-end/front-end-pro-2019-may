function foo () {
    console.log(this, 'this');// window
}

var obj = {
    foo: function () {
        console.log(this, 'this');// obj
    }
}




/*
Java, C#, Smalltalk(1)
class Animal {
    contructor(name){
        this.name = name;
    }
    pulic toDO () {

    }
}
 
Animal dog = new Animal('Murzik')

*/

// function foo() {

// }

// console.dir(foo, 'foo');
console.dir(Animal, 'animal');

console.log(Animal.prototype, 'prototype');


function Animal(name, surName) {
    this.name = name;
    this.surName = surName;
    // console.log(this);// new Animal()  => this\
    // this.eat = function() {
    //     console.log(this.name + '...eating');
    // }
    //this.__proto__ = Animal.prototype ;
}

Animal.prototype.eat = function() {
    console.log(this.name + '...eating');
}


var cat = new Animal('Bobik', 'Bobikocich');
var dog = new Animal('Bobik', 'Bobikocich');


console.log(cat, 'cat');
    cat.eat();

// function Array(one, two, three) {

//     this["0"] = one;
//     this["1"] = two;
//     this["2"] = three;

// }

// Array.prototype.pop = function() {
//     delete this["2"];
// }
// console.log(new Array(1,2,3))
// console.log(new Array(2,2,3))
// var arr = new Array(4,2,3);

// console.log(arr, 'arr');
// arr.pop();
// console.log(arr, 'arr');


var array = new Array(5, 5, 5);

Array.prototype.myPush = function(value) {
    this[this.length] = value || true;
}


console.log(array, 'array');

var array2 = new Array(10,19);
console.log(array2, 'array2');

console.log(new Array(10,19).myPush)