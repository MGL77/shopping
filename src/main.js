// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// rem 开始
import "./assets/rem.js"
// rem 结束

// vant 开始
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// vant 结束

// axios 开始
import VueAxios from "vue-axios"
import axios from "axios"
Vue.use(VueAxios, axios)
// axios 结束

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
