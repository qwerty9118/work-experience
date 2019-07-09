import Vue from 'vue'
// import App from './components/App.vue'
import DashApp from './DashApp.vue'
//import "./index.js"


const config = require('./styleData.json');

Vue.config.productionTip = false;

new Vue({
  render: h => h(DashApp),
}).$mount('#app');