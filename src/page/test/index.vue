<template>
  <div class="container">
    <button @click="setVisible('SET_VISIBLE_UPLOAD', visibleUpload, true)">打开上传</button>
    <button @click="setVisible('SET_VISIBLE_SUBMIT', visibleSubmit, true)">打开提交</button>
    <button @click="setVisible('SET_VISIBLE_UPLOAD_SUCCESS', visibleUploadSuccess, true)">打开上传成功</button>
    <button @click="setVisible('PHOTO_WALL', visiblePhotoWall, true)">打开照片墙</button>
    <upload></upload>
    <submit></submit>
    <upload-success></upload-success>
    <photo-wall></photo-wall>
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
        visibleUploadSuccess: 'visibleUploadSuccess',
        visiblePhotoWall: 'visiblePhotoWall'
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
      setVisible (type, visible_type, isVisible) {
        visible_type = isVisible
        this.$store.commit(type, isVisible)
      }
    },
    mounted () {

    }
  }
</script>
<style lang="less">
  .container{
    height:1000px;
    position: relative;
  }
</style>

