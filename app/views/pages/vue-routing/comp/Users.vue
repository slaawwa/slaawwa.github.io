
<template lang="pug">
    div
        h1.users Let's go Users
        div(v-if="$route.params.teamID")
            | Team ID is: {{ $route.params.teamID }}
            div NAME: {{ user.name }}
            div
                button(@click='changeRegistration(user)')
                    span(v-if='user.registred' title="Click to Unregistred") Registred
                    span(v-else title="Click to Registered") Unregistred
        div(v-else)
            div Total: {{ total }}
            ul
                li(v-for="u in registrations")
                    p
                        | router-link: 
                        router-link(:to="'/user/'+u.id")
                            | {{ u.name }}
                            | \#{{ u.id }}
                            |
                            span(v-if="u.registred") (+)
                            span(v-else) (-)
            div Unregistred
            ul
                li(v-for="u in users")
                    p
                        | a: 
                        a(:href="'#/user/'+u.id") {{ u.name }}
                    p
                        | router-link: 
                        router-link(:to="'/user/'+u.id")
                            | {{ u.name }}
                            | \#{{ u.id }}
                            |
                            span(v-if="u.registred") (+)
                            span(v-else) (-)
</template>

<script>

    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
                user: {},
            }
        },
        // TODO: Doesn't work( with spread
        // computed: {
        //     /*registrations() {
        //         return this.$store.getters.registrations;
        //     },*/
        //     users() {
        //         return this.$store.getters.unregisteredUsers;
        //     },
        //     /*total() {
        //         return this.$store.getters.totalRegisterations;
        //     },*/
        //     ...mapGetters({
        //         registrations: 'registrations',
        //         total: 'totalRegisterations',
        //     }),
        // ),

        computed: Object.assign({
                users() {
                    return this.$store.getters.unregisteredUsers;
                },
            },
            mapGetters({
                registrations: 'registrations',
                total: 'totalRegisterations',
            }),
        ),

        watch: {
            '$route.params.teamID' (to, from) {
                console.log('to:', to, 'from:', from);
                // console.log('this.$store:', this.$store);
                // console.log('this.$store.getters.registrations:', this.$store.getters.registrations);
                if (to) {
                    this.user = this.$store.state.users.filter(u => {
                        console.log('u::', u.id, +to)
                        return u.id === +to;
                    })[0] || {};
                }
            },
        },
        methods: {
            changeRegistration(user) {
                console.log('user::', user);
                console.log('user:1:', user.registred);
                if (user.registred) {
                    this.$store.dispatch('unregister', user);
                    // this.$store.state.registrations.splice(this.$store.state.registrations.indexOf(user), 1);
                } else {
                    this.$store.dispatch('register', user);
                    // this.$store.commit('register', user);

                    // this.$store.state.registrations.push(user);
                }
                // user.registred = !user.registred;
                console.log('user:2:', user.registred);
            },
        },
        created() {
            console.log('this.$route.params.teamID:', this.$route.params.teamID);
            console.log('user:1:', this.user.registred);
            if (this.$route.params.teamID) {

                this.user = this.$store.state.users.filter(u => {
                    return u.id === +this.$route.params.teamID;
                })[0] || {};
                console.log('user:2:', this.user.registred);
            }
            console.log('user:', this.user);
        },
    }
</script>

<style scoped>
    #app h1.users {
        color: green;
    }
</style>
