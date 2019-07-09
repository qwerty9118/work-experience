<template>
  <div id="gridContainer"><span v-html="gridItems"></span></div>
</template>

<script>
  export default {
    name: 'TheAlgorithmLite2',
    props: {
      JSONString: String
    },
    data() {
      return {
        gridItems: "",
        textGrid: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
      }
    },
    computed: {},
    methods: {
      drawFill(size, locationX, locationY) {
        if(size == 1) {
          this.textGrid[locationY][locationX] = 1;
        } else if(size == 2) {
          this.textGrid[locationY][locationX] = 1;
          this.textGrid[locationY][locationX + 1] = 1;
        } else if(size == 3) {
          this.textGrid[locationY][locationX] = 1;
          this.textGrid[locationY + 1][locationX] = 1;
        } else if(size == 4) {
          this.textGrid[locationY][locationX] = 1;
          this.textGrid[locationY][locationX + 1] = 1;
          this.textGrid[locationY + 1][locationX] = 1;
          this.textGrid[locationY + 1][locationX + 1] = 1;
        }
      },
      layoutGenerator() {
        this.gridItems = "";
        this.textGrid = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
      }
    },
    mounted() {
      this.layoutGenerator();
      setInterval(this.layoutGenerator, 600000)
    }
  }
</script>

<style scoped>
  * {
    box-size: border-box;
    overflow: hidden;
    margin: 0;
  }
  #gridContainer {
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
  .gridItem {
    //background-color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    //grid-column-end: span 1;
    //grid-row-end: span 1;
  }
  .doubleX {grid-column-end: span 2 !important;}
  .doubleY {grid-row-end: span 2 !important;}
  .colour1{background-color: aqua !important;}
  .colour2{background-color: orange !important;}
  .colour3{background-color: limegreen !important;}
</style>
