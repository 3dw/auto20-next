"use strict";(self["webpackChunkauto20_next"]=self["webpackChunkauto20_next"]||[]).push([[952],{5810:function(o,e,t){t.r(e),t.d(e,{default:function(){return L}});var l=t(6768),n=t(5130);const a=o=>((0,l.Qi)("data-v-667c6d8c"),o=o(),(0,l.jt)(),o),r={class:"hello"},u=a((()=>(0,l.Lk)("div",{class:"ui divider"},null,-1))),s={key:0,class:"ui four doubling cards container"},c=a((()=>(0,l.Lk)("br",null,null,-1))),d=a((()=>(0,l.Lk)("br",null,null,-1))),i=a((()=>(0,l.Lk)("br",null,null,-1))),k=a((()=>(0,l.Lk)("br",null,null,-1))),h=a((()=>(0,l.Lk)("br",null,null,-1)));function b(o,e,t,a,b,m){const y=(0,l.g2)("router-link"),f=(0,l.g2)("loader"),p=(0,l.g2)("card");return(0,l.uX)(),(0,l.CE)("div",r,[(0,l.Lk)("h1",null,[o.book&&o.uid&&0==o.book.length?((0,l.uX)(),(0,l.Wv)(y,{key:0,to:"/friends"},{default:(0,l.k6)((()=>[(0,l.eW)("您的名簿目前沒有人，按此找朋友")])),_:1})):(0,l.Q3)("",!0)]),(0,l.bo)((0,l.bF)(f,null,null,512),[[n.aG,!o.users]]),u,o.toList(o.places).length>0&&o.toList(o.users).length>0?((0,l.uX)(),(0,l.CE)("div",s,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(o.searchBy(o.places,o.mySearch),((e,t)=>(0,l.bo)(((0,l.uX)(),(0,l.CE)("div",{class:"ui card",key:t},[(0,l.bF)(p,{h:e,full:!1,book:o.book,mySearch:o.mySearch,onLocate:o.locate,onAddBook:o.addBook,onRemoveBook:o.removeBook},null,8,["h","book","mySearch","onLocate","onAddBook","onRemoveBook"])])),[[n.aG,o.book&&o.book.indexOf(e.uid)>-1]]))),128)),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(o.searchBy(o.users,o.mySearch),((e,t)=>(0,l.bo)(((0,l.uX)(),(0,l.CE)("div",{class:"ui card",key:t},[(0,l.bF)(p,{h:e,full:!1,book:o.book,mySearch:o.mySearch,onLocate:o.locate,onAddBook:o.addBook,onRemoveBook:o.removeBook},null,8,["h","book","mySearch","onLocate","onAddBook","onRemoveBook"])])),[[n.aG,o.book&&e&&o.book.indexOf(e.uid)>-1]]))),128))])):(0,l.Q3)("",!0),c,d,i,k,h])}var m=t(9034),y=t(4088),f=t(1430),p=(0,l.pM)({name:"BookView",mixins:[m.A],props:{mySearch:{type:String,default:()=>""},book:{type:Array,default:()=>[]},uid:{type:String,default:()=>""},users:{type:Object,default:()=>({})},places:{type:Object,default:()=>({})}},components:{Loader:y.A,Card:f.A},metaInfo:{title:"名簿"},methods:{today(){const o=new Date;return o.getFullYear()+"/"+(o.getMonth()+1)+"/"+o.getDate()},toList(o){return o&&"object"===typeof o?Object.values(o):[]},toArray(){if(!this.users)return[];const o=this.searchBy(this.users,this.mySearch).filter((o=>this.book&&(this.book.indexOf(o.uid)>-1||this.book.indexOf(o.idx)>-1)));return o},toColumns(){let o;o=this.users?.LHIpT3zOOWapprBLKqQtBawg2742?Object.keys(this.users?.LIzyGte1eCa8lbOujKWViftnqGP2):["test","test2"];const e=o.map((o=>({label:o,field:o})));return e},locate(o){this.$emit("locate",o)},addBook(o){console.log(o),this.$emit("addBook",o)},removeBook(o){console.log(o),this.$emit("removeBook",o)}}}),B=t(1241);const v=(0,B.A)(p,[["render",b],["__scopeId","data-v-667c6d8c"]]);var L=v}}]);
//# sourceMappingURL=book.7751b040.js.map