<template>
  <div id="WCWrapper">
    <div @click="$emit('changeW')" v-if="state == 0" :style="{ backgroundColor: this.$store.state.config.cols.colDefault.mkrCol.tert, height:'100%', color:'white' }">---+ To the style settings +---</div>
    <div id="widgetCreator" v-else :style="{ backgroundColor: this.$store.state.config.cols.colDefault.mkrCol.tert, height:'100%' }">
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
        <div id="size4" class="widgetList" style="background-color: skyblue;"><!-- { backgroundColor: this.$store.state.config.cols.colDefault.mkrCol.bkgnd } -->
					<div id="widgetForm">
						Widget Name: <input type="text" id="name"><br>
						Widget Groups: <div>
							<div v-for="group in groups" :key="group" class="groupItem"> <!--:style="{ backgroundColor: this.$store.state.config.cols.colDefault.mkrCol.bkgnd, color: this.$store.state.config.cols.colDefault.mkrCol.dtail }">-->{{ group }} <input type="checkbox" :value="group"></div>
						</div>
						<textarea v-model="widgetInnerHtml"></textarea>
						<div id="previewWidget">hmm{{widgetInnerHtml}}</div><br>
						<!-- <div style="-webkit-box-shadow: 0 0 20px magenta; -webkit-border-radius: 100px; height: 100px; width: 100px; background: -webkit-gradient(radial, center center, 0, center center, 140, from(rgba(255,0,255,.2)), to(rgba(255,255,255,.7)));"></div><br>
						<div style="-webkit-box-shadow: 0 0 20px goldenrod; -webkit-border-radius: 100px; height: 100px; width: 200px; background: -webkit-gradient(radial, center center, 0, center center, 140, from(rgba(218,165,32,.2)), to(rgba(255,255,255,.7)));"></div><br>
						<div style="border: 3px solid rgba(0, 0, 0, 0.02); -webkit-box-shadow: 0 0 10px white; -webkit-border-radius: 100px; height: 200px; width: 100px; background: -webkit-gradient(radial, center center, 0, center center, 200, from(rgba(255,255,255,.1)), to(rgba(255,255,255,.9)));"></div><br>
            <div style="-webkit-box-shadow: 0 0 20px lime; -webkit-border-radius: 200px; height: 200px; width: 200px; background: -webkit-gradient(radial, center center, 0, center center, 140, from(rgba(0,255,0,.2)), to(rgba(255,255,255,.7)));"></div> -->
            <div style="height: 100px; width: 100px; background-image: url(/assets/Images/annoyingMode/annoying.PNG);"></div><br>
            <div style="height: 100px; width: 200px;"></div><br>
            <div style="height: 200px; width: 100px;"></div><br>
            <div style="height: 200px; width: 200px;"></div>
            <input type="button" value="CANCEL">
						<input type="button" value="ADD WIDGET">
					</div>
				</div><!-- i am aware that this looks awful -->
      </div>
    </div>
		<!--  -->
  </div>
</template>

<script>
export default {
  name: 'WidgetCreator',
  props: ['state'],
  data () {
    return {
			groups: ["hello", "my", "dewds"],
			widgetInnerHtml: "",
		}
  },
  computed: {},
  methods: {},
  mounted() {},
}
</script>

<style scoped>
  * {
    box-size: border-box;
    /*display: inline;*/
  }
  #widgetCreator {
    display: grid;
    grid-gap: 0px;
    padding: 0px;
    grid-template-columns: 10% 90%;
    grid-template-rows: 100%;
  }
	#previewWidget {
		display: inline;
		width: 50%;
		resize: none;
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
	.groupItem {
		display: inline;
		border-box: 2px solid black;
	}
</style>
