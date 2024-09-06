<template lang="pug">
  canvas(ref="riveContainer" class="rive-container") // 將 div 改為 canvas 以便 Rive 正確渲染
</template>

<script>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import Rive from '@rive-app/canvas'; // 正確導入 Rive.js

export default {
  name: 'RiveComponent',
  props: {
    animationFile: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const riveContainer = ref(null);
    let riveInstance = null;

    onMounted(() => {
      if (riveContainer.value) {
        // 當元件掛載後，初始化 Rive 動畫
        try {
          riveInstance = new Rive({
            src: props.animationFile, // 引用傳入的 .riv 文件路徑
            canvas: riveContainer.value, // 將 canvas 傳遞給 Rive
            autoplay: true, // 自動播放動畫
          });
        } catch (error) {
          console.error('Rive 加載失敗：', error);
        }
      }
    });

    // 當元件銷毀前清理 Rive 實例
    onBeforeUnmount(() => {
      if (riveInstance) {
        riveInstance.cleanup(); // 清理 Rive 資源
        riveInstance = null;
      }
    });

    return {
      riveContainer,
    };
  },
};
</script>

<style scoped>
.rive-container {
  width: 100%;
  height: 300px; /* 根據需要調整高度 */
  display: block;
}
</style>
