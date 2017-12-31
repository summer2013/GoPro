import * as type from './mutation-types'
const state = {
  visibleUpload: false,
  visibleSubmit: false,
  visibleUploadSuccess: false,
  visiblePhotoWall: false,
  mixNick: null,
  tbId: null,
  currentUploadFile: {
    images: null,
    type: null
  }
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
  [type.CURRENT_UPLOAD_FILE] (state, id, uploadType) {
    state.currentUploadFile = {
      images: id,
      type: uploadType
    }
  }
}
export default {
  state,
  mutations
}
