<template>
  <div id="root">
    <Task v-for="task in tasks">{{ task.task }}</Task>
  </div>
</template>
<script>
  import Task from './Task.vue';
  export default {
    name: 'TaskList',
    props: {
    },
    components: {
      Task
    },
    data() {
      return {
        tasks: [
          { task: 'Go to the store', complete: true },
          { task: 'Go to the email', complete: false },
          { task: 'Go to the farm', complete: true },
          { task: 'Go to work', complete: false }
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