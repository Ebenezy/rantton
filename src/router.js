import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login/Login.vue';
import Store from './store/store';
import HomePage from './views/HomePage/HomePage.vue';
import Register from './views/SignUpPage/SignUpPage.vue';
import Notification from './components/Homepage/Notification'


Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.NODE_ENV === 'production' ? '/rantton' : '/',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                title: 'Login',
                public: true,  // Allow access to even if not logged in
                onlyWhenLoggedOut: true
            }
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                title: "Signup",
                public: true,  // Allow access to even if not logged in
                onlyWhenLoggedOut: true
            }
        },

        {
            path: '/logout',
            name: 'logout',
        },
        {
            path: '/',
            name: 'welcome',
            component: HomePage,
            meta: {
                public: true,  // Allow access to even if not logged in
                onlyWhenLoggedOut: true
            }
        },
        {
            path: '/notification',
            name: 'notification',
            component: Notification,
            meta: {
                public: false,  // Allow access to even if not logged in
                onlyWhenLoggedOut: false
            }
        },

        {
            path: '/home',
            name: 'Home',
            component: HomePage,
            meta: {
                public: true,  // Allow access to even if not logged in
                onlyWhenLoggedOut: false
            }
        },


    ]
});


router.beforeEach((to, from, next) => {
    const isPublic = to.matched.some(record => record.meta.public);
    const hasTitle = to.matched.some(record => record.meta.title);
    const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut);
    const loggedIn = Store.getters.IS_AUTHENTICATED;

    document.title = (hasTitle) ? to.meta.title + " - Rantton" : "Rantton";

    if (!isPublic && !loggedIn) {
        return next({
            name: 'login',
        });
    }

    // Do not allow user to visit login page or register page if they are logged in
    if (loggedIn && onlyWhenLoggedOut) {
        return next({name: 'Home'});
    }

    next();
});

export default router;
