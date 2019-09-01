<template>
  <div id="SCWrapper" style="display:grid;">
    <div @click="$emit('changeS')" v-if="state == 0" :style="{ backgroundColor: this.$store.state.config.cols.colDefault.stylrCol.tert, color:'white' }">---+ To the widget settings +---</div>
    <div id="styleCreator" v-else :style="{ backgroundColor: this.$store.state.config.cols.colDefault.stylrCol.tert, height:'100%' }">
    </div>
  </div>
</template>

<script>
export default {
  name: 'StyleCreator',
  props: ["state"],
  data () {
    return {}
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
  }
  #boxA {color: red;}
  #boxB {color: orange;}
  #boxC {color: yellow;}
  #boxD {color: green;}
  #boxE {color: blue;}
  #boxF {color: lightblue;}
  #boxG {color: indigo;}
  #boxH {color: violet;}
  #boxI {color: black;}
</style>
