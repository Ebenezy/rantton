<template>
    <div class="d-none d-sm-block col-md-3">
        <div class="col-md-12">
            <div class="fixed">
                <Trends></Trends>
            </div>
        </div>
    </div>
</template>

<script>
    import Trends from './Modules/Trend'

    export default {
        name: "LeftSidebar",
        components: {Trends}
    }
</script>

<style scoped>

</style>