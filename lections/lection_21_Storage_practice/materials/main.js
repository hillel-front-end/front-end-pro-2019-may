console.log('Lection_20');




window.onload = function() {

var blocks = document.querySelectorAll('.block');


console.log(blocks, 'blocks');

for(var i = 0; i < blocks.length; i++) {
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
         //    localStorage
     
     
              console.log(i, 'i');
            console.log(counter, 'counter');
     
         }

    })(i));
}

}


