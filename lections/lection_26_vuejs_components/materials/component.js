Vue.component('Nav-Item', {
    props:{
        foo: String, 
        current: Number
    },
    data() {
        return {
      
        }
    },
    template: `
    <div class="navigation__item" :class='current'>
        {{current}}
    </div>
`
});


Vue.component('Navigation', {
    data() {
        return {
            a: 123,
            navigationList: ['Home','News', 'Contacts', 'Gallery']
        }
    },
    template: `
    <div class="navigation">
        <Nav-Item 
        v-for="(item, $index) in navigationList"
        :key="$index" 
        v-bind:current="a" 
        v-bind:foo="item"> </Nav-Item>
    </div>
`
});
let config = {
    name: "Valera",
    list: ["red"]
  };

var app = new Vue({
    el:'#app',
    data: config
});


