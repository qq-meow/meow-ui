import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Mbuton from '../packages'
console.log(Mbuton, 333333333)
Vue.use(Mbuton)

new Vue({
  render: h => h(App),
}).$mount('#app')
