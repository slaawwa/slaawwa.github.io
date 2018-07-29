
export default {
    unregisteredUsers(state) {
        return state.users.filter(u => !u.registred);
    },
    registrations(state) {
        return state.registrations;
    },
    totalRegisterations(state) {
        return state.registrations.length;
    },
} 
