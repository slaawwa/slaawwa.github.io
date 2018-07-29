
import Vue from 'vue'

import App from './App.vue'

import Home from './Home.vue'
import Users from './Users.vue'
import Resume from './Resume.vue'
import Portfolio from './Portfolio.vue'

import PageHeader from './PageHeader.vue'
import PageGoal from './PageGoal.vue'
import PageProfile from './PageProfile.vue'
import PageList from './PageList.vue'
import PageSkills from './PageSkills.vue'
import PageHobby from './PageHobby.vue'

Vue.component('page-header', PageHeader)
Vue.component('page-goal', PageGoal)
Vue.component('page-profile', PageProfile)
Vue.component('page-list', PageList)
Vue.component('page-skills', PageSkills)
Vue.component('page-hobby', PageHobby)

export default {
    App,
    Home,
    Users,
    Resume,
    Portfolio,

    PageHeader,
    PageGoal,
    PageProfile,
    PageList,
    PageSkills,
    PageHobby,
}
