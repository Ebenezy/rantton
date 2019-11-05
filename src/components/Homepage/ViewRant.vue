<template>
    <div slot="head">
      <div class="modaly">
      <Loader v-if="loading" :show-full="true"/>
      <modal name="viewRant" :width="500" :height="310" :left="600" classes="v--modal-box"  @before-open="beforeOpen">
        <div  class="row mb-20">
            <div class="col-1">
                <div class="emojis">
                    <img :src="emoji">
                </div>
                <!-- <div class="thread-line-container">
                    <div class="thread-line"></div>
                </div> -->
            </div>
            <div class="col-11">
                <div class="card">
                    <div>
                        <ul class="inline">
                            <li class="blue"><a class="trend-link"> <img src="../../assets/img/rantton-white.png"
                                class="logo-sm">{{creator_name}}</a>
                            </li>
                            <li>{{date_readable}}</li>

                        </ul>
                        <div class="dropdown float-right ">
                            <button type="button" class="" data-toggle="dropdown"><i class="fa fa-ellipsis-v"></i></button>
                            <div class="dropdown-menu">
                                <a href="javascript:;"
                                   class="dropdown-item">Delete Rant</a>
                                <a href="" class="dropdown-item">Report Rant</a>
                            </div>
                        </div>
                        <p class="rant-txt myBtn" id="" >{{content}}</p>
                        <div class="line mb-20"></div> 
                        <ul class="inline">

                            <li class="click-like">
                               <i class="fas fa-heart liked"></i>

                                <i class="far fa-heart unlike" ></i>
                                    {{total_likes}}
                            </li>

                            <li><img
                                    src="../../assets/img/rantton-blue.svg" class="logo-sm"> Rants - 2,356
                            </li>
                            <li><i class="fa fa-share"></i>Share - 2,356</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            
      </modal>
      </div> 
    </div>
</template>

<script>
import Loader from '../Loader';


export default {
  name: 'replyRant',
  components:{ Loader },
   data:function () {
          return {

              reply:"",
              loading:false,
              content: null,
              creator_name: null,
              emoji:null,
              date_readable:null,
              total_likes:null,

              
          };
         
      },
      

  methods: {
      closeRant() {
        this.$modal.hide('viewRant');
      },

       beforeOpen (event) {
        this.content = event.params.content;
        this.emoji =event.params.emoji;
        this.date_readable = event.params.date_readable;
        this.creator_name = event.params.creator_name;
        this.total_likes = event.params.total_likes;
      },

      viewRant(){
        this.$modal.show('viewRant');
    },
      
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
        background-color: rgba(0,0,0,0.8) ;
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
