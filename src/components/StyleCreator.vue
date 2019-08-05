<template>
  <div id="styleCreator">
    <div @click="change2style()" v-if="goTopBar === 1" :style="{ backgroundColor: this.$store.state.config.cols.colDefault.stylrCol.tert }"></div>
    <div class="styleCreator" v-else :style="{ backgroundColor: this.$store.state.config.cols.colDefault.stylrCol.tert }">
    </div>
  </div>
</template>

<script>
export default {
  name: 'StyleCreator',
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
    display: inline;
  }
</style>
