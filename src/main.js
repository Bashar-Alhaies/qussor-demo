import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';
import VueRouter from 'vue-router'
import LandingPage from './components/main/LandingPage'
import ConstructionPage from './components/main/ConstructionPage'

Vue.use(BootstrapVue);
Vue.use( VueRouter )

const routes = [
  { path: '/', component: LandingPage},
  { path: `/construction`, component: ConstructionPage},
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});