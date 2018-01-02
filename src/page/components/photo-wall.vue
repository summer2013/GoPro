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
        <div class="left">
          <img v-for="img in leftImgList" :src="img.path" alt="" v-if="img.type === 'image'" @click="viewImage"/>
        </div>
        <div class="right">
          <img v-for="img in rightImgList" :src="img.path" alt="" v-if="img.type === 'image'" @click="viewImage"/>
        </div>
      </div>
    </div>
    <div class="view-image" v-if="showViewImage" ref="showViewImage">
      <img :src="currentSrc" alt="" @click="closeViewImage">
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import Service from '../../config/service'
  export default {
    computed: {
      ...mapGetters({
        visiblePhotoWall: 'visiblePhotoWall',
        currentArea: 'currentArea',
        likeImgList: 'likeImgList'
      })
    },
    data () {
      return {
        currentSrc: null,
        showViewImage: false,
        leftImgList: [],
        rightImgList: []
      }
    },
    watch: {
      visiblePhotoWall (newval, oldval) {
        if (newval !== oldval && newval) {
          this.$nextTick(()=>{
            this.getRecordList({area: this.currentArea, type: 1})
            setTimeout(()=> {
              this.$refs.modal.style.opacity = 1
              this.$refs.modal.style.transition = 'all 1s'
            },0)
          })
        }
      }
    },
    methods: {
      async getRecordList (data) {
        const res = await Service.getRecordList(data)
        if(!res || res.message.toString().toUpperCase() !== 'SUCCESS') {
          alert('获取记录失败,' + res.message)
          return
        }
       /* res.data = [
          {
            id: "1",
            type: "image",
            images: "3",
            nick: "Test1",
            name: "Test1",
            content: "Test111111111111",
            top: "1",
            area: "3",
            examine: "1",
            created: "1514860676",
            extime: "1514860676",
            like: "23",
            path: "http://gopro.ews.m.jaeapp.com/uploads/image/20180102/e60fe05ae90af6489615de796f2a6daa.png",
            thumbpath: "http://gopro.ews.m.jaeapp.com/uploads/image/20180102/thumb/thumb_e60fe05ae90af6489615de796f2a6daa.png"
          },{
            id: "7",
            type: "image",
            images: "3",
            nick: "Test1",
            name: "Test1",
            content: "Test222222222222",
            top: "1",
            area: "3",
            examine: "1",
            created: "1514860676",
            extime: "1514860676",
            like: "253",
            path: "http:\/\/gopro.ews.m.jaeapp.com\/uploads\/image\/20180102\/2ba7d8ffbd570f7ceb35d1a1895d0cc9.jpg",
            thumbpath: "http://gopro.ews.m.jaeapp.com/uploads/image/20180102/thumb/thumb_e60fe05ae90af6489615de796f2a6daa.png"
          },{
            id: "11",
            type: "video",
            images: "3",
            nick: "Test1",
            name: "Test1",
            content: "Test33333333333",
            top: "1",
            area: "3",
            examine: "1",
            created: "1514860676",
            extime: "1514860676",
            like: "363",
            path: "http:\/\/gopro.ews.m.jaeapp.com\/uploads\/video\/20180102\/92c184b27a53f04e141c83825a69e43c.mp4",
            thumbpath: "http://gopro.ews.m.jaeapp.com/uploads/image/20180102/thumb/thumb_e60fe05ae90af6489615de796f2a6daa.png"
          },{
            id: "17",
            type: "image",
            images: "3",
            nick: "Test1",
            name: "Test1",
            content: "Test44444444444",
            top: "1",
            area: "3",
            examine: "1",
            created: "1514860676",
            extime: "1514860676",
            like: "52",
            path: "http:\/\/gopro.ews.m.jaeapp.com\/uploads\/image\/20180102\/adb0ac5db252bca4d6f6c454a65c009d.jpg",
            thumbpath: "http://gopro.ews.m.jaeapp.com/uploads/image/20180102/thumb/thumb_e60fe05ae90af6489615de796f2a6daa.png"
          },{
            id: "12",
            type: "video",
            images: "3",
            nick: "Test1",
            name: "Test1",
            content: "Test55555555555555555555",
            top: "1",
            area: "3",
            examine: "1",
            created: "1514860676",
            extime: "1514860676",
            like: "36",
            path: "http:\/\/gopro.ews.m.jaeapp.com\/uploads\/video\/20180102\/a7d833c0492608046bae4c89c59cad6d.mp4",
            thumbpath: "http://gopro.ews.m.jaeapp.com/uploads/image/20180102/thumb/thumb_e60fe05ae90af6489615de796f2a6daa.png"
          },{
            id: "18",
            type: "image",
            images: "3",
            nick: "Test1",
            name: "Test1",
            content: "Test66666666666666666",
            top: "1",
            area: "3",
            examine: "1",
            created: "1514860676",
            extime: "1514860676",
            like: "2",
            path: "http:\/\/gopro.ews.m.jaeapp.com\/uploads\/image\/20180102\/452f833b8f7878b5cabd81af62a1baaf.jpg",
            thumbpath: "http://gopro.ews.m.jaeapp.com/uploads/image/20180102/thumb/thumb_e60fe05ae90af6489615de796f2a6daa.png"
          }]*/
        this.leftImgList = res.data.slice(0, Math.ceil(res.data.length / 2) - 1)
        this.rightImgList = res.data.slice(Math.ceil(res.data.length / 2), res.data.length - 1)
      },
      closeModal () {
        this.$refs.modal.style.opacity = 0
        this.$refs.modal.style.transition = '1s'
        setTimeout(()=> {
          this.visiblePhotoWall = false
          this.$store.commit('PHOTO_WALL', false)
        },1000)
      },
      viewImage () {
        let event = window.event
        this.showViewImage = true
        this.currentSrc = event.target.src
        this.$nextTick(()=>{
          setTimeout(()=> {
            this.$refs.showViewImage.style.opacity = 1
            this.$refs.showViewImage.style.background = 'rgba(0,0,0,.7)'
            this.$refs.showViewImage.style.transition = 'all 1s'
          },0)
        })
      },
      closeViewImage () {
        this.$refs.showViewImage.style.opacity = 0
        this.$refs.showViewImage.style.background = 'rgb(255,255,255)'
        this.$refs.showViewImage.style.transition = 'all 1s'
        setTimeout(()=> {
          this.showViewImage = false
        },1000)
      }
    }
  }
</script>
<style lang="less" scoped>
  .photo-container{
    opacity: 0;
    background: #fff;
    position: absolute;
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
      img{
        width:100%;
        display: block;
        margin-bottom: .36rem;
      }
    }
    .view-image{
      position: fixed;
      opacity: 0;
      width:100%;
      height:100%;
      top:0;
      left:0;
      background: #fff;
      img{
        width:100%;
        display: block;
        position: absolute;
        top:50%;
        left:0;
        transform: translate(0,-50%);
      }
    }
  }
</style>
