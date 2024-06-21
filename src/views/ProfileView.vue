<template lang = "pug">
.hello
  p(v-if="isInApp") {{$t('login.isapp')}}

  p(v-show="isNew") {{ $t('profile.announce1') }}
    router-link(target="_blank" to="/privacy-policy") {{ $t('profile.announce2') }}
    | {{ $t('profile.announce3') }}
  .ui.divider(v-if="isNew")
  br(v-if="isNew")
  br(v-if="isNew")
  br(v-if="isNew")

  .ui.grid
    .ui.row(v-if="!uid")
      .sixteen.wide.column 
        .ui.huge.buttons
          button.ui.orange.button(@click="loginGoogle")
            i.google.icon
            | {{ $t('login.login') }}
    .ui.stackable.two.column.row(v-if="!editing")
      .ten.wide.column
        .ui.fluid.card.container(v-show="!isNew && !editing")
          card(:h="root", :full="true", :book="book", @locate="locate", @addBook="addBook", @loginGoogle="loginGoogle", :uid="uid")
      .six.wide.column
        .ui.massive.green.button(v-show="uid && !editing" @click="startEdit")
          i.edit.icon
          | {{$t('profile.push')}}
          span(v-if="isNew") {{ $t('profile.start') }}
          span(v-else) {{ $t('profile.edit') }}

  .ui.container(v-if="editing")
    .ui.warning.message(v-if="longTimeNoSee() > 0.25")
      .header {{ $t('profile.update1')}}
      span(v-if="longTimeNoSee() > 0.25") {{ $t('profile.update2') }}
      // span(v-else-if="longTimeNoSee() == 1") 您的資料已一年未更新，目前已被系統隱藏，請立即更新即可恢復顯示。
    
    form#main-form.ui.form.error.warning.success(v-show="editing")
      h2.ui.header {{ $t('profile.fillform') }}
      .sub.header
        | {{ $t('profile.form1')}}
        br
        | {{ $t('profile.form2')}}
        i.red.star
        | {{ $t('profile.form3') }}
      h4.ui.dividing.header {{$t('profile.form4')}}
      //- .field
      //-   label.required {{$t('profile.form5')}}
      //-   input(type='text' v-model='root.name', :placeholder="$t('profile.form6')")
      //- .field(:class="{error: root.address && (root.latlngColumn == 'undefined,undefined' || root.latlngColumn == '36.778261,-119.4179324')}")
      //-   label.required {{$t('profile.form7')}}
      //-   input(v-model.trim='root.address', :placeholder="$t('profile.form8')")
      
      .field
        label.required {{$t('profile.form5')}}
        input(type='text' v-model='root.name' @input="filterInput('name', $event)" :placeholder="$t('profile.form6')")
      .field(:class="{error: root.address && (root.latlngColumn == 'undefined,undefined' || root.latlngColumn == '36.778261,-119.4179324')}")
        label.required {{$t('profile.form7')}}
        input(v-model.trim='root.address' @input="filterInput('address', $event)" :placeholder="$t('profile.form8')")

        .ui.error.message(v-if="(root.address && (root.latlngColumn == 'undefined,undefined' || root.latlngColumn == '36.778261,-119.4179324'))")
          .header {{$t('profile.form9')}}
          p {{$t('profile.form10')}}
            br
            | {{$t('profile.form11')}}
            a(href="https://www.google.com.tw/chrome/browser/desktop/", target="_blank") {{$t('profile.form12')}}
            | {{$t('profile.form13')}}

        .ui.warning.message(v-if="tooDetail(root.address)")
          .header {{$t('profile.form14')}}
          p {{$t('profile.form15')}}
      
      h4.ui.header {{$t('profile.form16')}}
        .sub.header {{$t('profile.form17')}}：{{root.latlngColumn}}
      #map(style="height: 300px;")
      .ui.divider
      .field
        label {{$t('profile.form18')}}
        .two.fields
          .field
            input(v-model='root.site', @input="filterInput('site', $event)" :placeholder="$t('profile.form19')")
            span(v-if='root.site')
              a(:href='root.site', target='_blank')
                img(:src="'https://www.google.com/s2/favicons?domain=' + root.site", :title="$t('profile.form19')", :alt="$t('profile.form19')")
                | {{$t('profile.form20')}}
          .field
            input(v-model='root.site2', @input="filterInput('site2', $event)" :placeholder="$t('profile.form21')")
            span(v-if='root.site2')
              a(:href='root.site2', target='_blank')
                img(:src="'https://www.google.com/s2/favicons?domain=' + root.site2", :title="$t('profile.form22')", :alt="$t('profile.form22')")
                | {{$t('profile.form20')}}

      .two.fields
        .field
          label.required {{$t('profile.form23')}}
          input(type='text' v-model='root.connect_me', @input="filterInput('connect_me', $event)" :placeholder="$t('profile.form24')")
        .field
          label {{$t('profile.form25')}}
          input(type='text', v-model='root.freetime', @input="filterInput('freetime', $event)" :placeholder="$t('profile.form26')")
      h4.ui.dividing.header {{$t('profile.form27')}}
      .field
        label {{$t('profile.form28')}}
        select.selectpicker(v-model='root.learner_role')
          option(value='') -- {{$t('profile.form29')}} --
          option(v-for="t in [$t('profile.form30'), $t('profile.form31'), $t('profile.form32'), $t('profile.form33'), $t('profile.form34'), $t('profile.form35'), $t('profile.form36')]", :value='t') {{ t }}
      .field
        label {{ $t('profile.form37') }}
        select.selectpicker(v-model='root.learner_type')
          option(value='') -- {{ $t('profile.form38') }} --
          option(v-for="t in [$t('profile.form39'), $t('profile.form40'), $t('profile.form41'), $t('profile.form42')]", :value="t") {{ t }}
      .field(:class="{error: badAge(root.learner_birth), warning: !root.learner_birth}")
        label.required {{ $t('profile.form43') }}
        input(type='text', v-model='root.learner_birth', @input="filterInput('learner_birth', $event)" :placeholder="$t('profile.form44')")
      span(v-if='root.learner_birth') {{$t('profile.form45')}}{{ toAge(root.learner_birth) }}{{ $t('login.old') }}
      .ui.warning.message(v-if="!root.learner_birth")
        .header {{$t('profile.form46')}}
        p {{ $t('profile.form47') }}
      .ui.error.message(v-if="badAge(root.learner_birth)")
        .header {{ $t('profile.form48') }}
        p {{$t('profile.form49')}}
      .field
        label {{ $t('profile.form50') }}
        span
          input(v-model='root.child_birth' @input="filterInput('child_birth', $event)"   type='text', :placeholder="$t('profile.form51')")
          br
          span(v-if='root.child_birth') {{$t('profile.form45')}}{{ toAge(root.child_birth) }}{{ $t('login.arround') }}
          .ui.divider
          span(style="margin-left: 15px;") {{ $t('profile.form52') }}
            br
            input(v-model='root.child_birth2' @input="filterInput('child_birth2', $event)" type='text', :placeholder="$t('profile.form53')")
            br
          span(v-if='root.child_birth2') {{$t('login.arround')}}{{ toAge(root.child_birth2) }}{{$t('login.old')}}~{{ toAge(root.child_birth) }}{{ $t('login.old') }}
        .ui.divider
        .three.fields
          .field
            label.required {{ $t('profile.form54') }}
            input(v-model='root.learner_habit', @input="filterInput('learner_habit', $event)" :placeholder="$t('profile.form54')")
          .field
            label.required {{ $t('profile.form55') }}
            input(v-model='root.share', @input="filterInput('share', $event)" :placeholder="$t('profile.form56')")
          .field
            label {{ $t('profile.form57') }}
            input(v-model='root.ask', @input="filterInput('ask', $event)" :placeholder="$t('profile.form58')")
          .field
            label {{ $t('profile.form59') }}
            input(v-model='root.price', @input="filterInput('price', $event)" :placeholder="$t('profile.form60')")
        .field
          label.required {{$t('profile.form61')}}
          textarea#note(v-model='root.note', @input="filterInput('note', $event)" rows='5', cols='30', :placeholder="$t('profile.form62')")
        .ui.warning.message(v-if="root.note && root.note.length < 20")
          .header {{$t('profile.form63')}}{{ 20 - root.note.length }}{{$t('profile.form64')}}
          p {{$t('profile.form65')}}
        .ui.success.message(v-if="root.note && root.note.length >= 20")
          .header {{$t('profile.form66')}}
          p {{$t('profile.form67')}}

      .warning(v-if="!isValid(root)")
        | note: {{$t('profile.form68')}}
        i.red.star
        | {{$t('profile.form69')}}

    p(v-if="isNew") 
      input.ui.checkbox(type="checkbox", v-model="agree")
      | {{$t('profile.form70')}}
      router-link(target="_blank" to="/privacy-policy") {{$t('profile.form71')}}

    .ui.vertical.buttons
      a.ui.large.blue.button(:class="{disabled: !isValid(root)}", @click="updateFlag")
        span(v-if="isNew")
          i.flag.icon
          | {{$t('login.raise_flag')}}
        span(v-else)
          i.flag.icon
          | {{$t('login.update_flag')}}
      router-link.ui.large.green.button(v-if="!isNew", :to="'/flag/' + uid")
        i.user.icon
        | {{$t('login.check_flag')}}
        i.chevron.right.icon
      .ui.large.red.button(v-if="!isNew", @click="confirmDelete")
        i.delete.icon
        | {{$t('login.delete_flag')}}
    br
    br
    br
    br
