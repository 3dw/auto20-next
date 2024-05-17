<template lang="pug">
.hello
  loader(v-show="!users || toList(users).length == 0")
  .ui.divider
  .ui.container#map(style="width: 100%; height: 600px;")
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';  
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
//import mix from '../mixins/mix.js';
import Loader from '../components/Loader.vue';

interface UserOrPlace {
  lastUpdate?: number;
  //eslint-disable-nextline
  [key: string]: any;
}

export default defineComponent({
  name: 'MapsView',
  // mixins: [mix],
  props: ['mySearch', 'zoom', 'center', 'cities', 'users', 'places'],
  components: { Loader },
  metaInfo: {
    title: '地圖',
  },
  setup(props) {
    const map = ref<L.Map | null>(null); 
    const markerClusterGroup = ref<L.MarkerClusterGroup | null>(null); 
    const router = useRouter();

    function toList(obj: Record<string, UserOrPlace> | undefined): UserOrPlace[] {
      if (!obj || typeof(obj) !== 'object') { 
        return [];
      } else {
        return Object.values(obj);
      }
    }

    function countLatLng(h: UserOrPlace): { lat: number; lng: number } {
      if (!h.latlngColumn) { return {lat: 0, lng: 0}; }
      const [lat, lng] = h.latlngColumn.split(',').map(Number);
      return {lat, lng};
    }

    function getIcon(h: UserOrPlace): string {
      if (h && h.photoURL) {
        return h.photoURL;
      } else {
        return 'https://www.moedict.tw/' + h.name + '.png';
      }
    }

    function getAnIcon(h: UserOrPlace): L.Icon {
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

    onMounted(() => {
      const initialZoom = props.zoom || 7;
      const initialCenter = props.center || [22.613220, 121.219482];

      map.value = L.map('map').setView(initialCenter, initialZoom);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map.value);

      markerClusterGroup.value = L.markerClusterGroup();

      if (map.value && markerClusterGroup.value) {
        map.value.addLayer(markerClusterGroup.value);

        if (props.users && toList(props.users).length > 0) {
          toList(props.users).forEach((h) => {
            const marker = L.marker(countLatLng(h), {icon: getAnIcon(h)})
              .bindPopup(h.name);
            marker.on('click', () => {
              router.push('/flag/' + h.uid);
            });
            markerClusterGroup.value?.addLayer(marker);
          });
        }
      }
    });

    watch(() => props.users, (newU) => {
      if (markerClusterGroup.value) {
        markerClusterGroup.value.clearLayers();
        if (newU && toList(newU).length > 0) {
          toList(newU).forEach((h) => {
            const marker = L.marker(countLatLng(h), {icon: getAnIcon(h)})
              .bindPopup(h.name);
            marker.on('click', () => {
              router.push('/flag/' + h.uid);
            });
            markerClusterGroup.value?.addLayer(marker);
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
