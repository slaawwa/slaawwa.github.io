
<template lang="pug">
    .hobby(v-if="lang")
        h3.title-icon.pull-left
            i(:class="'icofont-' + icon")
        .title
            h3.border-black {{lang.title}}
        .row(v-for="i in lang.items")
            .col-xs-5.col-xs-offset-1 
                .contentHobby
                    p.hobby-name(v-html="i.name")
                    p.hobby-helper.muted.pull-left(v-html="i.helper")
            .col-sm-6
                p.description(v-html="i.desc")
</template>

<script>

    export default {
        props: {
            icon: String,
            lang: {
                title: String,
                result: String,
                items: [{
                    name: String,
                    helper: String,
                    desc: String,
                }],
            },
        },
    }

</script>

<style lang="less" scoped>
    .contentHobby {
        max-width: 230px;
    }
</style>
