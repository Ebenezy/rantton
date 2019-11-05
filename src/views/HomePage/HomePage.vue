<template>
    <Layout>
        <div slot="body">
            <Create v-if="isAuth"></Create>
            <Rant></Rant>
        </div>
    </Layout>
</template>
<script>
    import Create from '../../components/Homepage/CreateRant';
    import Rant from '../../components/Homepage/Rant';
    import Route from '../../router';
    import Layout from '../../components/Layout';


    export default {
        name: "Home",
        components: {Create, Rant, Layout},
        data: function () {
            return {
                isAuth: false,
            }
        },
        async created() {
            // Verify the User token is still valid
            let loginValid = this.$store.dispatch('AUTHORISE_USER', this.$store.getters.GET_AUTH_TOKEN);

            // If login is not valid
            if (!loginValid) {
                this.$store.dispatch("UNSET_USER");
                this.$router.push({name: 'welcome'});
            }
            this.isAuth = this.$store.getters.IS_AUTHENTICATED;
        },
        methods: {
            Rant() {
                this.$modal.show('myrant');
            }
        }


    }
</script>
