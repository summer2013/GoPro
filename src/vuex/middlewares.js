import creatLogger from 'vuex/dist/logger'
const debug = process.env.NODE_ENV !== 'production'
let middlewares = []
if (debug) {
  middlewares.push(creatLogger())
}
export default middlewares
