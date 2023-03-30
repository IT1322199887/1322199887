import Vue from 'vue'
import "./mock"
import App from './App.vue'
import router from './router'
import store from './store'
import api from "./api"
import iview from "view-design"
import "view-design/dist/styles/iview.css"
import * as echarts from "echarts"
import utils from "./utils/utils"
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$echarts = echarts
Vue.prototype.$utils = utils
Vue.use(iview)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
