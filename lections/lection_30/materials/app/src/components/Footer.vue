<template>
    <div>
            Footer Component:
        <button @click="seeRef('Hello from Footer')">Click</button>
    </div>
</template>


<script>
import mainMixin from '../mixins/mainMixin';

export default {
    name:'Footer',
    mixins: [mainMixin],
    methods: {
        seeRef() {
            console.log(this.$refs.foo);
        }
    }
}
</script>