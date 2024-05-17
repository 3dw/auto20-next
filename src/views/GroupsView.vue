<template lang="pug">
.hello
  .ui.container(v-if="users && toList(users).length > 0")
    .ui.grid
      .row.ui.form(v-show="uid")
        .field
          .ui.labeled.input
            label.ui.label 輸入名字
            input(type="text", v-model="newName", placeholder="請先輸入社團名")
        .field
          a.ui.green.button(:class="{disabled: !newName}", @click="addGroup()")
            | 創建社團
      .ui.two.column.row
        .ui.column.ui.segment(v-for = "(g, idx) in searchBy(groups, mySearch)", :key="g.idx")
          h3 〈{{g.n}}〉
          p {{g.intro}}
            br.thin-only
            | &nbsp;&nbsp;&nbsp;&nbsp;
            a(@click="edit = !edit")
              i.edit.icon
              | {{edit ? '結束' : ''}}編輯社團資料
          p
            router-link.ui.basic.green.button(:to="'/group/' + g.idx")
              i.sign-in.icon
              | 前往社團
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
              a.ui.green.button(:class="{disabled: !newIntro}", @click="addIntro(idx)")
                | 更新簡介
          .ui.grid
            .row
              p 成員：
                span(v-for="m in g.members")
                  router-link(:to = "'/flag/' + m", v-if="users[m]")
                    img.ui.avatar(:src="users[m].photoURL", alt="users[m].n")
                span(v-show="uid")
                  a.ui.green.tiny.button(v-show="!isMember(g.idx)", @click="join(g.idx)") 我要加入
                  a.ui.red.tiny.button(v-show="isMember(g.idx)", @click="out(g.idx)") 我要退出
            .two.column.stackable.row
              .column
                .ui.divided.list
                  .item.left.aligned 資源
                  .item.left.aligned(v-for = "(r, index) in g.res", :key="index + r.n + r.href")
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
                      a.ui.green.button(:class="{disabled: !newHref || !newResName}", @click="addRes(idx)")
                        | 新增資源
              .column
                .ui.divided.list
                  .item(v-for = "(c, index) in g.chats", :key="index")
                    | {{c.n}} : {{c.t}}
                  .item.ui.form(v-if="uid && edit")
                    .field
                      img.ui.avatar(:src="photoURL")
                      .ui.labeled.input
                        input.input(v-model="msg" placeholder="在想什麼嗎?")
                        a.ui.label.green.button(:class="{disabled: !msg}", @click="addChat(idx)") 留言
                
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
  methods: {
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
        n: (this.user.providerData || [ {displayName: '匿名'} ])[0].displayName,
        t: this.msg,
        photoURL: this.photoURL || '',
        time: (new Date()).getTime()
      }
      this.groups[idx].chats = 
        this.groups[idx].chats || []
      if (this.msg) {
        this.groups[idx].chats.push(o)
        this.msg = ''
      }
      set(ref(db, 'groups/' + idx), this.g).then(
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
    addIntro (idx) {
      this.groups[idx].intro = this.newIntro
      this.newIntro = ''
      set(ref(db, 'groups'), this.groups).then(
        console.log('groups更新成功')
      )
      // console.log(this.groups)
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
  top: 8px;
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
</style>
