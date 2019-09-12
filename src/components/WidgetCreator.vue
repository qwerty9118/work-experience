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
        <div id="size4" class="widgetList" :style="{ backgroundColor: this.$store.state.config.cols.colDefault.mkrCol.bkgnd }">
					<div id="widgetForm">
						Widget Name: <input type="text" id="name"><br>
						Widget Groups: <div>
							<div v-for="group in groups" :key="group" class="groupItem"> <!--:style="{ backgroundColor: this.$store.state.config.cols.colDefault.mkrCol.bkgnd, color: this.$store.state.config.cols.colDefault.mkrCol.dtail }">-->{{ group }} <input type="checkbox" :value="group" v-model="checkedGroups"></div>
							<div class="groupItem"><input type="button" @click="addGroup()"></div>
						</div>
						<textarea v-model="widgetInnerHtml"></textarea>
						<div id="previewWidget">hmm{{widgetInnerHtml}}</div><br>
            <input type="button" value="CANCEL">
						<input type="button" value="ADD WIDGET">
					</div>
				</div>
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
			groups: ["1x1", "2x1", "1x2", "2x2", "hello", "my", "dewds"],
			widgetInnerHtml: "",
			checkedGroups: []
		}
  },
  computed: {},
  methods: {
      addGroup(){

			}
	},
  mounted() {}
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
