"use strict";(self["webpackChunkauto20_next"]=self["webpackChunkauto20_next"]||[]).push([[5],{2119:function(e,o,t){t.d(o,{A:function(){return g}});var n=t(6768),a=t(4232);const i={class:"hello"},r={class:"ui active inverted dimmer"},s={class:"ui big text loader"};function u(e,o,t,u,l,d){return(0,n.uX)(),(0,n.CE)("div",i,[(0,n.Lk)("div",r,[(0,n.Lk)("div",s,[(0,n.Lk)("b",null,(0,a.v_)(e.myHint),1)])])])}var l=(0,n.pM)({name:"LoaderComponent",data(){return{hints:["歡迎所有願意分享互助的朋友參與。","地圖的左上角有 + , - 鍵可以放大和縮小。","登入平台時，請拖曳地圖上的標記到正確位置。","「分享」和「尋找」之間可以相互配對。","地圖介面讓您能夠根據地理位置就近尋找夥伴。","請不要在互助旗上放置過於完整的個人資訊。","建立自己的名簿，方便下次查找特定的朋友。","Andriod手機上點選「安裝應用程式」可以安裝自學2.0","iOS手機上點選「新增至主畫面」可以安裝自學2.0"],myHint:"地圖介面讓您能夠根據地理位置就近尋找夥伴。"}},mounted(){this.myHint=this.hints[Math.floor(Math.random()*this.hints.length)]},methods:{}}),d=t(1241);const c=(0,d.A)(l,[["render",u],["__scopeId","data-v-afe07500"]]);var g=c},569:function(e,o,t){t.r(o),t.d(o,{default:function(){return p}});var n=t(6768),a=t(5130);const i={class:"hello"},r={class:"ui segment container",id:"flag"},s={class:"ui fluid card"};function u(e,o,t,u,l,d){const c=(0,n.g2)("loader"),g=(0,n.g2)("card");return(0,n.uX)(),(0,n.CE)("div",i,[(0,n.bo)((0,n.bF)(c,null,null,512),[[a.aG,!e.users]]),(0,n.Lk)("div",r,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.toList(e.users),((o,t)=>(0,n.bo)(((0,n.uX)(),(0,n.CE)("div",s,[o.uid==e.$route.params.uid?((0,n.uX)(),(0,n.Wv)(g,{key:0,h:o,clickable:!1,full:!0,book:e.book,mySearch:e.mySearch,onLocate:e.locate,onAddBook:e.addBook,onLoginGoogle:e.loginGoogle,onToggleLogin:e.toggleLogin},null,8,["h","book","mySearch","onLocate","onAddBook","onLoginGoogle","onToggleLogin"])):(0,n.Q3)("",!0)],512)),[[a.aG,o.uid==e.$route.params.uid]]))),256))])])}var l=t(9034),d=t(1138),c=t(2119),g=(0,n.pM)({name:"FlagView",components:{Card:d.A,Loader:c.A},mixins:[l.A],props:{users:{type:Object,required:!1,default:()=>({})},book:{type:Array,required:!1,default:()=>[]},mySearch:{type:String,required:!1,default:()=>""}},computed:{myT(){return Object.keys(this.users).length>0&&this.$route.params.uid?this.users[this.$route.params.uid].name:[{name:"旗幟"}][0].name}},methods:{toList(e){return e&&"object"===typeof e?Object.values(e):[]},locate(e,o){this.$emit("locate",e,o)},addBook(e){console.log(e),this.$emit("addBook",e)},loginGoogle(e,o){this.$emit("loginGoogle",e,o)},toggleLogin(){this.$emit("toggleLogin")}}}),m=t(1241);const h=(0,m.A)(g,[["render",u],["__scopeId","data-v-c3a1a0fa"]]);var p=h}}]);
//# sourceMappingURL=flag.b1e41703.js.map