<template>
  <div id="htmlbit" class="htmlbit">
    <style-creator></style-creator>
    <widget-creator></widget-creator>
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
    return {}
  },
  computed: {},
  methods: {},
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
  .htmlbit {
    height: 100vh;
    display: grid;
    grid-gap: 0px;
    padding: 0px;
    grid-template-columns: 100%;
    grid-template-rows: 5% 95%;
    transition: grid-template-rows 1s ease 0s;
  }
  .htmlbitSwitch {
    grid-template-rows: 95% 5%;
  }
</style>
