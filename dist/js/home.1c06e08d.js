"use strict";(self["webpackChunkauto20_next"]=self["webpackChunkauto20_next"]||[]).push([[962],{2119:function(e,o,t){t.d(o,{A:function(){return g}});var s=t(6768),i=t(4232);const l={class:"hello"},n={class:"ui active inverted dimmer"},a={class:"ui big text loader"};function r(e,o,t,r,d,u){return(0,s.uX)(),(0,s.CE)("div",l,[(0,s.Lk)("div",n,[(0,s.Lk)("div",a,[(0,s.Lk)("b",null,(0,i.v_)(e.myHint),1)])])])}var d=(0,s.pM)({name:"LoaderComponent",data(){return{hints:["歡迎所有願意分享互助的朋友參與。","地圖的左上角有 + , - 鍵可以放大和縮小。","登入平台時，請拖曳地圖上的標記到正確位置。","「分享」和「尋找」之間可以相互配對。","地圖介面讓您能夠根據地理位置就近尋找夥伴。","請不要在互助旗上放置過於完整的個人資訊。","建立自己的名簿，方便下次查找特定的朋友。","Andriod手機上點選「安裝應用程式」可以安裝自學2.0","iOS手機上點選「新增至主畫面」可以安裝自學2.0"],myHint:"地圖介面讓您能夠根據地理位置就近尋找夥伴。"}},mounted(){this.myHint=this.hints[Math.floor(Math.random()*this.hints.length)]},methods:{}}),u=t(1241);const c=(0,u.A)(d,[["render",r],["__scopeId","data-v-afe07500"]]);var g=c},7182:function(e,o,t){t.r(o),t.d(o,{default:function(){return j}});var s=t(6768),i=t(1501);const l=e=>((0,s.Qi)("data-v-13084820"),e=e(),(0,s.jt)(),e),n={class:"home"},a=l((()=>(0,s.Lk)("img",{id:"main-img",src:i,alt:"互助互惠"},null,-1))),r={class:"flex justify-center"},d={class:"w-full max-w-[400px]",ref:"canvas",width:"400",height:"400"};function u(e,o,t,i,l,u){const c=(0,s.g2)("HelloWorld");return(0,s.uX)(),(0,s.CE)("div",n,[a,(0,s.bF)(c,{uid:e.uid,users:e.users,places:e.places,book:e.book,isInApp:e.isInApp,onAddBook:e.addBook,onLocate:e.locate,onRemoveBook:e.removeBook,onLoginGoogle:e.loginGoogle,onToggleLogin:e.toggleLogin},null,8,["uid","users","places","book","isInApp","onAddBook","onLocate","onRemoveBook","onLoginGoogle","onToggleLogin"]),(0,s.Lk)("div",r,[(0,s.Lk)("canvas",d,null,512)])])}var c=t(144),g=t(4232);const h=e=>((0,s.Qi)("data-v-6b25c468"),e=e(),(0,s.jt)(),e),p={class:"hello"},f={class:"ui header"},m=h((()=>(0,s.Lk)("br",null,null,-1))),k={class:"ui huge buttons"},L=h((()=>(0,s.Lk)("div",{class:"or"},null,-1))),v={key:0};function b(e,o,t,i,l,n){const a=(0,s.g2)("router-link"),r=(0,s.g2)("loader");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",p,[(0,s.Lk)("h4",f,(0,g.v_)(e.$t("login.hd")),1)]),m,(0,s.Lk)("div",k,[e.user&&e.user.uid?((0,s.uX)(),(0,s.Wv)(a,{key:1,class:"ui blue button",to:"/profile"},{default:(0,s.k6)((()=>[(0,s.eW)((0,g.v_)(e.$t("login.go_flag")),1)])),_:1})):((0,s.uX)(),(0,s.CE)("button",{key:0,class:(0,g.C4)(["ui basic orange button",{disabled:e.isInApp}]),onClick:o[0]||(o[0]=(...o)=>e.toggleLogin&&e.toggleLogin(...o))},(0,g.v_)(e.$t("login.login")),3)),L,(0,s.bF)(a,{class:"ui blue button",to:"/about"},{default:(0,s.k6)((()=>[(0,s.eW)((0,g.v_)(e.$t("login.lm")),1)])),_:1})]),e.isInApp?((0,s.uX)(),(0,s.CE)("p",v,"本系統不支援facebook, line等app內部瀏覽，請用一般瀏覽器開啟，方可登入，謝謝")):(0,s.Q3)("",!0),e.uid&&0==e.toList(e.users).length?((0,s.uX)(),(0,s.Wv)(r,{key:1})):(0,s.Q3)("",!0)],64)}var y=t(1138),B=t(2119),A=(0,s.pM)({name:"HelloWorld",components:{Card:y.A,Loader:B.A},props:{uid:{type:String,required:!1,default:""},user:{type:Object,required:!1,default:()=>({})},users:{type:Object,required:!1,default:()=>({})},places:{type:Object,required:!1,default:()=>({})},book:{type:Array,required:!1,default:()=>[]},mySearch:{type:String,required:!1,default:""},isInApp:{type:Boolean,required:!0}},data(){return{logic:"random",shuffledList:[],newestList:[]}},emits:["addBook","removeBook","locate","loginGoogle","toggleLogin"],computed:{ordered_list(){return"random"===this.logic?this.shuffledList:this.newestList}},watch:{logic(e){"random"===e?this.shuffleList():"newest"===e&&this.sortByNewest()},users:{handler(){this.shuffleList(),this.sortByNewest()},deep:!0},places:{handler(){this.shuffleList(),this.sortByNewest()},deep:!0}},mounted(){this.shuffleList(),this.sortByNewest()},methods:{toList(e){return e&&"object"===typeof e?Object.values(e):[]},shuffleList(){const e=this.toList(this.users).concat(this.toList(this.places));for(let o=e.length-1;o>0;o--){const t=Math.floor(Math.random()*(o+1));[e[o],e[t]]=[e[t],e[o]]}this.shuffledList=e},sortByNewest(){const e=this.toList(this.users).slice().sort(((e,o)=>!o.lastUpdate||isNaN(o.lastUpdate)?-1:o.lastUpdate-e.lastUpdate));this.newestList=e},addBook(e){console.log(e),this.$emit("addBook",e)},removeBook(e){console.log(e),this.$emit("removeBook",e)},locate(e,o){this.$emit("locate",e,o)},loginGoogle(e,o){this.$emit("loginGoogle",e,o)},toggleLogin(){this.$emit("toggleLogin")}}}),w=t(1241);const _=(0,w.A)(A,[["render",b],["__scopeId","data-v-6b25c468"]]);var $=_,q=(0,s.pM)({name:"HomeView",components:{HelloWorld:$},setup(){const e=(0,c.KR)(null);return(0,s.sV)((()=>{})),{canvas:e}},props:{uid:{type:String,required:!1,default:()=>""},users:{type:Object,required:!1,default:()=>({})},places:{type:Object,required:!1,default:()=>({})},book:{type:Array,required:!1,default:()=>[]},mySearch:{type:String,required:!1,default:()=>""},isInApp:{type:Boolean,required:!0}},emits:["addBook","removeBook","locate","loginGoogle","toggleLogin"],methods:{addBook(e){console.log(e),this.$emit("addBook",e)},removeBook(e){console.log(e),this.$emit("removeBook",e)},locate(e,o){this.$emit("locate",e,o)},loginGoogle(e,o){this.$emit("loginGoogle",e,o)},toggleLogin(){console.log("b"),this.$emit("toggleLogin")}}});const C=(0,w.A)(q,[["render",u],["__scopeId","data-v-13084820"]]);var j=C},1501:function(e,o,t){e.exports=t.p+"img/handshake1.c81ff127.webp"}}]);
//# sourceMappingURL=home.1c06e08d.js.map