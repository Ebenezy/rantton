<template>
  <div class="container-scroller">
    <img src="../../assets/img/rant-bg.jpg" class="poster">
    <section class="rantton-bg">
      <Loader v-if="loading" :show-full="true" loading-text="Logging in..."/>
      <LoginNav/>
      <div class="container">
        <ul class="home-up"></ul>
        <div class="wrapper pb-50">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
              <div class="card-login mb-20">
                <h2 class="text-center blue-text">Rantton Login</h2>
                <form @submit.prevent="login">
                  <div class="login_here">
                    <input
                      class="form-control3 autoExpand"
                      rows="3"
                      data-min-rows="3"
                      name="password"
                      type="password"
                      placeholder="Enter Your Password ***"
                      v-model="password"
                      maxlength="30"
                    >
                    <button class="login-btn">Login</button>
                  </div>
                </form>
                <div class="mt-50"></div>
               
                <div class="suggest">
                  <p class="pd-10">Signup if you don't have an account.</p>
                 <router-link :to="{name: 'register'}"><button class="login-btn">Signup</button></router-link>
                </div>
              </div>
            </div>
            <div class="col-md-3"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<!-- container-scroller -->

<script>
import Loader from "../../components/Loader";
import { mapActions } from "vuex";
import router from "../../router";
import LoginNav from "../../components/Navigation/LoginNav";

export default {
  name: "Login",
  components: { Loader, LoginNav },
  data: function() {
    return { password: "", loading: false };
  },
  methods: {
    ...mapActions({ loginUser: "LOGIN" }),
    async login() {
      this.loading = true;
      await this.loginUser({
        password: this.password
      })
        .then(function() {
          router.push({ name: "Home" });
        })
        .catch(error => {
          this.$toastr.error(error.message, "Login Failed!", { timeOut: 5000 });
        });
      this.loading = false;
    }
  }
};
</script>