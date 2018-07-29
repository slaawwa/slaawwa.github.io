'use strict';

/**
 *
 * Path 1: https://youtu.be/4lk9-PYensI
 * Path 2: https://youtu.be/ZYzAwFi5Xzo
 *
 */

// main.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import { store } from './store';

import App from './comp/App.vue';
import Home from './comp/Home.vue';
import Users from './comp/Users.vue';

Vue.use(VueRouter);

// const base = '/vue-routing.html';
// const base = '/';

const routes = [
    {
        path: '/',
        component: App,
    }, {
        path: '/user/:teamID',
        component: Users
    }, {
        path: '/users',
        component: Users
    }, {
        path: '/home',
        component: Home
    },
];

const router = new VueRouter({
    // mode: 'history',
    routes,
});

new Vue({
    el: '#app',
    store,
    router,
    // render: h => h(App)
})
