<template lang="pug">
  .hello
    .ui.center.aligned.grid
      .sixteen.wide.column(v-if="!uid && (!users || toList(users).length == 0)")
        .ui.huge.buttons.center.aligned
          button.ui.orange.button(@click="toggleLogin")
            i.google.icon
            | {{ $t('login.login_to_see_data') }}
  
      div(v-if="users && toList(users).length > 0 && groups[$route.params.idx] && !groups[$route.params.idx].hidden")
        .ui.center.aligned.grid
          .ui.column.center.aligned(ui-if="groups[$route.params.idx].n")
            .ui.raised.segment.center.aligned(style="margin-top: 30px; max-width: 800px;")
              h3.ui.header 〈{{groups[$route.params.idx].n}}〉
              p.center.aligned {{groups[$route.params.idx].intro}}
                br.thin-only
                a(@click="toggleEdit($route.params.idx)" v-if="isMember(groups[$route.params.idx].idx)")
                  i.edit.icon
                  | {{edit ? $t('login.end') : ''}} {{ $t('group.edit_group') }}
            
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
                    textarea(v-model="newIntro" @input="filterInput('newIntro', $event)" :placeholder="$t('group.enter_intro_first')" rows="5", style="width: 100%; font-size: 18px;")
                .field
                  a.ui.green.button(:class="{disabled: !newIntro}", @click="addIntro($route.params.idx)")
                    | {{$t('group.update_intro')}}
              
              p(v-if="(groups[$route.params.idx].members || []).length === 0")
                button.ui.red.button(@click="hideGroup($route.params.idx)")
                  i.delete.icon
                  | {{ $t('group.delete_group') }}
              
              .ui.grid.center.aligned
                .row
                  p.center.aligned {{$t('group.members')}}
                    span(v-for="m in groups[$route.params.idx].members")
                      router-link(:to="'/flag/' + m", v-if="isUser(m)")
                        img.ui.avatar(:src="users[m].photoURL", :alt="users[m].n", :title="users[m].n")
                    span(v-if="uid")
                      a.ui.green.tiny.button(v-if="isUser(uid) && !isMember(groups[$route.params.idx].idx)", @click="join(groups[$route.params.idx].idx)") {{$t('groups.join_group')}}
                      a.ui.red.tiny.button(v-if="isUser(uid) && isMember(groups[$route.params.idx].idx)", @click="out(groups[$route.params.idx].idx)") {{$t('groups.out_group')}}
  
                .two.column.stackable.row
                  .column
                    .ui.divided.list.center.aligned(v-if="!edit")
                      .item.center.aligned {{$t('group.resources_sorted')}}
                      .item.center.aligned(v-for="(r, index) in sortedResources" :key="index + r.n + r.href", v-show="!r.hidden")
                        .resource-content
                          a(:href="r.href", target="_blank", rel="noopener noreferrer")
                            img(:src="'http://www.google.com/s2/favicons?domain=' + r.href", :alt="r.n")
                            | {{r.n}}
                          .filler

                        .resource-buttons
                          a.ui.blue.button(v-if="isUser(uid)" @click="likeResource($route.params.idx, r.rid)")
                            i(v-if="(r.likes || []).includes(uid)" class="heart icon")
                            i(v-else class="heart outline icon")
                            | {{(r.likes || []).length}} {{$t('group.likes')}}


                      .item.ui.form(v-show="uid")
                        .ui.form(v-show="uid")
                          .field.no-margin.no-padding
                            .ui.labeled.input
                              label.ui.label {{$t('group.enter_resource')}}
                              input(type="text", v-model="newResName" @input="filterInput('newResName', $event)" :placeholder="$t('group.enter_resource_first')")
                          .field.no-margin.no-padding
                            .ui.labeled.input
                              label.ui.label {{$t('group.enter_link')}}
                              input(type="text", v-model="newHref" @input="filterInput('newHref', $event)" :placeholder="$t('group.enter_link_first')")
                          .field.no-padding
                            a.ui.green.button(:class="{disabled: !newHref || !newResName}", @click="addRes($route.params.idx)")
                              | {{$t('group.add_resource')}}

                    .ui.divided.list.center.aligned(v-else)
                      .item.center.aligned {{$t('group.resources')}}

                      .item.left.aligned(v-for="(r, index) in groups[$route.params.idx].res" :key="index + r.n + r.href", v-show="!r.hidden")
                          // 編輯模式下顯示的輸入框
                          .resource-content
                          a(@click="toggleEditResource(r, index)")
                            img(:src="'http://www.google.com/s2/favicons?domain=' + r.href", :alt="r.n")
                            | {{r.n}}

                          div(v-if="edit && editResourceIndex === index")
                            .ui.labeled.input
                              label.ui.label {{$t('group.enter_resource')}}
                              input(type="text", v-model="tempResource.n", style="width: 100%; font-size: 20px; padding: 15px;")

                            .ui.labeled.input
                              label.ui.label {{$t('group.enter_link')}}
                              input(type="text", v-model="tempResource.href", :placeholder="$t('group.enter_link_first')", style="width: 100%; font-size: 20px; padding: 15px;")

                            a.ui.green.button(@click="saveResource($route.params.idx)") {{ $t('group.save') }}
                            a.ui.red.button(@click="edit = false") {{ $t('group.cancel') }}



                  
                  .column.center.aligned(v-show="!edit") {{ $t('login.leave_messages') }}
                    .ui.divided.list.left.aligned
                      .item(v-for="(c, index) in latestChats" :key="index")
                        img.ui.avatar(:src="c.photoURL")    
                        | {{c.n}} : {{c.t}}
                      .item.ui.form(v-if="isMember(groups[$route.params.idx].idx)")
                        .field
                          .ui.labeled.input
                            img.ui.avatar(:src="photoURL")
                            //- input.input(v-model="msg" @input="filterInput('msg', $event)" :placeholder="$t('group.anything_to_say')" style="font-size: 18px; padding: 10px;")
                            //- a.ui.label.green.button(:class="{disabled: !msg}", @click="addChat($route.params.idx)") {{ $t('login.leave_messages') }}

                            textarea(v-model="msg" @input="filterInput('msg', $event)" :placeholder="$t('group.anything_to_say')" rows="3" style="font-size: 18px; padding: 10px;")
                            a.ui.label.green.button(:class="{disabled: !msg}", @click="addChat($route.params.idx)") {{ $t('login.leave_messages') }}

