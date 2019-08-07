console.log('Lection_20');




window.onload = function() {

var blocks = document.querySelectorAll('.block');


console.log(blocks, 'blocks');

for(var i = 0; i < blocks.length; i++) {
    blocks[i].querySelector('.counter').innerHTML = localStorage.getItem('id' + i) || 0;
    
    blocks[i].addEventListener('click', (function(i){
        console.log(i, 'i');

        return function (event) {
            var target = event.target;
           
            if (target.classList.contains('button')) {
                setCounter(i, this);
            }
        
        }


        function setCounter(i, self) {
            var counter = self.querySelector('.counter');
            var count = ++self.querySelector('.counter').innerHTML;
     
            counter.innerHTML = count;
            localStorage.setItem('id'+ i, count);
            
     
              console.log(i, 'i');
            console.log(counter, 'counter');
     
         }

    })(i));
}



var data = [
    {
        name:"Valera",
        lastName:"Petrov",
        age: 34,
        isMarried: false
    }, 
    {
        name:"Valera",
        lastName:"Pety",
        age: 34,
        isMarried: true
    },
    {
        name:"Valera",
        lastName:"Ternavsky",
        age: 34,
        isMarried: false
    }
];

//forEach

// data.forEach(function(item, index, data) {
//     console.log(item, index, 'item');
// });

// filter -> []

// var foo = data.filter(function(person, index, data) {
//     console.log(person, index)
//     return person.age > 18 && person.isMarried;
// });


// map -> []

// var foo = data.map(function(person, index, data) {
//     if(index == 1) {
//         return 'Hello world';   
//     }
    
//     return person.lastName + ' FTP ';
// });


//some/every -> true/false

var some = data.some(function(person, index, data) {
    
    return person.age > 30;
});

var every = data.every(function(person, index, data) {
    
    return person.age > 30;
});
    
    

console.log(some, 'some');
console.log(every, 'every');
var sum = data.reduce(function(sum, person) {
    
    return person.age + sum;
}, 0);

}


