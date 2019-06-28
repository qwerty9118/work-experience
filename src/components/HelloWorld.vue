<template>
  <div id="root">
    <input type="button" :value="tutorialBtnTxt" @click="showHideToggle">
    <div id="tutorial" :style="tutorialDivShow">
      {{ message1 }}
      <input type="text" id="input" v-model="message1"/>
      {{ message1 }}

      <ul class="firstListUl">
        <li class="firstListLi" v-for="name in names" v-text="name"></li>
      </ul>
      <input id="listInput" type="text" v-model="newName" @keyup="addLetter">
      <input type="button" value="+" @click="addName">
      <ul class="firstListUl">
        <li class="firstListLi" v-for="letter in letters" v-text="letter"></li>
      </ul>

      <input type="button" :title="title" value="Hover Over Me" @click="hoverFlip()">

      <input type="button" :class="{ 'is-loading': isLoading }" @click="isLoadingToggle()" value="How t' bind css styling w/ vue">

      <br>
      <button :disabled="satanSpawn">Ah yes satan's creation - the button tag.</button>
      <button v-text="buttonForSS" @click="satanSpawnToggle()"></button>
      <br>

      <h1>
        {{ reversedMessage }}
      </h1>
      <h2 id="titleA">All Tasks</h2>
      <ul>
        <li class="taskLists" v-for="task in tasks" v-text="task.description"></li>
      </ul>
      <h2 id="titleF">Incomplete Tasks</h2>
      <ul>
        <li class="taskLists" id="taskListsF" v-for="task in incompleteTasks" v-text="task.description" @click="task.completed = true"></li>
      </ul>
      <h2 id="titleT">Complete Tasks</h2>
      <ul>
        <li class="taskLists" id="taskListsT" v-for="task in completeTasks" v-text="task.description" @click="task.completed = false"></li>
      </ul>

      <TaskList></TaskList>
    </div>
  </div>
</template>



<script>
import TaskList from './TaskList.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    TaskList
  },
  data() {
    return {
      tutorialBtnTxt: "Show Tutorial",
      tutorialDivShow: "display:none",
      message1: 'Hello World!',

      newName: "",
      names: ["Joe", "Mary", "Jane", "Jack"],
      letters: ["Joe", "Mary", "Jane", "Jack"],

      title: "woo a javascript title!",

      isLoading: false,
      satanSpawn: false, //it hides it's identity - it is always true...
      buttonForSS: "<[_]>",

      message2: "Hello World",
      tasks: [
        { description: "Go to the store", completed: false },
        { description: "Finish screencast", completed: false },
        { description: "Make donation", completed: false },
        { description: "Clear inbox", completed: false },
        { description: "Make dinner", completed: false },
        { description: "Clean room", completed: false },
      ]
    }
  },
  computed: {
    reversedMessage() {
        return this.message2.split("").reverse().join("")
    },
    incompleteTasks() {
        return this.tasks.filter(task => !task.completed)
    },
    completeTasks() {
        return this.tasks.filter(task => task.completed)
    }
  },
  methods: {
    addName() {
      if (this.newName !== "") {
        //alert("adding name")
        this.names.shift(),
          this.names.push(this.newName),
          this.newName = ""
      }
      document.querySelector("#listInput").focus()
    },
    addLetter() {
      //alert("adding letter")
      this.letters.shift(),
        this.letters.push(this.newName),
        document.querySelector("#listInput").focus()
    },

    satanSpawnToggle() {
      this.satanSpawn = !this.satanSpawn
      if(this.buttonForSS === "<[_]>") {
        this.buttonForSS = "<[X]>"
      }
      else {
        this.buttonForSS = "<[_]>"
      }
    },
    isLoadingToggle() {
      this.isLoading = !this.isLoading
    },
    hoverFlip() {
      this.title = this.title.split("").reverse().join("")
    },
    showHideToggle() {
      if (this.tutorialDivShow === "display:none") {
        this.tutorialDivShow = "display:block",
        this.tutorialBtnTxt = "Hide Tutorial"
      }
      else {
        this.tutorialDivShow = "display:none",
        this.tutorialBtnTxt = "Show Tutorial"
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.firstListUl {
  list-style-type: none;
  padding: 0;
}
.firstListLi {
  display: inline-block;
  margin: 0 10px;
}
.taskLists {
  text-align: center;
  margin: auto;
  background-color: lightgray;
  width: 200px;
  height: 30px;
  border-style: dashed solid;
  border-width: 2px;
  border-color: black;
}
#titleA {
  background-color: lightgray;
}
#taskListsF, #titleF {
  background-color: lightcoral;
}
#taskListsT, #titleT {
  background-color: lightgreen;
}
.is-loading {color: red;}
</style>
