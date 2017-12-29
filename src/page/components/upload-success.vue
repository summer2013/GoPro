<template>
  <div class="upload-success-modal" v-if="visibleUploadSuccess" ref="modal">
    <div class="upload-success-content">
      <img src="../../images/close.png" alt="close" class="close" @click="closeModal">
      <div class="upload-success-body">
        <img src="../../images/111.jpg" alt="" style="height: 5.98rem;width:6.15rem;">
        <div class="mask"></div>
        <img src="../../images/success.png" alt="" class="success">
        <p>上传成功</p>
      </div>
      <div class="upload-success-footer">
        <p>评论评论评论评论</p>
        <p>领取店铺优惠券</p>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        tbId: null,
        shareContent: ''
      }
    },
    computed: {
      ...mapGetters({
        visibleUploadSuccess: 'visibleUploadSuccess',
      })
    },
    watch: {
      visibleUploadSuccess (newval, oldval) {
        if (newval !== oldval && newval) {
          this.$nextTick(()=>{
            setTimeout(()=> {
              this.$refs.modal.style.opacity = 1
              this.$refs.modal.style.transition = 'all 1s'
            },0)
          })
        }
      }
    },
    methods: {
      closeModal () {
        this.$refs.modal.style.opacity = 0
        this.$refs.modal.style.transition = '1s'
        setTimeout(()=> {
          this.visibleUploadSuccess = false
          this.$store.commit('SET_VISIBLE_UPLOAD_SUCCESS', false)
        },1000)
      }
    },
    mounted () {

    }
  }
</script>
<style lang="less">
  .upload-success-modal{
    position: fixed;
    opacity: 0;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: rgba(0,0,0,.3);
    .upload-success-content{
      width:6.20rem;
      height:9.14rem;
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
    }
    .close{
      width:.62rem;
      height:.62rem;
      position: absolute;
      right:0.05rem;
      top:0;
      transform: translate(0,-120%);
    }
    .upload-success-body{
      width:6.15rem;
      height:5.98rem;
      position: relative;
      box-shadow:0rem .15rem .15rem rgba(0,0,0,.3);
      p{
        position: absolute;
        color:#fff;
        font-size: .4rem;
        left:50%;
        transform: translate(-50%,0);
        bottom: 1.1rem;
      }
    }
    .mask{
      width: 100%;
      height:100%;
      position: absolute;
      top:0;
      left:0;
      background: rgba(0,0,0,.3);
    }
    .success{
      display: block;
      width:2.31rem;
      height:2.34rem;
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
    }
    .upload-success-footer{
      width:100%;
      height:3.16rem;
      background: url('../../images/upload-3.png') no-repeat;
      background-size: contain;
      p:nth-child(1){
        font-size: .34rem;
        color:rgb(147,146,146);
        text-align: center;
        padding-top: .3rem;
      }
      p:nth-child(2){
        width:5.14rem;
        height:1.02rem;
        line-height:1.02rem;
        margin: 0 auto;
        font-size: .34rem;
        color:#fff;
        margin-top: .6rem;
        padding-right: 0.4rem;
        text-align: center;
      }
    }
  }
</style>
