import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import './common/css/common.css'
import './common/css/reset.css'
import './plugins/mint.js'

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
