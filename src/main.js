import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import axios from 'axios' // we import axios from installed dependencies


// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.config.productionTip = false
//Vue.use(axios) // we register axios globally

new Vue({
  el: '#app',
      template: '<App/>',
      components: { App },
  render: h => h(App),
}).$mount('#app')
