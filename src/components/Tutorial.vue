<template lang="pug">
    .tutorial
      h2 教學任務
      ul
        li(v-for="(task, index) in tasks" :key="index")
          span {{ task.name }}
          span(v-if="task.completed") ✔️
          progress(:value="task.completed ? 100 : 0" max="100")
      button(v-if="allTasksCompleted" @click="hideTutorial") 隱藏教學
  </template>
  
  <script>
  export default {
    data() {
      return {
        tasks: [
          { name: '升起互助旗', completed: false },
          { name: '將一位夥伴加入名簿', completed: false },
          { name: '加入一個社團', completed: false },
          { name: '在社團中建立一個資源', completed: false },
        ],
        allTasksCompleted: false,
      };
    },
    methods: {
      completeTask(index) {
        this.tasks[index].completed = true;
        this.checkAllTasksCompleted();
      },
      checkAllTasksCompleted() {
        this.allTasksCompleted = this.tasks.every(task => task.completed);
      },
      hideTutorial() {
        this.$emit('hideTutorial');
      },
    },
    mounted() {
      // 模擬任務完成（測試用）
      setTimeout(() => this.completeTask(0), 1000);
      setTimeout(() => this.completeTask(1), 2000);
      setTimeout(() => this.completeTask(2), 3000);
      setTimeout(() => this.completeTask(3), 4000);
    }
  };
  </script>
  
  <style scoped>
  .tutorial {
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin: 10px 0;
  }
  progress {
    margin-left: 10px;
    vertical-align: middle;
  }
  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>
  