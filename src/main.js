import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'

import 'assets/css/global.css'

Vue.config.productionTip = false

new Vue({
  router: router,
  
  render: h => h(App),
}).$mount('#app')
