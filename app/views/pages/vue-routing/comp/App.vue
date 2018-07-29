
<template lang="pug">
    #app
        h1.app Let's go App
        p
            button(@click="goHome('/home')") Go Home
            | 
            button(@click="goHome('/users')") Go Users
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            goHome(link) {
                this.$router.push(link);
            },
        },
    }
</script>

<style scoped>
    #app h1.app {
        color: navy;
    }
</style>
