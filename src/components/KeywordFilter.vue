<template lang="pug">
    div
      input(type="text" v-model="searchKeyword" placeholder="輸入關鍵字")
      div(v-for="item in filteredItems" :key="item.id")
        // 你的項目模板
    </template>
    
    <script>
    import { ref, computed } from 'vue';
    
    export default {
      setup() {
        const items = ref([]); // 這應該是你要過濾的數據
        const searchKeyword = ref('');
    
        const filteredItems = computed(() => {
          if (!searchKeyword.value) {
            return items.value;
          }
          return items.value.filter(item => item.name.includes(searchKeyword.value));
        });
    
        return {
          items,
          searchKeyword,
          filteredItems,
        };
      },
    };
    </script>