<template lang="pug">
.hello
  .ui.container(v-if="uid")
    form#main-form.ui.form.error.warning.success
      h2.ui.header 請填表
      .sub.header
        | 為了讓人真的能找到夥伴
        br
        | 有標記紅色星號
        i.red.star
        | 的欄位為必填
      h4.ui.dividing.header 關於場地
      .field
        label.required 地名
        input(type='text' v-model='root.name', placeholder='場地名稱')
      .field
        label.required 概略地址
        input(v-model.trim='root.address', placeholder='地址愈詳細，別人愈好認識你的所在')

        h4.ui.header 手動拖拉標記，移到正確的位置
          .sub.header 經緯座標： {{root.latlngColumn}}
        #map(style="height: 300px;")  // Add the map container
        .ui.error.message(v-show="!root.latlngColumn")
          .header 無法定位
          p 如果地場有不只一個位置，請填寫一個就好，其他可寫進介紹中。
            br
            | 若持續無法定位，請
            a(href="https://www.google.com.tw/chrome/browser/desktop/" target="_blank") 使用Chrome瀏覽器
            | 再試一次。
        .ui.warning.message(v-show="usedAddr(root)")
          .header 地址重疊
          p 有別人使用了這個地址。您可以加上村里或是路段，來使定位更精準

      .ui.divider
      .field
        label 網址
        .two.fields
          .field 
            input(v-model='root.site', placeholder='場地網址')
            span(v-show='root.site')
              a(:href='root.site', target='_blank')
                img(:src="'http://www.google.com/s2/favicons?domain=' + root.site" title='場地網址' alt='場地網址')
                | 測試連結

      .two.fields
        .field
          label.required 有效聯絡方式
          input(type='text' v-model='root.connect_me',  placeholder='可公開的方式，如e-mail。臉書私訊不可')
        .ui.divider
        .field
          label.required 介紹
          textarea#note(v-model='root.note', rows='5', cols='30', placeholder='介紹很重要，請寫20字以上，謝謝')
    .ui.divider
    a.ui.large.blue.button(@click="updatePlace")
      span 升起旗幟!!
</template>
  
<script>
import { defineComponent } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { db } from '../firebase';
import mix from '../mixins/mix.ts';
import { set, ref } from 'firebase/database';

export default defineComponent({
  name: 'MyPlace',
  mixins: [mix],
  props: ['uid', 'user', 'mySearch', 'photoURL', 'users', 'places'],
  data() {
    return {
      myIndex: -1,
      root: {
        latlngColumn: '23.5330,121.0654'  // Initialize with a default value
      },
      local: {},
      map: null,
      marker: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (this.uid) { // Initialize the map only if uid is available
        L.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/';
        setTimeout(this.initMap, 500);
      }
    });
  },
  watch: {
    uid: function (newUid) {
      if (newUid) {
        L.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/';
        setTimeout(this.initMap, 500);
      }
    }
  },
  methods: {
    initMap() {
      // Default coordinates
      const defaultCoords = [23.5330, 121.0654];
      this.map = L.map('map').setView(defaultCoords, 7);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      // Set the marker at the initial center of the map and make it draggable
      this.marker = L.marker(this.map.getCenter(), {draggable: true}).addTo(this.map);
      this.root.latlngColumn = `${defaultCoords[0]},${defaultCoords[1]}`;  // Update latlngColumn initially

      // Update latlngColumn and map center when the marker is dragged
      this.marker.on('dragend', (event) => {
        const latLng = event.target.getLatLng();
        this.map.setView(latLng);  // Update the map center
        this.root.latlngColumn = `${latLng.lat.toFixed(5)},${latLng.lng.toFixed(5)}`;
      });
    },
    usedAddr(hand) {
      const keys = Object.keys(this.users || {});
      const usersList = keys.map(k => this.users[k]);
      var ans = false;
      for (let h of usersList) {
        if (h.latlngColumn === hand.latlngColumn) {
          ans = true;
          break;
        }
      }
      return ans;
    },
    tooDetail(addr) {
      return addr.match(/(號|樓|F|f)/) ? true : false;
    },
    updatePlace() {
      if (window.prompt('場地一旦登錄後無法手動更新和移除，確定要登錄嗎？')) {
        this.root.upload_by = this.uid;
        this.root.lastUpdate = (new Date()).getTime();
        set(ref(db, 'places/' + this.places.length), this.root).then(
          () => alert('登錄成功!')
        );
      }
    },
    loginGoogle() {
      this.$emit('loginGoogle');
    }
  }
})
</script>
  
<style scoped>
  label.required::before {
    content: "*";
    color:red;
  }
  
  i.red.star::before{
    content: "*";
    color:red;    
  }
  </style>
  