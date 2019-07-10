function sendAjax() {
    return {
        age: 12,
        name: 'Valera'
    }
}

// function Parent(name) {
//     var personData = sendAjax();
//     this.name =  personData.name;
//     this.age = personData.age;
//     // if(foo) {
//     //     this.eat = function () {
            
//     //     }
//     // }
// }

// Parent.prototype.eat = function () {
//     console.log('...eating');
// }

// function Child(name) {
//     this.name = name;
//     this.run = function () {

//     }
// }
// Child.prototype.game = function () {

// }

//Child.prototype.__proto__ = new Parent("Pety"); --> bad practice

// Child.prototype  = Object.create(Parent.prototype); // -> {__proto__: Parent.prototype  }
// Child.prototype.constructor = Child;
// var child = new Child('Valera');

// console.log(child, 'chhild');
// console.log(child.eat(), 'child');


// 


// function  Car (name) {
//     var maxAge = 23, isStart = false;


//     function start() {

//     }

//     //getter
//     this.getMaxAge = function () {
//         return maxAge;
//     }


//     //setter
//     this.setMaxAge = function (value) {
//         if(value > 10 && value < 20){
//             maxAge = value || maxAge;
//         }
//     }

//     this.name = name;
// }

// Car.prototype.getInfo = function () {
//     console.log(this.name + ' - ' + this.getMaxAge());
// }


// var mers = new Car('Mersedes');// {__proto__:Car.prototype}

// mers.name;
// mers.getInfo();

// console.log(mers.maxAge)


function Parent(name) {

}

Parent.prototype.eat = function () {
    console.log('...eating');
}

Parent.prototype.send = function() {
    console.log('Parent game SandAjax = http//google.com');
}



function Table(name, flag) {

    console.log(flag, 'false');
    this.name = name;

    if(flag) {
        Table.prototype.send = function () {
            console.log('Child game SandAjax = http//yandex.com');
        }
    }
}

Table.prototype = Object.create(Parent.prototype);

// var child = new Table('Project-1', true);

// child.send();




var child2 = new Table('Project-2', false);

child2.send();


var child = new Table('Project-2', true);

child.send();
