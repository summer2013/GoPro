import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import ajax from './config/ajax'
import './style/common'
import './config/rem'
// import vuescroll from 'vue-scroll'
// Vue.use(vuescroll)

// 注册一个全局自定义指令 `v-focus`
Vue.directive('dynamicPosition', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    console.log(el)
    window.addEventListener('scroll', function() {
      var rect = el.getBoundingClientRect()
      var diff = (rect.left + rect.width/2) - (window.innerWidth/2 || document.documentElement.clientWidth/2)
      console.log('xxx->', rect.left , window.innerWidth/2, diff)
      if(diff <= 3) {
         console.log('happy time!')
      }
    });
  },
})

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

new Vue({
	router,
}).$mount('#app')
