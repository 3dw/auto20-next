<template lang="pug">
.tutorial
  #tutorial-container.ui.container
    h2 新手任務
    progress.ui.progress(:value="(someTaskCompleted || []).filter((b) => { return b}).length * 25" max="100")
    .ui.list
      .item.left.aligned(v-for="(task, index) in tasks" :key="index")
        router-link(:to = "task.route") {{index+1}}： {{ task.name }}
        span(v-show="someTaskCompleted[index]") ✔️
  button.ui.green.button(v-if="allTasksCompleted" @click="hideTutorial")
    i.hide.icon
    | 隱藏新手任務
</template>

<script>

export default {
  data() {
    return {
      isNew: true,
      tasks: [
        { name: '升起互助旗', route: '/profile' },
        { name: '將一位夥伴加入名簿', route: '/book' },
        { name: '加入或創建一個社團', route: '/groups' },
        { name: '在社團中推薦一個資源', route: '/groups' },
      ],
      allTasksCompleted: false,
    };
  },
  props: ['someTaskCompleted'],
  methods: {
    hideTutorial() {
      this.$emit('hideTutorial');
    },
  }
};
</script>

<style scoped>
.tutorial {
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
}
#tutorial-container {
  margin: 0 auto;
  display: flex;
  width: fit-content !important;
  flex-direction: column;
}
ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

progress.ui.progress {
  margin: 10px 0 !important;
  vertical-align: middle;
  border-radius: 10px !important;
  overflow: hidden;
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
