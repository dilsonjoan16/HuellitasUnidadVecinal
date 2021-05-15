import Vue from 'vue'
import App from './App.vue'
import router from './router'

//Importamos Bootstrap
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

//Importamos SweetAlert
import swal from 'sweetalert2';
window.Swal = swal;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
