import * as type from './mutation-types'
const state = {
  visibleUpload: false,
  visibleSubmit: false,
  visibleUploadSuccess: false,
  visiblePhotoWall: false,
  mixNick: null,
  tbId: 'colinjune',
  currentUploadFile: {
    images: null,
    type: null,
    path: null
  },
  currentArea: {
    id: null,
    name: null
  },
  likeImgList: []
}
const mutations = {
  [type.SET_VISIBLE_UPLOAD] (state, data) {
    state.visibleUpload = data
  },
  [type.SET_VISIBLE_SUBMIT] (state, data) {
    state.visibleSubmit = data
  },
  [type.SET_VISIBLE_UPLOAD_SUCCESS] (state, data) {
    state.visibleUploadSuccess = data
  },
  [type.SET_MIX_NICK] (state, data) {
    state.mixNick = data
  },
  [type.SET_TB_ID] (state, data) {
    state.tbId = data
  },
  [type.PHOTO_WALL] (state, data) {
    state.visiblePhotoWall = data
  },
  [type.CURRENT_UPLOAD_FILE] (state, data) {
    state.currentUploadFile = data
  },
  [type.SET_CURRENT_AREA] (state, data) {
    state.currentArea = data
  },
  [type.SET_LIKE_IMG_LIST] (state, data) {
    state.likeImgList = data
  }
}
export default {
  state,
  mutations
}
