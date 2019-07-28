/*

*/



window.onload = function() {
  
    // onchange, oninput

    // var inputFild = document.querySelector('#firstName');


    // inputFild.addEventListener('input', function(event) {
    //     console.log(event, 'event')
    //     console.log(event.target.value, 'event');
    // });

    
    // inputFild.addEventListener('change', function(event) {
    //     console.log(event, 'event')
    //     console.log(event.target.value, 'event');
    // });

    
    var box = document.querySelector('.box'),
        boxSecond = document.querySelector('.box-2');

    box.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        
        console.log('contextmenu');
    });

    boxSecond.addEventListener('contextmenu', function(event) {
        // event.preventDefault();
        
        console.log('contextmenu - second');
    });

} 




