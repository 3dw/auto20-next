<template lang="pug">
  .hello
    router-link(v-if="clickable" :to="'/flag/'+ (h.uid || h.idx)")
      .image
        h3.ui.header
          img.main(:src='getIcon(h)' alt='^_^')
          | {{h.name}}
          span(v-if="h.learner_birth")
            | -
            span(v-html='toAge(h.learner_birth)')
            | 歲
          span(v-if="h.child_birth") (孩子約
          span(v-if="h.child_birth2") {{toAge(h.child_birth2)}} ~
          span(v-if="h.child_birth") {{toAge(h.child_birth)}} 歲)
      .content
        p.description.gray 
          span(v-html="highlight(h.address, mySearch)")
          |&nbsp;&nbsp; - {{countDateDiff(h.lastUpdate)}}已更新
        p.description(v-if="h.learner_habit" v-html="'興趣： ' + highlight(h.learner_habit, mySearch)")
        p.description(v-if="h.share" v-html="'可分享： ' + highlight(h.share, mySearch)")
        p.description(v-if="h.ask" v-html="'尋找： ' + highlight(h.ask, mySearch)")
        p.description(v-if="h.price" v-html="'可支付： ' + highlight(h.price, mySearch)")
      .content(v-if="h.connect_me && full")
        .ui.divider
        p.description(v-if="isEmail(h.connect_me)") 可點擊的email連絡方式： 
          a(@click.stop="gotoMail(h.connect_me)") {{h.connect_me}}
        p.description(v-else) 連絡方式： {{h.connect_me}}
        p.description(v-if="h.freetime") 有空時間： {{h.freetime}}
      .content
        .ui.divider
        p(v-if="h.site")
          a(@click.stop="goto(h.site)") 個人網址：
            img(:src="'https://www.google.com/s2/favicons?domain=' + h.site" title='個人網址' alt='個人網址')
            i.right.arrow.icon
        p(v-if="h.site2")
          a(@click.stop="goto(h.site2)") 社群網址：
            img(:src="'https://www.google.com/s2/favicons?domain=' + h.site2" title='社群網址' alt='個人網址')
            i.right.arrow.icon
      .content
        .ui.divider
        p.description(v-if="!full")
          span.text(v-html="highlight(part(h.note), mySearch) + '...'")
          br
        p.description(v-else)
          span.text(v-html="highlight(h.note, mySearch)")
          br
  
    div(v-else, :to="'/flag/'+ (h.uid || h.idx)")
      .image
        h3.ui.header
          img.main(:src='getIcon(h)' alt='^_^')
          | {{h.name}}
          span(v-if="h.learner_birth")
            | -
            span(v-html='toAge(h.learner_birth)')
            | 歲
          span(v-if="h.child_birth") (孩子約
          span(v-if="h.child_birth2") {{toAge(h.child_birth2)}} ~
          span(v-if="h.child_birth") {{toAge(h.child_birth)}} 歲)
      .content
        p.description.gray 
          span(v-html="highlight(h.address, mySearch)")
          |&nbsp;&nbsp; - {{countDateDiff(h.lastUpdate)}}已更新
        p.description(v-if="h.learner_habit" v-html="'興趣： ' + highlight(h.learner_habit, mySearch)")
        p.description(v-if="h.share" v-html="'可分享： ' + highlight(h.share, mySearch)")
        p.description(v-if="h.ask" v-html="'尋找： ' + highlight(h.ask, mySearch)")
        p.description(v-if="h.price" v-html="'可支付： ' + highlight(h.price, mySearch)")
      .content(v-if="h.connect_me && full")
        .ui.divider
        p.description(v-if="isEmail(h.connect_me)") 可點擊的email連絡方式： 
          a(@click.stop="gotoMail(h.connect_me)") {{h.connect_me}}
        p.description(v-else) 連絡方式： {{h.connect_me}}
        p.description(v-if="h.freetime") 有空時間： {{h.freetime}}
      .content
        .ui.divider
        p(v-if="h.site")
          a(@click.stop="goto(h.site)") 個人網址：
            img(:src="'https://www.google.com/s2/favicons?domain=' + h.site" title='個人網址' alt='個人網址')
            i.right.arrow.icon
        p(v-if="h.site2")
          a(@click.stop="goto(h.site2)") 社群網址：
            img(:src="'https://www.google.com/s2/favicons?domain=' + h.site2" title='社群網址' alt='個人網址')
            i.right.arrow.icon
      .content
        .ui.divider
        p.description(v-if="!full")
          span.text(v-html="highlight(part(h.note), mySearch) + '...'")
          br
        p.description(v-else)
          span.text(v-html="highlight(h.note, mySearch)")
          br
  .filler
  .ui.bottom.attached.stackable.buttons(:class="{vertical: !full || thin}")
    .ui.green.button(@click="addBook(h.uid || h.idx)" v-if="uid && (!book || book.indexOf(h.uid || h.idx) == -1)")
      i.book.icon
      | 登入名簿
    .ui.red.button(@click="removeBook(book.indexOf(h.uid || h.idx))" v-else-if = "uid && book && book.indexOf(h.uid || h.idx) > -1")
      i.book.icon
      | 從名簿移除
    .ui.purple.button(@click="locate(h, true)")
      i.map.icon
      | 地圖檢視
    .ui.blue.button(@click="copyFlagURL(h.uid)")
      i.share.square.icon
      | 分享名片
    router-link.ui.teal.button(:to="'/qr/' + h.uid")
      i.qrcode.icon
      | 顯示QR碼    
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import mix from '../mixins/mix.ts'
  
  export default defineComponent({
    name: 'NameCard',
    mixins: [mix],
    props: {
      h: {
        type: Object,
        required: true,
      },
      mySearch: {
        type: String,
        required: false,
        default: () => { 
          return ''
        }
      },
      full: {
        type: Boolean,
        required: false,
        default: () => { 
          return false
        }
      },
      uid: {
        type: String,
        required: false,
        default: () => { 
          return ''
        }
      },
      book: {
        type: Array,
        required: false,
        default: () => { 
          return []
        }
      },
      clickable: {
        type: Boolean,
        required: false,
        default: () => {
          return true
        }
      }
    },
    data () {
      return {
        thin: window.innerWidth < 720
      }
    },
    methods: {
      isEmail(s) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s);
      },
      goto(h) {
        // 檢查網址是否以 'http://' 或 'https://' 開頭
        if (!h.startsWith('http://') && !h.startsWith('https://')) {
          // 若沒有，則在前面加上 'https://'
          h = 'https://' + h;
        }
        // 使用處理後的網址打開新窗口
        window.open(h);
      },
      locate: function (h, bool) {
        console.log(h)
        this.$emit('locate', h, bool)
      },
      addBook: function (uid) {
        console.log(uid)
        this.$emit('addBook', uid)
      },
      removeBook: function (index) {
        console.log(index)
        this.$emit('removeBook', index)
      },
      gotoMail (email) {
      window.location.href = `mailto:${email}`
      },
      loginGoogle(autoredirect, keeploggedin) {
        this.$emit('loginGoogle', autoredirect, keeploggedin);
      },
      toggleLogin() {
        this.$emit('toggleLogin');
      },
      copyFlagURL (uid) {
        if (!document.hasFocus()) {
          alert("Document does not have focus, cannot copy link.");
          return;
        }
        const copyText = 'https://we.alearn.org.tw/#/flag/' + uid;
        navigator.clipboard.writeText(copyText)
          .then(() => {
            window.alert("已複製該名片");
          })
          .catch(err => {
            console.error('無法複製該名片', err);
          });
        this.$forceUpdate();
      },
    }
  })
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .hello {
    position: relative;
    z-index: 1;
    height: 100%;
    min-height: 300px;
    background-color: #ffffff; /* 白色背景 */
  }
  
  .image {
    background-color: #f0f0f0; /* 更淺的灰色背景 */
    padding: 20px; /* 內邊距 */
    border-radius: 8px; /* 圓角 */
    border: 1px solid #ddd; /* 邊框顏色 */
  }
  
  .gray {
    color: gray;
  }
  
  p {
    white-space: pre-line;
    font-size: 16px;
    text-align: left;
    padding: 0.5em 1em; /* 內邊距 */
    color: #333;
    cursor: text;
  }
  
  .ui.bottom.attached.buttons {
    position: absolute;
    bottom: 0;
    right: 1px;
    width: 100% !important;
    background-color: #f7f7f7; /* 淺灰色背景 */
    border-top: 1px solid #ddd; /* 邊框顏色 */
  }
  
  .filler {
    display: block;
    height: 200px;
    flex-grow: 1;
  }
  
  /* 卡片設計 */
  .ui.card {
    border: 1px solid #e0e0e0; /* 邊框顏色 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 陰影效果 */
    border-radius: 8px; /* 圓角 */
    padding: 20px; /* 內邊距 */
    margin-bottom: 20px; /* 底部間距 */
  }
  
  /* 按鈕設計 */
  .ui.button {
    font-size: 14px; /* 字體大小 */
    padding: 10px 15px; /* 內邊距 */
    margin-right: 10px; /* 按鈕之間的間距 */
  }
  
  .ui.green.button {
    background-color: #28a745; /* 綠色背景 */
    color: #fff; /* 白色文字 */
  }
  
  .ui.green.button:hover {
    background-color: #218838; /* 懸停時更深的綠色 */
  }
  
  .ui.red.button {
    background-color: #dc3545; /* 紅色背景 */
    color: #fff; /* 白色文字 */
  }
  
  .ui.red.button:hover {
    background-color: #c82333; /* 懸停時更深的紅色 */
  }
  
  .ui.purple.button {
    background-color: #6f42c1; /* 紫色背景 */
    color: #fff; /* 白色文字 */
  }
  
  .ui.purple.button:hover {
    background-color: #5a32a3; /* 懸停時更深的紫色 */
  }
  
  .ui.blue.button {
    background-color: #007bff; /* 藍色背景 */
    color: #fff; /* 白色文字 */
  }
  
  .ui.blue.button:hover {
    background-color: #0056b3; /* 懸停時更深的藍色 */
  }
  
  .ui.teal.button {
    background-color: #20c997; /* 青色背景 */
    color: #fff; /* 白色文字 */
  }
  
  .ui.teal.button:hover {
    background-color: #17a589; /* 懸停時更深的青色 */
  }
  </style>
  