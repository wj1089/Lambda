import Vue from "vue"
import App from "./App.vue"
import router from "./routers"
import {store} from "./stores"
import axios from 'axios'
import vuex from 'vuex'


Vue.config.productionTip = false
Vue.use(vuex)
new Vue({
  router,
  store,
  axios,
  vuex,
  render: h => h(App)
}).$mount("#app")