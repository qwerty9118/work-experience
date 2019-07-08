<template>
  <div id="app">
<!--    <img id="imageAtTop" alt="Vue logo" src="./assets/logo.png" style="height: 200px;" onload="setTimeout(function(){image = document.getElementById('imageAtTop'), image.style = 'height: 100px;'}, 2000)">-->
<!--    <HelloWorld msg="Hello World"></HelloWorld>-->
<!--    <ExampleIFrameNWidgets msg="test widgets and iframes"></ExampleIFrameNWidgets>-->
    <DashboardLayout v-if="!settings"></DashboardLayout>
    <WidgetMaker v-else></WidgetMaker>

    <button @click="settings = !settings">Toggle Settings</button>
  </div>
</template>
<script>
// import HelloWorld from './tempRedundant/HelloWorld.vue'
// import ExampleIFrameNWidgets from './tempRedundant/ExampleIFrameNWidgets.vue'
import DashboardLayout from './tempRedundant/DashboardLayout.vue'
import WidgetMaker from './tempRedundant/WidgetMaker'
export default {
  name: 'app',
  data () {
    return {
      settings: false
    }
  },
  components: {
    WidgetMaker,
    // HelloWorld,
    // ExampleIFrameNWidgets
    DashboardLayout
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#imageAtTop {
  transition: width 2s, height 2s;
  transition-timing-function: ease;
}*/
</style>
