'use static';

import Vue from 'vue';
import VueRouter from 'vue-router';
// import { store } from './store';

import PageHeader from './comp/PageHeader.vue';
import Resume from './comp/Resume.vue';
import Portfolio from './comp/Portfolio.vue';

import '../index/style.less';
import './bootstrap2.less';
import './font-awesome.less';
import './index.less';

Vue.use(VueRouter);

Vue.component('page-header', PageHeader);


const routes = [
    {
        path: '/',
        component: Resume,
    }, {
        path: '/portfolio',
        component: Portfolio,
    }, {
        path: '*',
        redirect: '/'
    },
];

const router = new VueRouter({
    // mode: 'history',
    routes,
});

new Vue({
    el: '#app',
    // store,
    router,
    data: {
        menuRightOpen: false,
        menuOpen: false,
        // TODO: Need remove
        menu: {left: {items: []}},
    },
    watch: {
        '$route.fullPath'(to, from) {
            // console.log('to:', to, 'from:', from);
            window.scrollTo({top: 0})
            this.menuOpen = false;
        },
    },
    methods: {
        menuClick(item, isTop=false, withoutPush=false) {
            window.location = '/';
        },
    },
    created() {
        window.r = this.$route;
    },
})

