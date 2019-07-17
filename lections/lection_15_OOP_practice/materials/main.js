// var obj = { a: 1 }; 

// (function() {  /// var obj = obj
//   var  obj = LE.scope.obj;
//   LE = {obj} 

//   LE.obj = {
//       a:2
//   }

//     return o
// })(obj)

// (function f(){
//     LE = {}
//     function f(){ return 1; }
//     LE = {f:func() { return 1}}
//     function f(){ return 2; }
//     LE = {f:func() { return 2}}
//     return f();
  
//   })();


  // var mass = [1,2,3];

  // function isEvent (value) {
  //   return  value % 2 == 0
  // }  

  // function filter(arr, func) {
  //   // console.log(arr,'arr')
  //   // console.log(if(func(arr[i]), 'func')
  // }

  // filter([1,2,3], isEvent);


  // new SuperArray(n, m, { min: 10, max: 55 }),


  function SuperArray(n, m, option) {

    var arr = new Array(n);

    for(var i = 0; i < arr.length; i++) {
      arr[i] = new Array(m);

      for(var j = 0; j < arr[i].length; j++) {
        arr[i][j] = Math.round(Math.random() * (option.max - option.min) + option.min);
      }
    }

    this.arr = arr;

  }

  SuperArray.prototype.render = function() {
    console.log('rednder')
}
  var inst = new SuperArray(5, 5, {max: 15, min: 10});
  var inst2 = new SuperArray(5, 5, {max: 15, min: 10});
  var inst3 = new SuperArray(5, 5, {max: 15, min: 10});

  console.log(inst, 'inst')
  console.log(inst2, 'inst2')
  console.log(inst3, 'inst2')