<template>
    <div class="popup" :style="class"> 
        <header> 
            <slot name='header'> 
            </slot>
        </header>
        <br />
        <div class="body"> 
            <slot name='body'> 
            </slot>
        </div>
        <br />
        <footer> 
            <slot name='footer'> 
            </slot>
        </footer>
    </div>
</template>


<script>
import mainMixin from '../mixins/mainMixin';

export default {
    name:'PopUp',
    props: {
        class: String
    }
    mixins: [mainMixin]
}
</script>

<style lang="">
    .xl {
        width: 1980px
    }

    .l {
        width: 1100px;
    }
</style>