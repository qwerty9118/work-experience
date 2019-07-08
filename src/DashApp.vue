<template>
  <div id="app">
    <TheAlgorithmLite2 v-if="!settings"></TheAlgorithmLite2>
    <WidgetEditor v-else></WidgetEditor>
    <button @click="settings = !settings">Toggle Settings</button>
  </div>
</template>
<script>
import TheAlgorithmLite2 from './components/The Algorithm Lite Rewritten'
import WidgetEditor from './components/WidgetEditor'
export default {
  name: 'app',
  data () {
    return {

      settings: false,
    }
  },
  components: {
    WidgetEditor,
    TheAlgorithmLite2
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
