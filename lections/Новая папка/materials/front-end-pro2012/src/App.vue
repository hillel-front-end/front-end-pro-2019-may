<template>
  <div id="app">
    Parent: <input type="text" v-model="goodValue">{{goodValue}}
    <hr />

    <HelloWorld @transfer="getValue" :propValue="goodValue"/>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data(){
    return {
      goodValue: ''
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    getValue(value) {
      console.log('Working ..getValue', value)
      this.goodValue = value;
    }
  }
}
</script>

<style>
</style>
