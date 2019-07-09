<template>
  <div id="app">
    <TheAlgorithmLite2 v-if="!settings" :JSONString="JSONDistributor"></TheAlgorithmLite2>
    <WidgetEditor v-else :JSONString="JSONDistributor" @reloadStyles="styleLoad()"></WidgetEditor>
    <button @click="settings = !settings">Toggle Settings</button>
    <button v-on:click="get">Call Server</button>
  </div>
</template>
<script>
import TheAlgorithmLite2 from './components/The Algorithm Lite Rewritten'
import WidgetEditor from './components/WidgetEditor'
export default {
  name: 'app',
  props: {
    JSONDistributor: String
  },
  data () {
    return {
      settings: false,
    }
  },
  components: {
    WidgetEditor,
    TheAlgorithmLite2
  },
  methods: {
    styleLoad() {},
    get: function() {
      // GET request
      this.$http({
        url: 'localhost:8081',
        method: 'GET'
      }).then(function(response) {
        console.log('ok');
      }, function(response) {
        console.log('failed');
      });
    }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: monospace;
    font-weight: bolder;
  }
</style>
