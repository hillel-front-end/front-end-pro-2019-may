console.log('Lection 21');

// console.log(1);

// setTimeout(function(){
//     console.log('setTimeout');
// });

// console.log(2);

// for(var i = 0; i < 10000; i++) {
//     console.log(i, 'i');
// }

function random(min, max) {
    return Math.round((Math.random() * (max - min) + min));
}

// function m1() {
//     m2();
// }

// function m2() {
    
// }

// function m3() {
//     m1() 
// }


// setTimeout(() => {
//     var value = random(-5, 10);

//    if(value > 0) {
//        var a =  m1();
//     //    m4(a);
//         m2(a);
//         m3();
//    } else {
//        m2();
//        m1();
//        m3();
//    }
// });




var promise = new Promise(function(resolve, reject){
    cons

    setTimeout(function() {
        var value = random(-5, 10);
        console.log(value, '0');
        value > 0? resolve(value) : reject(value);
    }, 1000);


});

promise.then(
    function (value) {
        console.log('cb-1')
        return value  * 10;
    }, 
    function (value) {
        console.log('cb-01')
        return  Promise.reject(value);
    })

    .then(function(value){
        var foo = value;
        //toDo(foo);
        return value;
    })

    .then(function (data){
        console.log('cb-2', data);
        return data;
    }, function (){
        console.log('cb-02')
    })

    .then(function (data){
        console.log('cb-3', data)
    }, function (){
        console.log('cb-03')
    })

