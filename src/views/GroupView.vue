<template lang="pug">
.hello
  .ui.row(v-if="!uid && (!users || toList(users).length == 0)")
    .sixteen.wide.column 
      .ui.huge.buttons
        button.ui.orange.button(@click="loginGoogle")
          i.google.icon
          | {{ $t('login.login') }}
  .ui.container(v-if="users && toList(users).length > 0 && groups[$route.params.idx]")
    .ui.grid
      .ui.one.column.row(v-if="groups[$route.params.idx].n")
        .ui.column.ui.segment
          h3 〈{{groups[$route.params.idx].n}}〉
          p {{groups[$route.params.idx].intro}}
            br.thin-only
            | &nbsp;&nbsp;&nbsp;&nbsp;
            a(@click="toggleEdit($route.params.idx)" v-if="isMember(groups[$route.params.idx].idx)")
              i.edit.icon
              | {{edit ? $t('login.end') : ''}}{{ $t('group.edit_group') }}
          p
            router-link.ui.basic.green.button(to="/groups")
              i.globe.icon
              | {{$t('group.explore_groups')}}
          .ui.form(v-show="edit")
            .field(v-if="!uid")
              button.ui.orange.button(@click="loginGoogle()")
                i.google.icon
                | {{$t('login.login_first')}}
            .field
              .ui.labeled.input
                label.ui.label {{$t('group.enter_intro')}}
                input(type="text", v-model="newIntro", :placeholder="$t('group.enter_intro_first')")
            .field
              a.ui.green.button(:class="{disabled: !newIntro}", @click="addIntro($route.params.idx)")
                | {{$t('group.update_intro')}}
          .ui.grid
            .row
              p 成員：
                span(v-for="m in groups[$route.params.idx].members")
                  router-link(:to="'/flag/' + m", v-if="users[m]")
                    img.ui.avatar(:src="users[m].photoURL", alt="users[m].n")
                span(v-show="uid")
                  a.ui.green.tiny.button(v-show="!isMember(groups[$route.params.idx].idx)", @click="join(groups[$route.params.idx].idx)") {{$t('groups.join_group')}}
                  a.ui.red.tiny.button(v-show="isMember(groups[$route.params.idx].idx)", @click="out(groups[$route.params.idx].idx)") {{$t('groups.out_group')}}
            .two.column.stackable.row
              .column
                .ui.divided.list
                  .item.left.aligned {{$t('group.resources')}}
                  .item.left.aligned(v-for="(r, index) in groups[$route.params.idx].res", :key="index + r.n + r.href")
                    a(:href="r.href", target="_blank", rel="noopener noreferrer")
                      img(:src="'http://www.google.com/s2/favicons?domain=' + r.href", :alt="r.n")
                      | {{r.n}}
                  .item.ui.form(v-show="uid && edit")
                    .field
                      .ui.labeled.input
                        label.ui.label {{$t('group.enter_resource')}}
                        input(type="text", v-model="newResName", :placeholder="$t('group.enter_resource_first')")
                    .field
                      .ui.labeled.input
                        label.ui.label {{$t('group.enter_link')}}
                        input(type="text", v-model="newHref", :placeholder="$t('group.enter_link_first')")
                    .field
                      a.ui.green.button(:class="{disabled: !newHref || !newResName}", @click="addRes($route.params.idx)")
                        | {{$t('group.add_resource')}}
              .column {{ $t('login.leave_messages') }}
                .ui.divided.list
                  .item(v-for="(c, index) in latestChats" :key="index")
                    img.ui.avatar(:src="c.photoURL")    
                    | {{c.n}} : {{c.t}}
                  .item.ui.form(v-if="uid")
                    .field
                      .ui.labeled.input
                        img.ui.avatar(:src="photoURL")
                        input.input(v-model="msg" @input="filterInput('msg', $event)" :placeholder="$t('group.anything_to_say')")
                        a.ui.label.green.button(:class="{disabled: !msg}", @click="addChat($route.params.idx)") {{ $t('login.leave_messages') }}  
</template>

<script>

import { defineComponent } from 'vue';
import { onValue, set, ref } from 'firebase/database'
import { db, groupsRef } from '../firebase'

const keywords = ['放屁', '約砲', 'fuck']; //可陸續增加垃圾關鍵字

export default defineComponent({
  name: 'GroupsView',
  props: ['photoURL', 'users', 'user', 'uid', 'mySearch'],
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
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
  computed: {
    latestChats() {
      const idx = this.$route.params.idx;
      const chats = this.groups[idx]?.chats || [];
      return chats.slice(-10);
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
    toggleEdit(idx) {
      if (!this.isMember(idx)) {
        alert(this.$t('groups.edit_permission'));
        return; // 如果不是社團成員，不允許編輯並返回
      }
      this.edit = !this.edit;
      if (this.edit) {
        this.newIntro = this.groups[idx].intro; // 加載當前簡介到編輯框
      } else {
        this.newIntro = ''; // 離開編輯模式時可選擇清空編輯框
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
      this.groups[idx].members = this.groups[idx].members || []
      this.groups[idx].members = this.groups[idx].members.filter( (i) => {
        return i !== this.uid
      })
      set(ref(db, 'groups'), this.groups).then(
        //console.log('groups更新成功')
        console.log(this.$t('groups.update_sucess'))
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
        //n: this.users[this.uid].name ? this.users[this.uid].name : '匿名',
        n: this.users[this.uid].name ? this.users[this.uid].name : this.$t('login.anoymous'),
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
    addIntro(idx) {
      if (this.newIntro.trim().length) { // 確保不提交空白或只有空格的字符串
        this.groups[idx].intro = this.newIntro;
        set(ref(db, 'groups/' + idx), this.groups[idx]).then(
          //() => console.log('簡介更新成功')
          () => console.log(this.$t('login.update_sucess'))
        ).catch(error => {
          //console.error('更新失敗', error);
          console.error(this.$t('login.update_failed'), error)
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
