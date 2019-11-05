<template>
    <header class="col-md-12 fixed-top">
        <Loader v-if="loading" :show-full="true"/>
        <div class="container nav">
            <router-link :to="{name: 'welcome'}"><img src="../../assets/img/rantton_logo.png" class="logo">
            </router-link>
            <ul class="nav-bar">
                <li>
                    <router-link :to="{name: 'welcome'}" v-if="isAuth">
                        <button class="rant-btn" @click="logout()" style="font-size: 15px; margin: 0;">Logout</button>
                    </router-link>
                    <router-link :to="{name: 'login'}" v-else>
                        <button class="rant-btn" style="font-size: 15px; margin: 0;">Log in</button>
                    </router-link>
                </li>
                <!-- <li><a href=""><i class="fa fa-bell"></i></a> </li> -->
                <li>
                  <router-link to="/notification">
                      <button type="button" class="" data-toggle="dropdown" style="background: transparent;"><i class="fa fa-bell"></i></button>
                  </router-link>

                </li>
                <li class="emojiss"><a href=""><img src="https://twemoji.maxcdn.com/2/72x72/1f620.png"
                                                    class="menu-icon"> </a></li>
            </ul>
        </div>
    </header>
</template>
<script>

    import {notifyRantService} from '../../services/notification.service';
    import Loader from '../Loader';

    export default {
        name: "HeaderNav",
        components: {Loader},
        data() {
            return {
                loading: false,
                notifications: [],
                isAuth: false,
            }
        },
        methods: {
            async logout() {
                this.$store.dispatch("UNSET_USER");
                this.isAuth = this.$store.getters.IS_AUTHENTICATED;
            },
        },

        async created() {
            this.isAuth = this.$store.getters.IS_AUTHENTICATED;
            await notifyRantService.notifyRant()
                .then((response) => {
                    this.loading = false;
                    this.notifications = response
                }).catch((err) => window.console.log(err));
        },


    }
</script>
