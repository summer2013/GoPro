import fetch from './fetch'
import ajax from './ajax'
let baseUrl = 'http://gopro.ews.m.jaeapp.com/index.php'
export default {
  //文件上传
  uploadFile (params) {
    //return fetch('/api/Uploads/uploadsFile', params, 'post')
    return ajax('post',baseUrl + '/api/Uploads/uploadsFile', params, true)
  },

  //点赞图片
  likePhoto () {
    return ajax('post',baseUrl + '/api/api/likes', params)
  },
  //保存上传记录
  saveRecord () {
    return ajax('post',baseUrl + '/api/api/saveRecord', params)
  },
  //获取用户信息
  getUserInfo () {
    return ajax('post',baseUrl + '/api/user/register', params)
  },
  //获取记录列表
  getRecordList (){
    return ajax('post',baseUrl + '/api/api/getRecordList', params)
  }
}
