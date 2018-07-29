'use strict';

import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        registrations: [],
        users: [
            {id: 1, name: 'Max', registred: false},
            {id: 2, name: 'Ann', registred: false},
            {id: 3, name: 'Chris', registred: false},
            {id: 4, name: 'Sven', registred: false},
        ],
    },
    getters,
    actions,
    mutations,
});
