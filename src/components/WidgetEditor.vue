<template>
  <div id="htmlbit" :class="htmlbitClasses">
    <div @click="change2style()" v-if="goTopBar === 1" :style="{ backgroundColor: customColours.stylerColours.tertiary }"></div>
    <div class="styleCreator" v-else>
      <div>40</div>
      <div>60</div>
    </div>

    <div @click="change2widget()" v-if="goBottomBar === 1" :style="{ backgroundColor: customColours.makerColours.tertiary }"></div>
    <div class="widgetCreator" v-else :style="{ backgroundColor: customColours.makerColours.tertiary }">
      <div id="addWidgetButton" class="unusedBlock" :style="{ backgroundColor: customColours.makerColours.tertiary }">
        <input type="button" id="createWidget" value="Create New Widget" class="addNew" :style="{ backgroundColor: customColours.makerColours.primary, color: customColours.makerColours.details }">
      </div>
      <div id="usedWidgets" class="usedBlock" :style="{ backgroundColor: customColours.makerColours.secondary, color: customColours.makerColours.details }">
        <div id="size1Title" class="listTitle" :style="{ backgroundColor: customColours.makerColours.primary, color: customColours.makerColours.details }">1x1</div>
        <div id="size2Title" class="listTitle" :style="{ backgroundColor: customColours.makerColours.primary, color: customColours.makerColours.details }">2x1</div>
        <div id="size3Title" class="listTitle" :style="{ backgroundColor: customColours.makerColours.primary, color: customColours.makerColours.details }">1x2</div>
        <div id="size4Title" class="listTitle" :style="{ backgroundColor: customColours.makerColours.primary, color: customColours.makerColours.details }">2x2</div>
        <div id="size1" class="widgetList" :style="{ backgroundColor: customColours.makerColours.listbackground }"></div>
        <div id="size2" class="widgetList" :style="{ backgroundColor: customColours.makerColours.listbackground }"></div>
        <div id="size3" class="widgetList" :style="{ backgroundColor: customColours.makerColours.listbackground }"></div>
        <div id="size4" class="widgetList" :style="{ backgroundColor: customColours.makerColours.listbackground }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WidgetEditor',
  data () {
    return {
      customColours: {
        dashboardColours: {
          widgetbackground: "", widgetsize1: "", widgetsize2: "", widgetsize3: "", widgetsize4: ""
        },
        makerColours: {
          primary: "deepskyblue", secondary: "blue", tertiary: "navy", listbackground: "lightcyan", details: "black"
        },
        stylerColours: {
          primary: "", secondary: "lime", tertiary: "green", listbackground: "palegreen", details: "black"
        }
      },
      htmlbitClasses: "htmlbit",
      goTopBar: 1,
      goBottomBar: 0
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
    grid-template-columns: 100%;
    grid-template-rows: 100%;
  }
  .widgetCreator {
    display: grid;
    grid-gap: 0px;
    padding: 0px;
    grid-template-columns: 10% 90%;
    grid-template-rows: 100%;
  }
  .unusedBlock {
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
