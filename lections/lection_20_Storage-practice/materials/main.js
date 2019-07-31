console.log('Lection_20');




window.onload = function() {

    // document.write(localStorage.foo)

    // localStorage.setItem('foo', {});
    // console.dir(localStorage.getItem('foo'));
    // localStorage.removeItem('foo')
    // var a = 'foo'; 
    // localStorage[a];
 console.dir();
var adress = {
    country: 'Ukrine',
    city: 'Kiev',
    list: [1,2,3,4,5],
    x: 12
};


 localStorage.setItem('foo', adress);

//  document.write()

var adressToStr = JSON.stringify(adress);

console.log(adressToStr, 'adressToStr');
// localStorage.setItem('adressToStr', adressToStr);

// var foo =  JSON.parse(localStorage.getItem('adressToStr'));

// console.log(foo, 'foo');
// localStorage.removeItem('adressToStr');


}
