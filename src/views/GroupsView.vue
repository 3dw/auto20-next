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

/* Scoped CSS */

.hello {
  font-family: 'Arial', sans-serif;
  color: #333;
}

.ui.segment {
  background-color: #ffffff; /* 白色背景 */
  border: 1px solid #e0e0e0; /* 淺灰色邊框 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* 較深的陰影效果 */
  border-radius: 12px; /* 更大的圓角 */
  padding: 20px; /* 內邊距 */
}

.ui.buttons .button {
  font-size: 16px; /* 字體大小 */
  padding: 12px 16px; /* 內邊距 */
  margin-right: 10px; /* 按鈕之間的間距 */
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
  border-radius: 4px 0 0 4px; /* 圓角 */
}

.ui.labeled.input input {
  border: 1px solid #ced4da; /* 邊框顏色 */
  border-radius: 0 4px 4px 0; /* 圓角 */
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
  color: #495057; /* 深灰色文字 */
}

a {
  cursor: pointer;
  color: #0056b3; /* 超連結顏色 */
  text-decoration: none; /* 去除下劃線 */
}

a:hover {
  color: #004494; /* 懸停時超連結顏色 */
  text-decoration: underline; /* 懸停時顯示下劃線 */
}

.ui.form .field {
  margin-bottom: 20px; /* 字段間距 */
}

.ui.form .button {
  margin-top: 15px; /* 按鈕頂部外邊距 */
}

.ui.basic.green.button {
  background-color: #e9f5ec; /* 淺綠色背景 */
  color: #28a745; /* 綠色文字 */
  border: 1px solid #28a745; /* 綠色邊框 */
}

.ui.basic.green.button:hover {
  background-color: #d4edda; /* 懸停時更深的淺綠色背景 */
}

.ui.basic.red.button {
  background-color: #f8d7da; /* 淺紅色背景 */
  color: #dc3545; /* 紅色文字 */
  border: 1px solid #dc3545; /* 紅色邊框 */
}

.ui.basic.red.button:hover {
  background-color: #f1b0b7; /* 懸停時更深的淺紅色背景 */
}
</style>
    