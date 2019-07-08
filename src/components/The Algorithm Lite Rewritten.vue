<template>
  
</template>

<script>
  export default {
    name: 'TheAlgorithmLite2',
    data() {
      return {}
    },
    computed: {},
    methods: {
      layoutGenerator() {
      }
    }
  }
</script>

<style scoped>
  * {
    box-size: border-box;
    overflow: hidden;
    margin: 0;
  }
  .board {
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
  .socket {
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column-end: span 1;
    grid-row-end: span 1;
  }
  .doubleX {grid-column-end: span 2 !important;}
  .doubleY {grid-row-end: span 2 !important;}
  .colour1{background-color: aqua !important;}
  .colour2{background-color: orange !important;}
  .colour3{background-color: limegreen !important;}
</style>