"use strict";(self["webpackChunkauto20_next"]=self["webpackChunkauto20_next"]||[]).push([[952],{9809:function(e,t,l){l.r(t),l.d(t,{default:function(){return C}});var o=l(6768),n=l(5130),u=l(4232);const s=e=>((0,o.Qi)("data-v-566f4d56"),e=e(),(0,o.jt)(),e),r={class:"hello"},a=s((()=>(0,o.Lk)("div",{class:"ui divider"},null,-1))),i={class:"ui celled striped collapsing table"},d=s((()=>(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th",null,"有空時段")])],-1))),k=["src"],c=s((()=>(0,o.Lk)("br",null,null,-1))),b=s((()=>(0,o.Lk)("br",null,null,-1))),h=s((()=>(0,o.Lk)("br",null,null,-1))),f=s((()=>(0,o.Lk)("br",null,null,-1))),p=s((()=>(0,o.Lk)("br",null,null,-1)));function L(e,t,l,s,L,y){const m=(0,o.g2)("router-link"),v=(0,o.g2)("loader");return(0,o.uX)(),(0,o.CE)("div",r,[(0,o.Lk)("h1",null,[e.book&&e.uid&&0==e.book.length?((0,o.uX)(),(0,o.Wv)(m,{key:0,to:"/friends"},{default:(0,o.k6)((()=>[(0,o.eW)("您的名簿目前沒有人，按此找朋友")])),_:1})):(0,o.Q3)("",!0)]),(0,o.bo)((0,o.bF)(v,null,null,512),[[n.aG,!e.users]]),a,(0,o.Lk)("table",i,[d,(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.searchBy(e.users,e.mySearch),((t,l)=>(0,o.bo)(((0,o.uX)(),(0,o.CE)("tr",{key:l,class:(0,u.C4)({invisible:!e.book||!t||-1==e.book.indexOf(t.uid)})},[(0,o.Lk)("td",null,[(0,o.bF)(m,{to:"/flag/"+t.uid},{default:(0,o.k6)((()=>[(0,o.Lk)("img",{class:"ui avatar",src:t.photoURL},null,8,k),(0,o.Lk)("span",null,(0,u.v_)(t.name),1)])),_:2},1032,["to"])]),(0,o.Lk)("td",null,[(0,o.Lk)("span",null,(0,u.v_)(t.freetime),1)])],2)),[[n.aG,e.book&&t&&e.book.indexOf(t.uid)>-1]]))),128))])]),c,b,h,f,p])}var y=l(9034),m=l(2119),v=l(4885),g=(0,o.pM)({name:"BookView",mixins:[y.A],props:{mySearch:{type:String,default:()=>""},book:{type:Array,default:()=>[]},uid:{type:String,default:()=>""},users:{type:Object,default:()=>({})},type:Object},components:{Loader:m.A,Card:v.A},metaInfo:{title:"名簿"},methods:{today(){const e=new Date;return e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate()},toList(e){return e&&"object"===typeof e?Object.values(e):[]},toArray(){if(!this.users)return[];const e=this.searchBy(this.users,this.mySearch).filter((e=>this.book&&(this.book.indexOf(e.uid)>-1||this.book.indexOf(e.idx)>-1)));return e},toColumns(){let e;e=this.users?.LHIpT3zOOWapprBLKqQtBawg2742?Object.keys(this.users?.LIzyGte1eCa8lbOujKWViftnqGP2):["test","test2"];const t=e.map((e=>({label:e,field:e})));return t},locate(e){this.$emit("locate",e)},addBook(e){console.log(e),this.$emit("addBook",e)},removeBook(e){console.log(e),this.$emit("removeBook",e)}}}),O=l(1241);const B=(0,O.A)(g,[["render",L],["__scopeId","data-v-566f4d56"]]);var C=B}}]);
//# sourceMappingURL=book.f9d92370.js.map