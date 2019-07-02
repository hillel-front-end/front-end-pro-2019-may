// ---------- this ---------------
// this -- контекст выполнения ф-ии 


// function a() {
//     console.log(this, 'this');
// }

// a();

// var obj = {
//     x: 10,
//     y: 20,
//     sum: function () {
//         console.log(this.x + this.y, 'this in obj');
//     }
// }

// obj.sum();


// function foo1 () {
//     function foo2 (){
//         console.log(this,'this foo2');
//     }

//     foo2();

//     console.log(this,'this foo1');
// }


// foo1();


// var obj = {
//     x: 10,
//     y: 20,
//     sum: function () {
//         return obj.x + obj.y;
//     }
// }

// console.log(obj.sum(), 'obj.sum()');

var speak = 'Window speak';



var cat = {
    speak: 'Мяу мяу',
    catTalk: talk
}

var dog = {
    speak: 'Гав гав',
    dogTalk: talk
}

var human = {
    speak: 'Бла бла',
    humanTalk: talk,
    obj: {
        talk: talk
    }
}

function talk () {
    console.log(dog, 'this in func talk');
  
    return this.speak;
}

// human.talk = talk;

// human.obj.talk();

// human.talk();

dog.dogTalk();

console.log( dog, 'dog');

// console.log(talk());

// console.log(cat.catTalk());

// console.log(dog.dogTalk());

// console.log(human.humanTalk());


var mass = [1,2,3,4];

function myPush (item) {
    console.log(this, 'this');
    this[this.length] = item + ' ! ';
}


mass.myPush = myPush;

mass.myPush(5);
mass.myPush(5);
mass.myPush(2);
mass.myPush(1,2,3);

console.log(mass, 'mass');

var arr = [1,2,3,5];

arr.myJoin = function (separator) {
    var str = '';
    separator = separator || '123';
    console.log(this, 'this');
    console.log(separator, 'separator')

    for (var i = 0; i < this.length - 1; i++) {
        console.log(this[i], 'this[i]');
        str += this[i] + separator;
    }

    console.log(i, 'i');

    str += this[i];
    return str;
}

arr.myJoin('!');

console.log(arr.myJoin('!'), "arr.myJoin('!')");

arr.myReverse = function () {
    for (var i = 0; i < this.length/2; i++) {
        var swap = this[i];
        this[i] = this[this.length - 1 - i];
        this[this.length - 1 - i] = swap;
    }
}

arr.myReverse();

console.log(arr, 'arr');