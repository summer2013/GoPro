import fetch from './fetch'
import ajax from './ajax'
let baseUrl = 'http://gopro.ews.m.jaeapp.com/index.php'
export default {
  //文件上传
  uploadFile (params) {
    console.log(params)
    //return fetch('/api/Uploads/uploadsFile', params, 'post')
    return ajax('post',baseUrl + '/api/Uploads/uploadsFile', params)
  }
}
