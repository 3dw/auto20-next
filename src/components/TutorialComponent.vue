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
  padding: 20px;
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
  color: #212121; /* 深色文字 */
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 15px;
  font-family: 'Roboto', sans-serif; /* 使用 Roboto 字體 */
}

/* 列表項目樣式 */
.ui.list .item {
  padding: 15px 0; /* 調整內邊距 */
  font-size: 18px; /* 調整字體大小，符合目標網站風格 */
  color: #333; /* 深色文字，符合目標網站的設計 */
  border-bottom: 1px solid #e6e6e6; /* 分隔線顏色更柔和 */
  background-color: #ffffff; /* 主要背景顏色為白色 */
  transition: background-color 0.3s ease; /* 添加過渡效果 */
}

.ui.list .item:hover {
  background-color: #f0f0f0; /* 懸停時改變背景色 */
}

.ui.list .item:nth-child(odd) {
  background-color: #fafafa; /* 奇數項目背景色稍淺 */
}

.ui.list .item:last-child {
  border-bottom: none;
}

/* 進度條容器 */
.progress-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px 0; /* 增加上下間距 */
  background-color: #f9f9f9; /* 背景設為柔和的灰色 */
  border-radius: 8px; /* 進度條容器增加圓角 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 添加陰影效果 */
}

/* 進度條本身 */
progress.ui.progress {
  margin: 0 !important;
  width: 100%; 
  height: 30px; /* 調整進度條高度 */
  border-radius: 15px; /* 增加圓角，使進度條更加現代化 */
  background-color: #e0e0e0; /* 灰色背景 */
  overflow: hidden; /* 防止圓角被進度條覆蓋 */
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1); /* 增加內陰影，增強立體感 */
}

/* 進度條進度部分的顏色與動畫效果 */
progress::-webkit-progress-value {
  background-color: #28a745; /* 綠色進度條 */
  transition: width 0.4s ease-in-out; /* 平滑過渡效果 */
  animation: progressAnimation 2s infinite ease-in-out; /* 添加動畫 */
}

progress::-moz-progress-bar {
  background-color: #28a745;
  transition: width 0.4s ease-in-out;
}

progress::-ms-fill {
  background-color: #28a745;
  transition: width 0.4s ease-in-out;
}

/* 定義進度條動畫，讓進度條有波動效果 */
@keyframes progressAnimation {
  0% { background-position: 0 0; }
  100% { background-position: 50px 50px; }
}

/* 按鈕樣式 */
button.ui.button.primary {
  margin-top: 20px;
  padding: 12px 24px; /* 調整內邊距 */
  background-color: #28a745; /* 綠色按鈕 */
  color: white;
  border: none;
  border-radius: 8px; /* 增加圓角，使按鈕更符合現代風格 */
  font-size: 16px; /* 調整字體大小 */
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease; /* 添加過渡效果 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 添加陰影效果 */
}

/* 按鈕懸停和點擊效果 */
button.ui.button.primary:hover {
  background-color: #218838; /* 按鈕懸停時變深的綠色 */
  transform: translateY(-2px); /* 懸停時輕微上移 */
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); /* 懸停時陰影加深 */
}

button.ui.button.primary:active {
  background-color: #1e7e34; /* 點擊時更深的綠色 */
  transform: translateY(0); /* 點擊時恢復原位 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 點擊時陰影縮小 */
}
 
</style>
