<template lang="pug">
.hello
  .ui.row(v-if="!uid")
    .sixteen.wide.column 
      .ui.huge.buttons
        button.ui.orange.button(@click="toggleLogin")
          i.lock.icon
          | {{ $t('login.login_to_see_data') }}

  .ui.container(v-if="users && toList(users).length > 0")
    .ui.divided.list.flex-column-reverse

      .item.form(v-show="uid && users[uid]")
        br
        br
        h4 {{ $t('groups.create_group') }}
        .field
          .ui.labeled.input
            label.ui.label {{ $t('groups.group_name') }}
            input(type="text", v-model="newName" @input="filterInput('newName', $event)" :placeholder="$t('groups.enter_group_name')")
        .field.button-field
          a.ui.green.button(:class="{disabled: !newName}", @click="addGroup()")
            | {{ $t('groups.create_group') }}

      .item(v-for = "(g, idx) in searchBy(groups, mySearch)", :key="g.idx"
        , v-show = "!g.hidden")
        h3 〈{{g.n}}〉
        p {{g.intro}}
          br.thin-only
          | &nbsp;&nbsp;&nbsp;&nbsp;
        .popular-resources(v-if="getTopResources(g.res).length > 0")
          h4 {{ $t('groups.popular_resources') }}
            | (
            | Total:
            i.book.icon
            | {{ (g.res || []).length }} {{ $t('groups.resources') }}
            | )
          .ui.bulleted.list
            a.resource-link(
              v-for="resource in getTopResources(g.res)"
              :key="resource.href"
              :href="resource.href"
              target="_blank"
            )
              img.favicon(:src="getFavicon(resource.href)")
              span {{ resource.n }}
              span.likes ({{ (resource.likes || []).length }}
              i.red.heart.icon
              | )
        .members-section 
          span(style="position: relative; top: 0.6em;") {{$t('groups.members')}}
          span( v-for="m in g.members")
            router-link(:to = "'/flag/' + m", v-if="isUser(m)")
              img.ui.avatar(:src="users[m].photoURL", :alt="users[m].name")
        
        .buttons-section
          .ui.buttons
            router-link.ui.basic.green.button(:to="'/group/' + g.idx")
              i.sign-in.icon
              | {{$t('groups.go_group')}}
            a.ui.green.button(v-if="isUser(uid) && !isMember(g.idx)", @click="join(g.idx)") {{$t('groups.join_group')}}
            a.ui.red.basic.button(v-if="isUser(uid) && isMember(g.idx)", @click="out(g.idx)") {{ $t('groups.out_group') }}
        
</template>

<script>
import mix from '../mixins/mix';
import { keywords } from '../data/keywords.js';
import { defineComponent } from 'vue';
import { get, set, ref } from 'firebase/database'
import { db, groupsRef } from '../firebase'

