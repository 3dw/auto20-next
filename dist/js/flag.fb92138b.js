"use strict";(self["webpackChunkauto20_next"]=self["webpackChunkauto20_next"]||[]).push([[5],{5139:function(e,o,t){t.r(o),t.d(o,{default:function(){return p}});var a=t(6768),n=t(5130);const r={class:"hello"},s={class:"ui segment container",id:"flag"},u={class:"ui fluid card"};function l(e,o,t,l,i,d){const c=(0,a.g2)("loader"),m=(0,a.g2)("card");return(0,a.uX)(),(0,a.CE)("div",r,[(0,a.bo)((0,a.bF)(c,null,null,512),[[n.aG,!e.users]]),(0,a.Lk)("div",s,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.toList(e.users),((o,t)=>(0,a.bo)(((0,a.uX)(),(0,a.CE)("div",u,[(0,a.bF)(m,{h:o,clickable:!1,full:!0,book:e.book,mySearch:e.mySearch,onLocate:e.locate,onAddBook:e.addBook,onLoginGoogle:e.loginGoogle},null,8,["h","book","mySearch","onLocate","onAddBook","onLoginGoogle"])],512)),[[n.aG,o.uid==e.$route.params.uid]]))),256))])])}var i=t(9034),d=t(577),c=t(2119),m=(0,a.pM)({name:"FlagView",components:{Card:d.A,Loader:c.A},mixins:[i.A],props:{users:{type:Object,required:!1,default:()=>({})},book:{type:Array,required:!1,default:()=>[]},mySearch:{type:String,required:!1,default:()=>""}},computed:{myT(){return Object.keys(this.users).length>0&&this.$route.params.uid?this.users[this.$route.params.uid].name:[{name:"旗幟"}][0].name}},methods:{toList(e){return e&&"object"===typeof e?Object.values(e):[]},locate(e,o){this.$emit("locate",e,o)},addBook(e){console.log(e),this.$emit("addBook",e)},loginGoogle(){this.$emit("loginGoogle")}}}),h=t(1241);const g=(0,h.A)(m,[["render",l],["__scopeId","data-v-cf5a3e70"]]);var p=g}}]);
//# sourceMappingURL=flag.fb92138b.js.map