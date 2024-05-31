<template lang = "pug">
.hello
  p(v-if="isInApp") 本系統不支援Facebook, Line等App內部瀏覽，請用一般瀏覽器開啟，方可登入，謝謝

  p(v-show="isNew") 請先詳閱我們的
    router-link(target="_blank" to="/privacy-policy") 隱私權政策

  .ui.divider(v-if="!root.email")

  .ui.grid
    .ui.row(v-if="!uid")
      .sixteen.wide.column 
        .ui.huge.buttons
          button.ui.orange.button(@click="loginGoogle")
            i.google.icon
            | 登入
    .ui.stackable.two.column.row(v-if="!editing")
      .ten.wide.column
        .ui.fluid.card.container(v-show="!isNew && !editing")
          card(:h="root", :full="true", :book="book", @locate="locate", @addBook="addBook", @loginGoogle="loginGoogle", :uid="uid")
      .six.wide.column
        .ui.massive.green.button(v-show="uid && !editing" @click="startEdit")
          i.edit.icon
          | 按此
          span(v-if="isNew") 開始
          span(v-else) 編輯

  .ui.container(v-if="editing")
    .ui.warning.message(v-if="longTimeNoSee() > 0.25")
      .header 請立即更新
      span(v-if="longTimeNoSee() > 0.25") 您的資料已三個月未更新，請立即更新，謝謝
      // span(v-else-if="longTimeNoSee() == 1") 您的資料已一年未更新，目前已被系統隱藏，請立即更新即可恢復顯示。
    
    form#main-form.ui.form.error.warning.success(v-show="editing")
      h2.ui.header 請填表
      .sub.header
        | 為了讓人真的能找到夥伴
        br
        | 有標記紅色星號
        i.red.star
        | 的欄位為必填
      h4.ui.dividing.header 關於我
      .field
        label.required 名字
        input(type='text' v-model='root.name', placeholder='您的大名')
      .field(:class="{error: root.address && (root.latlngColumn == 'undefined,undefined' || root.latlngColumn == '36.778261,-119.4179324')}")
        label.required 概略地址
        input(v-model.trim='root.address', placeholder='地址愈詳細，別人愈好認識你的所在')

        .ui.error.message(v-if="(root.address && (root.latlngColumn == 'undefined,undefined' || root.latlngColumn == '36.778261,-119.4179324'))")
          .header 無法定位
          p 如果您有不只一個住處，請填寫一個就好，其他可寫進自我介紹中。
            br
            | 若持續無法定位，請
            a(href="https://www.google.com.tw/chrome/browser/desktop/", target="_blank") 使用Chrome瀏覽器
            | 再試一次。

        .ui.warning.message(v-if="tooDetail(root.address)")
          .header 地址太詳細了
          p 這是公開資料，最細寫到路段即可，請不要寫出門牌號碼。
      
      h4.ui.header 手動拖拉標記，移到您的概略位置
        .sub.header 經緯座標：{{root.latlngColumn}}
      #map(style="height: 300px;")
      .ui.divider
      .field
        label 網址
        .two.fields
          .field
            input(v-model='root.site', placeholder='個人網址')
            span(v-if='root.site')
              a(:href='root.site', target='_blank')
                img(:src="'https://www.google.com/s2/favicons?domain=' + root.site", title='個人網址', alt='個人網址')
                | 測試連結
          .field
            input(v-model='root.site2', placeholder='參與的社群網址')
            span(v-if='root.site2')
              a(:href='root.site2', target='_blank')
                img(:src="'https://www.google.com/s2/favicons?domain=' + root.site2", title='社群網址', alt='社群網址')
                | 測試連結

      .two.fields
        .field
          label.required 有效聯絡方式
          input(type='text' v-model='root.connect_me', placeholder='可公開的方式，如e-mail。臉書私訊不可')
        .field
          label 比較有空的時段
          input(type='text', v-model='root.freetime', placeholder='例如：週五下午和週末')
      h4.ui.dividing.header 社交資訊
      .field
        label 您的身份
        select.selectpicker(v-model='root.learner_role')
          option(value='') -- 選擇一種自學身份 --
          option(v-for="t in ['自學生', '自學家長', '獨立教育工作者', '自學家長 + 獨立教育工作者', '自學生 + 獨立教育工作者', '自學生 + 自學家長', '自學生 + 自學家長 + 獨立教育工作者']", :value="t") {{ t }}
      .field
        label 主要的自學型態
        select.selectpicker(v-model='root.learner_type')
          option(value='') -- 選擇一種自學型態 --
          option(v-for="t in ['個人', '三五好友', '團體共學', '類學校機構']", :value="t") {{ t }}
      .field(:class="{error: badAge(root.learner_birth), warning: !root.learner_birth}")
        label.required 您的出生年次(西元)
        input(type='text', v-model='root.learner_birth', placeholder='您自己的年次，如1976')
      span(v-if='root.learner_birth') 大約{{ toAge(root.learner_birth) }}歲
      .ui.warning.message(v-if="!root.learner_birth")
        .header 請填出生年份
        p 這是為了尋友用，如果您不願意填真實年份，可以增減1~2歲。
      .ui.error.message(v-if="badAge(root.learner_birth)")
        .header 無法計算年歲
        p 出生年(西元)的欄位僅能填寫數字喔
      .field
        label 孩子的出生年次(西元)，若還沒有孩子或還不需找共學夥伴可略過本項
        span
          input(v-model='root.child_birth', type='text', placeholder='最大孩子的出生年次(西元)')
          br
          span(v-if='root.child_birth') 大約{{ toAge(root.child_birth) }}歲
          .ui.divider
          span(style="margin-left: 15px;") 若您有多位孩子，請再填寫：
            br
            input(v-model='root.child_birth2', type='text', placeholder='最小孩子的出生年次(西元)')
            br
          span(v-if='root.child_birth2') 大約{{ toAge(root.child_birth2) }}歲~{{ toAge(root.child_birth) }}歲
        .ui.divider
        .three.fields
          .field
            label.required 個人興趣
            input(v-model='root.learner_habit', placeholder='個人興趣')
          .field
            label.required 可分享
            input(v-model='root.share', placeholder='知識、服務、場地設備或物資')
          .field
            label 尋找
            input(v-model='root.ask', placeholder='讓人知道可以協助你什麼?')
          .field
            label 可支付
            input(v-model='root.price', placeholder='你願意支付多少錢或換工來得到協助?')
        .field
          label.required 自我介紹
          textarea#note(v-model='root.note', rows='5', cols='30', placeholder='自我介紹很重要，請寫20字以上，謝謝')
        .ui.warning.message(v-if="root.note && root.note.length < 20")
          .header 請再寫{{ 20 - root.note.length }}字介紹您自己
          p 愈詳細別人愈能認識您，您的旗幟才好發揮作用。
        .ui.success.message(v-if="root.note && root.note.length >= 20")
          .header 謝謝您
          p 您詳細的介紹，讓人能夠更認識您。

      .warning(v-if="!isValid(root)")
        | note: 您還有
        i.red.star
        | 必填項目尚未填寫

    p(v-if="isNew") 
      input.ui.checkbox(type="checkbox", v-model="agree")
      | 我同意自學2.0的
      router-link(target="_blank" to="/privacy-policy") 隱私權政策

    .ui.vertical.buttons
      a.ui.large.blue.button(:class="{disabled: !isValid(root)}", @click="updateFlag")
        span(v-if="isNew")
          i.flag.icon
          | 升起旗幟!!
        span(v-else)
          i.flag.icon
          | 更新旗幟!!
      router-link.ui.large.green.button(v-if="!isNew", :to="'/flag/' + uid")
        i.user.icon
        | 查看專屬名片
        i.chevron.right.icon
      .ui.large.red.button(v-if="!isNew", @click="confirmDelete")
        i.delete.icon
        | 刪除旗幟
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
export default {
  name: 'MyFlag',
  mixins: [mix],
  props: ['uid', 'user', 'email', 'mySearch', 'provider', 'photoURL', 'isInApp'],
  components: { Card },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: '我的旗幟',
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
    isValid() {
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
          alert('更新成功!')
        )
      } else if (!this.agree) {
        window.alert('請先勾選「我同意自學2.0的隱私權政策」')
        return
      } else {
        console.log('new2')
        this.isNew = false
        this.editing = false
        set(ref(db, 'users/' + this.uid), this.root).then(
          alert('登錄成功!')
        )
      }
      this.$emit('locate', this.root, false)
    },
    confirmDelete() {
      if (window.confirm('確認您要退出自學2.0並刪除您的互助旗嗎？提醒您，此動作無法恢復')) {
        this.deleteFlag();
      }
    },
    deleteFlag() {
      remove(ref(db, 'users/' + this.uid)).then(
        alert('您的互助旗幟已刪除。謝謝您的使用。')
      ).catch(
        error => alert('刪除失敗: ' + error.message)
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