export default defineComponent({
  mixins: [mix],
  name: 'GroupsView',
  props: {
    uid: {
      type: String,
      required: false
    },
    photoURL: {
      type: String,
      required: false
    },
    users: {
      type: Object,
      required: false,
      default: () => { return {} }
    },
    mySearch: {
      type: String,
      required: false
    }
  },
  metaInfo: {
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
  watch: {
    users(newValue) {
      // console.log('Watcher triggered:', newValue, oldValue);
      if (this.toList(newValue).length > 0) {
        this.fetchGroupData();
      }
    }
  },
  mounted () {
    // console.log('Component mounted with UID:', this.uid);
    if (this.uid) {
      this.fetchGroupData();
    }
  },
  methods: {
    fetchGroupData() {
      get(groupsRef).then((snapshot) => {
        const data = snapshot.val();
        this.groups = data || [];
        console.log('Groups data updated:', this.groups);
      }, (error) => {
        console.error('Error fetching group data:', error);
      });
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
    loginGoogle(autoredirect, keeploggedin) {
      this.$emit('loginGoogle', autoredirect, keeploggedin);
    },
    toggleLogin() {
      this.$emit('toggleLogin');
    },
    isUser(uid) {
      return uid && this.users[uid] && this.users[uid].name
    },
    isMember (idx) {
      return (this.groups[idx].members || []).indexOf(this.uid) > -1
    },
    join (idx) {
      this.groups[idx].members = this.groups[idx].members || []
      this.groups[idx].members.push(this.uid)
      set(ref(db, 'groups'), this.groups).then(
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
        n: (this.user.providerData || [ {displayName: this.$t('login.anoymous')} ])[0].displayName,
        t: this.msg,
        photoURL: this.photoURL || '',
        time: (new Date()).getTime()
      }
      this.groups[idx].chats = this.groups[idx].chats || []
      if (this.msg) {
        this.groups[idx].chats.push(o)
        this.msg = ''
      }
      set(ref(db, 'groups/' + idx), this.g).then(
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
        console.log(this.$t('groups.update_sucess'))
      )
    },
    addIntro (idx) {
      this.groups[idx].intro = this.newIntro
      this.newIntro = ''
      set(ref(db, 'groups'), this.groups).then(
        console.log(this.$t('groups.update_sucess'))
      )
    },
    getTopResources(resources) {
      if (!resources || !Array.isArray(resources)) return [];
      
      return resources
        .sort((a, b) => ((b.likes || []).length) - ((a.likes || []).length))
        .slice(0, 3);
    },
    getFavicon(url) {
      try {
        const domain = new URL(url).hostname;
        return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
      } catch (e) {
        return '';
      }
    }
  }
})
</script>

<style scoped>

html, body {
  overscroll-behavior: none;
}

.hello {
  font-family: 'Arial', sans-serif;
  color: #333;
}

.ui.segment {
  background-color: #ffffff; 
  border: 1px solid #e0e0e0; 
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); 
  border-radius: 12px; 
  padding: 20px; 
}

button.no-border {
    border: none;
  }

.ui.button.orange {
  background-color: #f39c12; /* 橙色背景 */
  color: #fff; /* 白色文字 */
}

.ui.button.orange:hover {
  background-color: #e67e22; /* 懸停時更深的橙色 */
}

.ui.button.green {
  background-color: #28a745; 
  color: #fff; 
}

.ui.button.green:hover {
  background-color: #218838; 
}

.ui.button.red {
  background-color: #dc3545; 
  color: #fff; 
}

.ui.button.red:hover {
  background-color: #c82333; 
}

.ui.labeled.input .ui.label {
  background-color: #0056b3; 
  color: #fff; 
  border-radius: 4px 0 0 4px; 
}

.ui.labeled.input input {
  border: 1px solid #ced4da; 
  border-radius: 0 4px 4px 0; 
  padding: 10px; 
}

img.ui.avatar {
  position: relative;
  top: .6em;
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

.ui.container {
  margin-top: 30px; 
}

p {
  text-align: left;
  display: flex;
  margin: 1em auto;
  font-size: 1.2em;
  color: #495057; 
  max-width: 620px;
  align-items: center;
}

a {
  cursor: pointer;
  color: #0056b3; 
  text-decoration: none; 
}

a:hover {
  color: #004494; 
  text-decoration: underline; 
}

.ui.form .field {
  margin-bottom: 20px; 
}

.ui.form .button {
}

.ui.basic.green.button {
  background-color: #e9f5ec; 
  color: #28a745; 
  border: 1px solid #28a745; 
}

.ui.basic.green.button:hover {
  background-color: #d4edda; 
}

.ui.basic.red.button {
  background-color: #f8d7da; 
  color: #dc3545; 
  border: 1px solid #dc3545; 
}

.ui.basic.red.button:hover {
  background-color: #f1b0b7; 
}

.field.button-field {
  display: flex;
  align-items: center;
}

.ui.lock.icon {
  margin-right: 8px;
}

.popular-resources {
  margin: 1em 0;
}

.resource-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin-top: 0.5em;
}

.resource-link {
  display: flex;
  align-items: center;
  padding: 0.5em 1em;
  background: #f8f9fa;
  border-radius: 4px;
  text-decoration: none;
  color: #333;
  transition: background 0.2s;
}

.resource-link:hover {
  background: #e9ecef;
  text-decoration: none;
}

.favicon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}

.likes {
  margin-left: 0.5em;
  color: #666;
}

</style>
