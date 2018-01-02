import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import ajax from './config/ajax'
import './style/common'
import './config/rem'
import store from './vuex/store'

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

new Vue({
	router,
  store,
}).$mount('#app')
