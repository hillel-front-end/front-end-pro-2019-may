/*


+ Глобальные обьекты Window, Document
+ setTimeout,  setInterval
+ JS обращение в html
+ html коллекция
+ html элемент
+ Обьекты classList, className, innerText

*/
    
// setTimeout(function(){
//     console.log(123213);
// }, 5000);


// setInterval(function(){
//     console.log(123213, 'setInterval');
// }, 1000);


window.onload = function() {
   // document.body -> body
   //document.documentElement -> html
    // var box = document.getElementsByClassName('box');

    // var box = document.getElementById('box');
    // var box = document.getElementsByTagName('div');

    // var box = document.querySelector('.box');

    
    var box = document.querySelectorAll('.box');
    // box.className += ' active'; bad
    // console.dir(box.classList.add('active')); //add css class active
    // console.dir(box.classList.remove('active')); //remove css class active
    // console.dir(box.classList.toggle('active')); 
    // console.dir(box.classList.contain('active')); 

    console.dir(box.innerHTML += '<span>1232</span>', 'box')
    // setInterval(function() {
    //     box.classList.toggle('active')
    // }, 1000)
    // console.dir(box.classList.toggle('active')); 
    // for(var i = 0)


}