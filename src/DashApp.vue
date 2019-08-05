<template>
  <div id="app">

<!--      {{ this.$store.state.config.hello }}-->

    <TheAlgorithmLite2 v-if="!settings"></TheAlgorithmLite2>
    <WidgetEditor v-if="false"></WidgetEditor>
    <WidgetEditorv2 v-if="settings"></WidgetEditorv2>
    <button @click="settings = !settings" style="width: 100%">Toggle Settings</button>
  </div>
</template>
<script>
import TheAlgorithmLite2 from './components/The Algorithm Lite Rewritten'
import WidgetEditor from './components/WidgetEditor'
import WidgetEditorv2 from './components/WidgetEditorv2'
export default {
  name: 'app',
  data () {
    return {
      settings: false,
    }
  },
  components: {
    WidgetEditor,
    WidgetEditorv2,
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
