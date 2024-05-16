<template lang="pug">
.hello
  loader(v-show="!users || toList(users).length == 0")
  .ui.divider
  .ui.grid
    .ui.stackable.row
      .sixteen.wide.column(style="width: 100%; height: 600px;")
        // Ensure the map is rendered only when necessary data is available
        l-map(v-if="users && toList(users).length > 0" ref="myMap", v-model:zoom="myZoom", :center="myCenter")
          l-tile-layer(:url="url", :attribution="attribution", layer-type="base", name="OpenStreetMap")
          l-marker(v-for = "(h, index) in searchBy(places, mySearch)", :key="index" , :lat-lng="countLatLng(h)", @click="$router.push({ path: '/place/' + index })", :icon="getAnIcon(h)")
            l-popup {{h.name}}
          l-marker(v-for = "(h, index) in searchBy(users, mySearch)", :key="index" , :lat-lng="countLatLng(h)", @click="$router.push({ path: '/flag/' + h.uid })", :icon="getAnIcon(h)")
            l-popup {{h.name}}
  </template>
  
  <script>
  
  import { defineComponent } from "vue";
  
  import * as L from 'leaflet';
  import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet';
  import mix from '../mixins/mix.js'
  import Loader from '../components/Loader'
  
  export default defineComponent ({
    name: 'MapsView',
    mixins: [mix],
    props: ['mySearch', 'zoom', 'center', 'cities', 'users', 'places'],
    components: {LMap, LTileLayer, LMarker, LPopup, Loader},
    metaInfo: {
      title: '地圖',
    },
    data () {
      return {
        myZoom: 7,
        myCenter: [22.613220, 121.219482],
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      }
    },
    mounted() {
      this.myZoom = this.zoom || 7,
      this.myCenter = this.center || [22.613220, 121.219482];
      // Initialize or interact with the map here if needed
    },
    methods: {
      // eslint-disable-next-line
      toList: function (obj) {
        if (!obj || typeof(obj) !== 'object') { 
          return []
        } else {
          return Object.values(obj)
        }
      },
      locateCity: function (c) {
        this.$emit('locateCity', c)
      },
      countLatLng: function (h) {
        if (!h.latlngColumn) { return {lat: 0, lng: 0} }
        return {lat: h.latlngColumn.split(',')[0], lng: h.latlngColumn.split(',')[1]}
      },
      getAnIcon: function (h) {
        return L.icon({
          iconUrl: this.getIcon(h),
          alt: h.name,
          shadowUrl: '',
          iconSize: [50, 50], // size of the icon
          shadowSize: [0, 0], // size of the shadow
          iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
          shadowAnchor: [0, 0], // the same for the shadow
          popupAnchor: [0, 0] // point from which the po
        })
      }
    }
  })
  </script>
  
  <style>
  </style>
  