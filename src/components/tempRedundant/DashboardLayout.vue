<template>
  <div>
    <div id="Dashboard" class="grid-container" style="display: grid;" @click="layoutGenerator()">
      <div v-for="item in spaceList" :class="item.Classes" :id="item.Id">
        <div v-for="">{{ item.actualWidget }}</div>
      </div>
    </div>

    <Weather></Weather>

  </div>
</template>

<script>
// import WidgetList from './WidgetList'

import Weather from '../Widgets/Weather'
import Task from './Task'

export default {
  name: 'DashboardLayout',
  props: {
  },
  mounted () {
    this.sizeRatioFunction()
    this.layoutGenerator()
    this.setProbability()
  },
  components: {
    Task,
    Weather
  },
  data () {
    return {
      spaceList: [],
      availableWidgets: [
        // template - copy this and:
        // replace # with the widget name(should also be in components and have been imported)
        // replace @ with the shape(1-4, see guide at top)
        // { Widget: "#", Shape: "@" }
        { Widget: 'Weather', Shape: '1' },
        { Widget: 'Weather', Shape: '1' },
        { Widget: 'Weather', Shape: '1' },
        { Widget: 'Weather', Shape: '1' },
        { Widget: 'Weather', Shape: '1' },
        { Widget: 'Weather', Shape: '1' },
        { Widget: 'Weather', Shape: '1' },
        { Widget: 'Weather', Shape: '2' },
        { Widget: 'Weather', Shape: '2' },
        { Widget: 'Weather', Shape: '2' },
        { Widget: 'Weather', Shape: '2' },
        { Widget: 'Weather', Shape: '2' },
        { Widget: 'Weather', Shape: '3' },
        { Widget: 'Weather', Shape: '3' },
        { Widget: 'Weather', Shape: '3' },
        { Widget: 'Weather', Shape: '3' },
        { Widget: 'Weather', Shape: '3' },
        { Widget: 'Weather', Shape: '4' },
        { Widget: 'Weather', Shape: '4' },
        { Widget: 'Weather', Shape: '4' }
      ],
      sizeRatio: { Uno: 0, Dos: 0, Tres: 0, Cuatro: 0 },
      totalAmountOfWidgets: 0,
      totalOf12: 0,
      totalOf13: 0
    }
  },
  computed: {
  },
  methods: {
    sizeRatioFunction () {
      for (var i = 0; i < this.availableWidgets.length; i++) {
        if (this.availableWidgets[i].Shape === '1') {
          this.sizeRatio.Uno += 1
        } else if (this.availableWidgets[i].Shape === '2') {
          this.sizeRatio.Dos += 1
        } else if (this.availableWidgets[i].Shape === '3') {
          this.sizeRatio.Tres += 1
        } else {
          this.sizeRatio.Cuatros += 1
        }
      }
    },
    setProbability () {
      this.totalAmountOfWidgets = (this.sizeRatio.Uno + this.sizeRatio.Dos + this.sizeRatio.Tres + this.sizeRatio.Cuatro)
      this.totalOf12 = (this.sizeRatio.Uno + this.sizeRatio.Dos)
      this.totalOf13 = (this.sizeRatio.Uno + this.sizeRatio.Tres)
      console.log('12=' + this.totalOf12)
      console.log('13=' + this.totalOf13)
      console.log('wid=' + this.totalAmountOfWidgets)
    },
    layoutGenerator () {
      this.spaceList = []
      var grid = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
      var nameIds = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'// .charAt(0-51)
      var definedBlocks = [[], [], [], [], []]
      function addToDef (typeBl, nameBl) {
        definedBlocks[typeBl].push(nameBl)
        definedBlocks[4].push(nameBl)
      }
      var linearPlace = 0
      var sizeXClass = ''
      var sizeYClass = ''
      var colourClass = ''
      var randomSize = 0
      function findElement (value, index, array) {
        return value === definedBlocks[4][reZero]
      }
      for (var Y = 0; Y < grid.length; Y++) {
        for (var X = 0; X < grid[0].length; X++) {
          if (grid[Y][X] === 0) {
            // if the value is not already occupied
            if ((Y === 2) && (X === 4)) {
              // value can only be shape 1, and is set to that.
              grid[Y][X] = String.fromCharCode(97 + linearPlace)
              addToDef(0, grid[Y][X])
            } else if ((Y === 2) || (X === 4)) {
              // value can be 1, 2 or 3 depending on where it is
              if (X === 4) {
                // value can only be 1 or 3
                randomSize = Math.floor((Math.random() * this.totalOf13))
                if (randomSize > this.sizeRatio.Uno) {
                  // value is set to shape 3
                  grid[Y + 1][X] = String.fromCharCode(97 + linearPlace)
                  grid[Y][X] = String.fromCharCode(97 + linearPlace)
                  addToDef(2, grid[Y][X])
                } else {
                  // value is set to shape 1
                  grid[Y][X] = String.fromCharCode(97 + linearPlace)
                  addToDef(0, grid[Y][X])
                }
              } else {
                // value can only be 1 or 2
                randomSize = Math.floor((Math.random() * this.totalOf12))
                if ((randomSize > this.sizeRatio.Uno) && (grid[Y][X + 1] === 0)) {
                  // value is set to shape 2
                  grid[Y][X + 1] = String.fromCharCode(97 + linearPlace)
                  grid[Y][X] = String.fromCharCode(97 + linearPlace)
                  addToDef(1, grid[Y][X])
                } else {
                  // value is set to shape 1
                  grid[Y][X] = String.fromCharCode(97 + linearPlace)
                  addToDef(0, grid[Y][X])
                }
              }
            } else {
              if (grid[Y][X + 1] === 0) {
                // value can be set to 1, 2, 3 or 4
                randomSize = Math.floor((Math.random() * this.totalAmountOfWidgets))
                if (randomSize > this.sizeRatio.Uno) {
                  // value is set to shape 2
                  grid[Y][X + 1] = String.fromCharCode(97 + linearPlace)
                  grid[Y][X] = String.fromCharCode(97 + linearPlace)
                  addToDef(1, grid[Y][X])
                } else if (randomSize > this.sizeRatio.Dos) {
                  // value is set to shape 3
                  grid[Y + 1][X] = String.fromCharCode(97 + linearPlace)
                  grid[Y][X] = String.fromCharCode(97 + linearPlace)
                  addToDef(2, grid[Y][X])
                } else if (randomSize > this.sizeRatio.Tres) {
                  // value is set to 4
                  grid[Y + 1][X + 1] = String.fromCharCode(97 + linearPlace)
                  grid[Y][X + 1] = String.fromCharCode(97 + linearPlace)
                  grid[Y + 1][X] = String.fromCharCode(97 + linearPlace)
                  grid[Y][X] = String.fromCharCode(97 + linearPlace)
                  addToDef(3, grid[Y][X])
                } else {
                  // value is set to 1
                  grid[Y][X] = String.fromCharCode(97 + linearPlace)
                  addToDef(0, grid[Y][X])
                }
              } else {
                // value can be set to 1 or 3
                // randomSize = Math.floor((Math.random() * this.totalOf13));
                if (randomSize === 1/* > this.sizeRatio.Uno */) {
                  // value is set to shape 3
                  grid[Y + 1][X] = String.fromCharCode(97 + linearPlace)
                  grid[Y][X] = String.fromCharCode(97 + linearPlace)
                  addToDef(2, grid[Y][X])
                } else {
                  // value is set to shape 1
                  grid[Y][X] = String.fromCharCode(97 + linearPlace)
                  addToDef(0, grid[Y][X])
                }
              }
            }
            linearPlace++
          }
        }
      }
      for (var reZero = 0; reZero < definedBlocks[4].length; reZero++) {
        var ifShape1 = definedBlocks[0].find(findElement)
        var ifShape2 = definedBlocks[1].find(findElement)
        var ifShape3 = definedBlocks[2].find(findElement)
        var ifShape4 = definedBlocks[3].find(findElement)
        var sizeGeneral = ''
        if (ifShape1 !== undefined) {
          sizeXClass = ' grid-item-X1'
          sizeYClass = ' grid-item-Y1'
          colourClass = ' grid-item-blue'
          sizeGeneral = '1'
        } else if (ifShape2 !== undefined) {
          sizeXClass = ' grid-item-X2'
          sizeYClass = ' grid-item-Y1'
          colourClass = ' grid-item-orange'
          sizeGeneral = '2'
        } else if (ifShape3 !== undefined) {
          sizeXClass = ' grid-item-X1'
          sizeYClass = ' grid-item-Y2'
          colourClass = ' grid-item-green'
          sizeGeneral = '3'
        } else if (ifShape4 !== undefined) {
          sizeXClass = ' grid-item-X2'
          sizeYClass = ' grid-item-Y2'
          colourClass = ' grid-item-grey'
          sizeGeneral = '4'
        }
        this.spaceList.push({ Classes: '', Widget: '', Id: '' })
        this.spaceList[reZero].Classes = 'grid-item' + sizeXClass + sizeYClass + colourClass
        this.spaceList[reZero].Widget = sizeGeneral,
        this.spaceList[reZero].Id = nameIds.charAt(reZero)
      }
    }// ends here
  }
}
</script>

<style>
  * {
    font-family: monospace;
    font-size: 20px;
    text-align: center;
    box-sizing: border-box;
  }
  .grid-container {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(5,1fr);
    grid-template-rows: repeat(3,1fr);
    height: 100vh;
    width: 100vw;
  }
  .grid-container:after {
    content: '';
    display: block;
    clear: both;
  }
  .grid-item {
    float: left;
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .grid-item-X1 {
    grid-column-end: span 1;
    /*width: 20vh;*/
  }
  .grid-item-X2 {
    grid-column-end: span 2;
    /*width: 40vh;*/
  }
  .grid-item-Y1 {
    grid-row-end: span 1;
    /*height: 33.333vh;*/
  }
  .grid-item-Y2 {
    grid-row-end: span 2;
    /*height: 66.666vh;*/
  }
  .grid-item-blue{
    background-color: aqua;
  }
  .grid-item-orange{
    background-color: orange;
  }
  .grid-item-green{
    background-color: limegreen;
  }
  .grid-item-grey{
    background-color: grey;
  }
</style>
