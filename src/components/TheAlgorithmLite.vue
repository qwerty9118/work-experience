<template>
  <div id="ansColour" class="grid-container" @click="layoutGenerator()"><span v-html="divvies"></span></div>
</template>

<script>
export default {
  name: 'TheAlgorithmLite',
  data () {
    return {
      divvies: ''
    }
  },
  computed: {},
  methods: {
    layoutGenerator () {
      document.getElementById('ansColour').innerHTML = '';
      var grid = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
      var definedBlocks = [[], [], [], [], []];
      function addToDef (typeBl, nameBl) {
        definedBlocks[typeBl].push(nameBl);
        definedBlocks[4].push(nameBl)
      }
      function findElement (value, index, array) {
        return value === definedBlocks[4][reZero]
      }
      var linearPlace = 0;
      var randomSize = 0;
      for (var Y = 0; Y < grid.length; Y++) {
        for (var X = 0; X < grid[0].length; X++) {
          if (grid[Y][X] === 0) {
            // if the value is not already occupied
            if ((Y === 2) && (X === 4)) {
              // value can only be shape 1, and is set to that.
              grid[Y][X] = String.fromCharCode(97 + linearPlace);
              addToDef(0, grid[Y][X])
            } else if ((Y === 2) || (X === 4)) {
              // value can be 1, 2 or 3 depending on where it is
              if (X === 4) {
                // value can only be 1 or 3
                randomSize = Math.floor((Math.random() * 2));
                if (randomSize === 1) {
                  // value is set to shape 3
                  grid[Y + 1][X] = String.fromCharCode(97 + linearPlace);
                  grid[Y][X] = String.fromCharCode(97 + linearPlace);
                  addToDef(2, grid[Y][X])
                } else {
                  // value is set to shape 1
                  grid[Y][X] = String.fromCharCode(97 + linearPlace);
                  addToDef(0, grid[Y][X])
                }
              } else {
                // value can only be 1 or 2
                randomSize = Math.floor((Math.random() * 2));
                if ((randomSize === 1) && (grid[Y][X + 1] === 0)) {
                  // value is set to shape 2
                  grid[Y][X + 1] = String.fromCharCode(97 + linearPlace);
                  grid[Y][X] = String.fromCharCode(97 + linearPlace);
                  addToDef(1, grid[Y][X])
                } else {
                  // value is set to shape 1
                  grid[Y][X] = String.fromCharCode(97 + linearPlace);
                  addToDef(0, grid[Y][X])
                }
              }
            } else {
              if (grid[Y][X + 1] === 0) {
                // value can be set to 1, 2, 3 or 4
                randomSize = Math.floor((Math.random() * 4));
                if (randomSize === 1) {
                  // value is set to shape 2
                  grid[Y][X + 1] = String.fromCharCode(97 + linearPlace);
                  grid[Y][X] = String.fromCharCode(97 + linearPlace);
                  addToDef(1, grid[Y][X])
                } else if (randomSize === 2) {
                  // value is set to shape 3
                  grid[Y + 1][X] = String.fromCharCode(97 + linearPlace);
                  grid[Y][X] = String.fromCharCode(97 + linearPlace);
                  addToDef(2, grid[Y][X])
                } else if (randomSize === 3) {
                  // value is set to 4
                  grid[Y + 1][X + 1] = String.fromCharCode(97 + linearPlace);
                  grid[Y][X + 1] = String.fromCharCode(97 + linearPlace);
                  grid[Y + 1][X] = String.fromCharCode(97 + linearPlace);
                  grid[Y][X] = String.fromCharCode(97 + linearPlace);
                  addToDef(3, grid[Y][X])
                } else {
                  // value is set to 1
                  grid[Y][X] = String.fromCharCode(97 + linearPlace);
                  addToDef(0, grid[Y][X])
                }
              } else {
                // value can be set to 1 or 3
                if (randomSize === 1) {
                  // value is set to shape 3
                  grid[Y + 1][X] = String.fromCharCode(97 + linearPlace);
                  grid[Y][X] = String.fromCharCode(97 + linearPlace);
                  addToDef(2, grid[Y][X])
                } else {
                  // value is set to shape 1
                  grid[Y][X] = String.fromCharCode(97 + linearPlace);
                  addToDef(0, grid[Y][X])
                }
              }
            }
            linearPlace++
          }
        }
      }
      for (var reZero = 0; reZero < definedBlocks[4].length; reZero++) {
        var ifShape1 = definedBlocks[0].find(findElement);
        var ifShape2 = definedBlocks[1].find(findElement);
        var ifShape3 = definedBlocks[2].find(findElement);
        var ifShape4 = definedBlocks[3].find(findElement);
        var classList = 'grid-item';
        if (ifShape1 !== undefined) {
          classList += " grid-item-col1"
        } else if (ifShape2 !== undefined) {
          classList += ""
        } else if (ifShape3 !== undefined) {
          classList += ""
        } else if (ifShape4 !== undefined) {
          classList += ""
        }
        this.divvies += '<div id="'+definedBlocks[4][reZero]+'" class="'+classList+'"></div>'
      }
    },
    runTimeLoop () {
      this.layoutGenerator();
      setInterval(this.layoutGenerator, 600000)
    }
  },
  mounted () {
    this.runTimeLoop()
  }
}
</script>

<style scoped>
  * {
    box-size: border-box;
    overflow: hidden;
    margin: 0;
  }
  .grid-container {
    display: grid;

    /*cursor: none;*/

    grid-gap: 20px;
    margin: 0px 0px 0px 0px;
    border-top: 0px solid black;
    border-right: 0px solid black;
    border-bottom: 0px solid black;
    padding: 0px 0px 0px 0px;
    grid-template-columns: repeat(5,1fr);
    grid-template-rows: repeat(3,1fr);
    height: 100vh;
    background-color: pink;
  }
  .grid-item {
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column-end: span 1;
    grid-row-end: span 1;
  }
  .grid-item-X {
    grid-column-end: span 2 !important;
  }
  .grid-item-Y {
    grid-row-end: span 2 !important;
  }
  .grid-item-col1{
    background-color: aqua !important;
  }
  .grid-item-col2{
    background-color: orange !important;
  }
  .grid-item-col3{
    background-color: limegreen !important;
  }
</style>
