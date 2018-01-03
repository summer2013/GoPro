import ajax from './ajax'
let baseUrl = 'https://gopro.ews.m.jaeapp.com/index.php'
export default {
  //文件上传
  uploadFile (params) {
    //return fetch('/api/Uploads/uploadsFile', params, 'post')
    return ajax('post', baseUrl + '/api/Uploads/uploadsFile', params, true)
  },

  //点赞图片
  likePhoto (params) {
    return ajax('post', baseUrl + '/api/api/likes', params)
  },
  //保存上传记录
  saveRecord (params) {
    return ajax('post', baseUrl + '/api/api/saveRecord', params)
  },
  //获取用户信息
  getUserInfo (params) {
    return ajax('post', baseUrl + '/api/user/register', params)
  },
  //获取记录列表
  getRecordList (params){
    return ajax('post', baseUrl + '/api/api/getRecordList', params)
  },
  //获取热点城市
  getHotCities () {
    return ajax('get', baseUrl + '/api/api/getHotaddr')
  }
}
