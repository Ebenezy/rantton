import Vue from 'vue'
import Vuex from 'vuex'
import Users from './modules/user/users'
import Rants from './modules/rant/rants'
import Sockets from './modules/sockets/sockets';
import VuexPersist from 'vuex-persist'
import Cookies from 'js-cookie';

Vue.use(Vuex);

const vuexPersistLocal = new VuexPersist({
    key: '**-rant-data-00-**',
    storage: localStorage
});

const vuexPersistCookie = new VuexPersist({
    key: '##-rantton-rest-store-cookie-data-00',
    storage: localStorage,
    modules: ['User'],
    restoreState: (key, storage) => Cookies.getJSON(key),
    saveState: (key, state, storage) => Cookies.set(key, state, {expires: 3}),
    filter: (mutation) => mutation.type === 'REMOVE_AUTH' || mutation.type === 'SET_AUTH_TOKEN' || mutation.type === 'SET_USER_DATA'
});

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        User: Users,
        Rant: Rants,
        Sockets
    },
    plugins: [vuexPersistLocal.plugin, vuexPersistCookie.plugin]
});