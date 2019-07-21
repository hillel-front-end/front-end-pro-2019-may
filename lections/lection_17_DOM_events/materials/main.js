console.log('Lection_14');


window.onload = function(){
    var item = document.querySelector('.box');

    console.dir(item , 'item');

    // item.onclick = function () {
    //     console.log('click');
    // }

    // item.onclick = onClickFoo;

    function onClickFoo(event) { // event  = {}
        console.log('fooo onClick', event);
        this.innerHTML += 
         "clintY " + event.clientY + '  ' +
         "pageY "  + event.pageY +
         " offsetY " + event.offsetY;
         console.dir(event.target);
         
    }

    // item.addEventListener('click', function(event) {
    //     console.log(event, 'addEventListener')
    // });

    // item.addEventListener('click', onClickFoo);
    
    function onEvent(event) {
        console.log(event.type);
    }
    
    // item.addEventListener('click', onEvent);

    // item.addEventListener('mousedown', onEvent);
    // item.addEventListener('mouseup', onEvent);

    item.addEventListener('mousemove', onEvent);
    item.addEventListener('mouseout', onEvent);
    item.addEventListener('mouseover', onEvent);

}

function onClickAttr() {
    console.log('bad click')
}