</template>

  
    

<script>
import mix from '../mixins/mix';
import { keywords } from '../data/keywords.js';
import { defineComponent } from 'vue';
import { onValue, set, push, ref } from 'firebase/database'
import { db, groupsRef } from '../firebase'

export default defineComponent({
  name: 'GroupsView',
  props: ['photoURL', 'users', 'user', 'uid', 'mySearch'],
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "$t('login.auto_gp')",
  },
  mixins: [mix],
  data () {
    return {
      edit: false,
      newIntro: '',
      newName: '',
      newResName: '',
      newHref: '',
      msg: '',
      groups: [],
      editResourceIndex: Infinity,
      tempResource: {} // 用來暫存編輯的資源資料
    }
  },
  computed: {
    latestChats() {
      const idx = this.$route.params.idx;
      const chats = this.groups[idx]?.chats || [];
      return chats.slice(-10);
    },
    // 排序資源，推薦數多的放在上面
    sortedResources() {
      const idx = this.$route.params.idx;
      return (this.groups[idx]?.res || []).map((r, rid) => {
        let ans = {...r};
        ans.rid = rid;
        return ans;
      }).filter((r) => {
        return !this.mySearch || r.n.indexOf(this.mySearch) > -1 || r.href.indexOf(this.mySearch) > -1 || ((r.des && r.des.indexOf(this.mySearch) > -1))
      }).sort((a, b) => {
        const likesA = a.likes ? a.likes.length : 0;
        const likesB = b.likes ? b.likes.length : 0;
        return likesB - likesA;
      });
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
    loginGoogle(autoredirect, keeploggedin) {
      this.$emit('loginGoogle', autoredirect, keeploggedin);
    },
    toggleLogin() {
      this.$emit('toggleLogin');
    },
    isUser(uid) {
      return uid && this.users[uid] && this.users[uid].note
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
    likeResource(idx, resIndex) {
      // 檢查該資源是否已經存在推薦人列表
      const likes = this.groups[idx].res[resIndex].likes || [];
      const userHasLiked = likes.includes(this.uid);

      if (userHasLiked) {
        // 如果使用者已經推薦過，取消推薦
        this.groups[idx].res[resIndex].likes = likes.filter(uid => uid !== this.uid);
      } else {
        // 如果使用者尚未推薦，則將他們的 uid 加入到推薦人列表中
        this.groups[idx].res[resIndex].likes.push(this.uid);
      }

      // 將更新後的資源列表儲存到 Firebase
      set(ref(db, 'groups/' + idx + '/res/' + resIndex), this.groups[idx].res[resIndex])
        .then(() => {
          console.log(this.$t('groups.update_sucess'));
        })
        .catch(error => {
          console.error(this.$t('groups.update_failed'), error);
        });
    },
    addChat (idx) {
      if (!this.msg.trim()) { // 檢查消息是否為空白
        alert(this.$t('group.empty_message')); // 提示用戶消息不能為空
        return; // 如果是空白，則返回
      }
      var o = {
        uid: this.uid,
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
      ).catch(error => {
        console.error(this.$t('groups.update_failed'), error)
      })

      const members = this.groups[idx].members || []
      members.forEach((uid) => {
        if (uid !== this.uid) {
          let route = '/group/' + idx;
          this.addNotificationByUid(uid, '在社團「' + this.groups[idx].n + '」有新留言', route)
        }
      })
    },
    addRes (idx) {
      this.groups[idx].res = this.groups[idx].res || []
      this.groups[idx].res.push(
        { 
          n: this.newResName,
          href: this.newHref,
          likes: [this.uid]
        })
      this.newResName = ''
      this.newHref = ''
      set(ref(db, 'groups/' + idx + '/res'), this.groups[idx].res).then(
        //console.log('groups更新成功')
        console.log(this.$t('groups.update_sucess'))
      )
      const members = this.groups[idx].members || []
      members.forEach((uid) => {
        if (uid !== this.uid) {
          let route = '/group/' + idx;
          this.addNotificationByUid(uid, '在社團「' + this.groups[idx].n + '」有新增社團資源', route)
        }
      })
      // console.log(this.groups)
    },
    hideResource(idx, resIndex) {
      // 設定該資源的 hidden 為 true
      this.groups[idx].res[resIndex].hidden = true;
      set(ref(db, 'groups/' + idx + '/res/' + resIndex + '/hidden'), true)
        .then(() => {
          console.log(this.$t('groups.update_sucess'));
        })
        .catch(error => {
          console.error(this.$t('groups.update_failed'), error);
        });
    },
    showResource(idx, resIndex) {
        // 設定該資源的 hidden 為 false
        this.groups[idx].res[resIndex].hidden = false;
        set(ref(db, 'groups/' + idx + '/res/' + resIndex + '/hidden'), false)
          .then(() => {
            console.log(this.$t('groups.update_sucess'));
          })
          .catch(error => {
            console.error(this.$t('groups.update_failed'), error);
          });
      },
      toggleEditResource (resource, index) {
      // 複製要編輯的資源到暫存區，避免直接修改資料源
      this.tempResource = JSON.parse(JSON.stringify(resource)); // 深拷貝
      this.editResourceIndex = index;
      this.edit = true;
    },
    saveResource (idx) {
      // 保存編輯結果到 groups 中
      this.groups[idx].res[this.editResourceIndex] = {...this.tempResource};
      set(ref(db, 'groups/' + idx + '/res/' + this.editResourceIndex), this.groups[idx].res[this.editResourceIndex])
        .then(() => {
          console.log(this.$t('groups.update_sucess'));
          this.editResourceIndex = Infinity;
        })
        .catch(error => {
          console.error(this.$t('groups.update_failed'), error);
        });
      this.edit = false; // 編輯完成，退出編輯模式
    },
    addNotificationByUid(uid, text, route) {
      const notification = {
        date: (new Date()).toISOString(),
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
<style scoped>html, body {
  overscroll-behavior: none;
  font-family: 'Roboto', sans-serif;
  text-align: center;
}

.hello {
  color: #333;
}

.ui.container {
  margin-top: 40px;
}

.ui.segment {
  background-color: #f7f8fa;
  border: 1px solid #dee2e6;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 30px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.ui.button.orange {
  background-color: #f39c12;
  color: #fff;
  font-weight: bold;
}

.ui.button.orange:hover {
  background-color: #e67e22;
  transform: translateY(-2px);
  transition: all 0.3s ease;
}

.ui.button.green {
  background-color: #28a745;
  color: #fff;
}

.ui.button.green:hover {
  background-color: #218838;
  transform: translateY(-2px);
  transition: all 0.3s ease;
}

.ui.button.red {
  background-color: #dc3545;
  color: #fff;
}

.ui.button.red:hover {
  background-color: #c82333;
  transform: translateY(-2px);
  transition: all 0.3s ease;
}

/* 增加輸入欄位的大小及視覺效果 */
.ui.labeled.input {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 15px;
}

.ui.labeled.input .ui.label {
  background-color: #0056b3;
  color: #fff;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px 5px 0 0;
  margin-bottom: 0;
}

.ui.labeled.input input,
.ui.labeled.input textarea {
  border: 1px solid #ced4da;
  border-radius: 0 0 5px 5px;
  padding: 10px;
  font-size: 16px;
  width: 100%;
}

@media (min-width: 768px) {
  .ui.labeled.input {
    flex-direction: row;
  }

  .ui.labeled.input .ui.label {
    border-radius: 5px 0 0 5px;
    margin-bottom: 0;
    width: 30%;
  }

  .ui.labeled.input input,
  .ui.labeled.input textarea {
    border-radius: 0 5px 5px 0;
    width: 70%;
  }
}

/* 添加这个类来控制输入字段的最大宽度 */
.input-container {
  max-width: 600px;
  margin: 0 auto;
}

textarea {
  padding: 15px;
  border: 1px solid #ced4da;
  border-radius: 8px;
  font-size: 20px;
  width: 100%;
}

img.ui.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #e9ecef;
}

.ui.divided.list .item {
  padding: 15px 0;
  border-bottom: 1px solid #dee2e6;
}

.ui.divided.list .item:last-child {
  border-bottom: none;
}

.resource-content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.resource-buttons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
}

a {
  color: #0056b3;
  text-decoration: underline;
}

a:hover {
  color: #004494;
}
</style>