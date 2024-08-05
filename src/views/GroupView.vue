<template lang="pug">
.hello
  .ui.row(v-if="!uid && (!users || toList(users).length == 0)")
    .sixteen.wide.column 
      .ui.huge.buttons
        button.ui.orange.button(@click="loginGoogle")
          i.google.icon
          | {{ $t('login.login') }}
  .ui.container(v-if="users && toList(users).length > 0 && groups[$route.params.idx] && !groups[$route.params.idx].hidden")
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
                textarea(v-model="newIntro" @input="filterInput('newIntro', $event)" :placeholder="$t('group.enter_intro_first')" rows="5" style="width: 100%")
            .field
              a.ui.green.button(:class="{disabled: !newIntro}", @click="addIntro($route.params.idx)")
                | {{$t('group.update_intro')}}
          p(v-if="(groups[$route.params.idx].members || []).length === 0")
            button.ui.red.button(@click="hideGroup($route.params.idx)")
              i.delete.icon
              | {{ $t('group.delete_group') }}
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
                        input(type="text", v-model="newResName" @input="filterInput('newResName', $event)" :placeholder="$t('group.enter_resource_first')")
                    .field
                      .ui.labeled.input
                        label.ui.label {{$t('group.enter_link')}}
                        input(type="text", v-model="newHref" @input="filterInput('newHref', $event)" :placeholder="$t('group.enter_link_first')")
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
import { keywords } from '../data/keywords.js';
import { defineComponent } from 'vue';
import { onValue, set, ref } from 'firebase/database'
import { db, groupsRef } from '../firebase'



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
    hideGroup(idx) {
      if (confirm(this.$t('group.delete_confirm'))) {
        this.groups[idx].hidden = true;
        set(ref(db, 'groups/' + idx + '/hidden'), true).then(
          console.log(this.$t('groups.update_sucess'))
        ).catch(error => {
          console.error(this.$t('groups.update_failed'), error);
        });
      }
    },
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
    loginGoogle: function (autoredirect) {
      this.$emit('loginGoogle', autoredirect)
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
      /*  
        加入通知邏輯，對每個群組的成員，發送有新消息的通知

        psudocode:
        
        const members = this.groups[idx].members || []
        members.forEach((u) => {
          let notifications = u.notifications || [];
          let route = '/group/' + idx;
          this.addNotificatoin(u.uid, '在社團' + this.groups[idx].n + '有新消息', route)
        })
      */
    },
    addNotificationByUid(uid, text, route) {
      const notification = {
        time: new Date().toISOString(),
        from: 'systemdef',
        text,
        route,
        isRead: false
      };
      //const userNotificationsRef = ref(db, 'users/' + uid + '/notifications');
      //set(userNotificationsRef, [...this.notifications, notification]).then(() => {
      //  console.log('notification created');
      //});
      const userNotificationsRef = ref(db, 'users/' + uid + '/notifications');
      push(userNotificationsRef, notification).then(() => {
        console.log('notification created');
      }).catch((error) => {
        console.error('Error creating notification:', error);
      });
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
<style scoped>/* Scoped CSS */

.hello {
  font-family: 'Arial', sans-serif;
  color: #333;
}

.ui.segment {
  background-color: #f7f8fa; /* 淺灰色背景 */
  border: 1px solid #dee2e6; /* 邊框顏色 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 陰影效果 */
  border-radius: 8px; /* 圓角 */
  padding: 20px; /* 內邊距 */
}

.ui.buttons .button {
  font-size: 18px; /* 字體大小 */
  padding: 15px 20px; /* 內邊距 */
}

.ui.button.orange {
  background-color: #f39c12; /* 橙色背景 */
  color: #fff; /* 白色文字 */
}

.ui.button.orange:hover {
  background-color: #e67e22; /* 懸停時更深的橙色 */
}

.ui.button.green {
  background-color: #28a745; /* 綠色背景 */
  color: #fff; /* 白色文字 */
}

.ui.button.green:hover {
  background-color: #218838; /* 懸停時更深的綠色 */
}

.ui.button.red {
  background-color: #dc3545; /* 紅色背景 */
  color: #fff; /* 白色文字 */
}

.ui.button.red:hover {
  background-color: #c82333; /* 懸停時更深的紅色 */
}

.ui.labeled.input .ui.label {
  background-color: #0056b3; /* 藍色標籤 */
  color: #fff; /* 白色文字 */
}

.ui.labeled.input input {
  border: 1px solid #ced4da; /* 邊框顏色 */
  border-radius: 4px; /* 圓角 */
  padding: 10px; /* 內邊距 */
}

img.ui.avatar {
  position: relative;
  top: .6em;
  width: 40px; /* 調整圖片寬度 */
  height: 40px; /* 調整圖片高度 */
  border-radius: 50%; /* 圓形圖片 */
  border: 2px solid #e9ecef; /* 添加邊框 */
}

.ui.divided.list .item {
  padding: 15px 0; /* 項目間距 */
  border-bottom: 1px solid #dee2e6; /* 底部邊框 */
}

.ui.divided.list .item:last-child {
  border-bottom: none; /* 最後一個項目無底部邊框 */
}

.ui.container {
  margin-top: 30px; /* 頂部外邊距 */
}

p {
  margin-left: 2em;
}

a {
  cursor: pointer;
  color: #0056b3; /* 超連結顏色 */
  text-decoration: underline; /* 超連結下劃線 */
}

a:hover {
  color: #004494; /* 懸停時超連結顏色 */
}

.ui.form .field {
  margin-bottom: 15px; /* 字段間距 */
}

.ui.form .button {
  margin-top: 10px; /* 按鈕頂部外邊距 */
}

p {
  text-align: left;
  font-size: 16px;
  white-space: pre-line !important;
}

textarea {
  padding: 10px; /* 添加內邊距 */
  border: 1px solid #ced4da; /* 邊框顏色 */
  border-radius: 4px; /* 圓角 */
  font-size: 16px; /* 字體大小 */
}

</style>
