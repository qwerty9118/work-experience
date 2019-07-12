<template>
  <div id="htmlbit" :class="htmlbitClasses">
    <div @click="change2style()" v-if="goTopBar === 1" :style="{ backgroundColor: this.$store.state.config.cols.col.stylrCol.tert }"></div>
    <div class="styleCreator" v-else :style="{ backgroundColor: this.$store.state.config.cols.col.stylrCol.tert }">
      <div id="optionsForStyle">
        <!-- colour wheel and colour rrggbb inputs for each colour, name of style -->
        <input v-model="modelValues.optionsForStyle.nameOfStyl" placeholder="Name of your style"><br>
        <div id="stylColPickGrid">
          <div id="stylColPickDshbrd">
            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickDshbrd.nameOrColPickA"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickDshbrd.nameOrColPickA" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueA" placeholder="CSS colour name">
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueA">

            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickDshbrd.nameOrColPickB"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickDshbrd.nameOrColPickB" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueB" placeholder="CSS colour name">
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueB">

            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickDshbrd.nameOrColPickC"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickDshbrd.nameOrColPickC" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueC" placeholder="CSS colour name">
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueC">

            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickDshbrd.nameOrColPickD"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickDshbrd.nameOrColPickD" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueD" placeholder="CSS colour name">
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueD">

            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickDshbrd.nameOrColPickE"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickDshbrd.nameOrColPickE" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueE" placeholder="CSS colour name">
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueE">
          </div>
          <div id="stylColPickMkr">
            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickMkr.nameOrColPickA"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickMkr.nameOrColPickA" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueA" placeholder="CSS colour name">
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueA">

            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickMkr.nameOrColPickB"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickMkr.nameOrColPickB" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueB" placeholder="CSS colour name" >
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueB">

            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickMkr.nameOrColPickC"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickMkr.nameOrColPickC" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueC" placeholder="CSS colour name" >
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueC">

            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickMkr.nameOrColPickD"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickMkr.nameOrColPickD" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueD" placeholder="CSS colour name" >
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueD">

            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickMkr.nameOrColPickE"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickMkr.nameOrColPickE" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueE" placeholder="CSS colour name" >
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueE">
          </div>
          <div id="stylColPickStylr">
            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickStylr.nameOrColPickA"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickStylr.nameOrColPickA" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueA" placeholder="CSS colour name">
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueA">

            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickStylr.nameOrColPickB"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickStylr.nameOrColPickB" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueB" placeholder="CSS colour name">
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueB">

            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickStylr.nameOrColPickC"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickStylr.nameOrColPickC" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueC" placeholder="CSS colour name">
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueC">

            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickStylr.nameOrColPickD"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickStylr.nameOrColPickD" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueD" placeholder="CSS colour name">
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueD">

            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickStylr.nameOrColPickE"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickStylr.nameOrColPickE" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueE" placeholder="CSS colour name">
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueE">
          </div>
        </div>
      </div>
      <div id="previewOfStyle" class="previewGrid">
        <!-- square x 3 with examples of colours -->
        <div class="previewGridDash" :style="{ backgroundColor: modelValues.optionsForStyle.stylColPickDshbrd.valueA }">
          <div class="previewGridDashItem previewGridDashItem4" :style="{ backgroundColor: modelValues.optionsForStyle.stylColPickDshbrd.valueB }">4</div>
          <div class="previewGridDashItem" :style="{ backgroundColor: modelValues.optionsForStyle.stylColPickDshbrd.valueC }">1</div>
          <div class="previewGridDashItem previewGridDashItem3" :style="{ backgroundColor: modelValues.optionsForStyle.stylColPickDshbrd.valueD }">3</div>
          <div class="previewGridDashItem previewGridDashItem2" :style="{ backgroundColor: modelValues.optionsForStyle.stylColPickDshbrd.valueE }">2</div>
        </div>
        <div class="previewGridWidg"></div>
        <div class="previewGridStyl"></div>
      </div>
      <div id="savedStylesOptions">
        <!-- 1 style or all selected styles on loop, select all button, how often to change style(minutes, hours, days) -->
        <input type="number" :style="{  }" value="" name="" v-model.number="modelValues.savedStylesOptions.unitMultiplier">
        <select id="timeUnitSelect" :style="{  }"  v-model="modelValues.savedStylesOptions.unitOfTime">
          <option :style="{  }">Minutes</option>
          <option :style="{  }">Hours</option>
          <option :style="{  }">Days</option>
        </select>
        <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.savedStylesOptions.oneOrManyStyles"><span class="slider"></span></label>
        <br>
        <input v-if="modelValues.savedStylesOptions.oneOrManyStyles" type="checkbox" id="toggleAll" :style="{  }" @click="toggleAllFunc()">
        <label v-if="modelValues.savedStylesOptions.oneOrManyStyles" for="toggleAll">Select All</label>
      </div>
      <div id="savedStyles">
        <!-- list of all saved styles - name, 5 widget colours, selected or not, delete. -->
        <ul>
          <li id="defaultStyle">
            <p>Default Style: </p>
            <div class="savedStyleExampleBoxGrid">
              <div class="savedStyleExampleBox" :style="{ backgroundColor: this.$store.state.config.cols.col.dshbrdCol.bkgnd }"></div>
              <div class="savedStyleExampleBox" :style="{ backgroundColor: this.$store.state.config.cols.col.dshbrdCol.siz1 }"></div>
              <div class="savedStyleExampleBox" :style="{ backgroundColor: this.$store.state.config.cols.col.dshbrdCol.siz2 }"></div>
              <div class="savedStyleExampleBox" :style="{ backgroundColor: this.$store.state.config.cols.col.dshbrdCol.siz3 }"></div>
              <div class="savedStyleExampleBox" :style="{ backgroundColor: this.$store.state.config.cols.col.dshbrdCol.siz4 }"></div>
            </div>
            <input v-if="!modelValues.savedStylesOptions.oneOrManyStyles" type="radio" class="" :style="{  }" :value="modelValues.savedStyles.savedStyleValues.checkDefault" v-model="modelValues.savedStyles.checkedRadio">
            <input v-else type="checkbox" class="" :style="{  }" :value="modelValues.savedStyles.savedStyleValues.checkDefault" v-model="modelValues.savedStyles.checkedBoxes">
          </li>
          <li v-for="(style, index) in deletableStyles" :key="style.colName">
            <p>{{ style.colName }}: </p>
            <div class="savedStyleExampleBoxGrid">
              <div class="savedStyleExampleBox" :style="{ backgroundColor: style.dshbrdCol.bkgnd }"></div>
              <div class="savedStyleExampleBox" :style="{ backgroundColor: style.dshbrdCol.siz1 }"></div>
              <div class="savedStyleExampleBox" :style="{ backgroundColor: style.dshbrdCol.siz2 }"></div>
              <div class="savedStyleExampleBox" :style="{ backgroundColor: style.dshbrdCol.siz3 }"></div>
              <div class="savedStyleExampleBox" :style="{ backgroundColor: style.dshbrdCol.siz4 }"></div>
            </div>
            <input v-if="!modelValues.savedStylesOptions.oneOrManyStyles" type="radio" class="" :style="{  }" :value="modelValues.savedStyles.savedStyleValues['check--${index}']" v-model="modelValues.savedStyles.checkedRadio">
            <input v-else type="checkbox" class="" :style="{  }" :value="modelValues.savedStyles.savedStyleValues['check--${index}']" v-model="modelValues.savedStyles.checkedBoxes">
            <input type="button" class="deleteSavedStyleButton" :style="{  }" value="X" name="">
          </li>
        </ul>
      </div>
      <div id="saveAndRefresh">
        <!-- does what it says on the package. -->
        <input type="button" class="addNew" :style="{  }" value="Add new style, save changes and refresh" name="" @click="addNewStyle()">
        <!-- add style info to a seperate object, which will be added to styledata. remove objects from styledata that have been removed from savedstylevalues. update styledata timings and other data. -->
        <input type="button" class="addNew" :style="{  }" value="Save changes and refresh" name="" @click="saveChangesAndRefresh()">
        <!-- remove objects from styledata that have been removed from savedstylevalues. update styledata timings and other data. -->
      </div>
    </div>

    <div @click="change2widget()" v-if="goBottomBar === 1" :style="{ backgroundColor: this.$store.state.config.cols.col.mkrCol.tert }"></div>
    <div class="widgetCreator" v-else :style="{ backgroundColor: this.$store.state.config.cols.col.mkrCol.tert }">
      <div id="addWidgetButton" class="addNewContainer" :style="{ backgroundColor: this.$store.state.config.cols.col.mkrCol.tert }">
        <input type="button" id="createWidget" value="Create New Widget" class="addNew" :style="{ backgroundColor: this.$store.state.config.cols.col.mkrCol.prim, color: this.$store.state.config.cols.col.mkrCol.dtail }">
      </div>
      <div id="usedWidgets" class="usedBlock" :style="{ backgroundColor: this.$store.state.config.cols.col.mkrCol.seco, color: this.$store.state.config.cols.col.mkrCol.dtail }">
        <div id="size1Title" class="listTitle" :style="{ backgroundColor: this.$store.state.config.cols.col.mkrCol.prim, color: this.$store.state.config.cols.col.mkrCol.dtail }">1x1</div>
        <div id="size2Title" class="listTitle" :style="{ backgroundColor: this.$store.state.config.cols.col.mkrCol.prim, color: this.$store.state.config.cols.col.mkrCol.dtail }">2x1</div>
        <div id="size3Title" class="listTitle" :style="{ backgroundColor: this.$store.state.config.cols.col.mkrCol.prim, color: this.$store.state.config.cols.col.mkrCol.dtail }">1x2</div>
        <div id="size4Title" class="listTitle" :style="{ backgroundColor: this.$store.state.config.cols.col.mkrCol.prim, color: this.$store.state.config.cols.col.mkrCol.dtail }">2x2</div>
        <div id="size1" class="widgetList" :style="{ backgroundColor: this.$store.state.config.cols.col.mkrCol.bkgnd }"></div>
        <div id="size2" class="widgetList" :style="{ backgroundColor: this.$store.state.config.cols.col.mkrCol.bkgnd }"></div>
        <div id="size3" class="widgetList" :style="{ backgroundColor: this.$store.state.config.cols.col.mkrCol.bkgnd }"></div>
        <div id="size4" class="widgetList" :style="{ backgroundColor: this.$store.state.config.cols.col.mkrCol.bkgnd }"></div><!-- i am aware that this looks awful -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WidgetEditor',
  data () {
    return {
      htmlbitClasses: "htmlbit",
      goTopBar: 1,
      goBottomBar: 0,
      modelValues: {
        previewOfStyle: {},
        savedStylesOptions: {
          unitMultiplier: "",
          unitOfTime: "",
          oneOrManyStyles: "",
          toggleAllVar: "",
        },
        savedStyles: {
          selectAll: false,
          savedStyleValues: {},
          checkedBoxes: ["checkDefault"],
          checkedRadio: "checkDefault",
        },
        optionsForStyle: {
          nameOfStyl: "",
          stylColPickDshbrd: {
            nameOrColPickA: true,
            nameOrColPickB: true,
            nameOrColPickC: true,
            nameOrColPickD: true,
            nameOrColPickE: true,
            valueA: "white",
            valueB: "aqua",
            valueC: "orange",
            valueD: "limegreen",
            valueE: "grey",
          },
          stylColPickMkr: {
            nameOrColPickA: true,
            nameOrColPickB: true,
            nameOrColPickC: true,
            nameOrColPickD: true,
            nameOrColPickE: true,
            valueA: "lightcyan",
            valueB: "deepskyblue",
            valueC: "blue",
            valueD: "navy",
            valueE: "black",
          },
          stylColPickStylr: {
            nameOrColPickA: false,
            nameOrColPickB: false,
            nameOrColPickC: true,
            nameOrColPickD: true,
            nameOrColPickE: true,
            valueA: "#FFFFE0",
            valueB: "#BFFF00",
            valueC: "lime",
            valueD: "green",
            valueE: "black",
          }
        }
      }
    }
  },
  computed: {
    deletableStyles() {return Object.values(this.$store.state.config.cols).filter(x => x.colName !== 'Default Style')},
    intervalBetweenStyleChange(){
      return this.modelValues.savedStylesOptions.unitMultiplier * this.unitOfTimeInMs();
    },
    unitOfTimeInMs(){
      let output = 0;
      if(this.modelValues.savedStylesOptions.unitOfTime === "Minutes"){
        output = 60000;
      }else if(this.modelValues.savedStylesOptions.unitOfTime === "Hours"){
        output = 3600000;
      }else if(this.modelValues.savedStylesOptions.unitOfTime === "Days"){
        output = 86400000;
      }
      return output;
    }
  },
  methods: {
    saveChangesAndRefresh() {},
    addNewStyle() {
      this.saveChangesAndRefresh();
    },
    toggleAllFunc() {
      if(this.modelValues.savedStyles.selectAll) {
        this.modelValues.savedStyles.checkedBoxes = [];
      } else {
        this.modelValues.savedStyles.checkedBoxes = Object.values(this.modelValues.savedStyles.savedStyleValues);
      }
      this.modelValues.savedStyles.selectAll = !this.modelValues.savedStyles.selectAll;
    },
    topBarTo1() {
      this.goTopBar = 1;
    },
    bottomBarTo1() {
      this.goBottomBar = 1;
    },
    change2style() {
      if (this.htmlbitClasses == "htmlbit") {
        this.htmlbitClasses = "htmlbit htmlbitSwitch";
        this.goTopBar = 0;
        setTimeout(this.bottomBarTo1, 870);
      }
    },
    change2widget() {
      if (this.htmlbitClasses == "htmlbit htmlbitSwitch") {
        this.htmlbitClasses = "htmlbit";
        this.goBottomBar = 0;
        setTimeout(this.topBarTo1, 870);
      }
    }
  },
  mounted() {
    this.modelValues.savedStyles.savedStyleValues = Object.values(this.$store.state.config.cols).filter(x => x.colName !== 'Default Style').map(x => x.colName).reduce(function(obj, item){obj[item] = item; return obj}, {});
    this.modelValues.savedStyles.savedStyleValues.checkDefault = "checkDefault";
  },
}

