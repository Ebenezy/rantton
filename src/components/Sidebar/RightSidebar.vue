<template>
    <div class="d-none d-sm-block col-md-3 position-relative">
        <div class="fixed">
            <Topical></Topical>
            <Popular></Popular>
        </div>
    </div>
</template>

<script>
    import Topical from './Modules/TopicalRant';
    import Popular from './Modules/PopularRant';

    export default {
        name: "RightSidebar",
        components: {
            Topical, Popular
        }
    }
</script>

<style scoped>

</style>