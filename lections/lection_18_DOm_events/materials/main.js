/*
   1. attrs: getAttribute, setAttribute, removeAttribute,
    dataset,
   2. createElement
   3. appendChild
   4. Навесить событие на дин. элем.
   5. cycles event
   ?6. navigation with node

*/



window.onload = function() {
    // var div = document.querySelector('.foo');

    // console.dir(div, 'div');
    // div.setAttribute('cry', '12321');
        // div.cry = 'aaaaa';
    //  console.log(div.getAttribute('foo'));
        // setTimeout(function() {
        //     div.removeAttribute('cry');
        // }, 4000)

// ------------------ dataset -----------


    // console.log(div.dataset.name, 'name');


    // var div = document.createElement('div');
    
    // div.classList.add('active');
    // div.dataset.action = 'getAllStudets';

    // div.innerText = 'SomeText';
    // var span = document.createElement('span');
    // span.innerHTML = "text";

    // div.appendChild(span);
    
    // document.querySelector('.foo').appendChild(div);


    // console.dir(div, 'div');

    var container = document.querySelector('.container');


    var modalMessages = [
        {name:'Valera', messages: 'Bla bla bla ....'},
        {name:'Valera', messages: 'Bla bla bla ....'},
        {name:'Valera', messages: 'Bla bla bla ....'},
        {name:'Valera', messages: 'Bla bla bla ....'},
    ]
    var fragment = document.createDocumentFragment(); // псевдо тег, растворится после аппенда в ДОм

    console.dir(fragment, 'fragment');
    
    for(var i = 0; i < modalMessages.length; i++) {
        var message = document.createElement('section');
        message.innerHTML = modalMessages[i].messages;
        fragment.appendChild(message);

    }

    container.appendChild(fragment);


    setTimeout(function(){
        // document.body.removeChild(container); 
        container.remove();
    }, 5000)


} 