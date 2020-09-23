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
  mounted () {},
  methods: {
    transferData(cMethod, cFile){
      if(cMethod == "GET"){
        this.$http.get("http://localhost:8080/"+cFile).then(
                res => {
                  this.data = res.body;
                },
                err => {
                  console.error(err);
                });
      }/*
      else if(cMethod == "POST"){
      }*/
      else{
        console.log("cMethod = "+cMethod);
      }
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
