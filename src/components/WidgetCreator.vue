<template>
  <div id="widgetCreator">
    <div @click="change2widget()" v-if="goBottomBar === 1" :style="{ backgroundColor: this.$store.state.config.cols.colDefault.mkrCol.tert }"></div>
    <div class="widgetCreator" v-else :style="{ backgroundColor: this.$store.state.config.cols.colDefault.mkrCol.tert }">
      <div id="addWidgetButton" class="addNewContainer" :style="{ backgroundColor: this.$store.state.config.cols.colDefault.mkrCol.tert }">
        <input type="button" id="createWidget" value="Create New Widget" class="addNew" :style="{ backgroundColor: this.$store.state.config.cols.colDefault.mkrCol.prim, color: this.$store.state.config.cols.colDefault.mkrCol.dtail }">
      </div>
      <div id="usedWidgets" class="usedBlock" :style="{ backgroundColor: this.$store.state.config.cols.colDefault.mkrCol.seco, color: this.$store.state.config.cols.colDefault.mkrCol.dtail }">
        <div id="size1Title" class="listTitle" :style="{ backgroundColor: this.$store.state.config.cols.colDefault.mkrCol.prim, color: this.$store.state.config.cols.colDefault.mkrCol.dtail }">1x1</div>
        <div id="size2Title" class="listTitle" :style="{ backgroundColor: this.$store.state.config.cols.colDefault.mkrCol.prim, color: this.$store.state.config.cols.colDefault.mkrCol.dtail }">2x1</div>
        <div id="size3Title" class="listTitle" :style="{ backgroundColor: this.$store.state.config.cols.colDefault.mkrCol.prim, color: this.$store.state.config.cols.colDefault.mkrCol.dtail }">1x2</div>
        <div id="size4Title" class="listTitle" :style="{ backgroundColor: this.$store.state.config.cols.colDefault.mkrCol.prim, color: this.$store.state.config.cols.colDefault.mkrCol.dtail }">2x2</div>
        <div id="size1" class="widgetList" :style="{ backgroundColor: this.$store.state.config.cols.colDefault.mkrCol.bkgnd }"></div>
        <div id="size2" class="widgetList" :style="{ backgroundColor: this.$store.state.config.cols.colDefault.mkrCol.bkgnd }"></div>
        <div id="size3" class="widgetList" :style="{ backgroundColor: this.$store.state.config.cols.colDefault.mkrCol.bkgnd }"></div>
        <div id="size4" class="widgetList" :style="{ backgroundColor: this.$store.state.config.cols.colDefault.mkrCol.bkgnd }"></div><!-- i am aware that this looks awful -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WidgetCreator',
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
  .widgetCreator {
    display: grid;
    grid-gap: 0px;
    padding: 0px;
    grid-template-columns: 10% 90%;
    grid-template-rows: 100%;
  }
  .addNewContainer {
    display: grid;
    grid-gap: 10px;
    padding: 10px;
    grid-template-columns: 100%;
    grid-template-rows: calc(100% - 5px);
  }
  .usedBlock {
    display: grid;
    grid-gap: 10px;
    padding: 10px;
    grid-template-columns: calc(25% - 7px) calc(25% - 8px) calc(25% - 8px) calc(25% - 7px);
    grid-template-rows: calc(10% - 5px) calc(90% - 5px);
  }
  .addNew {
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-size: 30px;
  }
  .widgetList {
    display: inline-block;
    overflow: auto;
    text-align: center;/*
    padding-top: 5px;*/
  }
  .listTitle {
    text-align: center;
    font-size: 8vh;
  }
  .widget {
    border: 2px solid black;
    width: 90%;
    margin: 2px 4px 0px 4px;
  }
</style>
