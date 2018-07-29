
import Vue from 'vue'
import VueRouter from 'vue-router'
// import { store } from './store'

import comp from './comp'

import '../index/style.less'
import './bootstrap2.less'
import './font-awesome.less'
import './index.less'

import './img/flags.jpg'

Vue.use(VueRouter)

// const base = '/vue-routing.html'
// const base = '/'

let vm

const routes = [
    /*{
        path: '/',
        component: App,
    }, */{
        path: '/',
        component: comp.Resume,
    }, {
        path: '/portfolio',
        component: comp.Portfolio,
    }, {
        path: '/home',
        component: comp.Home,
    },
    { path: '/ukr', redirect: '/lang/ua'},
    { path: '/eng', redirect: '/lang/en'},
    {
        path: '/lang/ua',
        alias: ['/lang/en'],
        beforeEnter: (to, from, next) => {
            const lang = to.path.replace('/lang/', '')
            if (vm) {
                vm.lang = lang
            } else {
                localStorage.lang = lang
            } 
            next('/')
        }
    }, {
        path: '*',
        redirect: '/'
    },
]

const router = new VueRouter({
    // mode: 'history',
    routes,
})

vm = new Vue({
    el: '#app',
    // store,
    router,
    // render: h => h(App)
    data: {
        menuLangRightOpen: false,
        menuRightOpen: false,
        menuOpen: false,
        // TODO: Need remove
        menu: {left: {items: []}},
        lang: localStorage.lang || 'ua',
    },
    watch: {
        lang(to/*, from*/) {
            localStorage.lang = to
            this.menuLangRightOpen = false
        },
        '$route.fullPath'(to, from) {
            // console.log('to:', to, 'from:', from)
            window.scrollTo({top: 0})
            this.menuOpen = false
        },
    },
    methods: {
        menuClick(item, isTop=false, withoutPush=false) {
            window.location = '/'
        },
    },
    created() {
        window.r = this.$route
        window.rr = this.$router
    },
    // components,
})

// router.beforeEach(function (to, from, next) {
//   if (to.path === '/ua' || to.path === '/en') {
//     localStorage.lang = to.path.replace('/', '')
//     vm.lang = localStorage.lang
//     next('/')
//   } else {
//     next()
//   }
// })

// vm.vm.$mount('#app')
