import Vue from 'vue'
import Vuex from 'vuex'
import DashApp from './DashApp.vue'
const config = require('./styleData.json');

Vue.config.productionTip = false;


Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    config
  }
});


new Vue({
  store,
  render: h => h(DashApp),
}).$mount('#app');