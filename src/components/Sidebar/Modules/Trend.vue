<template>
    <div class="card5 pb-20">
        <div class="trend">
            Trends
        </div>
        <div class="trends">
            <ul class="p-20 m-0">
                <li><a href="" class="trends2">#Buhari</a></li>
                <li><a href="" class="trends2">#Wizkid</a></li>
                <li><a href="" class="trends2">#Villageboy</a></li>
                <li><a href="" class="trends2">#2019election</a></li>

            </ul>
        </div>
        <div class="text-center">
            <button class="see-more-btn text-center">See more</button>
        </div>
    </div>
</template>

<script>
    import {loadTrendService} from '../../../services/trend.service'

    export default {
        name: "Trends",
        data: function () {
            return {
                loading: false,
            }
        },
        async created() {
            this.loading = true;
            await loadTrendService.loadtrend().then((res) => {
                this.items = res
            }).catch((error) => {
                this.$toastr.error(error.message, {timeOut: 5000});
            });
            this.loading = false;
        },


    }
</script>