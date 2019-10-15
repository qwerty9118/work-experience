<template>
  <div id="SCWrapper" style="display:grid;">
    <div @click="$emit('changeS')" v-if="state == 0" :style="{ backgroundColor: colours.tert, color:'white' }">---+ To the widget settings +---</div>
    <div id="styleCreator" v-else :style="{ backgroundColor: colours.tert, height:'100%' }">
      <div id="boxA">other edit bits</div>
      <div id="boxB">list options</div>
      <div id="boxC">
        <div id="boxH">
          <p style="margin: 0.5em;">Select classes and ids to be styled:</p>
          <select id="boxE" multiple>
            <option>None</option>
            <option value="all">All</option>
            <option v-for="item in idsAndClasses">{{ item }}</option>
          </select>
        </div>
        <div id="boxF">an example of what the output would look like (top right)</div>
        <textarea id="boxG" placeholder="Style Code"></textarea>
      </div>
      <div id="boxD">list</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StyleCreator',
  props: ["state"],
  data () {
    return {
      colours: {"bkgnd": "#FFFFE0", "prim": "#BFFF00", "seco": "lime", "tert": "green", "dtail": "black"},
      idsAndClasses: ""
    }
  },
  computed: {},
  methods: {},
  mounted() {},
}
</script>

<style scoped>
  * {
    box-size: border-box;
    /*display: inline;*/
  }
  #styleCreator {
    display: grid;
    grid-template-columns: calc(50% - 5px) calc(50% - 5px);
    grid-template-rows: calc(20% - 5px) calc(80% - 5px);
    grid-gap: 10px;
    padding: 10px;
  }
  #boxA {color: red; background-color: tomato;}
  #boxB {color: orangered; background-color: orange;}
  #boxC {color: yellow; background-color: khaki;
    display: grid;
    grid-template-columns: calc(50% - 5px) calc(50% - 5px);
    grid-template-rows: calc(50% - 5px) calc(50% - 5px);
    grid-gap: 10px;
    padding: 10px;
  }
  #boxD {color: green; background-color: lime;}
  #boxE {color: blue; background-color: aqua;
    height: calc(100% - 2em);
    width: 100%;
  }
  #boxF {color: lightblue; background-color: lightcyan;
    margin: 20px;
  }
  #boxG {color: indigo; background-color: mediumpurple;
    grid-column: 1 / span 2;
    resize: none;
  }
  #boxH {color: violet; background-color: lavender;}
  #boxI {color: black; background-color: white;}
</style>
