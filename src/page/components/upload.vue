<template>
  <div class="upload-modal" v-if="visibleUpload" ref="modal">
    <div class="upload-content">
      <img src="../../images/close.png" alt="close" class="close" @click="closeModal">
      <div class="upload-body" ref="uploadBody">
        <ul class="img-container" ref="imgContainer" v-if="imgList.length > 0">
          <li v-for="img in imgList">
            <img :src="img.path" alt="" v-if="img.type === 'image'" />
            <video :src="img.path" controls="controls" v-if="img.type === 'video'" ></video>
          </li>
          <li>
            <img :src="imgList[0].path" alt="" v-if="imgList[0].type === 'image'" />
            <video :src="imgList[0].path" controls="controls" v-if="imgList[0].type === 'video'" ></video>
          </li>
        </ul>
        <!--<div class="mask"></div>-->
        <span class="left" v-if="imgList.length > 1"><img src="../../images/left.png" alt="" @click="play('left')"></span>
        <span class="right" v-if="imgList.length > 1"><img src="../../images/right.png" alt="" @click="play('right')"></span>
      </div>
      <div class="upload-footer">
        <div class="upload-footer-top">
          <p v-if="imgList.length > 0">
            <span>
              <img src="../../images/heart.png" alt="" @click="like" v-if="!likeImgList.includes(imgList[infoIndex].id.toString())">
              <img ref="redHeart" src="../../images/heart-red.png" alt="" v-if="likeImgList.includes(imgList[infoIndex].id.toString())">
            </span>
            <span ref="likeNum">{{likes}}</span>
          </p>
          <p>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <span @click="setVisible('PHOTO_WALL', visiblePhotoWall, true)">更多</span>
          </p>
        </div>
        <span ref="commentInfo">{{comments}}</span>
        <p>探索长滩海滩</p>
        <label for="upload" @change="upload()">上传你的脚步
          <input type="file" accept="image/*,video/mp4" id="upload" >
        </label>
      </div>
    </div>
    <photo-wall></photo-wall>
    <submit></submit>
  </div>