/*
for (var i = 0; i < items.length; i++) {
  document.getElementById("unusedWidgets").innerHTML += items[i]
}
*/
</script>

<style scoped>
  :root {
    --dash-bg: ;
  }
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
    transition: grid-template-rows 1s ease 0s
  }
  .htmlbitSwitch {
    grid-template-rows: 95% 5%;
  }
  .styleCreator {
    overflow: hidden;
    display: grid;
    grid-gap: 0px;
    padding: 0px;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
  }
  .addStyleContainer {
    display: grid;
    grid-gap: 10px;
    padding: 10px;
    grid-template-columns: 100%;
    grid-template-rows: calc(100% - 5px);
  }
  .previewGrid {
    display: grid;
    grid-gap: 0px;
    padding: 0px;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto;
    height: 100px;
    width: 300px;
  }
  .previewGridDash {
    display: grid;
    grid-gap: 5px;
    padding: 5px;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,1fr);
    height: 100%;
    width: 100%;
  }
  .previewGridDashItem {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column-end: span 1;
    grid-row-end: span 1;
  }
  .previewGridDashItem2 {
    grid-column-end: span 2;
  }
  .previewGridDashItem3 {
    grid-row-end: span 2;
  }
  .previewGridDashItem4 {
    grid-column-end: span 2;
    grid-row-end: span 2;
  }
  .previewGridWidg {
    display: grid;
    grid-gap: 5px;
    padding: 5px;
    grid-template-columns: auto;
    grid-template-rows: auto 60% auto;
    height: 100%;
    width: 100%;
  }
  .previewGridStyl {
    display: grid;
    grid-gap: 0px;
    padding: 0px;
    grid-template-columns: auto;
    grid-template-rows: auto;
    height: 100%;
    width: 100%;
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
  #stylColPickGrid {
    display: grid;
    grid-template-columns: calc();
    grid-template-rows: repeat(3,1fr);
  }
  #stylColPickDshbrd {
    display: grid;
    grid-template-columns: repeat(10,1fr);
    grid-template-rows: auto;
  }
  #stylColPickMkr {
    display: grid;
    grid-template-columns: repeat(10,1fr);
    grid-template-rows: auto;
  }
  #stylColPickStylr {
    display: grid;
    grid-template-columns: repeat(10,1fr);
    grid-template-rows: auto;
  }
  #stylColPickGrid input {
    height: 34px;
    width: 100px;
    /*position: relative;*/
  }








  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }

  .nameOrColPick:checked + .slider {
    background-color: #2196F3;
  }

  .nameOrColPick:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  .nameOrColPick:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
