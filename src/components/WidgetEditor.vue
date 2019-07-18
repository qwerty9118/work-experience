<template>
  <div id="htmlbit" :class="htmlbitClasses">
    <div @click="change2style()" v-if="goTopBar === 1" :style="{ backgroundColor: this.$store.state.config.cols.col.stylrCol.tert }"></div>
    <div class="styleCreator" v-else :style="{ backgroundColor: this.$store.state.config.cols.col.stylrCol.tert }">
      <div id="optionsForStyle">
        <!-- colour wheel and colour rrggbb inputs for each colour, name of style -->
        <input v-model="modelValues.optionsForStyle.nameOfStyl" placeholder="Name of your style"><br>
        <div id="stylColPickGrid">
          <div id="stylColPickDshbrd" :class="{stylColPickGridAdvanced: modelValues.optionsForStyle.stylColPickDshbrd.advancedMode.onOff}">
            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickDshbrd.nameOrColPickA"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickDshbrd.nameOrColPickA" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueA" placeholder="CSS or RGB">
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueA">

            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickDshbrd.nameOrColPickB"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickDshbrd.nameOrColPickB" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueB" placeholder="CSS or RGB">
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueB">

            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickDshbrd.nameOrColPickC"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickDshbrd.nameOrColPickC" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueC" placeholder="CSS or RGB">
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueC">

            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickDshbrd.nameOrColPickD"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickDshbrd.nameOrColPickD" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueD" placeholder="CSS or RGB">
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueD">

            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickDshbrd.nameOrColPickE"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickDshbrd.nameOrColPickE" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueE" placeholder="CSS or RGB">
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickDshbrd.valueE">

            <input type="button" :value="stylColPickGridAdvSymbol" @click="modelValues.optionsForStyle.stylColPickDshbrd.advancedMode.onOff = !modelValues.optionsForStyle.stylColPickDshbrd.advancedMode.onOff">
          </div>
          <div v-if="modelValues.optionsForStyle.stylColPickDshbrd.advancedMode.onOff" id="stylColPickDshbrdAdvanced">
            <input type="number" v-model.number="modelValues.optionsForStyle.stylColPickDshbrd.advancedMode.gridGapVar">
            <select v-model="modelValues.optionsForStyle.stylColPickDshbrd.advancedMode.gridGapUnit">
              <option value="px">px (pixels)</option>
              <option value="%">% (percent)</option>
              <option value="cm">cm (centimetres)</option>
              <option value="mm">mm (millimetres)</option>
              <option value="in">in (inches)</option>
              <option value="pt">pt (points (1/72 of an inch))</option>
              <option value="pc">pc (picas (12 times points))</option>
              <option value="em">em (relative to font size)</option>
              <option value="vw">vw (relative to 1% of the width of the viewport)</option>
              <option value="vh">vh (relative to 1% of the height of the viewport)</option>
              <option value="vmin">vmin (relative to 1% of the viewport's larger dimension)</option>
              <option value="vmax">vmax (relative to 1% of the viewport's smaller dimension)</option>
              <option value="rem">rem (relative to the font size of the root element)</option>
              <option value="ch">ch (relative to the width of "0")</option>
              <option value="ex">ex (relative to the x-height of the font)</option>
            </select>
            <input type="number" v-model.number="modelValues.optionsForStyle.stylColPickDshbrd.advancedMode.paddingVar">
            <select v-model="modelValues.optionsForStyle.stylColPickDshbrd.advancedMode.paddingUnit">
              <option value="px">px (pixels)</option>
              <option value="%">% (percent)</option>
              <option value="cm">cm (centimetres)</option>
              <option value="mm">mm (millimetres)</option>
              <option value="in">in (inches)</option>
              <option value="pt">pt (points (1/72 of an inch))</option>
              <option value="pc">pc (picas (12 times points))</option>
              <option value="em">em (relative to font size)</option>
              <option value="vw">vw (relative to 1% of the width of the viewport)</option>
              <option value="vh">vh (relative to 1% of the height of the viewport)</option>
              <option value="vmin">vmin (relative to 1% of the viewport's larger dimension)</option>
              <option value="vmax">vmax (relative to 1% of the viewport's smaller dimension)</option>
              <option value="rem">rem (relative to the font size of the root element)</option>
              <option value="ch">ch (relative to the width of "0")</option>
              <option value="ex">ex (relative to the x-height of the font)</option>
            </select>
          </div>
          <div id="stylColPickMkr">
            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickMkr.nameOrColPickA"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickMkr.nameOrColPickA" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueA" placeholder="CSS or RGB">
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueA">

            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickMkr.nameOrColPickB"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickMkr.nameOrColPickB" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueB" placeholder="CSS or RGB" >
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueB">

            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickMkr.nameOrColPickC"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickMkr.nameOrColPickC" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueC" placeholder="CSS or RGB" >
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueC">

            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickMkr.nameOrColPickD"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickMkr.nameOrColPickD" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueD" placeholder="CSS or RGB" >
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueD">

            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickMkr.nameOrColPickE"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickMkr.nameOrColPickE" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueE" placeholder="CSS or RGB" >
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickMkr.valueE">
          </div>
          <div id="stylColPickStylr">
            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickStylr.nameOrColPickA"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickStylr.nameOrColPickA" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueA" placeholder="CSS or RGB">
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueA">

            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickStylr.nameOrColPickB"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickStylr.nameOrColPickB" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueB" placeholder="CSS or RGB">
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueB">

            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickStylr.nameOrColPickC"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickStylr.nameOrColPickC" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueC" placeholder="CSS or RGB">
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueC">

            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickStylr.nameOrColPickD"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickStylr.nameOrColPickD" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueD" placeholder="CSS or RGB">
            <input v-else type="color" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueD">

            <label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickStylr.nameOrColPickE"><span class="slider"></span></label>
            <input v-if="modelValues.optionsForStyle.stylColPickStylr.nameOrColPickE" :style="{  }" v-model="modelValues.optionsForStyle.stylColPickStylr.valueE" placeholder="CSS or RGB">
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
        <div class="previewGridWidg" :style="{ backgroundColor: modelValues.optionsForStyle.stylColPickMkr.valueC, color: modelValues.optionsForStyle.stylColPickMkr.valueE }">
          <button class="previewGridWidgBtn" :style="{ backgroundColor: modelValues.optionsForStyle.stylColPickMkr.valueB, borderColor: modelValues.optionsForStyle.stylColPickMkr.valueD, color: modelValues.optionsForStyle.stylColPickMkr.valueE }" @click="addPic()">Add New</button>
          <div class="previewGridWidgTitl" :style="{ backgroundColor: modelValues.optionsForStyle.stylColPickMkr.valueB, borderColor: modelValues.optionsForStyle.stylColPickMkr.valueC }">XxY</div>
          <div class="previewGridWidgList" :style="{ backgroundColor: modelValues.optionsForStyle.stylColPickMkr.valueA, borderColor: modelValues.optionsForStyle.stylColPickMkr.valueC }" id="nonVuePics"></div>
        </div>
        <div class="previewGridStyl">
        </div>
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
            <input v-if="!modelValues.savedStylesOptions.oneOrManyStyles" type="radio" class="selectSavedStyle" :style="{  }" :value="modelValues.savedStyles.savedStyleValues.checkDefault" v-model="modelValues.savedStyles.checkedRadio">
            <input v-else type="checkbox" class="selectSavedStyle" :style="{  }" :value="modelValues.savedStyles.savedStyleValues.checkDefault" v-model="modelValues.savedStyles.checkedBoxes">
          </li>
          <li v-for="(style, index) in deletableStyles" :key="index+style.colName">
            <p>{{ style.colName }}: </p>
            <div class="savedStyleExampleBoxGrid">
              <div class="savedStyleExampleBox" :style="{ backgroundColor: style.dshbrdCol.bkgnd }"></div>
              <div class="savedStyleExampleBox" :style="{ backgroundColor: style.dshbrdCol.siz1 }"></div>
              <div class="savedStyleExampleBox" :style="{ backgroundColor: style.dshbrdCol.siz2 }"></div>
              <div class="savedStyleExampleBox" :style="{ backgroundColor: style.dshbrdCol.siz3 }"></div>
              <div class="savedStyleExampleBox" :style="{ backgroundColor: style.dshbrdCol.siz4 }"></div>
            </div>
            <input v-if="!modelValues.savedStylesOptions.oneOrManyStyles" type="radio" class="selectSavedStyle" :style="{  }" :value="modelValues.savedStyles.savedStyleValues['check--${index}']" v-model="modelValues.savedStyles.checkedRadio">
            <input v-else type="checkbox" class="selectSavedStyle" :style="{  }" :value="modelValues.savedStyles.savedStyleValues['check--${index}']" v-model="modelValues.savedStyles.checkedBoxes">
            <input type="button" class="deleteSavedStyle" :style="{  }" value="X" name="">
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
        previewOfWidg: {
          exampleList: [],
        },
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
            advancedMode: {
              gridGapVar: "20",
              gridGapUnit: "px",
              paddingVar: "20",
              paddingUnit: "px",
              onOff: false,
            },
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
    stylColPickGridAdvSymbol(){if(this.modelValues.optionsForStyle.stylColPickDshbrd.advancedMode.onOff){return "x"}else{return "+"}},
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
    addPic(){
      switch(Math.floor(Math.random() * 33)){
        case 0:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://preview.redd.it/hmw6frrnxc831.png?width=960&crop=smart&auto=webp&s=901185a1637181b5628f5dcde13a7f751adaa6a2' width='100%'>";
          break;
        case 1:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://i.redd.it/hb69lxgd0i831.jpg' width='100%'>";
          break;
        case 2:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://i.redd.it/91haaka67r831.jpg' width='100%'>";
          break;
        case 3:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://i.redd.it/ru8ujr7wtr831.jpg' width='100%'>";
          break;
        case 4:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://i.redd.it/t2hkunyx1r831.jpg' width='100%'>";
          break;
        case 5:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://i.redd.it/u3wf7ob7y0831.jpg' width='100%'>";
          break;
        case 6:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://preview.redd.it/e1yl191vht731.jpg?width=960&crop=smart&auto=webp&s=458c4d047e66785c035a135ed425fe7922dc1252' width='100%'>";
          break;
        case 7:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://i.redd.it/n57feayufz731.png' width='100%'>";
          break;
        case 8:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://preview.redd.it/uqky9jm274831.jpg?width=960&crop=smart&auto=webp&s=f2bb9b1e68aa9571653fa1a9dc72d865ba6a29d0' width='100%'>";
          break;
        case 9:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://i.redd.it/49pptqu254831.jpg' width='100%'>";
          break;
        case 10:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg' width='100%'>";
          break;
        case 11:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://external-preview.redd.it/i0e3B9WXh2gHOozasuRaMsZuf99fCbShDDoCGeYcq2s.jpg?width=960&crop=smart&auto=webp&s=8f2e9f06fe26861ee49981acbd39ece59de5c99d' width='100%'>";
          break;
        case 12:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://i.redd.it/nkkw1yposz831.jpg' width='100%'>";
          break;
        case 13:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://i.redd.it/37goqtbeit831.jpg' width='100%'>";
          break;
        case 14:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://i.redd.it/qt7n33e6k4931.jpg' width='100%'>";
          break;
        case 15:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://preview.redd.it/bhnvmlbgl4931.jpg?width=960&crop=smart&auto=webp&s=e4a08240a93ea514433f6dead74a5fffdad54fea' width='100%'>";
          break;
        case 16:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://preview.redd.it/kn4pbwuvx0931.png?width=960&crop=smart&auto=webp&s=6ef1f8efb3126b4574945ad63056b21e2e659fdf' width='100%'>";
          break;
        case 17:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://i.redd.it/imhomvmmu4931.jpg' width='100%'>";
          break;
        case 18:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://preview.redd.it/zkcyi17m5b931.jpg?width=960&crop=smart&auto=webp&s=573344c7a5f3835489ef2525a9d38de7896b1470' width='100%'>";
          break;
        case 19:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://i.redd.it/9fa68q6kdx931.jpg' width='100%'>";
          break;
        case 20:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://i.redd.it/71ykkncenq931.jpg' width='100%'>";
          break;
        case 21:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://i.redd.it/gjc6xw586t931.jpg' width='100%'>";
          break;
        case 22:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://i.redd.it/4bqgvfb29s931.jpg' width='100%'>";
          break;
        case 23:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://i.redd.it/cxqip9h49t931.png' width='100%'>";
          break;
        case 24:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://i.redd.it/0h9jkf98jq931.png' width='100%'>";
          break;
        case 25:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://i.redd.it/fms84izrlq931.jpg' width='100%'>";
          break;
        case 26:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://i.redd.it/meqxwihsro931.jpg' width='100%'>";
          break;
        case 27:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://i.redd.it/nmwx80rbel931.jpg' width='100%'>";
          break;
        case 28:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://i.redd.it/ag4mtnwkmg931.jpg' width='100%'>";
          break;
        case 29:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://i.redd.it/dp3x6d08an931.png' width='100%'>";
          break;
        case 30:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://preview.redd.it/qcpun44mrk931.jpg?width=960&crop=smart&auto=webp&s=4a80c06ef5731c50a95242de3dbf675074c76fa5' width='100%'>";
          break;
        case 31:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://preview.redd.it/9km2pmfnvk931.png?width=960&crop=smart&auto=webp&s=f84879c29c18bef17146606fecc92b0877a7e116' width='100%'>";
          break;
        case 32:
          document.getElementById("nonVuePics").innerHTML = "<img src='https://preview.redd.it/b9ntbtmrai931.jpg?width=960&crop=smart&auto=webp&s=9c964c2df17ccd5f53d6bd6cd76d9b78e4215e7e' width='100%'>";
          break;
      }
    },
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
</script>


<!-- Default colours are placed in here, for example as "background-color", and custom, dynamic colours are done with the vue.js computed property. always the computed property. -->
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
    transition: grid-template-rows 1s ease 0s
  }
  .htmlbitSwitch {
    grid-template-rows: 95% 5%;
  }
  .styleCreator {
    overflow: hidden;
    display: grid;
    grid-gap: 20px;
    padding: 20px;
    grid-template-columns: 100%;
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
    grid-template-columns: 33.33% 33.33% 33.33%;
    grid-template-rows: 100%;
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
    grid-gap: 0px;
    padding: 0px;
    grid-template-columns: 30% 70%;
    grid-template-rows: 20% 80%;
  }
  .previewGridWidgBtn {
    grid-row: span 2;
    border: 4px solid;
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-size: 10px;
  }
  .previewGridWidgTitl {
    border: 4px solid;
    font-size: 11px;
    text-align: center;
  }
  .previewGridWidgList {
    border: solid;
    border-width: 0px 4px 4px 4px;
  }
  .previewGridStyl {
    display: grid;
    grid-gap: 5px;
    padding: 5px;
    grid-template-columns: auto;
    grid-template-rows: auto;
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
    grid-template-columns: 100px;
    grid-template-rows: 34px 34px 34px;
  }
  .stylColPickGridAdvanced {
    grid-template-rows: 34px 34px 34px 34px;
  }
  #stylColPickStylr {
    display: grid;
    grid-template-columns: repeat(5, 60px 100px);
    grid-template-rows: 34px;
  }
  #stylColPickMkr {
    display: grid;
    grid-template-columns: repeat(5, 60px 100px);
    grid-template-rows: 34px;
  }
  #stylColPickDshbrd {
    display: grid;
    grid-template-columns: repeat(5, 60px 100px) 0;
    grid-template-rows: 34px;
  }
  #stylColPickDshbrdAdvanced {
    display: grid;
    grid-template-columns: repeat(2, 200px 200px);
    grid-template-rows: 34px;
  }
  #stylColPickGrid #stylColPickDshbrd input[type="button"] {
    height: 34px;
    width: 30px;
  }
  #stylColPickGrid input[type="checkbox"] {
    height: 34px;
    width: 60px;
  }
  #stylColPickGrid input[type="color"], #stylColPickGrid input[type="text"] {
    height: 34px;
    width: 100px;
  }
  #stylColPickGrid input[type="number"] {
    height: 100%;
    width: 100%;
  }
  #stylColPickGrid select {
    height: 100%;
    width: 100%;
  }
  .savedStyleExampleBox {
    border: 1px solid black;
    height: 10px;
    width: 10px;
    border-radius: 3px;
  }



  /*<label class="switch"><input class="nameOrColPick" type="checkbox" v-model="modelValues.optionsForStyle.stylColPickDshbrd.nameOrColPickA"><span class="slider"></span></label>*/



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
    background-color: #ccc; /* ------------------------------------------------------------------------------------------------------------------ */
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
    background-color: white; /* ------------------------------------------------------------------------------------------------------------------ */
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }

  .nameOrColPick:checked + .slider {
    background-color: #2196F3; /* ------------------------------------------------------------------------------------------------------------------ */
  }

  .nameOrColPick:focus + .slider {
    box-shadow: 0 0 1px #2196F3; /* ------------------------------------------------------------------------------------------------------------------ */
  }

  .nameOrColPick:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
</style>

<!--
-->
