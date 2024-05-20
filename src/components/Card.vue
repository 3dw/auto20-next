<template lang="pug">
.hello
  router-link(:to="'/flag/'+h.uid")
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
      p.description(v-if="h.learner_habit && full" v-html="'興趣： ' + highlight(h.learner_habit, mySearch)")
      p.description(v-if="h.share" v-html="'可分享： ' + highlight(h.share, mySearch)")
      p.description(v-if="h.ask" v-html="'尋找： ' + highlight(h.ask, mySearch)")
      p.description(v-if="h.price" v-html="'可支付： ' + highlight(h.price, mySearch)")
    .content(v-if="h.connect_me && full")
      .ui.divider
      p.descrtpion(v-if="h.connect_me.includes('@')") 可點擊的email連絡方式： 
        //a(@click.stop="goto(h.connect_me)") {{h.connect_me}}
        a(@click.stop="gotoMail(h.connect_me)") {{h.connect_me}}
      p.descrtpion(v-else) 連絡方式： {{h.connect_me}}
      p.descrtpion(v-if="h.freetime") 有空時間： {{h.freetime}}
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
      p.descrtpion(v-if="!full")
        span.text(v-html="highlight(part(h.note), mySearch) + '...'")
      p.descrtpion(v-else)
        span.text(v-html="highlight(h.note, mySearch)")
  .filler
  .ui.bottom.attached.buttons
    .ui.green.basic.button(@click="addBook(h.uid || h.idx)" v-if="uid && (!book || book.indexOf(h.uid || h.idx) == -1)")
      i.book.icon
      | 登入名簿
    .ui.red.basic.button(@click="removeBook(book.indexOf(h.uid || h.idx))" v-else-if = "uid && book && book.indexOf(h.uid || h.idx) > -1")
      i.book.icon
      | 從名簿移除
    // router-link.ui.blue.basic.button(to="/profile" v-else)
      i.user.icon
      | 登入
    .ui.pink.basic.button(@click="locate(h, true)")
      i.map.icon
      | 地圖檢視
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
    }
  },
  data () {
    return {
    }
  },
  methods: {
    goto (h) {
      window.open(h)
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
    loginGoogle: function () {
      this.$emit('loginGoogle')
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  position: relative;
  height: 100%;
  min-height: 300px;
}

.image {
  background-color: #c9c9c9;
}

.gray {
  color: gray;
}

p {
  white-space: pre-line;
  font-size: 16px;
  text-align: left;
  padding: .6em;
}

.ui.bottom.attached.buttons {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100% !important;
}

.filler {
  height: 100px;
}

</style>