</style>

<!--
<img id="drag0" class="dragImg" src="./exampleImages/logos/vuejs.png" draggable="true" ondragstart="drag(event)">
<img id="drag1" class="dragImg" src="./exampleImages/logos/codepen.png" draggable="true" ondragstart="drag(event)">
<img id="drag2" class="dragImg" src="./exampleImages/logos/css.png" draggable="true" ondragstart="drag(event)">
<img id="drag3" class="dragImg" src="./exampleImages/logos/git.png" draggable="true" ondragstart="drag(event)">
<img id="drag4" class="dragImg" src="./exampleImages/logos/github.png" draggable="true" ondragstart="drag(event)">
<img id="drag5" class="dragImg" src="./exampleImages/logos/html5.png" draggable="true" ondragstart="drag(event)">
<img id="drag6" class="dragImg" src="./exampleImages/logos/javascript.jpg" draggable="true" ondragstart="drag(event)">
<img id="drag7" class="dragImg" src="./exampleImages/logos/nodejs.png" draggable="true" ondragstart="drag(event)">
<img id="drag8" class="dragImg" src="./exampleImages/logos/notepad++.png" draggable="true" ondragstart="drag(event)">
<img id="drag9" class="dragImg" src="./exampleImages/logos/phpstorm.png" draggable="true" ondragstart="drag(event)"></div>
-->
