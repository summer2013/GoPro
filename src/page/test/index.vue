<template>
  <div class="container">
    <button @click="setVisible('SET_VISIBLE_UPLOAD', visibleUpload)">打开上传</button>
    <button @click="setVisible('SET_VISIBLE_SUBMIT', visibleSubmit)">打开提交</button>
    <button @click="setVisible('SET_VISIBLE_UPLOAD_SUCCESS', visibleUploadSuccess)">打开上传成功</button>
    <!--<input type="file" accept="image/*,video/*">-->
    <upload></upload>
    <submit></submit>
    <upload-success></upload-success>
    <!--<photo-wall></photo-wall>-->
  </div>
</template>
<script>
  import upload from '../components/upload'
  import submit from '../components/submit'
  import uploadSuccess from '../components/upload-success'
  import photoWall from '../components/photo-wall'
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        visibleUpload: 'visibleUpload',
        visibleSubmit: 'visibleSubmit',
        visibleUploadSuccess: 'visibleUploadSuccess'
      })
    },
  	components: {
      upload,
      submit,
      uploadSuccess,
      photoWall
    },
    data () {
  		return {

      }
    },
    methods: {
      setVisible (type, visible_type) {
        visible_type = true
        this.$store.commit(type, true)
      }
    }
  }
</script>
<style lang="less">
  .container{
    height:1000px;
  }
</style>

