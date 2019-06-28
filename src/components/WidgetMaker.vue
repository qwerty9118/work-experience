<template>
  <div>
    <form action="">
      Name:<br><input type="text"><br>
      Size:<br>
      <input type="radio" value="1" v-model="size">
      <input type="radio" value="2" v-model="size"><br>
      <input type="radio" value="3" v-model="size">
      <input type="radio" value="4" v-model="size">
      <br><br>
      <input type="submit" value="Go">
    </form>
  </div>
</template>

<script>
  export default {
    name: "WidgetMaker",
    props: {
    },
    data() {
      return {
        size: 0
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>