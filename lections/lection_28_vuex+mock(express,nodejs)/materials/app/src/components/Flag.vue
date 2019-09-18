<template>
    <div class="flag">
        Component FLag:{{name}}
        <div v-for="(item, $index) in name" :key="$index"> 
            <!-- <input type="text" @input="inputValue" v:bind:value="name">     -->
        </div> 

        <div>
            <button @click="sendAjax" > send</button>
        </div>
    </div>
</template>

<script>
// import store f
export default {
    computed: {
        name() {
            return this.$store.state.name;
        }
    },
    methods: {
        inputValue(event){
            console.log('oninput');
            let value = event.target.value;

            this.$store.commit('setName', value);
        },
        sendAjax() {
            console.log('click');
            this.$store.dispatch('asyncSetName');
        }
    }
}
</script>


<style lang="scss">

</style>
