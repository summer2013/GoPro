<template>
  <div class="submit-modal" v-if="visibleSubmit" ref="modal">
    <div class="submit-content">
      <img src="../../images/close.png" alt="close" class="close" @click="closeModal">
      <input type="text" v-model="taoBaoId" placeholder="淘宝ID" class="tb-id" @focus="errorInfo = ''">
      <input type="text" v-model="shareContent" placeholder="分享我的探索感受" class="share-content" @focus="errorInfo = ''">
      <span>{{errorInfo}}</span>
      <p @click="submit()">提交</p>
    </div>
    <upload-success></upload-success>
  </div>
</template>
<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  import uploadSuccess from './upload-success'
  export default {
    components: {
      uploadSuccess
    },
    computed: {
      ...mapGetters({
        visibleSubmit: 'visibleSubmit',
        mixNick: 'mixNick',
        currentUploadFile: 'currentUploadFile',
        visibleUploadSuccess: 'visibleUploadSuccess',
        tbId: 'tbId'
      })
    },
    watch: {
      visibleSubmit (newval, oldval) {
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
    data () {
      return {
      	taoBaoId: null,
        shareContent: '',
        errorInfo:'',
        disableTbId: false
      }
    },
    methods: {
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
        let params = {
          images: this.currentUploadFile.images,
          nick: this.mixNick,
          name: this.taoBaoId,
          content: this.shareContent,
          area: null,
          type: this.currentUploadFile.type
        }
        this.saveRecord(params)
      }
    },
    mounted () {
      if (this.tbId === null) {
        this.getUserInfo({nick: this.mixNick})
      } else {
        this.taoBaoId = this.tbId
        //this.disableTbId = true
      }
    }
  }
</script>
<style lang="less" scoped>
  .submit-modal{
    position: fixed;
    opacity: 0;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: rgba(0,0,0,.3);
    .submit-content{
      width:6.26rem;
      height:7.01rem;
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
      background: url('../../images/upload-2.png') no-repeat;
      background-size: contain;
    }
    .close{
      width:.62rem;
      height:.62rem;
      position: absolute;
      right:0.05rem;
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
