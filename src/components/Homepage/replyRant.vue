<template>
    <div slot="head">
      <div class="modaly">
      <Loader v-if="loading" :show-full="true"/>
      <modal name="replyRant" :width="480" :height="450" :left="600"  @before-open="beforeOpen">
           
              <div class="reply-card">
                  <h5 class="text-center bb">{{creator_name}}</h5>
                  <div class="inline pd-10">
                  <div class="emojis">
                      <img :src="emoji">
                  </div>
                  <p  class="rant-txt">
                    {{ content }}
                  </p>
                  </div>
                <form @submit.prevent="comment">
                  <div class="reply_here ">

                    <textarea
                      class="form-control-reply autoExpand"
                      rows="3"
                      data-min-rows="3"
                      name="text"
                      type="text"
                      placeholder="Type Your Reply..."
                      v-model="reply"
                      maxlength="200"></textarea>

                  </div>
                    <div class="text-center mt-100">
                         <button class="login-btn">Reply</button>
                    </div>
                </form>
                <div class="mt-50"></div>

              </div>
      </modal>
      </div> 
    </div>
</template>

<script>
import Loader from '../Loader';
import {ReplyRantServices} from "../../services/reply.service";


export default {
  name: 'replyRant',
  components:{ Loader },
   data:function () {
          return {

              reply:"",
              rant_id:this.$store.getters.GET_USER.friendly_uuid,
              loading:false,
              content: null,
              creator_name: null,
              emoji:null,
              
          };
         
      },
      

  methods: {
      closeRant() {
        this.$modal.hide('replyRant');
      },

       beforeOpen (event) {
        this.content = event.params.content;
        this.creator_name = event.params.creator_name;
        this.emoji =event.params.emoji
      },

      replyRant(){
        this.$modal.show('replyRant');


      },
      
      // ...mapActions({ postrant: "ADDRANT" }),
      async comment(){
                this.loading = true;
          await ReplyRantServices.replyRant({
                    reply:this.reply,
                    rant_id:this.rant_id,
                }).then((res)=>{
                    this.$modal.hide('replyRant');
                    this.reply = '';
                    this.$toastr.success(res.message, {timeOut: 5000});
                }).catch((error)=>{
                    this.$toastr.error(error.message, "reply Failed!", {timeOut: 5000});
                });
                this.loading = false;
            }
  }
}
</script>

<style scoped>
    .v--modal-overlay {
        position: fixed;
        box-sizing: border-box;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        /* background: rgba(0, 0, 0, 0.2); */
        z-index: 999;
        opacity: 1;
        background-color: rgba(0,0,0,0.8);
    }
.modal-form-control{
	
};

.v--modal-box{
        background-color: transparent !important;
        top: 150px !important;
        left: 400px !important;
        width: 750px !important;
        height: 650px !important;
    }
    .v--modal {
        background-color: transparent !important;
        text-align: left;
        border-radius: 15px !important;
        box-shadow: 0 20px 60px -2px rgba(27, 33, 58, 0.4);
        padding: 0;
    }

    .reply_here{
        display: flex;
        width: 100%;
        height: 4em;
        /*background-color: #EDEDED;*/
        color: #000;
        border: none;
        border-radius: 15px;
        padding: 5px;
    }

    .form-control-reply {
        /*max-width:100%;*/
        display: inline !important;
        width: 100% !important;
        background-color: #F5F5F5;
        border: none !important;
        height: 130px;
        padding: 0.2em 0.9em;
        resize: none;
        color: #000;
        border-radius: 8px !important;
        font-size: 15px !important;
        box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.08);
        box-sizing: padding-box;
        overflow: hidden;
        margin: 5px;
        /*overflow:hidden;
        outline: currentcolor none medium;
      -moz-user-select: text;
      white-space: pre-wrap;
      overflow-wrap: break-word;
      height: inherit;*/
    }
    .reply-card{
    padding-top: 30px
}
.bb{
    border-bottom: 1px solid #cccccc;
}
    .pd-10{
        padding: 10px;
    }

.rant-txt2{
  font-family: Montserrat-Regular;
	font-size: 16px;
	color: #4A4A4A;
	letter-spacing: 0;
  text-align: left;
  height: 5px;
}


</style>
