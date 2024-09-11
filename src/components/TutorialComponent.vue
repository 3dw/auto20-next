<template lang="pug">
.tutorial
  h2 新手任務
  progress(:value="someTaskCompleted.filter((b) => { return b}).length * 25" max="100")
  .ui.list
    .item.left-aligned(v-for="(task, index) in tasks" :key="index")
      router-link(:to = "task.route") {{ task.name }}
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
        { name: '加入一個社團', route: '/group' },
        { name: '在社團中建立一個資源', route: '/group' },
      ],
      allTasksCompleted: false,
    };
  },
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
