<template lang="pug">
.hello
  loader(v-show="!users || toList(users).length == 0")
  .ui.divider
  .ui.container#map(style="width: 100%; height: 600px;")
</template>

<script>
import { defineComponent, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';  
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
//import mix from '../mixins/mix.js';
import Loader from '../components/Loader.vue';

export default defineComponent({
  name: 'MapsView',
  // mixins: [mix], // 混合進來的功能，暫時註解掉
  props: ['mySearch', 'zoom', 'center', 'cities', 'users', 'places'],
  components: { Loader },
  metaInfo: {
    title: '地圖',
  },
  setup(props) {
    const map = ref(null); // 用來存放地圖實例的變數
    const markerClusterGroup = ref(null); // 用來存放標記群組的變數
    const router = useRouter(); // Vue Router 用來導航

    // 將對象轉換為列表
    function toList(obj) {
      if (!obj || typeof(obj) !== 'object') { 
        return [];
      } else {
        return Object.values(obj);
      }
    }

    // 根據經緯度欄位返回位置
    function countLatLng(h) {
      if (!h.latlngColumn) { return {lat: 0, lng: 0}; }
      const [lat, lng] = h.latlngColumn.split(',').map(Number);
      return {lat, lng};
    }

    // 獲取圖標 URL
    function getIcon(h) {
      if (h && h.photoURL) {
        return h.photoURL;
      } else {
        return 'https://www.moedict.tw/' + h.name + '.png';
      }
    }

    // 創建 Leaflet 的圖標
    function getAnIcon(h) {
      return L.icon({
        iconUrl: getIcon(h),
        shadowUrl: '',
        iconSize: [50, 50],
        shadowSize: [0, 0],
        iconAnchor: [25, 25],
        shadowAnchor: [0, 0],
        popupAnchor: [0, 0]
      });
    }

    // 當組件掛載時初始化地圖
    onMounted(() => {
      const initialZoom = props.zoom || 7;
      const initialCenter = props.center || [22.613220, 121.219482];

      // 創建地圖並設定初始視圖
      map.value = L.map('map').setView(initialCenter, initialZoom);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map.value);

      markerClusterGroup.value = L.markerClusterGroup(); // 創建標記群組

      if (map.value && markerClusterGroup.value) {
        map.value.addLayer(markerClusterGroup.value);

        // 如果有用戶數據，則添加標記到地圖
        if (props.users && toList(props.users).length > 0) {
          toList(props.users).forEach((h) => {
            const marker = L.marker(countLatLng(h), {icon: getAnIcon(h)})
              .bindPopup(h.name);
            marker.on('click', () => {
              router.push('/flag/' + h.uid);
            });
            markerClusterGroup.value.addLayer(marker);
          });
        }
      }
    });

    // 監聽用戶數據的變化
    watch(() => props.users, (newU) => {
      if (markerClusterGroup.value) {
        markerClusterGroup.value.clearLayers(); // 清除現有標記
        if (newU && toList(newU).length > 0) {
          toList(newU).forEach((h) => {
            const marker = L.marker(countLatLng(h), {icon: getAnIcon(h)})
              .bindPopup(h.name);
            marker.on('click', () => {
              router.push('/flag/' + h.uid);
            });
            markerClusterGroup.value.addLayer(marker);
          });
        }
      }
    });

    return { map, toList, countLatLng, getIcon, getAnIcon };
  }
});

</script>

<style>
.leaflet-marker-icon {
  border-radius: 50%;  
}
</style>
