<template>
  <div id="gridContainer">
    <div v-for="(item, index) in dashBricksData" :key="index"><span v-html="item.insideCode"></span></div>
    <div>{{ results }}</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'TheAlgorithmLite2',
  data() {
    return {
      /* data properties have the -Data postfix */
      gridItemsData: "",
      textGridData: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
      dashBricksData: "",
      results: []
    }
  },
  computed: {
    /* computed properties have the -Calc postfix */
    randomSizeCalc(){}
  },
  methods: {
    /* methods have the -Func postfix */
    drawFillFunc(size, locationX, locationY) {
      switch(size) {
        case 4:
          this.textGridData[locationY + 1][locationX + 1] = 1;
        case 4:
        case 2:
          this.textGridData[locationY + 1][locationX] = 1;
        case 4:
        case 2:
          this.textGridData[locationY][locationX + 1] = 1;
        case 4:
        case 3:
        case 2:
        case 1:
          this.textGridData[locationY][locationX] = 1;
        default:
          console.error("FUCK")
      }
    },
    layoutGeneratorFunc() {
      this.gridItems = "";
      this.textGrid = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
    },

    getThing(){
      axios.get("http://localhost:8080/fileServer/styleData").then(response => {
        this.results = response.data
      })
    }
  },
  mounted() {
    this.layoutGeneratorFunc();
    //setInterval(this.layoutGeneratorFunc, this.$store.state.config.timB4ChangWidg)
    this.getThing();
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
    padding: 20px;
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
  .doubleX {grid-column-end: span 2;}
  .doubleY {grid-row-end: span 2;}
</style>
