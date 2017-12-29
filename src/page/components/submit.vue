<template>
  <div class="submit-modal" v-if="visibleSubmit" ref="modal">
    <div class="submit-content">
      <img src="../../images/close.png" alt="close" class="close" @click="closeModal">
      <input type="text" v-model="taoBaoId" placeholder="淘宝ID" class="tb-id" @focus="errorInfo = ''">
      <input type="text" v-model="shareContent" placeholder="分享我的探索感受" class="share-content" @focus="errorInfo = ''">
      <span>{{errorInfo}}</span>
      <p @click="submit()">提交</p>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        visibleSubmit: 'visibleSubmit',
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
        errorInfo:''
      }
    },
    methods: {
      closeModal () {
        this.$refs.modal.style.opacity = 0
        this.$refs.modal.style.transition = '1s'
        setTimeout(()=> {
          this.visibleSubmit = false
          this.$store.commit('SET_VISIBLE_SUBMIT', false)
        },1000)
      },
      submit () {
      	if(!this.taoBaoId){
          this.errorInfo = '淘宝ID不能为空'
          return
        }
        this.$store.commit('TAO_BAO_ID', this.taoBaoId)
        if(!this.shareContent){
          this.errorInfo = '分享感受不能为空'
          return
        }
      }
    },
    mounted () {
      this.taoBaoId = this.tbId
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
