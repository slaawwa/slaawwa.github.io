<template lang="pug">
    div.h.hide
        h1 {{ message }}
</template>

<script>
    export default {
        data() {
            return {
                message: 'Hello, world!!!'
            }
        }
    }
</script>

<style lang="less">
    @green: #5B83AD;
    div.h h1 {
        color: @green;
    }
</style>
