<template lang="pug">
.hello
  .ui.row(v-if="!uid && (!users || toList(users).length == 0)")
    .sixteen.wide.column 
      .ui.huge.buttons
        button.ui.orange.button(@click="loginGoogle(false)")
          i.google.icon
          | {{ $t('login.login') }}
  loader(v-else-if="!users || toList(users).length == 0")
  select.ui.dropdown(v-else, v-model="logic")
    option(value="newest") {{$t('friends.recent_updates')}}
    option(value="nearest", v-show="(uid && users[uid] && users[uid].latlngColumn)") {{$t('friends.nearest')}}
    option(value="learner_habit_nearst", v-show="uid && users[uid] && users[uid].learner_habit") {{$t('friends.similiar_interest') }}
    option(value="ask_match_share", v-show="uid && users[uid] && users[uid].ask") {{$t('friends.seeking_help')}}
    option(value="share_match_ask", v-show="uid && users[uid] && users[uid].share") {{$t('friends.sharer')}}
    option(value="random") {{$t('friends.random_profile')}}
    option(value="age_nearest", v-if="uid && users[uid] && users[uid].child_birth") {{$t('friends.similar_age_kid')}}
    option(v-for="(c, idx) in cities", :value="'near_' + c.c.join(',')", :key="idx") {{c.t}}{{ $t('friends.area') }}
  br
  .ui.divider
  br
  .ui.two.doubling.cards.container(@scroll="handleScroll", ref="scrollContainer")
    .ui.card(v-for="(h, index) in visibleCards", :key="index")
      card(:h="h", :full="false", :mySearch="mySearch",  :book="book", @locate="locate", @addBook="addBook", @removeBook="removeBook", :uid="uid")
</template>

<script>
import { defineComponent } from 'vue';
import mix from '../mixins/mix.ts';
import Loader from '../components/Loader.vue';
import Card from '../components/Card';

