import * as type from './mutation-types'
const state = {
  visibleUpload: false,
  visibleSubmit: false,
  visibleUploadSuccess: false,
  visiblePhotoWall: false,
  tbId: null
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
  [type.TAO_BAO_ID] (state, data) {
    state.tbId = data
  },
  [type.PHOTO_WALL] (state, data) {
    state.visiblePhotoWall = data
  }
}
export default {
  state,
  mutations
}
