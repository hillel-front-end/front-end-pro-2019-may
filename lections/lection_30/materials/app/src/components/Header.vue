<template>
    <div>
        Header Component:<br/>

        <PoPup> 
            <template v-slot:header>
                <div>
                    Header
                </div>
            </template>

            <template v-slot:body>
                <div>
                    <button @click="getFoo('Hello from Header')">Click</button>
                </div>
            </template>

            <template v-slot:footer>
                <div>
                    Footer
                </div>
            </template>
        </PoPup>
    </div>
</template>


<script>
import mainMixin from '../mixins/mainMixin';
import PoPup from './PopUp'
export default {
    name:'Header',
    mixins: [mainMixin],
    components: {
        PoPup
    }
}
</script>