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

var obj = { x: 10, y: 20, inner: { x: 20, z: 30 }, foo2: { k: 23, p: {foo: 20} } };


function convert(obj) {
    var objNew = {};

    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            var obj2 = convert(obj[key]); // inner

            for (var i in obj2) {
                objNew[i] = obj2[i];
            }
        } else {
            objNew[key] = obj[key];
            
        }
    }


    return objNew;
}

var finish = convert(obj);

console.log(finish, 'finish');


var g = {
    lastName: 123
}

console.log(g['name']);
console.log(g.name);