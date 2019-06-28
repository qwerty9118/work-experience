<template>

  <div class="">
    {{ weatherData }}
  </div>
</template>

<script>
  export default {
    name: "Weather",
    data() {
      return {
        weatherData: null
      }
    },
    mounted() {
      this.getWeather();
    },
    methods: {
      getWeather() {
        this.weatherData = 'It is sunny!';
      }
    }
  }
</script>

<style scoped>

</style>