<template>
  <div id="root">
    This is the widget list
  </div>
</template>
<script>
  export default {
    name: 'WidgetList',
    props: {
    },
    components: {
    },
    data() {
      return {
        arrayofobj: [
          { anobject: 'Go to the store'},
          { anobject: 'Go to the email'},
          { anobject: 'Go to the farm'},
          { anobject: 'Go to work'}
        ]
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>
<style scoped></style>