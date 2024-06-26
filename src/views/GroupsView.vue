<template lang="pug">
.hello
  .ui.row(v-if="!uid && (!users || toList(users).length == 0)")
    .sixteen.wide.column 
      .ui.huge.buttons
        button.ui.orange.button(@click="loginGoogle")
          i.google.icon
          | {{ $t('login.login') }}
  .ui.container(v-if="users && toList(users).length > 0")
    .ui.grid
      .row.ui.form(v-show="uid")
        .field
          .ui.labeled.input
            label.ui.label {{ $t('groups.group_name') }}
            input(type="text", v-model="newName" @input="filterInput('newName', $event)" :placeholder="$t('groups.enter_group_name')")
        .field
          a.ui.green.button(:class="{disabled: !newName}", @click="addGroup()")
            | {{ $t('groups.create_group') }}
      .ui.two.stackable.column.row
        .ui.eight.wide.column.ui.segment(v-for = "(g, idx) in searchBy(groups, mySearch)", :key="g.idx")
          h3 〈{{g.n}}〉
          p {{g.intro}}
            br.thin-only
            | &nbsp;&nbsp;&nbsp;&nbsp;
          //  a(@click="edit = !edit")
              i.edit.icon
              | {{edit ? '結束' : ''}}編輯社團資料
          p
            .ui.buttons
              router-link.ui.basic.green.button(:to="'/group/' + g.idx")
                i.sign-in.icon
                | {{$t('groups.go_group')}}
              a.ui.green.button(v-show="uid && !isMember(g.idx)", @click="join(g.idx)") {{$t('groups.join_group')}}
              a.ui.red.basic.button(v-show="uid && isMember(g.idx)", @click="out(g.idx)") {{ $t('groups.out_group') }}
          //.ui.form(v-show="edit")
            .field(v-if="!uid")
              button.ui.orange.button(@click="loginGoogle()")
                i.google.icon
                | 請先登入
            //.field
              .ui.labeled.input
                label.ui.label 輸入社團簡介  
                input(type="text", v-model="newIntro", placeholder="請先輸入社團簡介")
            //.field
              a.ui.green.button(:class="{disabled: !newIntro}", @click="addIntro(idx)")
                | 更新簡介
          .ui.grid
            .row
              p {{$t('groups.members')}}
                span(v-for="m in g.members")
                  router-link(:to = "'/flag/' + m", v-if="users[m]")
                    img.ui.avatar(:src="users[m].photoURL", alt="users[m].n")              
              
</template>

<script>

import { keywords } from '../data/keywords.js';
import { defineComponent } from 'vue';
import { onValue, set, ref } from 'firebase/database'
import { db, groupsRef } from '../firebase'

export default defineComponent({
  name: 'GroupsView',
  props: ['photoURL', 'users', 'user', 'uid', 'mySearch'],
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    //title: '自學社團',
    title: "$t('login.auto_gp')",
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
    containsKeyword(message) {
      return keywords.some(keyword => message.includes(keyword));
    },
    filterInput(field, event) {
      if (this.containsKeyword(event.target.value)) {
        alert('Input contains forbidden keywords.');
        this[field] = '';
      } else {
        this[field] = event.target.value;
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
        //console.log('groups更新成功')
        console.log(this.$t('groups.update_sucess'))
      )
    },
    out (idx) {
      if (window.confirm(this.$t('groups.out_confirm'))) {
        this.groups[idx].members = this.groups[idx].members || []
        this.groups[idx].members = this.groups[idx].members.filter( (i) => {
          return i !== this.uid
        })
        set(ref(db, 'groups'), this.groups).then(
          //console.log('groups更新成功')
          console.log(this.$t('groups.update_sucess'))
        )
      }
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
        //n: (this.user.providerData || [ {displayName: '匿名'} ])[0].displayName,
        n: (this.user.providerData || [ {displayName: this.$t('login.anoymous')} ])[0].displayName,
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
        //console.log('groups更新成功')
        console.log(this.$t('groups.update_sucess'))
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
        //console.log('groups更新成功')
        console.log(this.$t('groups.update_sucess'))
      )
    },
    addRes (idx) {
      this.groups[idx].res = this.groups[idx].res || []
      this.groups[idx].res.push(
        { n: this.newResName, href: this.newHref })
      this.newResName = ''
      this.newHref = ''
      set(ref(db, 'groups'), this.groups).then(
        //console.log('groups更新成功')
        console.log(this.$t('groups.update_sucess'))
      )
      // console.log(this.groups)
    },
    addIntro (idx) {
      this.groups[idx].intro = this.newIntro
      this.newIntro = ''
      set(ref(db, 'groups'), this.groups).then(
        //console.log('groups更新成功')
        console.log(this.$t('groups.update_sucess'))
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
