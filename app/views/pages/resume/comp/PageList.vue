
<template lang="pug">
    div(v-if="lang")
        h3.title-icon.pull-left
            i(:class="'icofont-' + icon")
        .title
            h3.border-black {{lang.title}}
        .row-fluid(v-for="i in lang.items", :key="i.name")
            .span6
                .pull-right
                    p.list-name(v-html="i.name")
                    p.list-helper.muted.pull-right {{i.helper}}
            .span6
                p.description.it_block(v-html="i.desc")
                p.description.it_block
                    | {{lang.result}}:
                    ol.result-block(v-if="i.result.length > 1")
                        li(v-for="result in i.result", :key="result") {{result}}
                    template(v-else)
                        .result-block {{i.result[0]}}
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
    }

</script>

<style lang="less" scoped>
    .description.it_block:last-child {
        text-indent: 10px;
        .result-block {
            text-indent: 0;
        }
    }

    .list-name {
        margin: 0px;
        font-size: 1.2em;
        color: black;
    }

    .list-helper {
        margin: 0px;
    }

    ol.result-block {
        padding: 0;
        li {
            list-style-position: inside;
        }
    }
</style>
