console.log('Lection 7');

// --------- recursive --------
function sum(i) {
    if (3 < 3) {
        console.log(i, 'i');
        i++;
        sum(i);
    }
}


sum(0);


function sumToArray(arr) {
    if (arr.length == 1) {
        return arr[0];
    } else {
        return arr.pop() + sumToArray(arr);
    }
}

// --------- Object --------

var human = {
    name: 'Valera',
    old: 20,
    teacher: true,
    swim: function () {
        console.log('..swiming');
    }
}


console.log(human, 'human');
console.log(human.name, 'human.name');

console.log(human.front, 'human.front')

human.front = true;

console.log(human.front, 'human.front');
var keyHuman = 'front';

human['front'] = false;

console.log(human[keyHuman], 'key == front');

keyHuman = 'old';

console.log(human[keyHuman],  'key == old');


for(var key in human) { // key in obj
    console.log(key, human[key], 'key');
}

delete human.old;

console.log(human, 'human');

// swim();

human.swim();

var ModuleModal = (function (option) {

    var modal = {
        name: 'PopUp',
        width: '200px',
        height: '300px',
        open: function (width, height) {
            alert(height + 'px' + ' ' + width + 'px');
        },
        setWidth: function (width) {
            (width)? modal.width = width : modal.width = modal.width;


            console.log(modal.width , 'modal.width ')
        },
        createModal: function () {

        }
    }

    return modal;

})({
    width: 100,
    height: 100
})

ModuleModal.setWidth(400)
ModuleModal.open(300, 300);



