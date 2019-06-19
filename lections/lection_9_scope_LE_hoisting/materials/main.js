// var foo2 = undefined;

var b = 12;

function a () {
    if (true) {
        var g = 10;
    }

    console.log(g, 'g');
}

function c () {
    // var b = 13;
    // a()
    // [[scope]] = window

}

a();
c();

// var res = 114;

// function sum () {
//     var res = 215;
//     // for (i = 0, sum = 0; i < 10; i++) {
//     //     sum += i;
//     // }
//     console.log(window.res, 'res');
// }

// for(var i = 0; i < 10; i++) {
//     sum();
// }


// ------------------- hoisting -----------------
// function foo () {
//     console.log(g, 'g');

//     if (false) {
//         var g = 10;
//     }

//     console.log(g, 'g');
// }


// foo();

// foo2();


// foo2 = function () {
//     console.log(foo2, 'foo2');
// }

// foo2();
// var foo2 = undefined;

// function abc () {
//     foo2();
// }


// foo2 = function () {
//     console.log(foo2, 'foo2');
// }


// abc();

// ------------- Lexical Environment ------------

// function foo () {

//     g = undefined;

//     var LE  = {g:undefined, ggg: function(){}};
    
//     console.log(g, 'g');

//     if (false) {
//         var g = 10;
//     }
//     LE  = {g:10, ggg: function(){}};

//     function ggg() {

//     }

//     z = 'sadasd'

//     LE  = {g:10, ggg: function(){}};
//     console.log(g, 'g');
// }

// foo();


// var g = 12;

// function foo2 () {
//      g = 13;
//     function foo () {
//         var g = 14;
//         console.log(g, 'g - in foo')
//     }

//     foo();
//     console.log(g, 'g - in foo2')
// }

// foo2();
// console.log(g, 'g - in window');


//------------ Замыкание ------------

function initCounter () {
    var counter = 0;

    return function () {
        console.log(counter, 'counter');
        counter++;
    }
}


var foo = initCounter();

initCounter = null;



foo();
foo();
foo();

function a () {
   var b = 10;
   b += 30
   console.log(b)
}

a ();
a ();


function initSlider(size) {
    var counter  = 0;

    function up () {
        counter++;
    }

    function down() {

    }

    function rest () {
        counter = 0;
    }

    function isFinish () {
        return counter == size;
    }

    function isStart () {
        return couter == 0;
    }

    function setCounter (value) {
        counter = value || counter;
    }

    return {
        upCounter: up,
        downCounter: down
    }
}


var slider = initSlider(10);

// console.log(slider.upCounter(), 'slider');// 1
// console.log(slider.upCounter(), 'slider');// 2
// console.log(slider.upCounter(), 'slider');// 3
// console.log(slider.upCounter(), 'slider');// 4
// console.log(slider.upCounter(), 'slider');// 5
// console.log(slider.upCounter(), 'slider');// 6
// console.log(slider.upCounter(), 'slider');// 7
// console.log(slider.upCounter(), 'slider');// 8
// console.log(slider.upCounter(), 'slider');// 9
// console.log(slider.upCounter(), 'slider');// 10
// console.log(slider.upCounter(), 'slider');// 1

// console.log(slider.down(), 'slider');// 1

// console.log(slider.down(), 'slider');// 10