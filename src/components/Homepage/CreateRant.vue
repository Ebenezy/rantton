<template>
    <div class="container-fluid">
        <Loader v-if="loading" :show-full="true" loading-text="Sending rant..."/>

        <div class="col-12">
            <div class="row">
                <transition
                        name="custom-classes-transition"
                        :duration="{ enter: 300, leave: 150 }"
                        enter-active-class="animated lightSpeedIn"
                        leave-active-class="animated lightSpeedOut">
                    <div class="rant-emoji-card mb-20" v-show="!isTyping">
                        <div class="rant_here">
                            <div class="listing-emoji">
                                <h6 class="text-center">Which Emoji Best Describe Your Feelings</h6>
                                <Emoji :emojis='emoji_list' placeholder="Search Emoji"
                                       @onEmojiClicked="getSelected" background="transparent" v-model="emoji"/>
                            </div>
                        </div>
                    </div>
                </transition>

                <transition
                        name="custom-classes-transition"
                        :duration="{ enter: 400, leave: 200 }"
                        enter-active-class="animated flipInX"
                        leave-active-class="animated zoomOut">
                    <form class="card3 mb-20" v-if="emoji !== ''" v-show="isTyping" @submit.prevent="AddRant">
                        <div class="rant_here  row">
                            <div class="col-1">
                                <div class="emojiss mr-2">
                                    <img :src="emoji.source">
                                </div>
                            </div>
                            <div class="col-11">
                            <textarea class="form-control2 autoExpand" rows='3' data-min-rows='3' v-model="content"
                                      name="text" type="text"
                                      :placeholder="'Why are feeling ' + emoji.keywords[0] + '?'" maxlength="200"
                                      @click="Rant"></textarea>
                            </div>
                        </div>
                        <div class="text-right">
                            <button type="button" class="btn btn-danger btn-round mr-3" @click="isTyping = false">Change
                                Reaction
                            </button>

                            <button class="rant-btn">Rant</button>
                        </div>
                    </form>
                </transition>
            </div>
        </div>
    </div>

</template>

<script>
    import Loader from '../Loader';
    import Emoji from 'emoji-component';
    import {mapActions} from "vuex";
    import Emojidata from '../../assets/js/emoji'


    export default {
        name: "Create",
        components: {Loader, Emoji},
        props: ['isAuth'],
        data: function () {
            return {
                isTyping: false,
                emoji_list: Emojidata.menus,
                content: '',
                emoji: '',
                loading: false,
                isSuccess: false,
                messages: [],
            }
        },
        watch: {},

        methods: {
            ...mapActions({postrant: "ADDRANT"}),
            async AddRant() {
                this.loading = true;
                await this.postrant({
                    content: this.content,
                    emoji: this.emoji.source,
                }).then((res) => {
                    this.$toastr.clear();
                    this.$toastr.success("Rant sent successfully", {timeOut: 5000});
                    this.emoji = '';
                    this.content = '';
                    this.isSuccess = true;
                    this.isTyping = false;
                }).catch((error) => {
                    this.$toastr.error(error.message, "Add Rant Failed!", {timeOut: 5000});
                });
                this.loading = false;
            },
            getSelected: function (emoji) {
                this.emoji = emoji;
                this.isTyping = true;
            },
            Rant() {
                this.$modal.show('myrant');
            }
        }
    }
</script>
