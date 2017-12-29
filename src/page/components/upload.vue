<template>
  <div class="upload-modal" v-if="visibleUpload" ref="modal">
    <div class="upload-content">
      <img src="../../images/close.png" alt="close" class="close" @click="closeModal">
      <div class="upload-body" ref="uploadBody">
        <div class="img-container" ref="imgContainer">
          <img src="../../images/111.jpg" alt="" style="height: 5.98rem;width:6.15rem;">
          <img src="../../images/222.jpg" alt="" style="height: 5.98rem;width:6.15rem;">
          <img src="../../images/333.jpg" alt="" style="height: 5.98rem;width:6.15rem;">
          <img src="../../images/111.jpg" alt="" style="height: 5.98rem;width:6.15rem;">
        </div>
        <div class="mask"></div>
        <span class="left"><img src="../../images/left.png" alt="" @click="play('left')"></span>
        <span class="right"><img src="../../images/right.png" alt="" @click="play('right')"></span>
      </div>
      <div class="upload-footer">
        <div class="upload-footer-top">
          <p><img src="../../images/heart.png" alt=""><span>999</span></p>
          <p>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <span @click="explore">更多</span>
          </p>
        </div>
        <p>探索长滩海滩</p>
        <label for="upload" @change="upload()">上传你的脚步
          <input type="file" accept="image/*,video/mp4" id="upload" >
        </label>
      </div>
    </div>
    <photo-wall></photo-wall>
  </div>
</template>
<script>
  import Service from '../../config/service'
  import photoWall from './photo-wall'
  import { mapGetters } from 'vuex'
  export default {
    components: {
      photoWall
    },
    data () {
  		return {
        imgList: ['/static/img/111.jpg', '/static/img/222.jpg', '/static/img/333.jpg'],
        index: 0
      }
    },
    computed: {
      ...mapGetters({
        visibleUpload: 'visibleUpload',
        visiblePhotoWall: 'visiblePhotoWall'
      })
    },
    watch: {
      visibleUpload (newval, oldval) {
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
      async uploadFile (data) {
    		const res = await Service.uploadFile(data)
        if(!res || res.message.toString() !== 'Success') {
    			alert('上传失败')
          return
        }
        alert('上传成功')
      },
      init () {
        this.$refs.imgContainer.style.width = 6.15 * (this.imgList.length + 1) + 'rem'
      },
      play (dir) {
        this.$refs.imgContainer.style.width = 6.15 * (this.imgList.length + 1) + 'rem'
      	if(dir === 'right') {
      		this.index ++
        }
        if(dir === 'left') {
          this.index --
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
      explore () {
      	this.visiblePhotoWall = true
        this.$store.commit('PHOTO_WALL', true)
      }
    },
    mounted () {
      this.$nextTick(()=>{
        this.init()
      })
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
      img{
        display: inline-block;
      }
    }
    .upload-footer{
      width:100%;
      height:3.26rem;
      background: url('../../images/upload-1.png') no-repeat;
      background-size: contain;
    }
    .upload-footer>p:nth-of-type(1){
      font-size: .34rem;
      color:#01b8fe;
      text-align: center;
      margin-top: .35rem;
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
        width:.29rem;
        height:.26rem;
        padding-right: .1rem;
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
      }
      ul{
        display: inline-block;
        transform: translate(0,-20%);
        vertical-align: middle;
      }
      p{
        display: inline-block;
      }
      &>p:nth-child(2){
        margin-left: .32rem;
      }
    }
  }
</style>

