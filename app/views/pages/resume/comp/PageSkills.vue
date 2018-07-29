
<template lang="pug">
    .skills(v-if="lang")
        h3.title-icon.pull-left
            i(:class="'icofont-' + icon")
        .title
            h3.border-black {{lang.title}}
        .row-fluid
            .span12.offset0
                .row-fluid
                    .span6(v-for="skill in lang.items")
                        .row-fluid.topLine(v-for="i in skill", :key="i.name")
                            .span3.offset1
                                .skill-name(v-html="i.name")
                            .span8
                                .row-fluid.description(v-for="s in i.lines", :key="s[0]")
                                    .span5
                                        p {{ s[0] }}
                                    .span7
                                        span(v-for="i in 7")
                                            i(:class="'icofont-star' + extraClass(s[1], i)")
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
                    result: [String],
                }],
            },
        },
        methods: {
            extraClass(s/*tars*/, i/*ndex*/) {
                const hStar = s % 1? Math.floor(s): false
                if (hStar === i - 1) {
                    return '-half-empty'
                } else if (s < i) {
                    return '-empty'
                }
                return ''
            },
        },
    }

</script>

<style lang="less" scoped>
    .description .span7 {
        width: 115px !important;
        float: right !important;
        display: inline-block !important;
    }
</style>
