<template>
  <div class="photo-container" ref="modal" v-if="visiblePhotoWall">
    <img src="../../images/close-gray.png" alt="" class="close" @click="closeModal">
    <div class="photo-content">
      <div class="photo-header">
        <p>长滩海滩</p>
        <span></span>
        <!--<ul>-->
          <!--<li>金门大桥</li>-->
          <!--<li>东京</li>-->
          <!--<li>伦敦</li>-->
        <!--</ul>-->
      </div>
      <div class="photo-body">
        <div class="left"></div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        visiblePhotoWall: 'visiblePhotoWall',
      })
    },
    watch: {
      visiblePhotoWall (newval, oldval) {
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
          this.visiblePhotoWall = false
          this.$store.commit('PHOTO_WALL', false)
        },1000)
      }
    }
  }
</script>
<style lang="less" scoped>
  .photo-container{
    opacity: 0;
    background: #fff;
    position: fixed;
    min-height: 100%;
    top:0;
    left:0;
    width:100%;
    .close{
      width:.32rem;
      height:.34rem;
      display: block;
      position: absolute;
      top:.34rem;
      right:.4rem;
    }
    .photo-content{
      margin-top: 1rem;
      width:100%;
      padding: 0 .6rem;
    }
    .photo-header{
      font-size: .36rem;
      font-weight: bold;
      span{
        display: block;
        width: 100%;
        border-top: 2px solid rgb(211,215,220);
        margin-top: .2rem;
      }
      ul{
        color:rgb(159,161,165);
        font-size: 0;
        margin-top: .28rem;
      }
      li{
        display: inline-block;
        font-size: .28rem;
        margin-right: .48rem;
      }
    }
    .photo-body{
      display: flex;
      justify-content: space-between;
      margin-top: 1.08rem;
    }
    .left,.right{
      width:2.86rem;
      background: red;
      height:100px;
      img{
        width:100%;
        display: block;
        margin-bottom: .36rem;
      }
    }
  }
</style>