</template>

<script>
import mix from '../mixins/mix.ts'
// import Loader from './Loader'
import Card from '../components/Card'
import { db } from '../firebase'
import { set, get, ref, remove } from 'firebase/database'
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';

const keywords = ['放屁', '約砲', 'fuck'];


export default {
  name: 'MyFlag',
  mixins: [mix],
  props: ['uid', 'user', 'email', 'mySearch', 'provider', 'photoURL', 'isInApp'],
  components: { Card },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "$t('login.fg')",
  },
  data () {
    return {    
      agree: false,
      root: {
        latlngColumn: '23.5330,121.0654' // Default to Center of Taiwan
      },
      local: {},
      map: null,
      marker: null,
      isNew: true,
      editing: false
    }
  },
  emit: ['loginGoogle', 'locate'],
  watch: {
    uid (newU) {
      if (newU) {
        this.fetchUserData()
      }
    }
  },
  methods: {
    containsKeyword(message) {
      return keywords.some(keyword => message.includes(keyword));
    },
    filterInput(field, event) {
      if (this.containsKeyword(event.target.value)) {
        alert('Input contains forbidden keywords.');
        this.root[field] = '';
      } else {
        this.root[field] = event.target.value;
      }
    },

    isValid() {
      if (!this.root.note || this.root.note.length < 20) {
        return false
      }
      // Check that all required fields are filled
      const requiredFields = [
        this.root.name,
        this.root.address,
        this.root.connect_me,
        this.root.learner_birth,
        this.root.learner_habit,
        this.root.share,
        this.root.note
      ];

      // Returns true if all required fields contain a non-empty value
      return requiredFields.every(field => field && field.trim() !== '');
    },
    startEdit () {
      this.editing = true;
      L.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/';
      setTimeout(this.initMap, 500);
      setTimeout(this.setMapAndMarker, 1000); // Ensure the map and marker are updated
      if (!this.root.email) {
        this.fetchUserData()
      }
    },
    initMap() {
      // Initialize the map
      this.map = L.map('map').setView(this.root.latlngColumn.split(','), 7);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      // Set the correct path for marker icons
      L.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/';

      // Add a draggable marker at the map center
      this.marker = L.marker(this.map.getCenter(), {draggable: true}).addTo(this.map);

      // Update root.latlngColumn when the map center changes
      //this.map.on('moveend', () => {
        //const {lat, lng} = this.map.getCenter();
        //this.marker.setLatLng({lat, lng}); // Move the marker to the new center
        //this.root.latlngColumn = `${lat.toFixed(5)},${lng.toFixed(5)}`;
        //this.$forceUpdate(); // Ensure Vue updates the data binding
      //});

      // Update map center and root.latlngColumn when marker dragging ends
      this.marker.on('dragend', () => {
        const {lat, lng} = this.marker.getLatLng();
        this.map.setView({lat, lng}); // Move the map center to the marker position
        this.root.latlngColumn = `${lat.toFixed(5)},${lng.toFixed(5)}`;
        this.$forceUpdate(); // Ensure Vue updates the data binding
      });
    },
    // Fetch user data
    fetchUserData() {
      const userRef = ref(db, 'users/' + this.uid);
      get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
          this.isNew = false
          this.root = snapshot.val();
          } else {
          console.log("No data available for user: " + this.uid);
          // Initialize with default data if needed
          this.root = {
            name: this.user.providerData[0].displayName || '新朋友',
            uid: this.uid,
            email: this.email,
            connect_me: this.email,
            photoURL: this.photoURL || '',
            latlngColumn: '23.5330,121.0654',
            note: ''
          };
          this.isNew = true
        }
      }).catch((error) => {
        console.error(error);
      });
    },
    setMapAndMarker() {
      // Logic to set map center and marker based on this.root.latlngColumn
      if (this.map && this.marker) {
        const coords = this.root.latlngColumn.split(',');
        const latLng = L.latLng(coords[0], coords[1]);
        this.map.setView(latLng, 7);
        this.marker.setLatLng(latLng);
      }
    },
    /* setMe () {
      console.log(this.users)
      const keys = Object.keys(this.users)
      this.root = this.users[this.uid] || {}
      this.root.email = this.email;
      // console.log(this.root.email)
      this.myIndex = keys.indexOf(this.uid)
      if (this.uid && this.myIndex === -1) {
        console.log('welcome to 自學2.0')
        this.myIndex = this.uid
        this.root = {
          name: this.user.providerData[0].displayName || '新朋友',
          uid: this.uid,
          email: this.email,
          connect_me: this.email,
          photoURL: this.photoURL || '',
          latlngColumn: '23.5330,121.0654',
          note: ''
        }
      }
      console.log(this.root.name)
      console.log(this.root)
      this.$forceUpdate()
    }, */
    longTimeNoSee () {
      const today =  new Date().getTime()
      // console.log((today - this.root.lastUpdate) / 1000 / 3600 / 24 / 365.25)
      return (today - this.root.lastUpdate) / 1000 / 3600 / 24 / 365.25
    },
    /* usedAddr: function (hand) {
      console.log(this.users)
      
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      var vm = this;

      const keys = Object.keys(this.users)
      const usersList = keys.map(function (k) {
        return vm.users[k]
      })
      var ans, i$, ref$, len$, h
      ans = false
      for (i$ = 0, len$ = (ref$ = usersList.filter(fn$)).length; i$ < len$; ++i$) {
        h = ref$[i$]
        if (h.latlngColumn === hand.latlngColumn) {
          ans = true
          break
        }
      }
      if (hand.latlngColumn === 'undefined,undefined' || hand.latlngColumn === '36.778261,-119.4179324') {
        ans = false
      }
      return ans
      function fn$ (o) {
        return o.name !== hand.name
      }
    }, */
    tooDetail: function (addr) {
      if (!addr) {
        return false
      }
      if (addr.match(/(號|樓|F|f)/)) {
        return true
      }
      return false
    },
    updateFlag: function () {
      this.root.lastUpdate = (new Date()).getTime()
      if (!this.isNew) {
        this.isNew = false
        this.editing = false
        set(ref(db, 'users/' + this.uid), this.root).then(
          //alert('更新成功!')
          alert(this.$t('login.update_sucess'))
        )
      } else if (!this.agree) {
        //window.alert('請先勾選「我同意自學2.0的隱私權政策」')
        window.alert(this.$t('login.agree_pr'))
        return
      } else {
        console.log('new2')
        this.isNew = false
        this.editing = false
        set(ref(db, 'users/' + this.uid), this.root).then(
          //alert('登錄成功!')
          alert(this.$t('login.fg'))
        )
      }
      this.$emit('locate', this.root, false)
    },
    confirmDelete() {
      if (window.confirm(this.$t('login.delete_confirm2'))) {
      //if (window.confirm($t('login.delete_confirm2'))) {
        this.deleteFlag();
      }
    },
    deleteFlag() {
      remove(ref(db, 'users/' + this.uid)).then(
        //alert('您的互助旗幟已刪除。謝謝您的使用。')
        alert(this.$t('login.delete_confirm3'))
      ).catch(
        //error => alert('刪除失敗: ' + error.message)
        error => alert(this.$t('login.delete_failed') + error.message)
      );
      this.root = {};
      this.$emit('logout')
    },
    loginFB: function () {
      this.$emit('loginFB')
    },
    locate: function (h, bool) {
      this.$emit('locate', h, bool)
    },
    addBook: function (uid) {
      console.log(uid)
      this.$emit('addBook', uid)
    },
    loginGoogle: function () {
      this.$emit('loginGoogle')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

label.required::before {
  content: "*";
  color:red;
}

i.red.star::before{
  content: "*";
  color:red;    
}

.ui.checkbox {
  top: 3px;
}

</style>
