<template>
  <div id="WEWrapper" :style="WStyle">
    <style-creator :state="state.s" @changeS="stateChange('s')"></style-creator>
    <widget-creator :state="state.w" @changeW="stateChange('w')"></widget-creator>
  </div>
</template>

<script>
import StyleCreator from './StyleCreator'
import WidgetCreator from './WidgetCreator'
export default {
  name: 'WidgetEditorv2',
  components: {
    StyleCreator,
    WidgetCreator
  },
  data () {
    return {
      WStyle: "grid-template-rows: 5% 95%;",
      state: { s: 0, w: 1 }
    }
  },
  computed: {},
  methods: {
    dlayChange(value){if(value == "s"){this.state.w = 0;}else{this.state.s = 0;}},
    stateChange(value){
      if(value == "s"){
        this.WStyle = "grid-template-rows: 95% 5%;";
        this.state.s = 1;
        setTimeout(this.dlayChange, 870, "s");
      }else if(value == "w"){
        this.WStyle = "grid-template-rows: 5% 95%;";
        this.state.w = 1;
        setTimeout(this.dlayChange, 870, "w");
      }else{console.log("ah. now i still have no clue what the problem is.")}
    }
  },
  mounted() {},
}
</script>

<style scoped>
  * {
    box-size: border-box;
    display: inline;
  }
  body {
    overflow: hidden;
  }
  #WEWrapper {
    height: 100vh;
    display: grid;
    grid-gap: 0px;
    padding: 0px;
    grid-template-columns: 100%;
    transition: grid-template-rows 1s ease 0s;
  }
</style>
