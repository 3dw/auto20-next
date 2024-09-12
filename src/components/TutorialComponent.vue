<template lang="pug">
  .tutorial
    #tutorial-container.ui.container
      h2.ui.header 新手任務
      .progress-container
        progress.ui.progress(:value="(someTaskCompleted || []).filter((b) => { return b}).length * 25" max="100")
      .ui.divided.list
        .item.center.aligned(v-for="(task, index) in tasks" :key="index")
          router-link(:to = "task.route") 任務{{index+1}}： {{ task.name }}
          span(v-show="someTaskCompleted[index]")  ✔️
    button.ui.button.primary(v-if="allTasksCompleted" @click="hideTutorial")
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
/* 全域字體與顏色 */
.tutorial {
  padding: 10px; /* 減少 padding */
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans', sans-serif; /* 使用 Open Sans 字體 */
}

#tutorial-container {
  margin: 0 auto;
  display: flex;
  width: 100%; 
  max-width: 800px;
  flex-direction: column;
}

h2.ui.header {
  color: #212121;
  font-weight: 600;
  font-size: 15px; /* 減小字體大小 */
  margin-bottom: 5px; /* 減少 margin */
  font-family: 'Roboto', sans-serif;
}

/* 列表項目樣式 */
.ui.list .item {
  padding: 10px 0; /* 減少 padding */
  font-size: 16px; /* 調整字體大小 */
  color: #333;
  border-bottom: 1px solid #e6e6e6;
  background-color: #ffffff;
  transition: background-color 0.3s ease;
}

.ui.list .item:hover {
  background-color: #f0f0f0;
}

.ui.list .item:nth-child(odd) {
  background-color: #fafafa;
}

.ui.list .item:last-child {
  border-bottom: none;
}

/* 進度條容器 */
.progress-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 15px; /* 減少 margin */
  padding: 5px 0; /* 減少 padding */
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* 進度條本身 */
progress.ui.progress {
  margin: 0 !important;
  width: 100%; 
  height: 25px; /* 減少高度 */
  border-radius: 10px; /* 調整圓角 */
  background-color: #e0e0e0;
  overflow: hidden;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* 進度條進度部分的顏色與動畫效果 */
progress::-webkit-progress-value {
  background-color: #28a745;
  transition: width 0.4s ease-in-out;
  animation: progressAnimation 2s infinite ease-in-out;
}

progress::-moz-progress-bar {
  background-color: #28a745;
  transition: width 0.4s ease-in-out;
}

progress::-ms-fill {
  background-color: #28a745;
  transition: width 0.4s ease-in-out;
}

@keyframes progressAnimation {
  0% { background-position: 0 0; }
  100% { background-position: 50px 50px; }
}

/* 按鈕樣式 */
button.ui.button.primary {
  margin-top: 15px; /* 減少 margin */
  padding: 8px 16px; /* 減少 padding */
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 6px; /* 調整圓角 */
  font-size: 14px; /* 減少字體大小 */
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* 按鈕懸停和點擊效果 */
button.ui.button.primary:hover {
  background-color: #218838;
  transform: translateY(-1px); /* 減少移動距離 */
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

button.ui.button.primary:active {
  background-color: #1e7e34;
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
