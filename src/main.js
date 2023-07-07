import Vue from 'vue';

// import vant ui
import Vant from 'vant';
import 'vant/lib/index.css';

// import global index.scss
import '@/styles/index.scss'

import App from './App.vue';
import router from './router';
import store from './store';

import './permission' // permission control

// use vant ui
Vue.use(Vant)

// vue config
Vue.config.productionTip = false;

// create vue
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
