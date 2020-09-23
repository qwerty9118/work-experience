<template>
  <div id="WCWrapper" style="display:grid;">
    <div @click="$emit('changeW')" v-if="state == 0" :style="{ backgroundColor: colours.tert, color:'white' }">---+ To the style settings +---</div>
    <div id="widgetCreator" v-else :style="{ backgroundColor: colours.tert, height:'100%' }">
      <div id="addWidgetButton" class="addNewContainer" :style="{ backgroundColor: colours.tert }">
        <input type="button" id="createWidget" value="Create New Widget" class="addNew" :style="{ backgroundColor: colours.prim, color: colours.dtail }">
      </div>
      <div id="usedWidgets" class="usedBlock" :style="{ backgroundColor: colours.seco, color: colours.dtail }">
        <div id="size1Title" class="listTitle" :style="{ backgroundColor: colours.prim, color: colours.dtail }">1x1</div>
        <div id="size2Title" class="listTitle" :style="{ backgroundColor: colours.prim, color: colours.dtail }">2x1</div>
        <div id="size3Title" class="listTitle" :style="{ backgroundColor: colours.prim, color: colours.dtail }">1x2</div>
        <div id="size4Title" class="listTitle" :style="{ backgroundColor: colours.prim, color: colours.dtail }">2x2</div>
        <div id="size1" class="widgetList" :style="{ backgroundColor: colours.bkgnd }"></div>
        <div id="size2" class="widgetList" :style="{ backgroundColor: colours.bkgnd }"></div>
        <div id="size3" class="widgetList" :style="{ backgroundColor: colours.bkgnd }"></div>
        <div id="size4" class="widgetList" :style="{ backgroundColor: colours.bkgnd }">
					<div id="widgetForm">
						Widget Name: <input type="text" id="name"><br>
						Widget Groups: <div>
						<div v-for="(group, index) in groups" :key="group" class="groupItem">{{ group }} <input type="checkbox" :value="group" v-model="checkedGroups"><input type="button" @click="delete groups[index]" value="X"></div>
							<div class="groupItem"><input type="text" v-model="newGroup"><input type="button" @click="addGroup()"></div>
						</div>
						<textarea v-model="widgetInnerHtml"></textarea>
						<div id="previewWidget">hmm{{widgetInnerHtml}}</div><br>
            <input type="button" value="CANCEL">
						<input type="button" value="ADD WIDGET">
					</div>
				</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WidgetCreator',
  props: ['state'],
  data () {
    return {
			colours: {"bkgnd": "lightcyan", "prim": "deepskyblue", "seco": "blue", "tert": "navy", "dtail": "black"},
			groups: ["1x1", "2x1", "1x2", "2x2", "hello", "my", "dewds"],
			widgetInnerHtml: "",
			checkedGroups: [],
			newGroup: ""
		}
  },
  computed: {},
  methods: {
		addGroup(){
			if(this.newGroup !== ""){
				this.groups.push(this.newGroup);
			}
			console.log(this.groups);
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
