Vue.component('Nav-Item', {
    props:{
        foo: Number, 
        current: String
    },
    data() {
        return {
      
        }
    },
    template: `
    <div 
        class="navigation__item" 
        :class='current'>
        {{current}}
    </div>
`
});