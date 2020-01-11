import Vue from 'vue'
import Vuex from 'vuex'
import DashApp from './DashApp.vue'
//var fileServer = require('./fileServer.js');
const config = require('./styleData.json');

//fileServer.fileServer.listen(3000, '10.10.3.131');
console.log("the file server is up");

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