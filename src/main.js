// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/indexstore'
import $ from 'jquery'
import './assets/css/app.scss'
import './gen'
import '../static/font_904863_g9vqwf7qiuw/iconfont.css'
import './jiekou'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
