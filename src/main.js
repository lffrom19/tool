import Vue from 'vue'
import App from './App.vue'
import './basecss/global.less'
import 'animate.css'
import VueRouter from 'vue-router'
import router from './router.js'
import './element-ui/index.js'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(VueRouter)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})