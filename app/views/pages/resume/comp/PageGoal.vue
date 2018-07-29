
<template lang="pug">
    //- Goal
    .row-fluid.goal
        blockquote.well.text-center
            i.icofont-quote-left
            |  {{title}} 
            i.icofont-quote-right
</template>

<script>

    export default {
        name: 'page-goal',
        props: {
            title: String,
        },
    }

</script>

<style lang="less" scoped></style>
