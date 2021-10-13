import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './plugins/element.js'
import router from './router'
import axios from './axios'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
