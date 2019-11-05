<template>
    <section class="rantton-bg">
        <v-dialog/>
        <!--<img alt="" src="../../assets/img/rant-bg.jpg" class="poster">-->
        <HeaderNav></HeaderNav>
        <replyRant></replyRant>
        <ViewRant></ViewRant>
        <slot name="head"></slot>
        <!-- partial:partials/_navbar.html -->
        <!-- <HeaderNav/> -->
        <!-- partial -->
        <div class="col-md-12">
            <div class="container">
                <div class="gap"></div>
                <!-- partial:partials/_sidebar.html -->
                <div class="pb-50">
                    <div class="row">

                        <LeftSidebar></LeftSidebar>
                        <div class="col-md-6 mg-0 pd-0">
                            <slot name="body"></slot>
                        </div>
                        <RightSidebar></RightSidebar>
                    </div>
                </div>
            </div>
        </div>
        <!-- page-body-wrapper ends -->
    </section>
    <!-- container-scroller -->
</template>

<script>

    // import HeaderNav from './HeaderNav';
    import Route from '../router';
    import LeftSidebar from './Sidebar/LeftSidebar';
    import RightSidebar from './Sidebar/RightSidebar';
    import HeaderNav from './Navigation/HeaderNav';
    import replyRant from './Homepage/replyRant';
    import ViewRant from './Homepage/ViewRant';


    export default {
        name: "Layout",
        components: {LeftSidebar, ViewRant,replyRant, RightSidebar, HeaderNav},
        async mounted() {
            // Verify the User token is still valid
            let loginValid = await this.$store.dispatch('AUTHORISE_USER', this.$store.getters.GET_AUTH_TOKEN);

            // If login is not valid
            if (!loginValid) {
                this.$store.dispatch("UNSET_USER");
                Route.push({name: 'welcome'});
            }
        }
    }
</script>

<style scoped>

</style>