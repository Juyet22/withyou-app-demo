import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'
import store from './store'

import { Icon } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'lib-flexible'

import global from 'static/js/global'
import 'assets/css/global.css'

Vue.use(Icon)
Vue.use(global)
Vue.config.productionTip = false

new Vue({
  router: router,
  store: store,
  render: (h) => h(App),
}).$mount('#app')