export default defineComponent({
  name: 'FindCards',
  mixins: [mix],
  props: ['mySearch', 'book', 'users', 'places', 'center', 'user', 'uid'],
  components: { Loader, Card },
  data() {
    return {
      n: 10, // 初始顯示的卡片數量
      busy: false,
      allCards: [], // 所有卡片的數據
      logic: 'random', // 初始排序邏輯
      userLocation: null, // 使用者位置
      cities: [
        {t: this.$t('friends.taipei'), c: [25.046337, 121.517444]},
        {t: this.$t('friends.newtaipei'), c: [25.011709, 121.465881], z: 10},
        {t: this.$t('friends.taoyuan'), c: [24.993923, 121.301680]},
        {t: this.$t('friends.taichung'), c: [24.163162, 120.647828]},
        {t: this.$t('friends.tainan'), c: [22.991235, 120.184982]},
        {t: this.$t('friends.kaohsiung'), c: [22.627277, 120.301437]},
        {t: this.$t('friends.changhua'), c: [120.4818, 23.99297]},
        {t: this.$t('friends.pingtung'), c: [120.62, 22.54951]},
        {t: this.$t('friends.yunlin'), c: [120.3897, 23.75585]},
        {t: this.$t('friends.miaoli'), c: [120.9417, 24.48927]},
        {t: this.$t('friends.chiayiCounty'), c: [120.574, 23.45889]},
        {t: this.$t('friends.hsinchuCounty'), c: [121.1252, 24.70328]},
        {t: this.$t('friends.hsinchuCity'), c: [120.9647, 24.80395]},
        {t: this.$t('friends.keelung'), c: [121.7081, 25.10898]},
        {t: this.$t('friends.yilan'), c: [24.69295, 121.7195], z: 10},
        {t: this.$t('friends.nantou'), c: [23.83876, 120.9876], z: 10},
        {t: this.$t('friends.chiayiCity'), c: [23.47545, 120.4473], z: 10},
        {t: this.$t('friends.hualien'), c: [23.7569, 121.3542], z: 10},
        {t: this.$t('friends.taitung'), c: [22.98461, 120.9876], z: 10},
        {t: this.$t('friends.penghu'), c: [23.56548, 119.6151], z: 9},
        {t: this.$t('friends.lienchiang'), c: [119.5397, 26.19737]},
      ]
    };
  },
  computed: {
    visibleCards() {
      const filteredCards = this.allCards.filter(h => {
        // const today = new Date().getTime();
        if (isNaN(h.lastUpdate)) {
          return false;
        }
        // const updatedWithinAYear = (today - h.lastUpdate) / 1000 / 3600 / 24 / 365.25 <= 1;

        const mySearch = this.mySearch.toLowerCase();
        const containsSearchKeyword = [h.name, h.learner_habit, h.share, h.ask, h.note].some(field =>
          field && field.toLowerCase().includes(mySearch)
        );

        return containsSearchKeyword; // && updatedWithinAYear
      });

      return filteredCards.slice(0, this.n); // 只返回當前應顯示的卡片
    },
    list() {
      return this.processData(this.users) // .concat(this.processData(this.places));
    }
  },
  mounted() {
    console.log('Initial center in child component:');
    console.log(this.center);
    this.allCards = this.list; // 初始化所有卡片數據
    // this.getUserLocation(); // 獲取使用者位置
  },
  watch: {
    center(newC) {
      console.log('Child component received new center:', newC);
      this.allCards = this.processData(this.users) //.concat(this.processData(this.places));
      this.$forceUpdate();
    },
    users(newU) {
      this.allCards = this.processData(newU) //.concat(this.processData(this.places));
    },
    logic(newL) {
      console.log(newL);
      const nearMatch = newL.match(/^near_(\d+\.\d+),(\d+\.\d+)$/);
      if (newL === 'nearest' && !this.userLocation) {
        console.log(this.users[this.uid].latlngColumn);
        // 從this.users[this.uid].latlngColumn剖析出位置, 存入this.userLocation
        if (this.users[this.uid].latlngColumn) {
          const [lat, lng] = this.users[this.uid].latlngColumn.split(',').map(Number);
          if (!isNaN(lat) && !isNaN(lng)) {
            this.userLocation = { lat, lng };
            console.log('User location set to:', this.userLocation);
          } else {
            console.error('Cannot parse lat or lng from latlngColumn:', this.users.latlngColumn);
          }
        }
        this.allCards = this.processData(this.users) // .concat(this.processData(this.places));

        // 使用者未登入，使用導航 API 獲取位置
        // this.getUserLocation();
      } else if (nearMatch) {
        // 更新使用者位置並依據新的位置排序卡片
        const lat = parseFloat(nearMatch[1]);
        const lng = parseFloat(nearMatch[2]);
        this.userLocation = { lat, lng };
        console.log('Updated user location to:', this.userLocation);
        this.allCards = this.processData(this.users) // .concat(this.processData(this.places));
      } else {
        this.allCards = this.processData(this.users) // .concat(this.processData(this.places));
      }
    }
  },
  methods: {
    loginGoogle (autoredirect) {
      this.$emit('loginGoogle', autoredirect)
    },
    toList(obj) {
      if (!obj || typeof obj !== 'object') {
        return [];
      } else {
        return Object.values(obj);
      }
    },
    // 在 processData 函數中添加新的排序邏輯
    processData(obj) {
      const data = Object.keys(obj || {}).map(key => obj[key]);
      if (this.logic === 'newest') {
        return data.sort((a, b) => (b.lastUpdate || 0) - (a.lastUpdate || 0));
      } else if (this.logic === 'random') {
        return data.sort(() => 0.5 - Math.random());
      } else if (this.logic === 'nearest' || this.logic.match(/^near_(\d+\.\d+),(\d+\.\d+)$/)) {
        return data.sort((a, b) => this.distanceToCenter(a.latlngColumn) - this.distanceToCenter(b.latlngColumn));
      } else if (this.logic === 'age_nearest' && this.users[this.uid] && this.users[this.uid].child_birth) {
          const userChildBirth = new Date(this.users[this.uid].child_birth).getTime();
          return data.sort((a, b) => this.distanceToCenter(a.latlngColumn) - this.distanceToCenter(b.latlngColumn)).sort((a, b) => {
            const aChildBirth = a.child_birth ? new Date(a.child_birth).getTime() : Infinity;
            const bChildBirth = b.child_birth ? new Date(b.child_birth).getTime() : Infinity;
            return Math.abs(aChildBirth - userChildBirth) - Math.abs(bChildBirth - userChildBirth);
        })
      } else if (this.logic === 'ask_match_share' && this.users[this.uid]) {
        // 新增的配對邏輯: 尋找協助
        const currentUser = this.users[this.uid];
        return data.filter(user => user.uid !== this.uid)
          .sort((a, b) => this.distanceToCenter(a.latlngColumn) - this.distanceToCenter(b.latlngColumn))
          .sort((a, b) => {
          const scoreA = this.countOverlap(currentUser.ask, a.share);
          const scoreB = this.countOverlap(currentUser.ask, b.share);
          return scoreB - scoreA; // 高分在前
        });
      } else if (this.logic === 'share_match_ask' && this.users[this.uid]) {
        // 新增的配對邏輯: 尋找需求者
        const currentUser = this.users[this.uid];
        return data.filter(user => user.uid !== this.uid)
          .sort((a, b) => this.distanceToCenter(a.latlngColumn) - this.distanceToCenter(b.latlngColumn))
          .sort((a, b) => {
          const scoreA = this.countOverlap(currentUser.share, a.ask);
          const scoreB = this.countOverlap(currentUser.share, b.ask);
          return scoreB - scoreA; // 高分在前
        });
      } else if (this.logic === 'learner_habit_nearest' && this.users[this.uid]) {
        // 新增的配對邏輯
        const currentUser = this.users[this.uid];
        return data.filter(user => user.uid !== this.uid)
          .sort((a, b) => this.distanceToCenter(a.latlngColumn) - this.distanceToCenter(b.latlngColumn))
          .sort((a, b) => {
          const scoreA = this.countOverlap(currentUser.learner_habit, a.learner_habit) + this.countOverlap(a.ask, currentUser.share);
          const scoreB = this.countOverlap(currentUser.learner_habit, b.learner_habit) + this.countOverlap(b.ask, currentUser.share);
          return scoreB - scoreA; // 高分在前
        });
      }
      return data;
    },

    // 新增 countOverlap 函數
    countOverlap(askStr, shareStr) {
      if (!askStr || !shareStr) return 0;

      const asks = askStr.split(/[，,、\s]/g);
      const shares = shareStr.split(/[，,、\s]/g);

      const askSet = new Set(asks);
      const shareSet = new Set(shares);

      let overlap = 0;
      askSet.forEach(item => {
        if (shareSet.has(item)) {
          overlap++;
        }
      });
      return overlap;
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
    /* getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            this.userLocation = { lat, lng };
            console.log('User location obtained:', this.userLocation);
            this.allCards = this.processData(this.users)// .concat(this.processData(this.places));
          },
          error => {
            console.error('Error getting user location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    } */
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
