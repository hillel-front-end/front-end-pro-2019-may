<template>
  <div class="hello">
    inChild: <input type="text" v-bind:value="propValue" @input="onInput">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:['propValue'],
  data() {
    return {
    }
  },
  methods: {
    onInput(event) {
      console.log(event.target.value, 'value in child')
      this.$emit('transfer', event.target.value);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
