<template>
    <div>
        <img src="../../assets/img/rant-bg.jpg" class="poster">
        <section class="rantton-bg ">
            <Loader v-if="loading" :show-full="true" loading-text="Please Wait..."/>
            <SignUpNav/>
            <div class="container">

                <ul class="home-up"></ul>

                <div class="wrapper pb-50">
                    <div class="row">
                        <div class="col-md-3 ">

                        </div>
                        <div class="col-md-6 text-center">
                            <div class="card-signup mb-20">
                                <h2 class="text-center blue-text">Rantton Sign Up</h2>
                                <form @submit.prevent="Register">
                                    <div class="login_here">
                                        <input class="form-control3 autoExpand" rows='3' data-min-rows='3'
                                               v-model="password" name="password" type="password"
                                               placeholder="Password of your choice..." maxlength="30">
                                        <button class="login-btn">Proceed</button>
                                    </div>
                                </form>
                                <p class="pd-5" v-if="suggested_password != null">Password Suggestions:</p>
                                <ul class="pw-suggests" v-if="suggested_password != null">
                                    <li v-for="(suggested, index) in suggested_password.suggestions" v-bind:key="index">
                                        <button @click="getSelectedPassword(suggested)"
                                                :class="{active: selectedPassword === suggested}" class="pw-suggest">
                                            {{suggested}}
                                        </button>
                                    </li>
                                </ul>
                                <form @submit.prevent="CompleteRegister" class=""
                                      v-if="suggested_password != null">
                                    <div class="text-center">
                                        <button class="login-btn" :disabled="selectedPassword.length === 0">Complete Signup</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                        <div class="col-md-3 ">

                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>
<script>
    import Loader from "../../components/Loader";
    import {RegisterService} from "../../services/register.service";
    import SignUpNav from "../../components/SignUpNav";
    import {mapActions} from "vuex";
    import router from "../../router";

    export default {
        name: 'SignUpPage',
        components: {Loader, SignUpNav},
        data: function () {
            return {
                suggested_password: null,
                password: '',
                loading: false,
                selectedPassword: '',
                isSuccess: false,
            }
        },

        methods: {
            async Register() {
                this.loading = true;
                await RegisterService.register({
                    password: this.password,
                }).then((res) => {
                    this.suggested_password = res;
                    this.$toastr.info(res, "Please choose a password from the suggestions below to complete your registration", {timeOut: 5000});
                }).catch((error) => {
                    this.$toastr.error(error.message, "signup failed!", {timeOut: 5000});
                });
                this.loading = false;

            },

            ...mapActions({loginUser: "LOGIN"}),
            async CompleteRegister() {
                this.loading = true;
                await RegisterService.completeSignup({
                    original: this.password,
                    password: this.selectedPassword,
                }).then(async (res) => {
                    this.isSuccess = true;
                    this.$toastr.success(res.message, {timeOut: 5000});
                }).catch((error) => {
                    this.$toastr.error(error.message, "signup failed!", {timeOut: 5000});
                    this.loading = false;
                });
                let that = this;
                if (this.isSuccess) {
                    setTimeout(function () {
                        that.login();
                    }, 5000);

                }
            },
            login() {
                this.loading = true;
                this.loginUser({
                    password: this.selectedPassword
                })
                    .then(function () {
                        router.push({name: "Home"});
                    })
                    .catch(error => {
                        this.$toastr.error(error.message, "Login Failed!", {timeOut: 5000});
                    });
                this.loading = false;
            },

            getSelectedPassword(e) {
                this.selectedPassword = e;
            }

        },

    }
</script>
