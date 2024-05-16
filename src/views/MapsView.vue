<template lang="pug">
  .hello
    loader(v-show="!users")
    .ui.divider
    .ui.grid
      .ui.stackable.row
        .sixteen.wide.column
          l-map(style="width: 100%; height: 600px;" ref="myMap", :zoom="zoom", :center="center")
            l-tile-layer(:url="url", :attribution="attribution")
            l-marker(v-for = "(h, index) in searchBy(places, mySearch)", :key="index" , :lat-lng="countLatLng(h)", @click="$router.push({ path: '/place/' + index })", :icon="getAnIcon(h)")
              l-popup {{h.name}}
            l-marker(v-for = "(h, index) in searchBy(users, mySearch)", :key="index" , :lat-lng="countLatLng(h)", @click="$router.push({ path: '/flag/' + h.uid })", :icon="getAnIcon(h)")
              l-popup {{h.name}}
</template>

<script>

import * as L from 'leaflet'
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'
import mix from '../mixins/mix.js'
import Loader from './Loader'

export default {
  name: 'maps',
  mixins: [mix],
  props: ['mySearch', 'zoom', 'center', 'cities', 'users', 'places'],
  components: {LMap, LTileLayer, LMarker, LPopup, Loader},
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: '地圖',
  },
  data () {
    return {
      url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
    }
  },
  methods: {
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
