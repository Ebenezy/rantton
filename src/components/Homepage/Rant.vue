<template>
    <div class="container-fluid">
        <Loader v-if="loading" :show-full="true" loading-text="deleting..."/>
        <div v-for="(item,index) in rantList" class="row mb-20" v-bind:key="index">
            <div class="col-1">
                <div class="emojis">
                    <img :src="item.emoji">
                </div>
                <div class="thread-line-container">
                    <div class="thread-line"></div>
                </div>
            </div>
            <div class="col-11">
                <div class="card">
                    <div>
                        <ul class="inline">
                            <li class="blue">
                                <a class="trend-link">
                                    <img src="../../assets/img/rantton-white.png" class="logo-sm">{{item.creator_name}}
                                </a>
                            </li>
                            <li>{{item.added | timeAgo}}</li>

                        </ul>
                        <div class="dropdown float-right ">
                            <button type="button" class="actions-toggle-button" data-toggle="dropdown"><i
                                    class="fa fa-ellipsis-v"></i>
                            </button>
                            <div class="dropdown-menu">
                                <a href="#" v-on:click="deleteRant(item.friendly_uuid, index)"
                                   v-if="currentUserName === item.creator_name"
                                   class="dropdown-item">Delete Rant</a>
                                <a href="#" class="dropdown-item">Report Rant</a>
                            </div>
                        </div>
                        <p class="rant-txt myBtn" id=""
                           @click="viewRant(item.content,item.emoji,item.date_readable,item.creator_name,item.total_likes)">
                            {{item.content}}</p>
                        <div class="line mb-20"></div>
                        <ul class="inline" v-show="item.hasOwnProperty('likes')">
                            <li class="click-like" v-if="currentUser">
                                <i class="fas fa-heart liked"
                                   v-if="item.likes.hasOwnProperty(currentUser)"
                                   @click.prevent="unFavorite(item.friendly_uuid)"></i>

                                <i class="far fa-heart unlike" v-else
                                   @click.prevent="favorite(item.friendly_uuid, index)"></i>
                                {{Object.keys(item.likes).length}}
                            </li>
                            <li v-else>
                                <i class="far fa-heart"></i>
                                {{Object.keys(item.likes).length}}
                            </li>

                            <li @click="replyRant(item.content,item.creator_name,item.emoji)"><img
                                    src="../../assets/img/rantton-blue.svg" class="logo-sm"> Rants - 2,356
                            </li>
                            <li><i class="fa fa-share"></i> Share - 2,356</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Loader from '../Loader'
    import {loadRantService} from '../../services/loadRant.service'
    import moment from 'moment';

    export default {
        name: "Rant",
        components: {Loader},
        async created() {
            let self = this;

            this.$store.dispatch('AUTHORISE_USER', this.$store.getters.GET_AUTH_TOKEN).then(async function () {
                let user = await self.$store.getters.GET_USER;
                self.currentUserName = user.name;
                self.currentUser = user.friendly_uuid;
            });
            await this.$store.dispatch('LOAD_RANT').then((res) => {
                this.rants = res;
            });
        },
        filters: {
            timeAgo: function (added) {
                return moment(added * 1000).fromNow();
            }
        },
        beforeDestroy() {
            clearInterval(this.runTimeAgoInterval);
        },
        data: function () {
            return {
                runTimeAgoInterval: '',
                loading: false,
                rants: [],
                currentUser: '',
                currentUserName: ''
            }
        },
        mounted() {
            this.$store.subscribe(mutation => {
                switch (mutation.type) {
                    case "SOCKET_RANT_LIKED":
                    case "SOCKET_RANT_UNLIKE":
                        this.updateRantLike(mutation.payload);
                        break;
                }
            });
        },
        computed: {
            rantList() {
                return this.rants;
            }
        },
        methods: {
            updateRantLike(data) {
                let index = this.rants.findIndex((rant) => rant.friendly_uuid === data.rantUUID);
                this.rants[[index]]['total_likes'] = data.total_likes;
                this.rants[[index]]['likes'] = data.likes;
            },
            replyRant(content, e1, e2) {
                this.$modal.show('replyRant', {content: content, creator_name: e1, emoji: e2});
            },
            viewRant(content, emoji, date_readable, creator_name, total_likes) {
                this.$modal.show('viewRant', {
                    content: content,
                    emoji: emoji,
                    date_readable: date_readable,
                    creator_name: creator_name,
                    total_likes: total_likes
                })
            },
            async favorite(friendly) {
                await this.$store.dispatch('likeRANT', {
                    friendly_uuid: friendly,
                }).then(() => {
                }).catch((error) => {
                    this.$toastr.clear();
                    this.$toastr.error(error.message, "Ooops!", {timeOut: 5000});
                });
                this.loading = false;
            },
            unFavorite(friendly_uuid) {
                loadRantService.unlikeRant({
                    friendly_uuid: friendly_uuid,
                }).then(() => {
                }).catch((error) => {
                    this.$toastr.clear();
                    this.$toastr.error(error.message, {timeOut: 5000});
                });
                this.loading = false;
            },
            deleteRant(friendly_uuid) {
                if (!confirm('Deleting this rant is not reversible, do you want to continue?'))
                    return false;

                this.$store.dispatch('DELETE_RANT', friendly_uuid);
                // this.loadingText = "deleting Rant...";
                // this.loading = true;
                // this.deletelike(friendly_uuid)
                //     .then((response) => {
                //         this.$toastr.success(response.message, {timeOut: 5000});
                //     }).catch((err) => this.$toastr.error(err.message || "Delete failed", "Error!", {timeOut: 5000}));
                // this.loading = false;


            }
        }
    }
</script>


<style scoped>
    .actions-toggle-button {
        background: transparent !important;
        color: #0082DE;
    }
</style>