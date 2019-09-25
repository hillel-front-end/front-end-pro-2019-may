import {mapActions} from 'vuex';

let mainMixin = {
    methods: {
        ...mapActions(['asyncSetName']),
        getFoo(value) {
            console.log(value, 'value');
        }
    },
    computed: {
        fullName() {
            return 'asdasd';
        }
    }
}

export default mainMixin;