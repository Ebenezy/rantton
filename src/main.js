import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import {ApiService} from './services/api.service'
import VueToastr2 from 'vue-toastr-2'
import 'vue-toastr-2/dist/vue-toastr-2.min.css'
import VModal from 'vue-js-modal'
import VueCarousel from 'vue-carousel';
import VueSocketIO from 'vue-socket.io';
import VueMoment from 'vue-moment'

window.toastr = require('toastr');


// Set the base URL of the API
ApiService.init(process.env.environment !== 'production' ? 'http://198.58.110.127:3000/api/v1' : 'http://198.58.110.127:3000/api/v1');
//  ApiService.init('http://198.58.110.127:3000/api/v1')

if (store.dispatch('isLoggedIn'))
    ApiService.setHeader(store.getters.GET_AUTH_TOKEN);
else
    store.dispatch('UNSET_USER').then(() => {
    });

Vue.config.productionTip = false;

Vue.use(VModal, {dialog: true, dynamic: true, injectModalsContainer: true});
Vue.use(VueToastr2);
Vue.use(VueCarousel);
Vue.use(VueMoment);
Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://198.58.110.127:3000',
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    }
    // options: { path: "/socket/" } //Optional options
}));


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');


