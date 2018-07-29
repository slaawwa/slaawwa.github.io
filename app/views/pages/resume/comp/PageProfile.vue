
<template lang="pug">
    .row.profile(v-if="lang")
        .col-sm-6
            h3.title-icon.pull-left
                i(:class="'icofont-' + icon")
            .title
                h3.border-black {{lang.title}}
            //- .left
        //- each info, lang in profile
        .col-sm-6.col-sm-offset-0.col-xs-11.col-xs-offset-1.rightCol
            //- each i in info
            .title.display-table(
                    v-for="i in lang.items"
                )
                        p.border-black {{i.key}}
                        //- v-tmpl.pull-right(:template="i.val")
                        //- .pull-right(v-tmpl="i.val")
                        //- .pull-right {{ i.val }}
                        .pull-right(v-html="i.val")
        //- .rightCol
                //- if (i === 'profile')
    //- .hobby(v-if="lang")
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

    import Vue from 'vue'

    export default {
        props: {
            icon: String,
            lang: {
                title: String,
                items: [{
                    key: String,
                    val: String,
                }],
            },
        },
        methods: {
            getOld(date='1992/02/29') {
                // return Math.floor((new Date() - new Date(date)) / (1000*60*60*24*365.25));
                return new Date(Date.now() - new Date(date)).getUTCFullYear() - 1970;
            },
            render1(html) {
                window.Vue = Vue
                window.vm = this

                let c = Vue.component({
                  template: `<div>Name: {{name}}</div>`,
                  data() {
                    return {name: 'Slaawwa'}
                  },
                    render(h) {
                        return h('div', {}, ['st'])
                    }
                })

                // let ccc = new c({data() {return {name: 's'}}}).$mount()

                return c
                return Vue.extend({
                    template: html,
                })
            },
        },
        created() {
            // window.Vue = Vue
            // console.log(' => ', this.lang)
            // setTimeout(() => console.log(' => ', this.lang), 500)
        },
        // directives: {
        //     'tmpl': {
        //         inserted(el) {
        //             console.log('el::', el)
        //         },
        //         bind(el, binding, vnode) {
        //             var s = JSON.stringify
        //             el.innerHTML =
        //               'name: '       + s(binding.name) + '<br>' +
        //               'value: '      + s(binding.value) + '<br>' +
        //               'expression: ' + s(binding.expression) + '<br>' +
        //               'argument: '   + s(binding.arg) + '<br>' +
        //               'modifiers: '  + s(binding.modifiers) + '<br>' +
        //               'vnode keys: ' + Object.keys(vnode).join(', ')
        //         }
        //     }
        // },
        // components: {
        //     'v-tmpl': {
        //         props: {
        //             template: String
        //         },
        //         render(h) {
        //             return h({
        //                 template: `<div>${this.template}</div>`,
        //                 methods: {
        //                     getOld(date='1992/02/29') {
        //                         // return Math.floor((new Date() - new Date(date)) / (1000*60*60*24*365.25));
        //                         return new Date(Date.now() - new Date(date)).getUTCFullYear() - 1970;
        //                     },
        //                 },
        //             })
        //         },
        //     }
        // },
    }

</script>

<style lang="less" scoped></style>
