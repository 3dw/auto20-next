(function(){"use strict";var e={6808:function(e,t,o){o.d(t,{UM:function(){return h},Uq:function(){return r},db:function(){return a},pO:function(){return c},sY:function(){return d},y6:function(){return u},yA:function(){return s}});var n=o(6400),i=o(4161);const l=(0,n.Wp)({apiKey:"AIzaSyA64Lzpmdn-HovWkOvTtPFecurm9Szaxf8",authDomain:"shackhand-autolearn.firebaseapp.com",databaseURL:"https://shackhand-autolearn.firebaseio.com",projectId:"shackhand-autolearn",storageBucket:"shackhand-autolearn.appspot.com",messagingSenderId:"270389952986",appId:"1:270389952986:web:010827f42571edac5c80e3"}),s=l,a=(0,i.C3)(l),r=(0,i.KR)(a,"places"),u=(0,i.KR)(a,"users"),c=(0,i.KR)(a,"chats"),d=(0,i.KR)(a,"groups"),h=(0,i.KR)(a,"books")},9383:function(e,t,o){var n=o(5130),i=o(6768),l=o(4232);const s={class:"ui menu",id:"main-menu"},a=(0,i.Lk)("i",{class:"icon bars"},null,-1),r=[a],u=(0,i.Lk)("i",{class:"home icon"},null,-1),c=(0,i.Lk)("span",null,"首頁",-1),d=(0,i.Lk)("i",{class:"info icon"},null,-1),h=(0,i.Lk)("i",{class:"map icon"},null,-1),p=(0,i.Lk)("i",{class:"users icon"},null,-1),g=(0,i.Lk)("i",{class:"globe icon"},null,-1),m={class:"right menu"},k={class:"ui simple dropdown item"},f=["src"],b={key:1,class:"user icon"},v={class:"menu"},L=(0,i.Lk)("i",{class:"flag icon"},null,-1),y={class:"ui divider"},C=(0,i.Lk)("i",{class:"book icon no-float"},null,-1),w=(0,i.Lk)("i",{class:"sign-out icon"},null,-1),_=["innerHTML"],A=(0,i.Lk)("i",{class:"home icon no-float"},null,-1),E=(0,i.Lk)("i",{class:"info icon no-float"},null,-1),U=(0,i.Lk)("i",{class:"save icon no-float"},null,-1),S=(0,i.Lk)("i",{class:"users icon no-float"},null,-1),B=(0,i.Lk)("i",{class:"globe icon no-float"},null,-1),F=(0,i.Lk)("i",{class:"map icon no-float"},null,-1),W=(0,i.Lk)("i",{class:"user icon no-float"},null,-1),X=(0,i.Lk)("i",{class:"marker icon no-float"},null,-1),x=(0,i.Lk)("i",{class:"book icon no-float"},null,-1),R=(0,i.Lk)("br",null,null,-1),G={key:0,class:"ui form container"},I={class:"search-input"},M=(0,i.Lk)("i",{class:"search icon"},null,-1),T=(0,i.Lk)("br",null,null,-1),O=(0,i.Lk)("br",null,null,-1),$=(0,i.Lk)("br",null,null,-1);function N(e,t,o,a,N,q){const Q=(0,i.g2)("router-link"),j=(0,i.g2)("slide"),D=(0,i.g2)("carousel"),H=(0,i.g2)("router-view"),K=(0,i.g2)("chatbox"),V=(0,i.gN)("autofocus");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("nav",s,[(0,i.Lk)("button",{class:"no-border ui item",onClick:t[0]||(t[0]=(...t)=>e.toggleSidebar&&e.toggleSidebar(...t))},r),(0,i.bF)(Q,{class:"item fat-only",to:"/"},{default:(0,i.k6)((()=>[u,c])),_:1}),(0,i.bF)(Q,{class:"item",to:"/about"},{default:(0,i.k6)((()=>[d,(0,i.eW)("說明")])),_:1}),(0,i.bF)(Q,{class:"item",to:"/maps"},{default:(0,i.k6)((()=>[h,(0,i.eW)("地圖")])),_:1}),(0,i.bF)(Q,{class:"item",to:"/friends"},{default:(0,i.k6)((()=>[p,(0,i.eW)("朋友")])),_:1}),(0,i.bF)(Q,{class:"item fat-only",to:"/groups"},{default:(0,i.k6)((()=>[g,(0,i.eW)("社團")])),_:1}),(0,i.Lk)("div",m,[(0,i.Lk)("div",k,[e.photoURL?((0,i.uX)(),(0,i.CE)("img",{key:0,class:"ui avatar image",src:e.photoURL},null,8,f)):((0,i.uX)(),(0,i.CE)("i",b)),(0,i.Lk)("div",v,[(0,i.bF)(Q,{class:"item",to:"/profile"},{default:(0,i.k6)((()=>[L,(0,i.eW)("我的旗幟")])),_:1}),(0,i.bo)((0,i.Lk)("div",y,null,512),[[n.aG,e.myGroupIdx().length>0]]),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.myGroupIdx(),(t=>((0,i.uX)(),(0,i.Wv)(Q,{class:"item",key:t,to:"/group/"+t},{default:(0,i.k6)((()=>[(0,i.eW)((0,l.v_)(e.groups[t].n),1)])),_:2},1032,["to"])))),128)),e.uid?((0,i.uX)(),(0,i.Wv)(Q,{key:0,class:"item",to:"/book"},{default:(0,i.k6)((()=>[C,(0,i.eW)("我的名簿")])),_:1})):(0,i.Q3)("",!0),e.uid?((0,i.uX)(),(0,i.CE)("button",{key:1,class:"no-border ui item",onClick:t[1]||(t[1]=(...t)=>e.logout&&e.logout(...t))},[w,(0,i.eW)("登出")])):(0,i.Q3)("",!0)])])])]),(0,i.bF)(D,{wrapAround:!0,"items-to-show":1,autoplay:4e3,transition:4e3,pauseAutoplayOnHover:!0},{addons:(0,i.k6)((()=>[])),default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.news,(e=>((0,i.uX)(),(0,i.Wv)(j,{key:e},{default:(0,i.k6)((()=>[(0,i.Lk)("span",{innerHTML:e},null,8,_)])),_:2},1024)))),128))])),_:1}),(0,i.Lk)("div",{class:(0,l.C4)(["ui sidebar vertical menu",{hidden:!e.sidebarVisible}]),id:"side-menu"},[(0,i.bF)(Q,{class:"item",to:"/"},{default:(0,i.k6)((()=>[A,(0,i.eW)("首頁")])),_:1}),(0,i.bF)(Q,{class:"item",to:"/about"},{default:(0,i.k6)((()=>[E,(0,i.eW)("說明")])),_:1}),(0,i.bF)(Q,{class:"item",to:"/privacy-policy"},{default:(0,i.k6)((()=>[U,(0,i.eW)("隱私權政策")])),_:1}),(0,i.bF)(Q,{class:"item",to:"/friends"},{default:(0,i.k6)((()=>[S,(0,i.eW)("朋友")])),_:1}),(0,i.bF)(Q,{class:"item",to:"/groups"},{default:(0,i.k6)((()=>[B,(0,i.eW)("社團")])),_:1}),(0,i.bF)(Q,{class:"item",to:"/maps"},{default:(0,i.k6)((()=>[F,(0,i.eW)("地圖")])),_:1}),(0,i.bF)(Q,{class:"item",to:"/profile"},{default:(0,i.k6)((()=>[W,(0,i.eW)("我的旗幟")])),_:1}),e.uid?((0,i.uX)(),(0,i.Wv)(Q,{key:0,class:"item",to:"/my_place"},{default:(0,i.k6)((()=>[X,(0,i.eW)("自學場地登錄")])),_:1})):(0,i.Q3)("",!0),e.uid?((0,i.uX)(),(0,i.Wv)(Q,{key:1,class:"item",to:"/book"},{default:(0,i.k6)((()=>[x,(0,i.eW)("我的名簿")])),_:1})):(0,i.Q3)("",!0)],2),(0,i.Lk)("div",{class:(0,l.C4)(["ui sidebar bg",{hidden:!e.sidebarVisible}]),onClick:t[2]||(t[2]=(...t)=>e.toggleSidebar&&e.toggleSidebar(...t))},null,2),R,e.doSearch(e.$route.path)?((0,i.uX)(),(0,i.CE)("div",G,[(0,i.Lk)("div",I,[(0,i.bo)((0,i.Lk)("input",{"onUpdate:modelValue":t[3]||(t[3]=t=>e.mySearch=t),placeholder:"關鍵字搜尋",autofocus:""},null,512),[[V],[n.Jo,e.mySearch]]),M])])):(0,i.Q3)("",!0),T,(0,i.bF)(H,{isInApp:e.isInApp,zoom:e.zoom,uid:e.uid,users:e.users,book:e.book,center:e.center,places:e.places,user:e.user,mySearch:e.mySearch,email:e.email,photoURL:e.photoURL,onLoginGoogle:e.loginGoogle,onAddBook:e.addBook,onRemoveBook:e.removeBook,onLocate:e.locate,onGetUserLocation:e.getUserLocation,onLogout:e.logout},null,8,["isInApp","zoom","uid","users","book","center","places","user","mySearch","email","photoURL","onLoginGoogle","onAddBook","onRemoveBook","onLocate","onGetUserLocation","onLogout"]),O,$,(0,i.bF)(K,{id:"ch",onLoginGoogle:e.loginGoogle,uid:e.uid,user:e.user,photoURL:e.photoURL},null,8,["onLoginGoogle","uid","user","photoURL"])],64)}o(4114);var q=o(9420),Q=o.n(q),j=o(4161),D=o(6808),H=o(2621);const K=e=>((0,i.Qi)("data-v-72edd76a"),e=e(),(0,i.jt)(),e),V={class:"ui inverted big menu",id:"menu"},P={class:"item ui form"},z={class:"ui input"},Z={class:"right menu"},J=K((()=>(0,i.Lk)("i",{class:"comments icon"},null,-1))),Y=K((()=>(0,i.Lk)("i",{class:"compress icon"},null,-1))),ee={id:"box"},te={class:"ui list"},oe=["src"],ne=["onClick"],ie=["onClick"],le=K((()=>(0,i.Lk)("i",{class:"edit icon",title:"edit"},null,-1))),se=[le],ae={class:"text"},re={class:"ui form"},ue={class:"ui input"},ce=["onUpdate:modelValue"],de=["onClick"],he={key:0,class:"item preview"},pe=["src"],ge={key:1,class:"item"},me={class:"ui form"},ke={class:"field"},fe=["src"],be={class:"inline fields"},ve={class:"field"},Le={class:"ui radio checkbox"},ye=["value"],Ce=["onClick"],we={class:"ui button group"},_e={key:2,class:"item"},Ae={key:0,class:"ui big buttons"},Ee=K((()=>(0,i.Lk)("i",{class:"google icon"},null,-1)));function Ue(e,t,o,s,a,r){const u=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("div",{class:(0,l.C4)(["chats",{full:e.isFull,mini:e.isMini}])},[(0,i.Lk)("div",V,[(0,i.bo)((0,i.Lk)("div",P,[(0,i.Lk)("div",z,[(0,i.bo)((0,i.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.key=t),placeholder:"搜尋"},null,512),[[n.Jo,e.key]])])],512),[[n.aG,e.isFull]]),(0,i.Lk)("div",Z,[e.isFull?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("a",{key:0,class:"item",onClick:t[1]||(t[1]=t=>{e.isFull=!0,e.isMini=!1,e.reCount()})},[J,(0,i.eW)("群聊"),(0,i.bo)((0,i.Lk)("div",{class:"red note"},(0,l.v_)(e.fil(e.chats).length-e.read),513),[[n.aG,e.fil(e.chats).length>e.read]])])),e.isMini?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("a",{key:1,class:"item",onClick:t[2]||(t[2]=t=>{e.isFull=!1,e.isMini=!0})},[Y,(0,i.eW)("縮小")]))])]),(0,i.Lk)("div",ee,[(0,i.Lk)("div",te,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.fil(e.chats).slice(e.fil(e.chats).length-5,e.fil(e.chats).length),((t,o)=>((0,i.uX)(),(0,i.CE)("div",{class:"item",key:t.t},[(0,i.bo)((0,i.Lk)("p",null,[(0,i.bF)(u,{to:"/flag/"+t.uid},{default:(0,i.k6)((()=>[(0,i.Lk)("img",{class:"ui avatar",src:t.photoURL||"http://graph.facebook.com/"+t.uid+"/picture",alt:"^_^"},null,8,oe)])),_:2},1032,["to"]),(0,i.Lk)("a",{onClick:o=>e.key=t.l,class:(0,l.C4)(t.l)},"["+(0,l.v_)(t.l)+"]",11,ne),(0,i.bo)((0,i.Lk)("a",{onClick:o=>e.edit=t},se,8,ie),[[n.aG,t.uid==e.uid]]),(0,i.Lk)("span",ae,"| "+(0,l.v_)(t.n)+" : "+(0,l.v_)(t.t),1),(0,i.bo)((0,i.Lk)("span",{class:"gray"},"  -"+(0,l.v_)(e.countDateDiff(t.time)),513),[[n.aG,e.isFull]])],512),[[n.aG,e.edit!==t]]),(0,i.bo)((0,i.Lk)("div",re,[(0,i.Lk)("div",ue,[(0,i.bo)((0,i.Lk)("input",{class:"input","onUpdate:modelValue":e=>t.t=e,placeholder:"更新"},null,8,ce),[[n.Jo,t.t]]),(0,i.Lk)("a",{class:"ui green small button",onClick:(0,n.D$)((o=>{e.edit="",e.updateChat(t)}),["stop"])},"更新",8,de)])],512),[[n.aG,e.edit==t]])])))),128)),e.p.t?((0,i.uX)(),(0,i.CE)("div",he,[(0,i.bF)(u,{to:"/flag/"+e.p.uid},{default:(0,i.k6)((()=>[(0,i.Lk)("img",{class:"ui avatar",src:e.p.photoURL||"/static/img/handshake0.png"},null,8,pe)])),_:1},8,["to"]),(0,i.Lk)("a",{onClick:t[3]||(t[3]=t=>e.key=e.p.l),class:(0,l.C4)(e.p.l)},"["+(0,l.v_)(e.p.l)+"] (預覽)",3),(0,i.eW)((0,l.v_)(e.p.n)+" : "+(0,l.v_)(e.p.t),1),(0,i.bo)((0,i.Lk)("span",{class:"gray"},"  -"+(0,l.v_)(e.countDateDiff(e.p.time)),513),[[n.aG,e.isFull]])])):(0,i.Q3)("",!0),e.uid?((0,i.uX)(),(0,i.CE)("div",ge,[(0,i.Lk)("div",me,[(0,i.Lk)("div",ke,[(0,i.Lk)("img",{class:"ui avatar",src:e.photoURL},null,8,fe),(0,i.bo)((0,i.Lk)("input",{class:"input","onUpdate:modelValue":t[4]||(t[4]=t=>e.msg=t),placeholder:"在想什麼嗎?",autofocus:""},null,512),[[n.Jo,e.msg]])]),(0,i.Lk)("div",be,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.labels,(o=>((0,i.uX)(),(0,i.CE)("div",ve,[(0,i.Lk)("div",Le,[(0,i.bo)((0,i.Lk)("input",{type:"radio",name:"l","onUpdate:modelValue":t[5]||(t[5]=t=>e.label=t),value:o},null,8,ye),[[n.XL,e.label]]),(0,i.Lk)("label",null,[(0,i.Lk)("a",{onClick:t=>e.label=o,class:(0,l.C4)(o)},(0,l.v_)(o),11,Ce)])])])))),256)),(0,i.Lk)("div",we,[(0,i.Lk)("a",{class:"ui blue small button",onClick:t[6]||(t[6]=(...t)=>e.preview&&e.preview(...t))},"預覽"),(0,i.Lk)("a",{class:"ui green small button",onClick:t[7]||(t[7]=(...t)=>e.addChat&&e.addChat(...t))},"留言")])])])])):((0,i.uX)(),(0,i.CE)("div",_e,[e.uid?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("div",Ae,[(0,i.Lk)("button",{class:"ui orange button",onClick:t[8]||(t[8]=t=>e.loginGoogle())},[Ee,(0,i.eW)("登入以留言 ")])]))]))])])],2)}var Se=o(9034),Be=(0,i.pM)({name:"ChatBox",mixins:[Se.A],props:["uid","user","photoURL"],data(){return{p:"",msg:"",key:"閒聊",edit:"",chats:[],read:0,isFull:!1,isMini:!0,label:"閒聊",labels:["諮詢","故障","找伴","閒聊"]}},watch:{label(e){this.key=e}},methods:{preview(){var e={uid:this.uid,n:this.user.providerData[0].displayName,t:this.msg,l:this.label,edit:!1,photoURL:this.photoURL||"",time:(new Date).getTime()};this.p=e},updateChat(e){var t={uid:e.uid,n:e.n,t:e.t,l:e.l,photoURL:e.photoURL||"",time:(new Date).getTime()};this.chats[e[".key"]]=t,this.edit="",(0,j.hZ)((0,j.KR)(D.db,"chats"),this.chats).then((()=>{console.log("chats更新成功"),this.edit=""}))},addChat(){var e={uid:this.uid,n:this.user.providerData[0].displayName,t:this.msg,l:this.label,photoURL:this.photoURL||"",time:(new Date).getTime()};if(this.msg){const t=(Math.random()+"").substr(0,8).replace(".","");this.chats[t]=e,this.msg="",this.p=""}(0,j.hZ)((0,j.KR)(D.db,"chats"),this.chats).then(console.log("chats更新成功"))},loginGoogle(){this.$emit("loginGoogle")},fil(e){var t=this.key;const o=Object.keys(e);for(var n=[],i=0;i<o.length;i++)n.push(e[o[i]]);return n=n.filter((function(e){return(e.t+e.l).indexOf(t)>-1||!t})).map((function(e){return e.edit=!1,e})),n.sort((function(e,t){return e.time-t.time})),n},reCount(){this.read=this.fil(this.chats).length,localStorage.setItem("read",this.read)}},mounted(){(0,j.Zy)(D.pO,(e=>{const t=e.val();this.chats=t})),this.read=localStorage.getItem("read")||0,"undefined"===this.read&&(this.read=0)}}),Fe=o(1241);const We=(0,Fe.A)(Be,[["render",Ue],["__scopeId","data-v-72edd76a"]]);var Xe=We,xe=o(1114);const Re=new(Q())(window.navigator.userAgent);let Ge=Re.isInApp;/Android/.test(window.navigator.userAgent)&&/Chrome|Google/.test(window.navigator.userAgent)&&(Ge=!1);const Ie=(0,H.xI)(D.yA),Me=new H.HF;Me.addScope("profile"),Me.addScope("email"),Me.addScope("https://www.googleapis.com/auth/userinfo.email");var Te=(0,i.pM)({name:"WeLearn",components:{Carousel:xe.FN,Slide:xe.q7,Pagination:xe.dK,Navigation:xe.Vx,Chatbox:Xe},data(){return{mySearch:"",news:["自學2.0更新中","請定期更新您的互助旗","兩年以上未更新之旗幟將被系統移除",'任何建議與錯誤回報，請上此<a href="https://github.com/3dw/auto20-next/issues" target="_blank" rel="noopener noreferrer">議題區</a>'],zoom:7,center:[23.533,121.0654],sidebarVisible:!1,users:null,book:[],books:[],user:null,email:null,uid:"",photoURL:null,isInApp:Ge,groups:null,places:null}},mounted(){const e=this;console.log(e.isInApp),(0,j.Zy)(D.y6,(t=>{const o=t.val();e.users=o})),(0,j.Zy)(D.Uq,(t=>{const o=t.val();e.places=o})),(0,j.Zy)(D.sY,(t=>{const o=t.val();e.groups=o})),(0,j.Zy)(D.UM,(t=>{console.log("get books");const o=t.val()||{};e.books=o}))},watch:{$route(e,t){console.log(t.path),console.log(e.path),window.scrollTo(0,0),this.sidebarVisible=!1},center(e,t){console.log("Center updated from",t,"to",e)},uid(e){e&&(this.book=this.books[e],console.log(this.book),this.$nextTick((()=>{console.log("Book updated and propagated to children")})))}},methods:{doSearch:function(e){return!e.match(/(^\/$|myPlace|qr|outer|flag|myFlag|group\/|place|profile|about|privacy-policy|faq|flag\/\d+|ans\/\d+)/)},myGroupIdx(){return(this.groups||[]).filter((e=>(e.members||[]).indexOf(this.uid||"")>-1)).map((function(e){return e.idx}))},locate:function(e,t){this.zoom=13,this.center=e.latlngColumn.split(","),console.log("Updated location:",this.center),this.$nextTick((()=>{console.log("Center updated and propagated to children")})),t&&this.$router.push({path:"/maps"})},getUserLocation:function(){console.log("try getUserLocation"),navigator.geolocation?navigator.geolocation.getCurrentPosition((e=>{this.center=[e.coords.latitude,e.coords.longitude],console.log("Updated location:",this.center),this.$nextTick((()=>{console.log("Center updated and propagated to children")}))}),(e=>{console.error("Error getting location:",e)})):console.error("Geolocation is not supported by this browser.")},toggleSidebar(){console.log("toggleSidebar"),this.sidebarVisible=!this.sidebarVisible},setLocal:function(e){console.log("set:"+e),"book"==e&&localStorage.setItem(e,JSON.stringify(this.book))},addBook:function(e){-1===this.book.indexOf(e)&&(this.book.push(e),(0,j.hZ)((0,j.KR)(D.db,"books/"+this.uid),this.book))},removeBook:function(e){window.confirm("確定要將這位朋友移出您的名簿嗎？")&&(this.book.splice(e,1),(0,j.hZ)((0,j.KR)(D.db,"books/"+this.uid),this.book))},copyLink(){if(!document.hasFocus())return void alert("Document does not have focus, cannot copy link.");console.log(this.$route);const e="https://auto20-next.pages.dev/#"+this.$route.path;navigator.clipboard.writeText(e).then((()=>{window.alert("已複製當前網址: "+e)})).catch((e=>{console.error("無法複製當前網址: ",e)})),this.$forceUpdate()},logout(){const e=this;Ie.signOut().then((function(){e.user=null,e.uid="",e.photoURL="",console.log(e.$router),e.$router.push("/")}))},loginGoogle:function(){const e=this;this.isInApp?window.alert("本系統不支援Facebook, Line等App內部瀏覽，請用一般瀏覽器開啟，方可登入，謝謝"):(0,H.df)(Ie,Me).then((t=>{const o=t.user;e.user=o,e.email=o.providerData[0].email,e.uid=o.uid,console.log(e.uid),e.photoURL=o.photoURL?decodeURI(o.photoURL):"https://auto20-next.pages.dev/logo-new.png",e.uid&&e.users[e.uid]&&(e.user=e.users[e.uid]),e.uid&&e.users[e.uid]&&e.users[e.uid].latlngColumn&&this.locate(e.users[e.uid],!1),e.$router.push("/profile")})).catch((e=>{console.error("Login error:",e),e.message.includes("sessionStorage")&&window.alert("瀏覽器不支持sessionStorage，請檢查瀏覽器設置或更換瀏覽器再試一次。")}))}}});const Oe=(0,Fe.A)(Te,[["render",N]]);var $e=Oe,Ne=o(1387),qe=o(1501);const Qe=e=>((0,i.Qi)("data-v-5764f648"),e=e(),(0,i.jt)(),e),je={class:"home"},De=Qe((()=>(0,i.Lk)("img",{id:"main-img",src:qe},null,-1)));function He(e,t,o,n,l,s){const a=(0,i.g2)("HelloWorld");return(0,i.uX)(),(0,i.CE)("div",je,[De,(0,i.bF)(a,{uid:e.uid,users:e.users,places:e.places,book:e.book,isInApp:e.isInApp,onAddBook:e.addBook,onLocate:e.locate,onRemoveBook:e.removeBook,onLoginGoogle:e.loginGoogle},null,8,["uid","users","places","book","isInApp","onAddBook","onLocate","onRemoveBook","onLoginGoogle"])])}const Ke=e=>((0,i.Qi)("data-v-2d985b46"),e=e(),(0,i.jt)(),e),Ve=Ke((()=>(0,i.Lk)("div",{class:"hello"},[(0,i.Lk)("h4",{class:"ui header"},"聞道有先後，術業有專攻")],-1))),Pe=Ke((()=>(0,i.Lk)("br",null,null,-1))),ze={class:"ui huge buttons"},Ze=Ke((()=>(0,i.Lk)("div",{class:"or"},null,-1))),Je=Ke((()=>(0,i.Lk)("i",{class:"google icon"},null,-1))),Ye={key:0},et=Ke((()=>(0,i.Lk)("div",{class:"ui divider"},null,-1))),tt=Ke((()=>(0,i.Lk)("div",{class:"ui divider"},null,-1))),ot=Ke((()=>(0,i.Lk)("option",{value:"random"},"隨機介紹",-1))),nt=Ke((()=>(0,i.Lk)("option",{value:"newest"},"最近更新",-1))),it=[ot,nt],lt=Ke((()=>(0,i.Lk)("br",null,null,-1))),st=Ke((()=>(0,i.Lk)("br",null,null,-1))),at={key:1,class:"ui two doubling stackable cards container"},rt=Ke((()=>(0,i.Lk)("div",{class:"ui divider"},null,-1))),ut=Ke((()=>(0,i.Lk)("div",{class:"polis","data-conversation_id":"5azfwmdsb6"},null,-1)));function ct(e,t,o,s,a,r){const u=(0,i.g2)("router-link"),c=(0,i.g2)("card"),d=(0,i.g2)("loader");return(0,i.uX)(),(0,i.CE)(i.FK,null,[Ve,Pe,(0,i.Lk)("div",ze,[(0,i.bF)(u,{class:"ui purple button",to:"/about"},{default:(0,i.k6)((()=>[(0,i.eW)("瞭解更多")])),_:1}),Ze,e.user&&e.user.uid?((0,i.uX)(),(0,i.Wv)(u,{key:1,class:"ui blue button",to:"/profile"},{default:(0,i.k6)((()=>[(0,i.eW)("前往我的旗幟")])),_:1})):((0,i.uX)(),(0,i.CE)("button",{key:0,class:(0,l.C4)(["ui basic orange button",{disabled:e.isInApp}]),onClick:t[0]||(t[0]=(...t)=>e.loginGoogle&&e.loginGoogle(...t))},[Je,(0,i.eW)("登入")],2))]),e.isInApp?((0,i.uX)(),(0,i.CE)("p",Ye,[(0,i.eW)("本系統不支援facebook, link等app內部瀏覽，請用一般瀏覽器開啟，方可登入，謝謝"),et])):(0,i.Q3)("",!0),tt,(0,i.bo)((0,i.Lk)("select",{class:"ui dropdown","onUpdate:modelValue":t[1]||(t[1]=t=>e.logic=t)},it,512),[[n.aG,e.users&&e.toList(e.users).length>0],[n.u1,e.logic]]),lt,st,e.toList(e.users).length>0?((0,i.uX)(),(0,i.CE)("div",at,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.ordered_list.slice(0,2),((t,o)=>((0,i.uX)(),(0,i.CE)("div",{class:"ui card",key:o},[(0,i.bF)(c,{h:t,full:!1,mySearch:e.mySearch,uid:e.uid,book:e.book,onLocate:e.locate,onAddBook:e.addBook,onRemoveBook:e.removeBook,onLoginGoogle:e.loginGoogle},null,8,["h","mySearch","uid","book","onLocate","onAddBook","onRemoveBook","onLoginGoogle"])])))),128))])):((0,i.uX)(),(0,i.Wv)(d,{key:2})),rt,ut],64)}var dt=o(2002),ht=o(4088),pt=(0,i.pM)({name:"HelloWorld",components:{Card:dt.A,Loader:ht.A},props:{uid:{type:String,required:!1,default:""},user:{type:Object,required:!1,default:()=>({})},users:{type:Object,required:!1,default:()=>({})},places:{type:Object,required:!1,default:()=>({})},book:{type:Array,required:!1,default:()=>[]},mySearch:{type:String,required:!1,default:""},isInApp:{type:Boolean,required:!0}},data(){return{logic:"random",shuffledList:[],newestList:[]}},emits:["addBook","removeBook","locate","loginGoogle"],computed:{ordered_list(){return"random"===this.logic?this.shuffledList:this.newestList}},watch:{logic(e){"random"===e?this.shuffleList():"newest"===e&&this.sortByNewest()},users:{handler(){this.shuffleList(),this.sortByNewest()},deep:!0},places:{handler(){this.shuffleList(),this.sortByNewest()},deep:!0}},mounted(){this.shuffleList(),this.sortByNewest()},methods:{toList(e){return e&&"object"===typeof e?Object.values(e):[]},shuffleList(){const e=this.toList(this.users).concat(this.toList(this.places));for(let t=e.length-1;t>0;t--){const o=Math.floor(Math.random()*(t+1));[e[t],e[o]]=[e[o],e[t]]}this.shuffledList=e},sortByNewest(){const e=this.toList(this.users).concat(this.toList(this.places)).slice().sort(((e,t)=>!t.lastUpdate||isNaN(t.lastUpdate)?-1:t.lastUpdate-e.lastUpdate));this.newestList=e},addBook(e){console.log(e),this.$emit("addBook",e)},removeBook(e){console.log(e),this.$emit("removeBook",e)},locate(e,t){this.$emit("locate",e,t)},loginGoogle(){this.$emit("loginGoogle")}}});const gt=(0,Fe.A)(pt,[["render",ct],["__scopeId","data-v-2d985b46"]]);var mt=gt,kt=(0,i.pM)({name:"HomeView",components:{HelloWorld:mt},props:{uid:{type:String,required:!1,default:()=>""},users:{type:Object,required:!1,default:()=>({})},places:{type:Object,required:!1,default:()=>({})},book:{type:Array,required:!1,default:()=>[]},mySearch:{type:String,required:!1,default:()=>""},isInApp:{type:Boolean,required:!0}},emits:["addBook","removeBook","locate","loginGoogle"],methods:{addBook:function(e){console.log(e),this.$emit("addBook",e)},removeBook:function(e){console.log(e),this.$emit("removeBook",e)},locate:function(e,t){this.$emit("locate",e,t)},loginGoogle:function(){this.$emit("loginGoogle")}}});const ft=(0,Fe.A)(kt,[["render",He],["__scopeId","data-v-5764f648"]]);var bt=ft;const vt=[{path:"/",name:"home",component:bt},{path:"/qr/:uid",name:"qr",component:()=>o.e(998).then(o.bind(o,2613))},{path:"/about",name:"about",component:()=>o.e(594).then(o.bind(o,7498))},{path:"/privacy-policy",name:"privacy-policy",component:()=>o.e(928).then(o.bind(o,916))},{path:"/profile",name:"profile",component:()=>Promise.all([o.e(886),o.e(138)]).then(o.bind(o,9938))},{path:"/flag/:uid",name:"Flag",component:()=>o.e(5).then(o.bind(o,985))},{path:"/friends",name:"friends",component:()=>o.e(594).then(o.bind(o,8702))},{path:"/maps",name:"maps",component:()=>Promise.all([o.e(886),o.e(522)]).then(o.bind(o,512))},{path:"/groups",name:"groups",component:()=>o.e(583).then(o.bind(o,9374))},{path:"/group/:idx",name:"group",component:()=>o.e(583).then(o.bind(o,4526))},{path:"/book",name:"book",component:()=>o.e(952).then(o.bind(o,8910))},{path:"/my_place",name:"my_place",component:()=>Promise.all([o.e(886),o.e(246)]).then(o.bind(o,2088))}],Lt=(0,Ne.aE)({history:(0,Ne.Bt)(),routes:vt});var yt=Lt;const Ct=(0,n.Ef)($e);Ct.use(yt),Ct.mount("#app")},9034:function(e,t){t.A={methods:{part(e){return String(e).substring(0,100)},toAge(e){const t=(new Date).getFullYear();return t-parseInt(e)},highlight(e,t){if(!e)return"";if(e=e.replace(/</g,"&lt;").replace(/>/g,"&gt;"),e=e.replace(/&lt;\s*br\/?\s*&gt;/g,"<br/>"),!t)return e;if(t.startsWith("$"))return e;const o=t.split(/\s+/g);for(const n of o)e=e.replace(new RegExp(n,"gi"),'<span class="highlightedText">$&</span>');return e},getIcon(e){return e&&e.photoURL?e.photoURL:e&&e.name?`https://www.moedict.tw/${e.name}.png`:"https://www.moedict.tw/unknown.png"},countDateDiff(e){if(!e)return"";const t=new Date(e);return t.toLocaleDateString()},makeHref(e){if(!e)return"";let t=String(e);return t.startsWith("http://")||t.startsWith("https://")||(t="http://"+t),t.replace("https://","")},badAge(e){if(!e)return!1;const t=(new Date).getFullYear(),o=t-parseInt(e);return isNaN(o)},isValid(e){return e&&e.name&&e.share&&e.learner_habit&&e.note&&e.address&&!("undefined,undefined"===e.latlngColumn)&&!("36.778261,-119.4179324"===e.latlngColumn)&&e.connect_me},asValid(e){return e&&e.name&&e.note&&e.note.length>=20&&e.address&&!("undefined,undefined"===e.latlngColumn)&&!("36.778261,-119.4179324"===e.latlngColumn)},searchBy(e,t){const o=Object.keys(e),n=o.map((t=>e[t]));if(!n)return[];t||(t="");const i=t.split(/[\s&]+/g);let l=n;for(const s of i){let e,t;[e,t]=s.split(/[~-]/),s.match(/(\d+)[~-](\d+)/)?l=l.filter((o=>(this.toAge(o.learner_birth)<=Number(t)&&this.toAge(o.learner_birth))>=e||this.toAge(o.child_birth)<=Number(t)&&this.toAge(o.child_birth)>=e||this.toAge(o.child_birth2)<=Number(t)&&this.toAge(o.child_birth2)>=e)):s.match(/(\d+)\+/)?(e=s.split("+")[0],l=l.filter((t=>this.toAge(t.learner_birth)>=Number(e)||this.toAge(t.child_birth)>=Number(e)||this.toAge(t.child_birth2)>=Number(e)))):s.match(/(\d+)-/)?(t=s.split("-")[0],l=l.filter((e=>this.toAge(e.learner_birth)<=Number(t)||this.toAge(e.child_birth)<=Number(t)||this.toAge(e.child_birth2)<=Number(t)))):l=l.filter((e=>!!e.name&&(e.name+e.address+e.note+e.freetime+e.learner_habit+e.share+e.ask+e.id).includes(s)))}return l.sort(((e,t)=>(e.lastUpdate||(e.lastUpdate=0),t.lastUpdate||(t.lastUpdate=0),t.lastUpdate-e.lastUpdate))),l}}}},2002:function(e,t,o){o.d(t,{A:function(){return te}});var n=o(6768),i=o(4232),l=o(5130);const s=e=>((0,n.Qi)("data-v-37ec74e8"),e=e(),(0,n.jt)(),e),a={class:"hello"},r={class:"image"},u={class:"ui header"},c=["src"],d={key:0},h=["innerHTML"],p={key:1},g={key:2},m={key:3},k={class:"content"},f={class:"description gray"},b=["innerHTML"],v=["innerHTML"],L=["innerHTML"],y=["innerHTML"],C=["innerHTML"],w={key:0,class:"content"},_=s((()=>(0,n.Lk)("div",{class:"ui divider"},null,-1))),A={key:0,class:"descrtpion"},E={key:1,class:"descrtpion"},U={key:2,class:"descrtpion"},S={class:"content"},B=s((()=>(0,n.Lk)("div",{class:"ui divider"},null,-1))),F={key:0},W=["src"],X=s((()=>(0,n.Lk)("i",{class:"right arrow icon"},null,-1))),x={key:1},R=["src"],G=s((()=>(0,n.Lk)("i",{class:"right arrow icon"},null,-1))),I={class:"content"},M=s((()=>(0,n.Lk)("div",{class:"ui divider"},null,-1))),T={key:0,class:"descrtpion"},O=["innerHTML"],$=s((()=>(0,n.Lk)("br",null,null,-1))),N={key:1,class:"descrtpion"},q=["innerHTML"],Q=s((()=>(0,n.Lk)("br",null,null,-1))),j=s((()=>(0,n.Lk)("div",{class:"filler"},null,-1))),D=s((()=>(0,n.Lk)("i",{class:"book icon"},null,-1))),H=s((()=>(0,n.Lk)("i",{class:"book icon"},null,-1))),K=s((()=>(0,n.Lk)("i",{class:"map icon"},null,-1))),V=s((()=>(0,n.Lk)("i",{class:"share square icon"},null,-1))),P=s((()=>(0,n.Lk)("i",{class:"qrcode icon"},null,-1)));function z(e,t,o,s,z,Z){const J=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("div",a,[(0,n.bF)(J,{to:"/flag/"+(e.h.uid||e.h.idx)},{default:(0,n.k6)((()=>[(0,n.Lk)("div",r,[(0,n.Lk)("h3",u,[(0,n.Lk)("img",{class:"main",src:e.getIcon(e.h),alt:"^_^"},null,8,c),(0,n.eW)((0,i.v_)(e.h.name),1),e.h.learner_birth?((0,n.uX)(),(0,n.CE)("span",d,[(0,n.eW)("-"),(0,n.Lk)("span",{innerHTML:e.toAge(e.h.learner_birth)},null,8,h),(0,n.eW)("歲")])):(0,n.Q3)("",!0),e.h.child_birth?((0,n.uX)(),(0,n.CE)("span",p,"(孩子約")):(0,n.Q3)("",!0),e.h.child_birth2?((0,n.uX)(),(0,n.CE)("span",g,(0,i.v_)(e.toAge(e.h.child_birth2))+" ~",1)):(0,n.Q3)("",!0),e.h.child_birth?((0,n.uX)(),(0,n.CE)("span",m,(0,i.v_)(e.toAge(e.h.child_birth))+" 歲)",1)):(0,n.Q3)("",!0)])]),(0,n.Lk)("div",k,[(0,n.Lk)("p",f,[(0,n.Lk)("span",{innerHTML:e.highlight(e.h.address,e.mySearch)},null,8,b),(0,n.eW)("   - "+(0,i.v_)(e.countDateDiff(e.h.lastUpdate))+"已更新",1)]),e.h.learner_habit&&e.full?((0,n.uX)(),(0,n.CE)("p",{key:0,class:"description",innerHTML:"興趣： "+e.highlight(e.h.learner_habit,e.mySearch)},null,8,v)):(0,n.Q3)("",!0),e.h.share?((0,n.uX)(),(0,n.CE)("p",{key:1,class:"description",innerHTML:"可分享： "+e.highlight(e.h.share,e.mySearch)},null,8,L)):(0,n.Q3)("",!0),e.h.ask?((0,n.uX)(),(0,n.CE)("p",{key:2,class:"description",innerHTML:"尋找： "+e.highlight(e.h.ask,e.mySearch)},null,8,y)):(0,n.Q3)("",!0),e.h.price?((0,n.uX)(),(0,n.CE)("p",{key:3,class:"description",innerHTML:"可支付： "+e.highlight(e.h.price,e.mySearch)},null,8,C)):(0,n.Q3)("",!0)]),e.h.connect_me&&e.full?((0,n.uX)(),(0,n.CE)("div",w,[_,e.isEmail(e.h.connect_me)?((0,n.uX)(),(0,n.CE)("p",A,[(0,n.eW)("可點擊的email連絡方式： "),(0,n.Lk)("a",{onClick:t[0]||(t[0]=(0,l.D$)((t=>e.gotoMail(e.h.connect_me)),["stop"]))},(0,i.v_)(e.h.connect_me),1)])):((0,n.uX)(),(0,n.CE)("p",E,"連絡方式： "+(0,i.v_)(e.h.connect_me),1)),e.h.freetime?((0,n.uX)(),(0,n.CE)("p",U,"有空時間： "+(0,i.v_)(e.h.freetime),1)):(0,n.Q3)("",!0)])):(0,n.Q3)("",!0),(0,n.Lk)("div",S,[B,e.h.site?((0,n.uX)(),(0,n.CE)("p",F,[(0,n.Lk)("a",{onClick:t[1]||(t[1]=(0,l.D$)((t=>e.goto(e.h.site)),["stop"]))},[(0,n.eW)("個人網址："),(0,n.Lk)("img",{src:"https://www.google.com/s2/favicons?domain="+e.h.site,title:"個人網址",alt:"個人網址"},null,8,W),X])])):(0,n.Q3)("",!0),e.h.site2?((0,n.uX)(),(0,n.CE)("p",x,[(0,n.Lk)("a",{onClick:t[2]||(t[2]=(0,l.D$)((t=>e.goto(e.h.site2)),["stop"]))},[(0,n.eW)("社群網址："),(0,n.Lk)("img",{src:"https://www.google.com/s2/favicons?domain="+e.h.site2,title:"社群網址",alt:"個人網址"},null,8,R),G])])):(0,n.Q3)("",!0)]),(0,n.Lk)("div",I,[M,e.full?((0,n.uX)(),(0,n.CE)("p",N,[(0,n.Lk)("span",{class:"text",innerHTML:e.highlight(e.h.note,e.mySearch)},null,8,q),Q])):((0,n.uX)(),(0,n.CE)("p",T,[(0,n.Lk)("span",{class:"text",innerHTML:e.highlight(e.part(e.h.note),e.mySearch)+"..."},null,8,O),$]))])])),_:1},8,["to"]),j,(0,n.Lk)("div",{class:(0,i.C4)(["ui bottom attached stackable buttons",{vertical:!e.full||e.thin}])},[!e.uid||e.book&&-1!=e.book.indexOf(e.h.uid||e.h.idx)?e.uid&&e.book&&e.book.indexOf(e.h.uid||e.h.idx)>-1?((0,n.uX)(),(0,n.CE)("div",{key:1,class:"ui red button",onClick:t[4]||(t[4]=t=>e.removeBook(e.book.indexOf(e.h.uid||e.h.idx)))},[H,(0,n.eW)("從名簿移除")])):(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("div",{key:0,class:"ui green button",onClick:t[3]||(t[3]=t=>e.addBook(e.h.uid||e.h.idx))},[D,(0,n.eW)("登入名簿")])),(0,n.Lk)("div",{class:"ui purple button",onClick:t[5]||(t[5]=t=>e.locate(e.h,!0))},[K,(0,n.eW)("地圖檢視")]),(0,n.Lk)("div",{class:"ui blue button",onClick:t[6]||(t[6]=t=>e.copyFlagURL(e.h.uid))},[V,(0,n.eW)("分享名片")]),(0,n.bF)(J,{class:"ui teal button",to:"/qr/"+e.h.uid},{default:(0,n.k6)((()=>[P,(0,n.eW)("顯示QR碼")])),_:1},8,["to"])],2)])}var Z=o(9034),J=(0,n.pM)({name:"NameCard",mixins:[Z.A],props:{h:{type:Object,required:!0},mySearch:{type:String,required:!1,default:()=>""},full:{type:Boolean,required:!1,default:()=>!1},uid:{type:String,required:!1,default:()=>""},book:{type:Array,required:!1,default:()=>[]}},data(){return{thin:window.innerWidth<720}},methods:{isEmail(e){const t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return t.test(e)},goto(e){window.open(e)},locate:function(e,t){console.log(e),this.$emit("locate",e,t)},addBook:function(e){console.log(e),this.$emit("addBook",e)},removeBook:function(e){console.log(e),this.$emit("removeBook",e)},gotoMail(e){window.location.href=`mailto:${e}`},loginGoogle:function(){this.$emit("loginGoogle")},copyFlagURL(e){if(!document.hasFocus())return void alert("Document does not have focus, cannot copy link.");const t="https://auto20-next.pages.dev/#/flag/"+e;navigator.clipboard.writeText(t).then((()=>{window.alert("已複製該名片")})).catch((e=>{console.error("無法複製該名片",e)})),this.$forceUpdate()}}}),Y=o(1241);const ee=(0,Y.A)(J,[["render",z],["__scopeId","data-v-37ec74e8"]]);var te=ee},4088:function(e,t,o){o.d(t,{A:function(){return d}});var n=o(6768);const i={class:"hello"},l=(0,n.Lk)("div",{class:"ui active inverted dimmer"},[(0,n.Lk)("div",{class:"ui big text loader"},"Loading...")],-1),s=[l];function a(e,t,o,l,a,r){return(0,n.uX)(),(0,n.CE)("div",i,s)}var r=(0,n.pM)({name:"LoaderComponent",data(){return{}},methods:{}}),u=o(1241);const c=(0,u.A)(r,[["render",a]]);var d=c},1501:function(e,t,o){e.exports=o.p+"img/handshake1.3875f7ab.webp"}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var l=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(l.exports,l,l.exports,o),l.loaded=!0,l.exports}o.m=e,function(){var e=[];o.O=function(t,n,i,l){if(!n){var s=1/0;for(c=0;c<e.length;c++){n=e[c][0],i=e[c][1],l=e[c][2];for(var a=!0,r=0;r<n.length;r++)(!1&l||s>=l)&&Object.keys(o.O).every((function(e){return o.O[e](n[r])}))?n.splice(r--,1):(a=!1,l<s&&(s=l));if(a){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[n,i,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+({5:"flag",138:"profile",246:"myplace",522:"maps",583:"groups",594:"about",928:"privacy-policy",952:"book",998:"qr"}[e]||e)+"."+{5:"66f34ad0",138:"6b4a6ccb",246:"b790c803",522:"b2217be9",583:"e44a0e70",594:"cff43860",886:"54748357",928:"09709c72",952:"872b3072",998:"7a1a31b8"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+{5:"flag",138:"profile",246:"myplace",522:"maps",583:"groups",594:"about",928:"privacy-policy",952:"book",998:"qr"}[e]+"."+{5:"837bdcf0",138:"4365b807",246:"62348fe6",522:"5fa7a45c",583:"9bd27289",594:"2549591a",928:"0366857e",952:"fe7e6de6",998:"a3161191"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="auto20-next:";o.l=function(n,i,l,s){if(e[n])e[n].push(i);else{var a,r;if(void 0!==l)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+l){a=d;break}}a||(r=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",t+l),a.src=n),e[n]=[i];var h=function(t,o){a.onerror=a.onload=null,clearTimeout(p);var i=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(e){return e(o)})),t)return t(o)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),r&&document.head.appendChild(a)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){o.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,i,l){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",o.nc&&(s.nonce=o.nc);var a=function(o){if(s.onerror=s.onload=null,"load"===o.type)i();else{var n=o&&o.type,a=o&&o.target&&o.target.href||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+a+")");r.name="ChunkLoadError",r.code="CSS_CHUNK_LOAD_FAILED",r.type=n,r.request=a,s.parentNode&&s.parentNode.removeChild(s),l(r)}};return s.onerror=s.onload=a,s.href=t,n?n.parentNode.insertBefore(s,n.nextSibling):document.head.appendChild(s),s},t=function(e,t){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var i=o[n],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===e||l===t))return i}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){i=s[n],l=i.getAttribute("data-href");if(l===e||l===t)return i}},n=function(n){return new Promise((function(i,l){var s=o.miniCssF(n),a=o.p+s;if(t(s,a))return i();e(n,a,null,i,l)}))},i={524:0};o.f.miniCss=function(e,t){var o={5:1,138:1,246:1,522:1,583:1,594:1,928:1,952:1,998:1};i[e]?t.push(i[e]):0!==i[e]&&o[e]&&t.push(i[e]=n(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={524:0};o.f.j=function(t,n){var i=o.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var l=new Promise((function(o,n){i=e[t]=[o,n]}));n.push(i[2]=l);var s=o.p+o.u(t),a=new Error,r=function(n){if(o.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var l=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+l+": "+s+")",a.name="ChunkLoadError",a.type=l,a.request=s,i[1](a)}};o.l(s,r,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,l,s=n[0],a=n[1],r=n[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(r)var c=r(o)}for(t&&t(n);u<s.length;u++)l=s[u],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(c)},n=self["webpackChunkauto20_next"]=self["webpackChunkauto20_next"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(9383)}));n=o.O(n)})();
//# sourceMappingURL=app.028f737a.js.map