<template lang="pug">
.hello
  .ui.container(v-if="users && toList(users).length > 0 && groups[$route.params.idx]")
    .ui.grid
      .ui.one.column.row(v-if="groups[$route.params.idx].n")
        .ui.column.ui.segment
          h3 〈{{groups[$route.params.idx].n}}〉
          p {{groups[$route.params.idx].intro}}
            br.thin-only
            | &nbsp;&nbsp;&nbsp;&nbsp;
            a(@click="toggleEdit($route.params.idx)")
              i.edit.icon
              | {{edit ? '結束' : ''}}編輯社團資料
          p
            router-link.ui.basic.green.button(to="/groups")
              i.globe.icon
              | 探索所有社團
          .ui.form(v-show="edit")
            .field(v-if="!uid")
              button.ui.orange.button(@click="loginGoogle()")
                i.google.icon
                | 請先登入
            .field
              .ui.labeled.input
                label.ui.label 輸入社團簡介  
                input(type="text", v-model="newIntro", placeholder="請先輸入社團簡介")
            .field
              a.ui.green.button(:class="{disabled: !newIntro}", @click="addIntro($route.params.idx)")
                | 更新簡介
          .ui.grid
            .row
              p 成員：
                span(v-for="m in groups[$route.params.idx].members")
                  router-link(:to="'/flag/' + m", v-if="users[m]")
                    img.ui.avatar(:src="users[m].photoURL", alt="users[m].n")
                span(v-show="uid")
                  a.ui.green.tiny.button(v-show="!isMember(groups[$route.params.idx].idx)", @click="join(groups[$route.params.idx].idx)") 我要加入
                  a.ui.red.tiny.button(v-show="isMember(groups[$route.params.idx].idx)", @click="out(groups[$route.params.idx].idx)") 我要退出
            .two.column.stackable.row
              .column
                .ui.divided.list
                  .item.left.aligned 資源：
                  .item.left.aligned(v-for="(r, index) in groups[$route.params.idx].res", :key="index + r.n + r.href")
                    a(:href="r.href", target="_blank", rel="noopener noreferrer")
                      img(:src="'http://www.google.com/s2/favicons?domain=' + r.href", :alt="r.n")
                      | {{r.n}}
                  .item.ui.form(v-show="uid && edit")
                    .field
                      .ui.labeled.input
                        label.ui.label 輸入資源名
                        input(type="text", v-model="newResName", placeholder="請先輸入資源名")
                    .field
                      .ui.labeled.input
                        label.ui.label 輸入資源網址
                        input(type="text", v-model="newHref", placeholder="請先輸入資源網址")
                    .field
                      a.ui.green.button(:class="{disabled: !newHref || !newResName}", @click="addRes($route.params.idx)")
                        | 新增資源
              .column 留言：
                .ui.divided.list
                  .item(v-for="(c, index) in latestChats" :key="index")
                    img.ui.avatar(:src="c.photoURL")    
                    | {{c.n}} : {{c.t}}
                  .item.ui.form(v-if="uid")
                    .field
                      .ui.labeled.input
                        img.ui.avatar(:src="photoURL")
                        input.input(v-model="msg" placeholder="在想什麼嗎?")
                        a.ui.label.green.button(:class="{disabled: !msg}", @click="addChat($route.params.idx)") 留言  
</template>

<script>

import { defineComponent } from 'vue';
import { onValue, set, ref } from 'firebase/database'
import { db, groupsRef } from '../firebase'

export default defineComponent({
  name: 'GroupsView',
  props: ['photoURL', 'users', 'user', 'uid', 'mySearch'],
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: '自學社團',
  },
  data () {
    return {
      edit: false,
      newIntro: '',
      newName: '',
      newResName: '',
      newHref: '',
      msg: '',
      groups: []
    }
  },
  computed: {
    latestChats() {
      const idx = this.$route.params.idx;
      const chats = this.groups[idx]?.chats || [];
      return chats.slice(-10);
    }
  },
  methods: {
    toggleEdit(idx) {
      this.edit = !this.edit;
      if (this.edit) {
        this.newIntro = this.groups[idx].intro; // 將當前簡介載入到編輯框
      } else {
        this.newIntro = ''; // 可選，離開編輯模式時清空編輯框
      }
    },
    toList: (obj) => {
      if (!obj || typeof(obj) !== 'object') { 
        return []
      } else {
        return Object.values(obj)
      }
    },
    loginGoogle: function () {
      this.$emit('loginGoogle')
    },
    isMember (idx) {
      return (this.groups[idx].members || []).indexOf(this.uid) > -1
    },
    join (idx) {
      this.groups[idx].members = this.groups[idx].members || []
      this.groups[idx].members.push(this.uid)
      set(ref(db, 'groups'), this.groups).then(
        console.log('groups更新成功')
      )
    },
    out (idx) {
      this.groups[idx].members = this.groups[idx].members || []
      this.groups[idx].members = this.groups[idx].members.filter( (i) => {
        return i !== this.uid
      })
      set(ref(db, 'groups'), this.groups).then(
        console.log('groups更新成功')
      )
    },
    searchBy (list, k) {
      if (!k) {
        return list
      }
      return list.filter(function (g) {
        return JSON.stringify(g).indexOf(k) > -1
      })
    },
    addChat (idx) {
      var o = {
        uid: this.uid,
        n: this.users[this.uid].name ? this.users[this.uid].name : '匿名',
        t: this.msg,
        photoURL: this.photoURL || '',
        time: (new Date()).getTime()
      }
      var chats = 
        this.groups[idx].chats ? [...this.groups[idx].chats] : []
      if (this.msg) {
        chats.push(o)
        this.msg = ''
      }
      set(ref(db, 'groups/' + idx + '/chats'), chats).then(
        console.log('groups更新成功')
      )
    },
    addGroup () {
      this.groups.push(
        { n: this.newName,
          res: [],
          chats: [],
          idx: this.groups.length
        }
      )
      this.newName = ''
      set(ref(db, 'groups'), this.groups).then(
        console.log('groups更新成功')
      )
    },
    addRes (idx) {
      this.groups[idx].res = this.groups[idx].res || []
      this.groups[idx].res.push(
        { n: this.newResName, href: this.newHref })
      this.newResName = ''
      this.newHref = ''
      set(ref(db, 'groups'), this.groups).then(
        console.log('groups更新成功')
      )
      // console.log(this.groups)
    },
    addIntro(idx) {
      if (this.newIntro.trim().length) { // 確保不提交空白或只有空格的字符串
        this.groups[idx].intro = this.newIntro;
        set(ref(db, 'groups/' + idx), this.groups[idx]).then(
          () => console.log('簡介更新成功')
        ).catch(error => {
          console.error('更新失敗', error);
        });
        this.newIntro = '';
      }
    }
  },
  mounted () {
    onValue(groupsRef, (snapshot) => {
      const data = snapshot.val()
      // console.log(data)
      this.groups = data || []
    })
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img.ui.avatar {
  position: relative;
  top: .6em;
  width: 28px; /* 調整圖片寬度 */
  height: 28px; /* 調整圖片高度 */
  border-radius: 50%; /* 圓形圖片 */
}

.ui.list {
  width: 100%;
}

.row p {
  margin-left: 2em;
}

a {
  cursor: pointer;
}
</style>
