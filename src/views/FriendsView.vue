<template lang="pug">
.hello
  loader(v-show="!users")
  select.ui.dropdown(v-model="logic")
    option(value="newest") 最近更新
    option(value="nearest") 離我最近
  br
  .ui.divider
  br
  .ui.two.doubling.cards.container(@scroll="handleScroll", ref="scrollContainer")
    .ui.card(v-for="(h, index) in visibleCards", :key="index")
      card(:h="h", :full="false", :mySearch="mySearch", :id="id", :book="book", @locate="locate", @addBook="addBook", @removeBook="removeBook")
</template>

<script>
import { defineComponent, ref } from 'vue';
import mix from '../mixins/mix.js';
import Loader from '../components/Loader.vue';
import Card from '../components/Card';

export default defineComponent({
  name: 'FrindCars',
  mixins: [mix],
  props: ['mySearch', 'id', 'book', 'users', 'places', 'center','user'],
  components: { Loader, Card },
  data () {
    return {
      n: 10,  // 初始顯示的卡片數量
      busy: false,
      allCards: [],  // 所有卡片的數據
      logic: 'newest'  // 初始排序邏輯
    }
  },
  computed: {
    visibleCards() {
      return this.list.slice(0, this.n);  // 只返回當前應顯示的卡片
    },
    list() {
      return this.processData(this.users).concat(this.processData(this.places))
    }
  },
  mounted() {
    this.allCards = this.list;  // 初始化所有卡片數據
  },
  watch: {
    users: function (newU, oldU) {
      this.allCards = this.processData(newU).concat(this.processData(this.places))
    }
  },
  methods: {
    processData(obj) {
      const data = Object.keys(obj || {}).map(key => obj[key]);
      console.log("原始資料:", data);  // 輸出原始資料檢查
      if (this.logic === 'newest') {
        const sorted = data.sort(function(a,b) {
          if (!b.lastUpdate || isNaN(b.lastUpdate)) { return -1}
          return b.lastUpdate - a.lastUpdate
        });
        console.log("按時間排序後的資料:", sorted);  // 輸出排序後的資料檢查
        return sorted;
      } else if (this.logic === 'nearest') {
        const sorted = data.sort((a, b) => 

          { if (!b.latlngColumn || isNaN(b.latlngColumn)) { return -1 }
            return this.distanceToCenter(b.latlngColumn) - this.distanceToCenter(a.latlngColumn);
          })
        
        console.log("按距離排序後的資料:", sorted);  // 輸出排序後的資料檢查
        return sorted;
      }
      return data;  // Fallback if no sorting logic is defined
    },
    distanceToCenter(latlngColumn) {
      var latlng;
      if (!latlngColumn) {
        latlng = { lat: this.center[0] + 90, lng: this.center[1] + 180 }
        ;
      } else {
        latlng = {
          lat: parseFloat(latlngColumn.split(',')[0]),
          lng: parseFloat(latlngColumn.split(',')[1])
        };
      }

      let center = { lat: this.center[0], lng: this.center[1] };

      if (this.user && this.user.latlngColumn) {
        center = {
          lat: parseFloat(this.user.latlngColumn.split(',')[0]),
          lng: parseFloat(this.user.latlngColumn.split(',')[1])
        };
      }

      const rad = x => x * Math.PI / 180;
      const dLat = rad(latlng.lat - center.lat);
      const dLon = rad(latlng.lng - center.lng);
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(rad(center.lat)) * Math.cos(rad(latlng.lat)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = 6371 * c; // Earth's radius in kilometers
      return distance;
    },
    handleScroll() {
      const container = this.$refs.scrollContainer;
      if (container.scrollHeight - container.scrollTop <= container.clientHeight + 100 && !this.busy) {
        this.loadMore();
      }
    },
    loadMore() {
      this.busy = true;
      setTimeout(() => {
        if (this.n < this.allCards.length) {
          this.n += 10;  // 每次加載更多10張卡片
        }
        this.busy = false;
      }, 1000);  // 模擬加載延遲
    },
    locate(h) {
      this.$emit('locate', h);
    },
    addBook(id) {
      console.log(id);
      this.$emit('addBook', id);
    },
    removeBook(index) {
      console.log(index);
      this.$emit('removeBook', index);
    }
  }
});
</script>

<style scoped>
/* 確保滾動容器有足夠的高度來觸發滾動 */
.container {
  max-height: 80vh;
  overflow-y: auto;
}
</style>
