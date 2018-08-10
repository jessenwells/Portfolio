import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Meta from 'vue-meta'
import Vue2TouchEvents from 'vue2-touch-events'
import 'basiclightbox/dist/basicLightbox.min.css'

Vue.use(Meta)
Vue.use(Vue2TouchEvents, {
  swipeTolerance: 100
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
