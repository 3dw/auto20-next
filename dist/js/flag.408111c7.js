"use strict";(self["webpackChunkauto20_next"]=self["webpackChunkauto20_next"]||[]).push([[5],{6642:function(e,o,t){t.d(o,{X:function(){return n}});const n=["歡迎所有願意分享互助的朋友參與。","地圖的左上角有 + , - 鍵可以放大和縮小。","登入平台時，請拖曳地圖上的標記到正確位置。","「分享」和「尋找」之間可以相互配對。","地圖介面讓您能夠根據地理位置就近尋找夥伴。","請不要在互助旗上放置過於完整的個人資訊。","建立自己的名簿，方便下次查找特定的朋友。","Andriod手機上點選「安裝應用程式」可以安裝自學2.0","iOS手機上點選「新增至主畫面」可以安裝自學2.0"]},4902:function(e,o,t){t.d(o,{A:function(){return h}});var n=t(6768),i=t(4232);const s={class:"hello"},u={class:"ui active inverted dimmer"},a={class:"ui big text loader"};function r(e,o,t,r,d,l){return(0,n.uX)(),(0,n.CE)("div",s,[(0,n.Lk)("div",u,[(0,n.Lk)("div",a,[(0,n.Lk)("b",null,(0,i.v_)(e.myHint),1)])])])}var d=t(6642),l=(0,n.pM)({name:"LoaderComponent",data(){return{hints:d.X,myHint:"地圖介面讓您能夠根據地理位置就近尋找夥伴。"}},mounted(){this.myHint=this.hints[Math.floor(Math.random()*this.hints.length)]},methods:{}}),c=t(1241);const g=(0,c.A)(l,[["render",r],["__scopeId","data-v-2313822f"]]);var h=g},9059:function(e,o,t){t.r(o),t.d(o,{default:function(){return f}});var n=t(6768),i=t(4232),s=t(5130);const u={class:"hello"},a={key:0,class:"ui row"},r={class:"sixteen wide column"},d={class:"ui huge buttons"},l={key:1,class:"ui segment container",id:"flag"},c={class:"ui fluid card"};function g(e,o,t,g,h,m){const k=(0,n.g2)("card");return(0,n.uX)(),(0,n.CE)("div",u,[e.users&&0!=e.toList(e.users).length?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("div",a,[(0,n.Lk)("div",r,[(0,n.Lk)("div",d,[(0,n.Lk)("button",{class:"ui orange button",onClick:o[0]||(o[0]=(...o)=>e.toggleLogin&&e.toggleLogin(...o))},(0,i.v_)(e.$t("login.login_to_see_data")),1)])])])),e.users&&e.toList(e.users).length>0?((0,n.uX)(),(0,n.CE)("div",l,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.toList(e.users),((o,t)=>(0,n.bo)(((0,n.uX)(),(0,n.CE)("div",c,[o.uid==e.$route.params.uid?((0,n.uX)(),(0,n.Wv)(k,{key:0,uid:e.uid,h:o,clickable:!1,full:!0,book:e.book,mySearch:e.mySearch,onLocate:e.locate,onAddBook:e.addBook,onLoginGoogle:e.loginGoogle,onToggleLogin:e.toggleLogin},null,8,["uid","h","book","mySearch","onLocate","onAddBook","onLoginGoogle","onToggleLogin"])):(0,n.Q3)("",!0)],512)),[[s.aG,o.uid==e.$route.params.uid]]))),256))])):(0,n.Q3)("",!0)])}var h=t(9034),m=t(1138),k=t(4902),v=(0,n.pM)({name:"FlagView",components:{Card:m.A,Loader:k.A},mixins:[h.A],props:{uid:{type:String,required:!1,default:()=>""},users:{type:Object,required:!1,default:()=>({})},book:{type:Array,required:!1,default:()=>[]},mySearch:{type:String,required:!1,default:()=>""}},computed:{myT(){return Object.keys(this.users).length>0&&this.$route.params.uid?this.users[this.$route.params.uid].name:[{name:"旗幟"}][0].name}},methods:{toList(e){return e&&"object"===typeof e?Object.values(e):[]},locate(e,o){this.$emit("locate",e,o)},addBook(e){console.log(e),this.$emit("addBook",e)},loginGoogle(e,o){this.$emit("loginGoogle",e,o)},toggleLogin(){this.$emit("toggleLogin")}}}),L=t(1241);const p=(0,L.A)(v,[["render",g],["__scopeId","data-v-6515de74"]]);var f=p}}]);
//# sourceMappingURL=flag.408111c7.js.map