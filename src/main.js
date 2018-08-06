import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Meta from 'vue-meta'
import 'basiclightbox/dist/basicLightbox.min.css'

Vue.use(Meta)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