</template>
<script type="text/ecmascript-6">
  import Service from '../../config/service'
  import Tida from '../../config/tida'
  import photoWall from './photo-wall'
  import submit from './submit'
  import { mapGetters } from 'vuex'
  export default {
    components: {
      photoWall,
      submit
    },
    data () {
  		return {
        imgList: [],
        index: 0,
        likes: 0,
        comments: '',
        infoIndex: 0
      }
    },
    computed: {
      ...mapGetters({
        visibleUpload: 'visibleUpload',
        visiblePhotoWall: 'visiblePhotoWall',
        visibleSubmit: 'visibleSubmit',
        currentArea: 'currentArea',
        likeImgList: 'likeImgList',
      })
    },
    watch: {
      visibleUpload (newval, oldval) {
        if (newval !== oldval && newval) {
         this.$nextTick(()=>{
           this.getRecordList({area: this.currentArea, type: 2})
           //this.getNickId()
           setTimeout(()=> {
             this.$refs.modal.style.opacity = 1
             this.$refs.modal.style.transition = 'all 1s'
           },0)
         })
        }
      }
    },
    methods: {
      async uploadFile (data) {
    		const res = await Service.uploadFile(data)
        if(!res || res.message.toString().toUpperCase() !== 'SUCCESS') {
    			alert('上传失败,' + res.message)
          return
        }
        this.$store.commit('CURRENT_UPLOAD_FILE', res.data.id, res.data.type, res.data.path)
        this.setVisible('SET_VISIBLE_SUBMIT', this.visibleSubmit, true)
      },
      async likePhoto (data) {
        const res = await Service.likePhoto(data)
        if(!res || res.message.toString().toUpperCase() !== 'SUCCESS') {
          alert('点赞失败,' + res.message)
          return
        }
        this.imgList[this.infoIndex].like ++
        this.likes ++
        this.likeImgList.push(data.id.toString())
        this.$store.commit('SET_LIKE_IMG_LIST', this.likeImgList)
        this.transition('redHeart')
      },
      async getRecordList (data) {
        const res = await Service.getRecordList(data)
        if(!res || res.message.toString().toUpperCase() !== 'SUCCESS') {
          alert('获取记录失败,' + res.message)
          return
        }
        /*res.data = [
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
        this.imgList = res.data
        this.setLikeAndComment(this.infoIndex)
      },
      transition (ele) {
        this.$nextTick(()=>{
          this.$refs[ele].style.opacity = 0
          this.$refs[ele].style.transition = 'all 0s'
          setTimeout(()=> {
            this.$refs[ele].style.opacity = 1
            this.$refs[ele].style.transition = 'all 1.5s'
          },0)
        })
      },
      setLikeAndComment (index) {
        this.likes = this.imgList[index].like
        this.comments = this.imgList[index].content
      },
      play (dir) {
        this.$refs.imgContainer.style.width = 6.15 * (this.imgList.length + 1) + 'rem'
      	if(dir === 'right') {
      		this.index ++
          this.infoIndex ++
        }
        if(dir === 'left') {
          this.index --
          this.infoIndex --
        }
        if(this.infoIndex >= this.imgList.length){
          this.infoIndex = 0
        }
        if(this.infoIndex < 0){
          this.infoIndex = this.imgList.length - 1
        }
        if(this.index >= (this.imgList.length + 1)){
          this.$refs.imgContainer.style.marginLeft = 0
          this.$refs.imgContainer.style.transition = '0s'
          this.index = 1
        }
        if(this.index < 0){
          this.$refs.imgContainer.style.marginLeft = -6.15 * this.imgList.length + 'rem'
          this.$refs.imgContainer.style.transition = '0s'
          this.index = this.imgList.length -1
        }
        if(this.$refs.imgContainer.style.transition && this.$refs.imgContainer.style.transition === '0s'){
          setTimeout(()=> {
            this.$refs.imgContainer.style.marginLeft = -6.15 * this.index + 'rem'
            this.$refs.imgContainer.style.transition = '1s'
          },0)
        }else{
          this.$refs.imgContainer.style.marginLeft = -6.15 * this.index + 'rem'
          this.$refs.imgContainer.style.transition = '1s'
        }
        this.transition('likeNum')
        this.transition('commentInfo')
        this.setLikeAndComment(this.infoIndex)
      },
      closeModal () {
        this.$refs.modal.style.opacity = 0
        this.$refs.modal.style.transition = '1s'
        setTimeout(()=> {
          this.visibleUpload = false
          this.$store.commit('SET_VISIBLE_UPLOAD', false)
        },1000)
      },
      upload () {
        let event = window.event
        let formData = new FormData();
        formData.append('file', event.target.files[0]);
        if(event.target.files[0].type.includes('image') || event.target.files[0].type.includes('video')){
          this.uploadFile(formData)
        }else{
        	alert('只能选择图片或者视频')
        }
      },
      setVisible (type, visible_type, isVisible) {
        visible_type = isVisible
        this.$store.commit(type, isVisible)
      },
      like () {
        this.likePhoto({id: this.imgList[this.infoIndex].id})
      },
      getNickId () {
        Tida.doAuth((data)  => {
          if(data.finish){
            let options = {
              sellerNick: "GoPro官方旗舰店"
            }
            Tida.mixNick(options, (data) => {
              this.$store.commit('SET_MIX_NICK', data.mixnick)
              alert(data.mixnick)
            })
          }else {
            alert('请登录后再进入活动')
          }
        })
      }
    },
    mounted () {

    }
  }
</script>
<style lang="less" scoped>
  .upload-modal{
    position: fixed;
    opacity: 0;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: rgba(0,0,0,.3);
    .upload-content{
      width:6.2rem;
      height:9.24rem;
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
    .upload-body{
      width:6.15rem;
      height:5.98rem;
      overflow: hidden;
      position: relative;
      background: #000;
      box-shadow:0rem .15rem .15rem rgba(0,0,0,.3);
      span{
        display: block;
        width:.42rem;
        height:1.14rem;
        position: absolute;
        top:50%;
        transform: translate(0,-50%);
        img{
          width: 100%;
          height:100%;
        }
      }
      .left{
        left:0.6rem;
      }
      .right{
        right:0.6rem;
      }
      .mask{
        width: 100%;
        height:100%;
        position: absolute;
        top:0;
        left:0;
        background: rgba(0,0,0,.3);
      }
    }
    .img-container{
      font-size: 0;
      height: 100%;
      li{
        display: inline-block;
        height: 5.98rem;
        width:6.15rem;
        position: relative;
        overflow: hidden;
      }
      img,video{
        display: block;
        max-width: 100%;
        max-height: 100%;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
      }
    }
    .upload-footer{
      width:100%;
      height:3.6rem;
      background: url('../../images/upload-1.png') no-repeat;
      background-size: contain;
      &>span{
        display: block;
        text-align: center;
        font-size: .24rem;
        height: .24rem;
        line-height: .24rem;
        margin-top: .15rem;
       }
    }
    .upload-footer>p:nth-of-type(1){
      font-size: .34rem;
      color:#01b8fe;
      text-align: center;
      margin-top: .28rem;
    }
    .upload-footer>label{
      display: block;
      font-size: .34rem;
      color:#fff;
      text-align: center;
      width:5.19rem;
      height:.98rem;
      margin: 0 auto;
      line-height: .98rem;
      margin-top: .15rem;
      padding-left: .5rem;
      input{
        display: none;
      }
    }
    .upload-footer-top{
      padding-top: .3rem;
      padding-left: .42rem;
      font-size:.22rem;
      img{
        width: 100%;
        height:100%;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
      }
      span,img{
        vertical-align: middle;
      }
      li{
        width:.09rem;
        height:.09rem;
        background: #939292;
        border-radius: 50%;
        display: inline-block;
        overflow: hidden;
      }
      ul{
        display: inline-block;
        transform: translate(0,-20%);
        vertical-align: middle;
      }
      p{
        display: inline-block;
      }
      &>p:nth-child(1){
        span:nth-child(2){
          display: inline-block;
          width:.6rem
        }
        span:nth-child(1){
          display: inline-block;
          width:.3rem;
          height:.27rem;
          font-size: 0;
          position: relative;
        }
      }
    }
  }
</style>

