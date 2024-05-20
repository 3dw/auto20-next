<template lang="pug">
.chats(v-bind:class = "{ full : isFull, mini: isMini }")
  #menu.ui.inverted.big.menu
    .item.ui.form(v-show="isFull")
      .ui.input
        input(v-model="key", placeholder="搜尋")
      // .ui.buttons(v-if="!user")
        button.ui.orange.button(@click="loginGoogle()")
          i.google.icon
          | 登入
    .right.menu
      a.item(v-if="!isFull" @click="isFull = true; isMini = false; reCount()")
        i.comments.icon
        | 群聊
        .red.note(v-show="fil(chats).length > read") {{ fil(chats).length - read }}
      a.item(v-if="!isMini" @click="isFull = false; isMini = true")
        i.compress.icon
        | 縮小
  #box
    .ui.list
      .item(v-for="(c, idx) in fil(chats).slice(fil(chats).length - 5, fil(chats).length)" v-bind:key="c.t")
        .ui(v-show="edit !== c") 
          router-link(:to="'/flag/' + c.uid")
            img.ui.avatar(:src="c.photoURL || 'http://graph.facebook.com/' + c.uid + '/picture'", alt="^_^")
          a(@click="key = c.l" v-bind:class="c.l") [{{c.l}}]
          a(@click="edit = c" v-show="c.uid == uid")
            i.edit.icon(title="edit")
          | {{ c.n }} : {{ c.t }}
          span.gray(v-show="isFull") &nbsp;&nbsp;-
            | {{ countDateDiff(c.time) }}
        .ui.form(v-show="edit == c")
          .ui.input
            input.input(v-model="c.t", placeholder="更新")
            a.ui.green.small.button(@click="edit = ''; updateChat(c)") 更新

      .item.preview(v-if="p.t")
        router-link(:to="'/flag/' + p.uid")
          img.ui.avatar(:src="p.photoURL || '/static/img/handshake0.png'")
        a(@click="key = p.l" v-bind:class="p.l") [{{p.l}}] (預覽)
        | {{ p.n }} : {{ p.t }}
        span.gray(v-show="isFull") &nbsp;&nbsp;-
          | {{ countDateDiff(p.time) }}
      .item(v-if="uid")
        .ui.form
          .field
            img.ui.avatar(:src="photoURL")
            input.input(v-model="msg" placeholder="在想什麼嗎?" autofocus)
          .inline.fields
            .field(v-for="l in labels")
              .ui.radio.checkbox
                input(type="radio", name="l", v-model="label", :value="l")
                label
                  a(@click="label=l" v-bind:class="l") {{ l }}
            .ui.button.group
              a.ui.blue.small.button(@click="preview") 預覽
              a.ui.green.small.button(@click="addChat") 留言
      .item(v-else)
        .ui.big.buttons(v-if="!uid")
          button.ui.orange.button(@click="loginGoogle()")
            i.google.icon
            | 登入以留言 
</template>

<script>
import { defineComponent } from 'vue';
import { onValue, set, ref } from 'firebase/database';
import { db, chatsRef } from '../firebase';
import mix from '../mixins/mix.ts';

export default defineComponent({
  name: 'ChatBox',
  mixins: [mix],
  props: ['uid', 'user', 'photoURL'],
  data() {
    return {
      p: '',
      msg: '',
      key: '',
      edit: '',
      chats: [],
      read: 0,
      isFull: false,
      isMini: true,
      label: '閒聊',
      labels: ['諮詢', '故障', '找伴', '閒聊']
    };
  },
  methods: {
    preview() {
      var o = {
        uid: this.uid,
        n: this.user.providerData[0].displayName,
        t: this.msg,
        l: this.label,
        edit: false,
        photoURL: this.photoURL || '',
        time: (new Date()).getTime()
      };
      this.p = o;
    },
    updateChat(c) {
      var o = {
        uid: c.uid,
        n: c.n,
        t: c.t,
        l: c.l,
        photoURL: c.photoURL || '',
        time: (new Date()).getTime()
      };
      this.chats[c['.key']] = o;
      set(ref(db, 'chats'), this.chats).then(
        console.log('chats更新成功')
      );
    },
    addChat() {
      var o = {
        uid: this.uid,
        n: this.user.providerData[0].displayName,
        t: this.msg,
        l: this.label,
        photoURL: this.photoURL || '',
        time: (new Date()).getTime()
      };
      if (this.msg) {
        const rid = (Math.random() + '').substr(0, 8).replace('.', '');
        this.chats[rid] = o;
        this.msg = '';
        this.p = '';
      }
      set(ref(db, 'chats'), this.chats).then(
        console.log('chats更新成功')
      );
    },
    loginGoogle() {
      this.$emit('loginGoogle');
    },
    fil(list) {
      var k = this.key;
      const ks = Object.keys(list);
      var l = [];
      for (var i = 0; i < ks.length; i++) {
        l.push(list[ks[i]]);
      }
      l = l.filter(function(o) { return (o.t + o.l).indexOf(k) > -1 || !k }).map(function(o) {
        o.edit = false; return o;
      });
      l.sort(function(a, b) {
        return a.time - b.time;
      });
      return l;
    },
    reCount() {
      this.read = this.fil(this.chats).length;
      localStorage.setItem('read', this.read);
    }
  },
  mounted() {
    onValue(chatsRef, (snapshot) => {
      const data = snapshot.val();
      this.chats = data;
    });
    this.read = localStorage.getItem('read') || 0;
    if (this.read === 'undefined') {
      this.read = 0;
    }
  }
});
</script>

<style scoped>
  .諮詢 { background-color: yellow; }
  .找伴 { background-color: lightgreen; }
  .故障 { background-color: pink; }
  .閒聊 { background-color: white; }

  .chats {
    position: fixed;
    z-index: 999999;
    bottom: 0;
    right: 0;
    width: 33vw;
    height: 33vh;
    overflow: visible;
    border: 1px solid black;
    background-color: white;
  }

  .ui.list {
    margin-top: .8em !important;
  }

  .item {
    text-align: left;
  }

  .item.preview {
    opacity: 0.86;
  }

  .chats.full {
    width: 100vw;
    height: 66vh;    
  }

  .chats.mini {
    width: 50vh;
    height: 0;    
  }

  img.ui.avatar {
    float: left;
    width: 50px;
    height: 50px;
    margin-right: .6em;
    border-radius: 50%;
  }

  .input {
    width: 60% !important;
    vertical-align: bottom !important;
  }

  @media screen and (max-width: 600px) {
    .chats {
      width: 100vw;
      height: 20vh;
    }

    .chats.full {
      width: 100vw;
      height: 80vh;    
    }

    .chats.mini {
      width: 100vw;
      height: 0;    
    }

    .input {
      width: 150px !important;
      vertical-align: bottom !important;
    }
  }

  .gray {
    color: gray;
  }

  #menu {
    position: absolute;
    top: -40px;
    left: 0;
    width: 100%;
  }

  #box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }

  .ui.list {
    position: absolute;
    top: 1em;
    left: 0;
    width: 100%;
    padding-left: 1em; 
  }

  input {
    width: 110px !important;
  }
</style>
