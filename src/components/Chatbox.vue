<template lang="pug">
.chats(v-bind:class = "{ full : isFull, mini: isMini }")
  #menu.ui.inverted.big.menu
    .item.ui.form(v-show="isFull")
      .ui.input
        input(v-model="key", placeholder="搜尋")
    .right.menu
      a.item(v-if="!isFull" @click="isFull = true; isMini = false; reCount()")
        i.comments.icon
        | {{$t('chat.gc')}}
        .red.note(v-show="fil(chats).length > read") {{ fil(chats).length - read }}
      a.item(v-if="!isMini" @click="isFull = false; isMini = true")
        i.compress.icon
        | {{$t('chat.cp')}}
  #box
    .ui.list
      .item(v-for="(c, idx) in fil(chats).slice(fil(chats).length - 5, fil(chats).length)" v-bind:key="c.t")
        p(v-show="edit !== c") 
          router-link(:to="'/flag/' + c.uid")
            img.ui.avatar(:src="c.photoURL || 'http://graph.facebook.com/' + c.uid + '/picture'", alt="^_^")
          a(@click="key = c.l" v-bind:class="c.l") [{{c.l}}]
          span.text {{ c.n }} : {{ c.t }}
          span.gray(v-show="isFull") &nbsp;&nbsp;-
            | {{ countDateDiff(c.time) }}
      .item(v-if="uid")
        .ui.form(@submit.prevent="submitChat")
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
              a.ui.green.small.button(type="submit") 留言
      .item(v-else)
        .ui.big.buttons
          button.ui.orange.button(@click="loginGoogle()")
            i.google.icon
            | 登入以留言
</template>
    
<script>
    import { defineComponent } from 'vue';
    import { onValue, set, ref } from 'firebase/database';
    import { db, chatsRef } from '../firebase';
    import mix from '../mixins/mix.ts';

    const keywords = [
      '放屁', 
      '約砲',
      '肏',
      '他媽的','幹你娘','操你媽','你老母',
      '強暴', '強姦', '強吻', 
      'fuck', 'Fuck'
    ]; //可陸續增加垃圾關鍵字
    
    export default defineComponent({
      name: 'ChatBox',
      mixins: [mix],
      props: ['uid', 'user', 'photoURL'],
      data() {
        return {
          p: '',
          msg: '',
          key: '閒聊',
          edit: '',
          chats: [],
          read: 0,
          isFull: false,
          isMini: true,
          label: '閒聊',
          labels: ['諮詢', '故障', '找伴', '閒聊']
        };
      },
      watch: {
        label (newL) {
          this.key = newL
        }
      },
      methods: {
        containsKeyword(message) {
          return keywords.some(keyword => message.includes(keyword));
        },
        submitChat() {
          if (!this.containsKeyword(this.msg)) {
            this.addChat(); // Call addChat only if the message doesn't contain any keywords
          } else {
            alert('Input contains forbidden keywords.');
          }
        },
        preview() {
          var o = {
            uid: this.uid,
            //n: this.user.providerData[0].displayName,
            n: this.user && this.user.providerData && this.user.providerData[0] ? this.user.providerData[0].displayName : this.user.name,
            t: this.msg,
            l: this.label,
            edit: false,
            photoURL: this.photoURL || '',
            time: (new Date()).getTime()
          };
          this.p = o;
        },
        addChat() {
          if (this.user && this.user.providerData) {
          // 可以安全地存取 providerData[0]
            console.log(this.user.providerData[0]);
          } else {
          // 處理 this.user 或 this.user.providerData 是 undefined 的情況
            console.error("User or providerData is undefined");
          }
          var o = {
            uid: this.uid,
            //n: this.user.providerData[0].displayName,
            //n: this.user && this.user.providerData && this.user.providerData[0] ? this.user.providerData[0].displayName : 'Anonymous',
            //很多人的displayname是undefined，所以改成這樣
            n: this.user && this.user.providerData && this.user.providerData[0] ? this.user.providerData[0].displayName : this.user.name,
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
        padding: 1em; /* 增加內邊距，特別是垂直方向的內邊距 */
        overflow-y: auto; /* 允許垂直方向滾動 */
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
          height: 25vh; /* 稍微增加最小狀態的高度，讓更多內容顯示 */
        }

        .chats.full {
          height: 80vh; /* 確保在全屏模式下有足夠的顯示高度 */
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
    
      p {
        font-size: 14px !important;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        max-height: none;
        overflow-y: auto;
        padding: 1em;
      }
    
      p .text {
        position: relative;
        top: .5em;
      }
    
      p a {
        min-width: 3em;
        padding: .2em;
        border-radius: 3px;
      }
</style>
    