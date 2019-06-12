var a = 1, b = a;

console.log(a, b, 'a, b');
a = 2;

console.log(a, b, 'a, b');


var obj = {
    name: 'valera'
},
obj2 = obj;


console.log(obj, obj2);

obj2.name = 'Vasy';


console.log(obj, obj2);


function abc(mass) {
    mass.push('123123');
    console.log(mass, 'mass');
}

abc.hello = true;

var arr = [1,2,3];


abc(arr);

console.log(arr, 'arr');

console.log(abc.hello, 'hello');

var func = function () {

}

func.a = '123123';

function foo (callback) {
    console.log(callback.a = 123, 'callback');
};

foo(func)

console.log(func.a, 'func');