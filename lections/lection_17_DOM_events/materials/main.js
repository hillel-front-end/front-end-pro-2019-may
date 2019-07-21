console.log('Lection_14');


window.onload = function(){
    var box = document.querySelector('.box');

    console.dir(box , 'box');

    // box.onclick = function () {
    //     console.log('click');
    // }

    // box.onclick = onClickFoo;

    function onClickFoo(event) { // event  = {}
        console.log('fooo onClick', event);
        this.innerHTML += 
         "clintY " + event.clientY + '  ' +
         "pageY "  + event.pageY +
         " offsetY " + event.offsetY;
         console.dir(event.target);
         
    }

    // box.addEventListener('click', function(event) {
    //     console.log(event, 'addEventListener')
    // });

    // box.addEventListener('click', onClickFoo);
    
    function onEvent(event) {
        console.log(event.type);

        event.target.classList.toggle('active');
    }
    
    
    var state = {
        offsetY: 0,
        offsetX: 0
    };

    box.addEventListener('mousedown', function(event) {
        state.offsetX = event.offsetX;
        state.offsetY = event.offsetY;

        document.addEventListener('mousemove', omMouseMove);

        document.addEventListener('mouseup', function(){
            document.removeEventListener('mousemove', omMouseMove);
        });
    });

    function omMouseMove(event) {
        box.style.left = (event.clientX - state.offsetX) + 'px';
        box.style.top = (event.clientY - state.offsetY) + 'px';
    }

    // item.addEventListener('mousedown', onEvent);
    // item.addEventListener('mouseup', onEvent);

    // item.addEventListener('mousemove', onEvent);
    // item.addEventListener('mouseout', onEvent);
    // item.addEventListener('mouseover', onEvent);

    

}

// function onClickAttr() {
//     console.log('bad click')
// }