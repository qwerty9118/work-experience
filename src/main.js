import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import DashApp from './DashApp.vue'
//const config = require('./styleData.json');


Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueResource);

const store = new Vuex.Store({
  state: {
    //config
  }
});

new Vue({
  store,
  render: h => h(DashApp),
}).$mount('#app');