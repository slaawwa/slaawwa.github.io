
export default {
    register({commit}, user) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('register', user);
                resolve();
            }, 1000);
        });
    },
    unregister(ctx, user) {
        setTimeout(() => {
            ctx.commit('unregister', user);
        }, 1000);
    },
} 
