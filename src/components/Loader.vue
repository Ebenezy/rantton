<template>
    <!--<div class="vld-parent">-->
    <!--<loading :active.sync="isLoading"-->
    <!--:can-cancel="false"-->
    <!--:on-cancel="onCancel"-->
    <!--:background-color="bgColor"-->
    <!--v-bind:height=height-->
    <!--v-bind:width=width-->
    <!--color="#ef483e"-->
    <!--v-bind:class="{ showLoader: !showFull}"-->
    <!--:is-full-page="showFull">-->
    <!--</loading>-->
    <!--<span class="loading-text" :class="{showLoadingTextFull: showFull}">{{loadingText}}</span>-->
    <!--</div>-->
    <div class="loader-scr">
        <vue-element-loading :active="isLoading" :is-full-screen="showFull" :text="loadingText" color='#0082DE'/>
    </div>
</template>

<script>
    // Import component
    // import Loading from 'vue-loading-overlay';
    import VueElementLoading from 'vue-element-loading';
    // Import stylesheet
    // import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        name: 'Loader',
        props: {
            showFull: Boolean,
            loadingText: {
                type: String,
                default: 'loading...'
            },
        },
        computed: {
            bgColor() {
                return (this.showFull) ? '#F5A623' : ''
            }
        },
        data() {
            return {
                isLoading: true,
                width: 55,
                height: 55,
                fullPage: false
            }
        },
        components: {
            // Loading
            VueElementLoading
        },
        methods: {
            onCancel() {
                // console.log('User cancelled the loader.')
            }
        }
    }
</script>

<style scoped>
    .showLoader {
        position: relative;
    }

    .vldParentIsFull {
        display: none;
        position: fixed;
        z-index: 999999999999999999999998;
        height: 100%;
        width: 100%;
        /*overflow: show;*/
        margin: auto;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.9);
    }

    .showLoadingTextFull {
        padding-top: 22px;
        position: relative;
        display: block;
        font-size: 2em;
        color: #A1A1A1;
        text-align: center;
    }
</style>