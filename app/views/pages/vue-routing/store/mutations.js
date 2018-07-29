
export default {
    register(state, user) {
        console.log('=>user:', user)
        console.log('=>user.id:', user.id)
        const date = new Date;
        const u = state.users.find(u => {
            console.log('u.id::', u.id)
            console.log('user.id::', user.id)
            return u.id === user.id;
        });
        if (u) {
            user.registred = u.registred = true;
            const registration = {
                id: user.id,
                name: user.name,
                date: date.getMonth() + '/' + date.getDay(),
            };
            state.registrations.push(registration);
        } else {
            console.log('user not found: 404')
        }
    },
    unregister(state, user) {
        console.log('=>state.users:', state.users)
        console.log('=>user:', user)
        console.log('=>user.id:', user.id)
        const u = state.users.find(u => {
            return u.id === user.id;
        });
        console.log('=>u:', u)
        if (u) {
            user.registred = u.registred = false;
            const registration = state.registrations.find(u => {
                return u.id === user.id;
            });
            state.registrations.splice(state.registrations.indexOf(registration), 1);
        } else {
            console.log('user not found: 404')
        }
    },
} 
