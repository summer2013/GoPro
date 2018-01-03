<template>
  <div class="submit-modal" v-if="visibleSubmit" ref="modal">
    <div class="submit-content">
      <label for="upload" @change="upload">
        <input type="file" accept="image/*,video/mp4" id="upload" >
      </label>
      <img src="../../images/close.png" alt="close" class="close" @click="closeModal">
      <input type="text" v-model="taoBaoId" placeholder="淘宝ID" class="tb-id" @focus="errorInfo = ''">
      <input type="text" v-model="shareContent" placeholder="分享我的探索感受" class="share-content" @focus="errorInfo = ''">
      <span>{{errorInfo}}</span>
      <p @click="submit()">提交</p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Service from '../../config/service'
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        visibleSubmit: 'visibleSubmit',
        mixNick: 'mixNick',
        currentUploadFile: 'currentUploadFile',
        visibleUploadSuccess: 'visibleUploadSuccess',
        tbId: 'tbId',
        currentArea: 'currentArea'
      })
    },
    watch: {
      visibleSubmit (newval, oldval) {
        if (newval !== oldval && newval) {
          this.$nextTick(()=>{
          	this.getTbId()
            setTimeout(()=> {
              this.$refs.modal.style.opacity = 1
              this.$refs.modal.style.transition = 'all 1s'
            },0)
          })
        }
      }
    },
    data () {
      return {
      	taoBaoId: null,
        shareContent: '',
        errorInfo:'',
        disableTbId: false
      }
    },
    methods: {
      async uploadFile (data) {
        const res = await Service.uploadFile(data)
        if(!res || res.message.toString().toUpperCase() !== 'SUCCESS') {
          alert('上传失败,' + res.message)
          return
        }
        this.$store.commit('CURRENT_UPLOAD_FILE', {images: res.data.id, type: res.data.type, path: res.data.path})
      },
      async saveRecord (data) {
        const res = await Service.saveRecord(data)
        if(!res || res.message.toString().toUpperCase() !== 'SUCCESS') {
          alert('保存上传记录失败')
          return
        }
        this.setVisible('SET_VISIBLE_SUBMIT', this.visibleSubmit, false)
        this.setVisible('SET_VISIBLE_UPLOAD_SUCCESS', this.visibleUploadSuccess, true)
      },
      async getUserInfo (data) {
        const res = await Service.getUserInfo(data)
        if(!res || res.message.toString().toUpperCase() !== 'SUCCESS') {
          alert('获取用户信息失败')
          return
        }
        if(res.data.name) {
          this.taoBaoId = res.data.name
          this.$store.commit('SET_TB_ID', this.taoBaoId)
          //this.disableTbId = true
        }
      },
      closeModal () {
        this.$refs.modal.style.opacity = 0
        this.$refs.modal.style.transition = '1s'
        setTimeout(()=> {
          this.visibleSubmit = false
          this.$store.commit('SET_VISIBLE_SUBMIT', false)
        },1000)
      },
      setVisible (type, visible_type, isVisible) {
        visible_type = isVisible
        this.$store.commit(type, isVisible)
      },
      upload () {
        this.errorInfo = ''
        let event = window.event
        let formData = new FormData();
        formData.append('file', event.target.files[0]);
        if(event.target.files[0].type.includes('image') || event.target.files[0].type.includes('video')){
          this.uploadFile(formData)
        }else{
          alert('只能选择图片或者视频')
        }
      },
      submit () {
      	if(!this.taoBaoId){
          this.errorInfo = '淘宝ID不能为空'
          return
        }
        this.$store.commit('SET_TB_ID', this.taoBaoId)
        if(!this.shareContent){
          this.errorInfo = '分享感受不能为空'
          return
        }
        if(this.currentUploadFile.images === null){
          this.errorInfo = '请选择上传文件'
          return
        }
        let params = {
          images: this.currentUploadFile.images,
          nick: 'dhiejophzx++==',
          name: this.taoBaoId,
          content: this.shareContent,
          area: this.currentArea.id,
          type: this.currentUploadFile.type
        }
        this.saveRecord(params)
      },
      getTbId () {
        if (this.tbId === null) {
          this.getUserInfo({nick: this.mixNick})
        } else {
          this.taoBaoId = this.tbId
          //this.disableTbId = true
        }
      }
    },
    mounted () {

    }
  }
</script>
<style lang="less" scoped>
  .submit-modal{
    z-index: 5;
    position: fixed;
    opacity: 0;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: rgba(0,0,0,.3);
    label{
      display: block;
      width:1.74rem;
      height:1.74rem;
      position: absolute;
      top:1.05rem;
      left:2.3rem;
      input{
        display: none;
      }
    }
    .submit-content{
      width:6.26rem;
      height:7.01rem;
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
      background: url('../../images/upload-2.png') no-repeat;
      background-size: contain;
      background-color: #fff;
    }
    .close{
      width:.62rem;
      height:.62rem;
      position: absolute;
      right:0rem;
      top:0;
      transform: translate(0,-100%);
    }
    input{
      display: block;
      width:4.45rem;
      height:.84rem;
      line-height: .84rem;
      padding-left: .25rem;
      background: transparent;
      margin-left: 1.31rem;
      font-size: 0.32rem;
    }
    .tb-id{
      margin-top: 3.1rem;
    }
    .share-content{
      margin-top: .2rem;
    }
    p{
      width:5.19rem;
      height:.98rem;
      margin:0 auto;
      color:#fff;
      text-align: center;
      line-height: .98rem;
      font-size: 0.34rem;
    }
    span {
      display: block;
      height:.58rem;
      line-height: .4rem;
      color:red;
      font-size: .22rem;
      padding-left: 1.31rem;
    }
  }
</style>
