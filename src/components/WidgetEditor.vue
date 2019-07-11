<template>
  <div id="htmlbit" :class="htmlbitClasses">
    <div @click="change2style()" v-if="goTopBar === 1" :style="{ backgroundColor: this.$store.state.config.cols.col.stylrCol.tert }"></div>
    <div class="styleCreator" v-else>
      <div id="optionsForStyle">
        <!-- colour wheel and colour rrggbb inputs for each colour, name of style -->
        <div id="stylColPickGrid">
          <div id="stylColPickDshbrd">
            <label class="switch">
              <input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickDshbrd.nameOrColPick">
              <span class="slider"></span>
            </label>
            <input :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueA" placeholder="CSS colour name"><input type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueA">
            <input :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueB" placeholder="CSS colour name"><input type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueB">
            <input :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueC" placeholder="CSS colour name"><input type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueC">
            <input :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueD" placeholder="CSS colour name"><input type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueD">
            <input :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueE" placeholder="CSS colour name"><input type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueE">
          </div>
          <div id="stylColPickMkr">
            <label class="switch">
              <input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickMkr.nameOrColPick">
              <span class="slider"></span>
            </label>
            <input :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueA" placeholder="CSS colour name"><input type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueA">
            <input :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueB" placeholder="CSS colour name"><input type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueB">
            <input :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueC" placeholder="CSS colour name"><input type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueC" @change="">
            <input :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueD" placeholder="CSS colour name"><input type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueD" @change="">
            <input :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueE" placeholder="CSS colour name"><input type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueE" @change="">
          </div>
          <div id="stylColPickStylr">
            <label class="switch">
              <input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickStylr.nameOrColPick">
              <span class="slider"></span>
            </label>
            <input :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueA" placeholder="CSS colour name"><input type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueA" @change="">
            <input :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueB" placeholder="CSS colour name"><input type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueB" @change="">
            <input :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueC" placeholder="CSS colour name"><input type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueC" @change="">
            <input :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueD" placeholder="CSS colour name"><input type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueD" @change="">
            <input :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueE" placeholder="CSS colour name"><input type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueE" @change="">
          </div>
        </div>

      </div>
      <div id="previewOfStyle">
        <!-- square x 3 with examples of colours -->
      </div>
      <div id="savedStylesOptions">
        <!-- only 1 style, or all selected styles on randomised, select all button, how often to change style(minutes, hours, days) -->
        <input type="number" :style="{  }" value="" name="" v-model.number="">
        <select id="timeUnitSelect" :style="{  }"  v-model="">
          <option :style="{  }">Minutes</option>
          <option :style="{  }">Hours</option>
          <option :style="{  }">Days</option>
        </select>
        <input type="radio" id="one" :style="{  }" value="" name="oneOrAllStyles" v-model="">
        <label for="one">One style</label>
        <input type="radio" id="many" :style="{  }" value="" name="oneOrAllStyles" v-model="">
        <label for="many">All checked styles</label>
        <input type="checkbox" :style="{  }" value="" name="" v-model="">
      </div>
      <div id="savedStyles">
        <!-- list of all saved styles - name, 5 widget colours, selected or not, delete. -->
        <ul>
          <li v-for="(style, index) in this.$store.state.config.cols">
            {{ style.name }}
            <div class="savedStyleExampleBox" :style="{ backgroundColor: this.$store.state.config.cols['col--${index}'].dshbrdCol.bkgnd }"></div>
            <div class="savedStyleExampleBox" :style="{ backgroundColor: this.$store.state.config.cols['col--${index}'].dshbrdCol.siz1 }"></div>
            <div class="savedStyleExampleBox" :style="{ backgroundColor: this.$store.state.config.cols['col--${index}'].dshbrdCol.siz2 }"></div>
            <div class="savedStyleExampleBox" :style="{ backgroundColor: this.$store.state.config.cols['col--${index}'].dshbrdCol.siz3 }"></div>
            <div class="savedStyleExampleBox" :style="{ backgroundColor: this.$store.state.config.cols['col--${index}'].dshbrdCol.siz4 }"></div>
            <input type="checkbox" class="" :style="{  }" value="" name="">
            <input type="button" class="deleteSavedStyleButton" :style="{  }" value="X" name="">
          </li>
        </ul>
      </div>
      <div id="saveAndRefresh">
        <!-- does what it says on the package. -->
      </div>
    </div>

    <div @click="change2widget()" v-if="goBottomBar === 1" :style="{ backgroundColor: this.$store.state.config.cols.col.mkrCol.tert }"></div>
    <div class="widgetCreator" v-else :style="{ backgroundColor: this.$store.state.config.cols.col.mkrCol.tert }">
      <div id="addWidgetButton" class="addNewContainer" :style="{ backgroundColor: this.$store.state.config.cols.col.mkrCol.tert }">
        <input type="button" id="createWidget" value="Create New Widget" class="addNew" :style="{ backgroundColor: this.$store.state.config.cols.col.mkrCol.prim, color: this.$store.state.config.cols.col.mkrCol.detail }">
      </div>
      <div id="usedWidgets" class="usedBlock" :style="{ backgroundColor: this.$store.state.config.cols.col.mkrCol.seco, color: this.$store.state.config.cols.col.mkrCol.detail }">
        <div id="size1Title" class="listTitle" :style="{ backgroundColor: this.$store.state.config.cols.col.mkrCol.prim, color: this.$store.state.config.cols.col.mkrCol.detail }">1x1</div>
        <div id="size2Title" class="listTitle" :style="{ backgroundColor: this.$store.state.config.cols.col.mkrCol.prim, color: this.$store.state.config.cols.col.mkrCol.detail }">2x1</div>
        <div id="size3Title" class="listTitle" :style="{ backgroundColor: this.$store.state.config.cols.col.mkrCol.prim, color: this.$store.state.config.cols.col.mkrCol.detail }">1x2</div>
        <div id="size4Title" class="listTitle" :style="{ backgroundColor: this.$store.state.config.cols.col.mkrCol.prim, color: this.$store.state.config.cols.col.mkrCol.detail }">2x2</div>
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
        optionsForStyle: {
          stylColPickDshbrd: {
            nameOrColPick: "",
            valueA: "",
            valueB: "",
            valueC: "",
            valueD: "",
            valueE: ""
          },
          stylColPickMkr: {
            nameOrColPick: "",
            valueA: "",
            valueB: "",
            valueC: "",
            valueD: "",
            valueE: ""
          },
          stylColPickStylr: {
            nameOrColPick: "",
            valueA: "",
            valueB: "",
            valueC: "",
            valueD: "",
            valueE: ""
          }
        }
      }
    }
  },
  computed: {
  },
  methods: {
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
  }
}

/*
for (var i = 0; i < items.length; i++) {
  document.getElementById("unusedWidgets").innerHTML += items[i]
}
*/
</script>

<style scoped>
  body {
    overflow:hidden;
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
    display: grid;
    grid-gap: 0px;
    padding: 0px;
    grid-template-columns: 45% 45% 10%;
    grid-template-rows: 50% 50%;
  }
  .addStyleContainer {
    display: grid;
    grid-gap: 10px;
    padding: 10px;
    grid-template-columns: 100%;
    grid-template-rows: calc(100% - 5px);
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
