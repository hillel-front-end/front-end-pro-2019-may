/* 
  1. Работа с экземпляром. Интерполяция, привязка данных
*/
// let config = {
//     el: '#app',
//     data: {
//       x: 'Hello world',
//       obj:{
//         foo: 123123
//       },
//       isVisible: false,
//       message: 'lorem asdasdasd sadasd s'
//     },
//     methods: {
//       getValue (separator) {
//         return this.message + separator;
//       }
//     }
// };

// var app = new Vue(config);

// // console.log(app);

// setTimeout(() => {
//   console.log(app.message = '123');
// }, 3000)

// ------------- 2. Работа атрибутами v-bind:, v-html: --------------------------
//  id, href, class, style, disabled

// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     value: 0,
//     className: 'active',
//     worn: true,
//     success: false,
//     href:'http:/foo.com',
//     appearence: 'transition: .5s; color: red; margin-bottom: 100px;',
//     message: 'Вы загрузили эту страницу в: ' + new Date().toLocaleString()
//   },
//   methods: {
//     valid () {
//       let isValid = false;

//       if (!isValid) {
//         this.success = true;
//       }
//     }
//   } 
// });


// app2.className = 'hiddenFoo';

// setInterval(() => {
//  app2.value = Math.floor(Math.random() * 60)
// }, 1000)

// Сокращение v-bind: v-bind:style  === :style

//  ------- 3.---------------
// v-if

// var app3 = new Vue({
//   el: '#app-3',
//   data: {
//     i: 1,
//     seen: true,
//     currentPage: 'page1' // видимость блоков
//   },
//   methods: {
//     changeCurrentPage () {
//       this.i += 1;
//       // console.log(i, 'i');
//       this.currentPage = `page${this.i}`;
//     }
//   }
// })

// setTimeout(() => {
//   app3.seen = false;
// }, 2000)


// // // ---------------------------------------

// var app4 = new Vue({
//   el: '#app-4',
//   data: {
//     arr: [
//       1, 8, 9, 6
//     ],
//     list: [
//       {
//         text: 'Изучить JavaScript',
//         className: 'save'
//       },
//       {
//         text: 'jasnf',
//         className: 'edit'
//       },
//       {
//         text: ''
//       },
//       {
//         text: 'Создать что-нибудь классное'
//       },
//       {
//         text: 'Создать что-нибудь классное'
//       },
//       {
//         text: 'Создать что-нибудь классное'
//       },
//       {
//         text: 'Создать что-нибудь еще классное'
//       }
//     ]
//   }
// });




// // // ---------------------------------------

// var app5 = new Vue({
//   el: '#app-5',
//   data: {

//     list: [{title: 'save'}, {title: 'copy'}, {title: 'edit'}, {title: 'run'}]
//   },
//   methods: {
//     foo(event, value, index){
//       console.log('click',event, value, index, );

//       // this.list.splice(index, 1);
//       this.list.push({title: value});

//     },
//     // mouseover(ev){
//     //   this.counter = ev.offsetX;
//     // },
//   }
// })

// // // ---------------------------------------

// var app6 = new Vue({
//   el: '#app-6',
//   data: {
//     message: 'Привет, Vue!',
//     switcher: false,
//     isActive: 5,
//     hasError: true
//   }
// })


// -----------------------------
