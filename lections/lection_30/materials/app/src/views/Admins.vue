<template>
    <div>
        <h1>Component -  ADMINS</h1>
        <div class="buttons-group">
            <router-link to="/admins/gallery">gallery</router-link>
            <br />
            <router-link to="/admins/contacts">contacts</router-link>
            <br />
        </div>
        <div>
            <router-view>  </router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Admins"
    }
</script>

<style scoped>

</style>