<template>
    <div class="card2 mt-20" slot="body">
        <div class="trend">
            Popular Rants
        </div>
        <carousel v-bind:autoplay="true" :paginationEnabled=false :autoplayTimeout="5000" v-bind:loop="true" pd-10>
            <slide>
                <div class="slides">
                    <div class="item grey">
                        <div class="item-info">
                            <p class="item-text"><b>3 hours ago</b></p>
                            <p class="item-text">Buhari, abeg oh do normal, you no dey see economy? woh, wa seh normal,
                                Buhari, abeg oh do normal…</p>
                            <p class="item-text"><b><i class="fa fa-map-marker-alt"></i> Lagos, Nigeria</b></p>
                        </div>
                    </div>
                </div>
            </slide>
            <slide>
                <div class="slides">
                    <div class="item grey">
                        <div class="item-info">
                            <p class="item-text"><b>3 hours ago</b></p>
                            <p class="item-text">Buhari, abeg oh do normal, you no dey see economy? woh, wa seh normal,
                                Buhari, abeg oh do normal…</p>
                            <p class="item-text"><b><i class="fa fa-map-marker-alt"></i> Lagos, Nigeria</b></p>
                        </div>
                    </div>
                </div>
            </slide>
            <slide>
                <div class="slides">
                    <div class="item grey">
                        <div class="item-info">
                            <p class="item-text"><b>3 hours ago</b></p>
                            <p class="item-text">Buhari, abeg oh do normal, you no dey see economy? woh, wa seh normal,
                                Buhari, abeg oh do normal…</p>
                            <p class="item-text"><b><i class="fa fa-map-marker-alt"></i> Lagos, Nigeria</b></p>
                        </div>
                    </div>
                </div>
            </slide>
            <slide>
                <div class="slides">
                    <div class="item grey">
                        <div class="item-info">
                            <p class="item-text"><b>3 hours ago</b></p>
                            <p class="item-text">Buhari, abeg oh do normal, you no dey see economy? woh, wa seh normal,
                                Buhari, abeg oh do normal…</p>
                            <p class="item-text"><b><i class="fa fa-map-marker-alt"></i> Lagos, Nigeria</b></p>
                        </div>
                    </div>
                </div>
            </slide>
            <slide>
                <div class="slides">
                    <div class="item grey">
                        <div class="item-info">
                            <p class="item-text"><b>3 hours ago</b></p>
                            <p class="item-text">Buhari, abeg oh do normal, you no dey see economy? woh, wa seh normal,
                                Buhari, abeg oh do normal…</p>
                            <p class="item-text"><b><i class="fa fa-map-marker-alt"></i> Lagos, Nigeria</b></p>
                        </div>
                    </div>
                </div>
            </slide>
        </carousel>

    </div>
</template>
<script>
    import {Carousel, Slide} from 'vue-carousel';


    export default {
        name: "PopularRant",
        components: {
            Carousel,
            Slide
        },

        methods: {},


    }
</script>

