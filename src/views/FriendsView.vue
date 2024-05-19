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
import { defineComponent } from 'vue';
import mix from '../mixins/mix.ts';
import Loader from '../components/Loader.vue';
import Card from '../components/Card';

export default defineComponent({
  name: 'FrindCards',
  mixins: [mix],
  props: ['mySearch', 'id', 'book', 'users', 'places', 'center', 'user'],
  components: { Loader, Card },
  data() {
    return {
      n: 10, // 初始顯示的卡片數量
      busy: false,
      allCards: [], // 所有卡片的數據
      logic: 'newest', // 初始排序邏輯
      userLocation: null // 使用者位置
    };
  },
  computed: {
    visibleCards() {
      const filteredCards = this.allCards.filter(h => {
        const today = new Date().getTime();
        if (isNaN(h.lastUpdate)) {
          return false;
        }
        const updatedWithinAYear = (today - h.lastUpdate) / 1000 / 3600 / 24 / 365.25 <= 2; // 應該是 1

        const mySearch = this.mySearch.toLowerCase();
        const containsSearchKeyword = [h.name, h.learner_habit, h.share, h.ask, h.note].some(field =>
          field && field.toLowerCase().includes(mySearch)
        );

        return updatedWithinAYear && containsSearchKeyword;
      });

      return filteredCards.slice(0, this.n); // 只返回當前應顯示的卡片
    },
    list() {
      return this.processData(this.users).concat(this.processData(this.places));
    }
  },
  mounted() {
    console.log('Initial center in child component:');
    console.log(this.center);
    this.allCards = this.list; // 初始化所有卡片數據
    this.getUserLocation(); // 獲取使用者位置
  },
  watch: {
    center(newC) {
      console.log('Child component received new center:', newC);
      this.allCards = this.processData(this.users).concat(this.processData(this.places));
      this.$forceUpdate();
    },
    users(newU) {
      this.allCards = this.processData(newU).concat(this.processData(this.places));
    },
    logic(newL) {
      console.log(newL);
      if (newL == 'nearest' && !this.userLocation) {
        // 使用者未登入，使用導航 API 獲取位置
        this.getUserLocation();
      } else {
        this.allCards = this.processData(this.users).concat(this.processData(this.places));
      }
    }
  },
  methods: {
    processData(obj) {
      const data = Object.keys(obj || {}).map(key => obj[key]);
      if (this.logic === 'newest') {
        return data.sort((a, b) => (b.lastUpdate || 0) - (a.lastUpdate || 0));
      } else if (this.logic === 'nearest') {
        return data.sort((a, b) => this.distanceToCenter(a.latlngColumn) - this.distanceToCenter(b.latlngColumn));
      }
      return data;
    },
    distanceToCenter(latlngColumn) {
      if (!latlngColumn || latlngColumn.split(',').length !== 2) {
        console.error('Invalid latlngColumn format:', latlngColumn);
        return Number.MAX_VALUE;
      }

      let [lat, lng] = latlngColumn.split(',').map(Number);
      if (isNaN(lat) || isNaN(lng)) {
        console.error('Cannot parse lat or lng from latlngColumn:', latlngColumn);
        return Number.MAX_VALUE;
      }

      if (!this.userLocation) {
        return Number.MAX_VALUE;
      }

      const center = this.userLocation;
      const rad = x => x * Math.PI / 180;
      const dLat = rad(lat - center.lat);
      const dLon = rad(lng - center.lng);
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(rad(center.lat)) * Math.cos(rad(lat)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return 6371 * c; // 地球半徑約 6371 公里
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
          this.n += 10; // 每次加載更多10張卡片
        }
        this.busy = false;
      }, 1000); // 模擬加載延遲
    },
    locate(h, bool) {
      this.$emit('locate', h, bool);
    },
    addBook(id) {
      console.log(id);
      this.$emit('addBook', id);
    },
    removeBook(index) {
      console.log(index);
      this.$emit('removeBook', index);
    },
    getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            this.userLocation = { lat, lng };
            console.log('User location obtained:', this.userLocation);
            this.allCards = this.processData(this.users).concat(this.processData(this.places));
          },
          error => {
            console.error('Error getting user location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
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
