"use strict";(self["webpackChunkauto20_next"]=self["webpackChunkauto20_next"]||[]).push([[583],{6858:function(e,s,t){t.r(s),t.d(s,{default:function(){return Fe}});var i=t(6768),o=t(4232),r=t(5130);const n=e=>((0,i.Qi)("data-v-a1ff3bfa"),e=e(),(0,i.jt)(),e),u={class:"hello"},l={class:"ui center aligned grid"},a={key:0,class:"sixteen wide column"},d={class:"ui huge buttons center aligned"},c=n((()=>(0,i.Lk)("i",{class:"google icon"},null,-1))),p={key:1},h={class:"ui center aligned grid"},g={class:"ui column center aligned","ui-if":"groups[$route.params.idx].n"},m={class:"ui raised segment center aligned",style:{"margin-top":"30px","max-width":"800px"}},k={class:"ui header"},b={class:"center aligned"},v=n((()=>(0,i.Lk)("br",{class:"thin-only"},null,-1))),f=n((()=>(0,i.Lk)("i",{class:"edit icon"},null,-1))),L=n((()=>(0,i.Lk)("i",{class:"globe icon"},null,-1))),_={class:"ui form"},w={key:0,class:"field"},$=n((()=>(0,i.Lk)("i",{class:"google icon"},null,-1))),y={class:"field"},x={class:"ui labeled input"},C={class:"ui label"},R=["placeholder"],I={class:"field"},E={key:0},X=n((()=>(0,i.Lk)("i",{class:"delete icon"},null,-1))),U={class:"ui grid center aligned"},K={class:"row"},N={class:"center aligned"},G=["src","alt","title"],W={key:0},Q={class:"two column stackable row"},T={class:"column"},Z={key:0,class:"ui divided list center aligned"},F={class:"item center aligned"},S={class:"resource-content"},M=["href"],O=["src","alt"],J=n((()=>(0,i.Lk)("div",{class:"filler"},null,-1))),V={class:"resource-buttons"},H=["onClick"],j={key:0,class:"heart icon"},B={key:1,class:"heart outline icon"},D={class:"item ui form"},A={class:"ui form"},q={class:"field no-margin no-padding"},z={class:"ui labeled input"},Y={class:"ui label"},P=["placeholder"],ee={class:"field no-margin no-padding"},se={class:"ui labeled input"},te={class:"ui label"},ie=["placeholder"],oe={class:"field no-padding"},re={key:1,class:"ui divided list center aligned"},ne={class:"item center aligned"},ue=n((()=>(0,i.Lk)("div",{class:"resource-content"},null,-1))),le=["onClick"],ae=["src","alt"],de={key:0},ce={class:"ui labeled input"},pe={class:"ui label"},he={class:"ui labeled input"},ge={class:"ui label"},me=["placeholder"],ke={class:"column center aligned"},be={class:"ui divided list left aligned"},ve=["src"],fe={key:0,class:"item ui form"},Le={class:"field"},_e={class:"ui labeled input"},we=["src"],$e=["placeholder"],ye={class:"ui center aligned grid",style:{"margin-top":"20px"}},xe={class:"column"},Ce={class:"ui buttons"},Re=n((()=>(0,i.Lk)("i",{class:"copy icon"},null,-1))),Ie=n((()=>(0,i.Lk)("i",{class:"facebook icon"},null,-1))),Ee=n((()=>(0,i.Lk)("i",{class:"twitter icon"},null,-1)));function Xe(e,s,t,n,Xe,Ue){const Ke=(0,i.g2)("router-link"),Ne=(0,i.g2)("VueMarkdownIt");return(0,i.uX)(),(0,i.CE)("div",u,[(0,i.Lk)("div",l,[e.uid||e.users&&0!=e.toList(e.users).length?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("div",a,[(0,i.Lk)("div",d,[(0,i.Lk)("button",{class:"ui orange button",onClick:s[0]||(s[0]=(...s)=>e.toggleLogin&&e.toggleLogin(...s))},[c,(0,i.eW)((0,o.v_)(e.$t("login.login_to_see_data")),1)])])])),e.users&&e.toList(e.users).length>0&&e.groups[e.$route.params.idx]&&!e.groups[e.$route.params.idx].hidden?((0,i.uX)(),(0,i.CE)("div",p,[(0,i.Lk)("div",h,[(0,i.Lk)("div",g,[(0,i.Lk)("div",m,[(0,i.Lk)("h3",k,"〈"+(0,o.v_)(e.groups[e.$route.params.idx].n)+"〉",1),(0,i.Lk)("p",b,[(0,i.eW)((0,o.v_)(e.groups[e.$route.params.idx].intro),1),v,e.isMember(e.groups[e.$route.params.idx].idx)?((0,i.uX)(),(0,i.CE)("a",{key:0,onClick:s[1]||(s[1]=s=>e.toggleEdit(e.$route.params.idx))},[f,(0,i.eW)((0,o.v_)(e.edit?e.$t("login.end"):"")+" "+(0,o.v_)(e.$t("group.edit_group")),1)])):(0,i.Q3)("",!0)]),(0,i.bF)(Ke,{class:"ui basic green button",to:"/groups"},{default:(0,i.k6)((()=>[L,(0,i.eW)((0,o.v_)(e.$t("group.explore_groups")),1)])),_:1}),(0,i.bo)((0,i.Lk)("div",_,[e.uid?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("div",w,[(0,i.Lk)("button",{class:"ui orange button",onClick:s[2]||(s[2]=s=>e.loginGoogle())},[$,(0,i.eW)((0,o.v_)(e.$t("login.login_first")),1)])])),(0,i.Lk)("div",y,[(0,i.Lk)("div",x,[(0,i.Lk)("label",C,(0,o.v_)(e.$t("group.enter_intro")),1),(0,i.bo)((0,i.Lk)("textarea",{"onUpdate:modelValue":s[3]||(s[3]=s=>e.newIntro=s),onInput:s[4]||(s[4]=s=>e.filterInput("newIntro",s)),placeholder:e.$t("group.enter_intro_first"),rows:"5",style:{width:"100%","font-size":"18px"}},null,40,R),[[r.Jo,e.newIntro]])])]),(0,i.Lk)("div",I,[(0,i.Lk)("a",{class:(0,o.C4)(["ui green button",{disabled:!e.newIntro}]),onClick:s[5]||(s[5]=s=>e.addIntro(e.$route.params.idx))},(0,o.v_)(e.$t("group.update_intro")),3)])],512),[[r.aG,e.edit]]),0===(e.groups[e.$route.params.idx].members||[]).length?((0,i.uX)(),(0,i.CE)("p",E,[(0,i.Lk)("button",{class:"ui red button",onClick:s[6]||(s[6]=s=>e.hideGroup(e.$route.params.idx))},[X,(0,i.eW)((0,o.v_)(e.$t("group.delete_group")),1)])])):(0,i.Q3)("",!0),(0,i.Lk)("div",U,[(0,i.Lk)("div",K,[(0,i.Lk)("p",N,[(0,i.eW)((0,o.v_)(e.$t("group.members")),1),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.groups[e.$route.params.idx].members,(s=>((0,i.uX)(),(0,i.CE)("span",null,[e.isUser(s)?((0,i.uX)(),(0,i.Wv)(Ke,{key:0,to:"/flag/"+s},{default:(0,i.k6)((()=>[(0,i.Lk)("img",{class:"ui avatar",src:e.users[s].photoURL,alt:e.users[s].n,title:e.users[s].n},null,8,G)])),_:2},1032,["to"])):(0,i.Q3)("",!0)])))),256)),e.uid?((0,i.uX)(),(0,i.CE)("span",W,[e.isUser(e.uid)&&!e.isMember(e.groups[e.$route.params.idx].idx)?((0,i.uX)(),(0,i.CE)("a",{key:0,class:"ui green tiny button",onClick:s[7]||(s[7]=s=>e.join(e.groups[e.$route.params.idx].idx))},(0,o.v_)(e.$t("groups.join_group")),1)):(0,i.Q3)("",!0),e.isUser(e.uid)&&e.isMember(e.groups[e.$route.params.idx].idx)?((0,i.uX)(),(0,i.CE)("a",{key:1,class:"ui red tiny button",onClick:s[8]||(s[8]=s=>e.out(e.groups[e.$route.params.idx].idx))},(0,o.v_)(e.$t("groups.out_group")),1)):(0,i.Q3)("",!0)])):(0,i.Q3)("",!0)])]),(0,i.Lk)("div",Q,[(0,i.Lk)("div",T,[e.edit?((0,i.uX)(),(0,i.CE)("div",re,[(0,i.Lk)("div",ne,(0,o.v_)(e.$t("group.resources")),1),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.groups[e.$route.params.idx].res,((t,n)=>(0,i.bo)(((0,i.uX)(),(0,i.CE)("div",{class:"item left aligned",key:n+t.n+t.href},[ue,(0,i.Lk)("a",{onClick:s=>e.toggleEditResource(t,n)},[(0,i.Lk)("img",{src:"http://www.google.com/s2/favicons?domain="+t.href,alt:t.n},null,8,ae),(0,i.eW)((0,o.v_)(t.n),1)],8,le),e.edit&&e.editResourceIndex===n?((0,i.uX)(),(0,i.CE)("div",de,[(0,i.Lk)("div",ce,[(0,i.Lk)("label",pe,(0,o.v_)(e.$t("group.enter_resource")),1),(0,i.bo)((0,i.Lk)("input",{type:"text","onUpdate:modelValue":s[14]||(s[14]=s=>e.tempResource.n=s),style:{width:"100%","font-size":"20px",padding:"15px"}},null,512),[[r.Jo,e.tempResource.n]])]),(0,i.Lk)("div",he,[(0,i.Lk)("label",ge,(0,o.v_)(e.$t("group.enter_link")),1),(0,i.bo)((0,i.Lk)("input",{type:"text","onUpdate:modelValue":s[15]||(s[15]=s=>e.tempResource.href=s),placeholder:e.$t("group.enter_link_first"),style:{width:"100%","font-size":"20px",padding:"15px"}},null,8,me),[[r.Jo,e.tempResource.href]])]),(0,i.Lk)("a",{class:"ui green button",onClick:s[16]||(s[16]=s=>e.saveResource(e.$route.params.idx))},(0,o.v_)(e.$t("group.save")),1),(0,i.Lk)("a",{class:"ui red button",onClick:s[17]||(s[17]=s=>e.edit=!1)},(0,o.v_)(e.$t("group.cancel")),1)])):(0,i.Q3)("",!0)])),[[r.aG,!t.hidden]]))),128))])):((0,i.uX)(),(0,i.CE)("div",Z,[(0,i.Lk)("div",F,(0,o.v_)(e.$t("group.resources_sorted")),1),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.sortedResources,((s,t)=>(0,i.bo)(((0,i.uX)(),(0,i.CE)("div",{class:"item center aligned",key:t+s.n+s.href},[(0,i.Lk)("div",S,[(0,i.Lk)("a",{href:s.href,target:"_blank",rel:"noopener noreferrer"},[(0,i.Lk)("img",{src:"http://www.google.com/s2/favicons?domain="+s.href,alt:s.n},null,8,O),(0,i.eW)((0,o.v_)(s.n),1)],8,M),J]),(0,i.Lk)("div",V,[e.isUser(e.uid)?((0,i.uX)(),(0,i.CE)("a",{key:0,class:"ui blue button",onClick:t=>e.likeResource(e.$route.params.idx,s.rid)},[(s.likes||[]).includes(e.uid)?((0,i.uX)(),(0,i.CE)("i",j)):((0,i.uX)(),(0,i.CE)("i",B)),(0,i.eW)((0,o.v_)((s.likes||[]).length)+" "+(0,o.v_)(e.$t("group.likes")),1)],8,H)):(0,i.Q3)("",!0)])])),[[r.aG,!s.hidden]]))),128)),(0,i.bo)((0,i.Lk)("div",D,[(0,i.bo)((0,i.Lk)("div",A,[(0,i.Lk)("div",q,[(0,i.Lk)("div",z,[(0,i.Lk)("label",Y,(0,o.v_)(e.$t("group.enter_resource")),1),(0,i.bo)((0,i.Lk)("input",{type:"text","onUpdate:modelValue":s[9]||(s[9]=s=>e.newResName=s),onInput:s[10]||(s[10]=s=>e.filterInput("newResName",s)),placeholder:e.$t("group.enter_resource_first")},null,40,P),[[r.Jo,e.newResName]])])]),(0,i.Lk)("div",ee,[(0,i.Lk)("div",se,[(0,i.Lk)("label",te,(0,o.v_)(e.$t("group.enter_link")),1),(0,i.bo)((0,i.Lk)("input",{type:"text","onUpdate:modelValue":s[11]||(s[11]=s=>e.newHref=s),onInput:s[12]||(s[12]=s=>e.filterInput("newHref",s)),placeholder:e.$t("group.enter_link_first")},null,40,ie),[[r.Jo,e.newHref]])])]),(0,i.Lk)("div",oe,[(0,i.Lk)("a",{class:(0,o.C4)(["ui green button",{disabled:!e.newHref||!e.newResName}]),onClick:s[13]||(s[13]=s=>e.addRes(e.$route.params.idx))},(0,o.v_)(e.$t("group.add_resource")),3)])],512),[[r.aG,e.uid]])],512),[[r.aG,e.uid]])]))]),(0,i.bo)((0,i.Lk)("div",ke,[(0,i.eW)((0,o.v_)(e.$t("login.leave_messages")),1),(0,i.Lk)("div",be,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.latestChats,((s,t)=>((0,i.uX)(),(0,i.CE)("div",{class:"item",key:t},[(0,i.Lk)("img",{class:"ui avatar",src:s.photoURL},null,8,ve),(0,i.eW)((0,o.v_)(e.removeBracket(s.n))+" : ",1),(0,i.bF)(Ne,{source:s.t},null,8,["source"])])))),128)),e.isMember(e.groups[e.$route.params.idx].idx)?((0,i.uX)(),(0,i.CE)("div",fe,[(0,i.Lk)("div",Le,[(0,i.Lk)("div",_e,[(0,i.Lk)("img",{class:"ui avatar",src:e.photoURL},null,8,we),(0,i.bo)((0,i.Lk)("textarea",{"onUpdate:modelValue":s[18]||(s[18]=s=>e.msg=s),onInput:s[19]||(s[19]=s=>e.filterInput("msg",s)),placeholder:e.$t("group.anything_to_say"),rows:"3",style:{"font-size":"18px",padding:"10px"}},null,40,$e),[[r.Jo,e.msg]]),(0,i.Lk)("a",{class:(0,o.C4)(["ui label green button",{disabled:!e.msg}]),onClick:s[20]||(s[20]=s=>e.addChat(e.$route.params.idx))},(0,o.v_)(e.$t("login.leave_messages")),3)])])])):(0,i.Q3)("",!0)])],512),[[r.aG,!e.edit]])])])])])]),(0,i.Lk)("div",ye,[(0,i.Lk)("div",xe,[(0,i.Lk)("div",Ce,[(0,i.Lk)("button",{class:"ui blue button",onClick:s[21]||(s[21]=(...s)=>e.copyLink&&e.copyLink(...s))},[Re,(0,i.eW)((0,o.v_)(e.$t("group.copy_link")),1)]),(0,i.Lk)("button",{class:"ui facebook button",onClick:s[22]||(s[22]=(...s)=>e.shareToFacebook&&e.shareToFacebook(...s))},[Ie,(0,i.eW)("Facebook")]),(0,i.Lk)("button",{class:"ui twitter button",onClick:s[23]||(s[23]=(...s)=>e.shareToTwitter&&e.shareToTwitter(...s))},[Ee,(0,i.eW)("Twitter")]),(0,i.Lk)("button",{class:"ui line button",onClick:s[24]||(s[24]=(...s)=>e.shareToLine&&e.shareToLine(...s))},"Line")])])])])):(0,i.Q3)("",!0)])])}t(4114);var Ue=t(9034),Ke=t(2134),Ne=t(4161),Ge=t(6808),We=t(851),Qe=(0,i.pM)({name:"GroupsView",props:["photoURL","users","user","uid","mySearch"],metaInfo:{title:"$t('login.auto_gp')"},mixins:[Ue.A],components:{VueMarkdownIt:We.H},data(){return{edit:!1,newIntro:"",newName:"",newResName:"",newHref:"",msg:"",groups:[],editResourceIndex:1/0,tempResource:{}}},computed:{latestChats(){const e=this.$route.params.idx,s=this.groups[e]?.chats||[];return s.slice(-10)},sortedResources(){const e=this.$route.params.idx;return(this.groups[e]?.res||[]).map(((e,s)=>{let t={...e};return t.rid=s,t})).filter((e=>!this.mySearch||e.n.indexOf(this.mySearch)>-1||e.href.indexOf(this.mySearch)>-1||e.des&&e.des.indexOf(this.mySearch)>-1)).sort(((e,s)=>{const t=e.likes?e.likes.length:0,i=s.likes?s.likes.length:0;return i-t}))}},methods:{removeBracket(e){return e.replace(/\(.*?\)/g,"")},hideGroup(e){confirm(this.$t("group.delete_confirm"))&&(this.groups[e].hidden=!0,(0,Ne.hZ)((0,Ne.KR)(Ge.db,"groups/"+e+"/hidden"),!0).then(console.log(this.$t("groups.update_sucess"))).catch((e=>{console.error(this.$t("groups.update_failed"),e)})))},containsKeyword(e){return Ke.R.some((s=>e.includes(s)))},filterInput(e,s){this.containsKeyword(s.target.value)?(alert("Input contains forbidden keywords."),this[e]=""):this[e]=s.target.value},toggleEdit(e){this.isMember(e)?(this.edit=!this.edit,this.edit?this.newIntro=this.groups[e].intro:this.newIntro=""):alert(this.$t("groups.edit_permission"))},loginGoogle(e,s){this.$emit("loginGoogle",e,s)},toggleLogin(){this.$emit("toggleLogin")},isUser(e){return e&&this.users[e]&&this.users[e].note},isMember(e){return(this.groups[e].members||[]).indexOf(this.uid)>-1},join(e){this.groups[e].members=this.groups[e].members||[],this.groups[e].members.push(this.uid),(0,Ne.hZ)((0,Ne.KR)(Ge.db,"groups"),this.groups).then(console.log(this.$t("groups.update_sucess")))},out(e){this.groups[e].members=this.groups[e].members||[],this.groups[e].members=this.groups[e].members.filter((e=>e!==this.uid)),(0,Ne.hZ)((0,Ne.KR)(Ge.db,"groups"),this.groups).then(console.log(this.$t("groups.update_sucess")))},searchBy(e,s){return s?e.filter((function(e){return JSON.stringify(e).indexOf(s)>-1})):e},likeResource(e,s){const t=this.groups[e].res[s].likes||[],i=t.includes(this.uid);i?this.groups[e].res[s].likes=t.filter((e=>e!==this.uid)):this.groups[e].res[s].likes.push(this.uid),(0,Ne.hZ)((0,Ne.KR)(Ge.db,"groups/"+e+"/res/"+s),this.groups[e].res[s]).then((()=>{console.log(this.$t("groups.update_sucess"))})).catch((e=>{console.error(this.$t("groups.update_failed"),e)}))},addChat(e){if(!this.msg.trim())return void alert(this.$t("group.empty_message"));var s={uid:this.uid,n:this.users[this.uid].name?this.users[this.uid].name:this.$t("login.anoymous"),t:this.msg,photoURL:this.photoURL||"",time:(new Date).getTime()},t=this.groups[e].chats?[...this.groups[e].chats]:[];this.msg&&(t.push(s),this.msg=""),(0,Ne.hZ)((0,Ne.KR)(Ge.db,"groups/"+e+"/chats"),t).then(console.log(this.$t("groups.update_sucess"))).catch((e=>{console.error(this.$t("groups.update_failed"),e)}));const i=this.groups[e].members||[];i.forEach((s=>{if(s!==this.uid){let t="/group/"+e;this.addNotificationByUid(s,"在社團「"+this.groups[e].n+"」有新留言",t)}}))},addRes(e){this.groups[e].res=this.groups[e].res||[],this.groups[e].res.push({n:this.newResName,href:this.newHref,likes:[this.uid]}),this.newResName="",this.newHref="",(0,Ne.hZ)((0,Ne.KR)(Ge.db,"groups/"+e+"/res"),this.groups[e].res).then(console.log(this.$t("groups.update_sucess")));const s=this.groups[e].members||[];s.forEach((s=>{if(s!==this.uid){let t="/group/"+e;this.addNotificationByUid(s,"在社團「"+this.groups[e].n+"」有新增社團資源",t)}}))},hideResource(e,s){this.groups[e].res[s].hidden=!0,(0,Ne.hZ)((0,Ne.KR)(Ge.db,"groups/"+e+"/res/"+s+"/hidden"),!0).then((()=>{console.log(this.$t("groups.update_sucess"))})).catch((e=>{console.error(this.$t("groups.update_failed"),e)}))},showResource(e,s){this.groups[e].res[s].hidden=!1,(0,Ne.hZ)((0,Ne.KR)(Ge.db,"groups/"+e+"/res/"+s+"/hidden"),!1).then((()=>{console.log(this.$t("groups.update_sucess"))})).catch((e=>{console.error(this.$t("groups.update_failed"),e)}))},toggleEditResource(e,s){this.tempResource=JSON.parse(JSON.stringify(e)),this.editResourceIndex=s,this.edit=!0},saveResource(e){this.groups[e].res[this.editResourceIndex]={...this.tempResource},(0,Ne.hZ)((0,Ne.KR)(Ge.db,"groups/"+e+"/res/"+this.editResourceIndex),this.groups[e].res[this.editResourceIndex]).then((()=>{console.log(this.$t("groups.update_sucess")),this.editResourceIndex=1/0})).catch((e=>{console.error(this.$t("groups.update_failed"),e)})),this.edit=!1},addNotificationByUid(e,s,t){const i={date:(new Date).toISOString(),from:"systemdef",text:s,route:t,isRead:!1},o=(0,Ne.KR)(Ge.db,"users/"+e+"/notifications");(0,Ne.VC)(o,i).then((()=>{console.log("notification created")})).catch((e=>{console.error("Error creating notification:",e)}))},addGroup(){this.groups.push({n:this.newName,res:[],chats:[],idx:this.groups.length}),this.newName="",(0,Ne.hZ)((0,Ne.KR)(Ge.db,"groups"),this.groups).then(console.log(this.$t("groups.update_sucess")))},addIntro(e){this.newIntro.trim().length&&(this.groups[e].intro=this.newIntro,(0,Ne.hZ)((0,Ne.KR)(Ge.db,"groups/"+e),this.groups[e]).then((()=>console.log(this.$t("login.update_sucess")))).catch((e=>{console.error(this.$t("login.update_failed"),e)})),this.newIntro="")},copyLink(){const e=window.location.href;navigator.clipboard.writeText(e).then((()=>{alert(this.$t("group.link_copied"))})).catch((e=>{console.error("無法複製連結:",e)}))},shareToFacebook(){const e=encodeURIComponent(window.location.href),s=encodeURIComponent(this.groups[this.$route.params.idx].n);window.open(`https://www.facebook.com/sharer/sharer.php?u=${e}&quote=${s}`,"_blank")},shareToTwitter(){const e=encodeURIComponent(window.location.href),s=encodeURIComponent(this.groups[this.$route.params.idx].n);window.open(`https://twitter.com/intent/tweet?url=${e}&text=${s}`,"_blank")},shareToLine(){const e=encodeURIComponent(window.location.href);window.open(`https://social-plugins.line.me/lineit/share?url=${e}`,"_blank")}},mounted(){(0,Ne.Zy)(Ge.sY,(e=>{const s=e.val();this.groups=s||[]}))}}),Te=t(1241);const Ze=(0,Te.A)(Qe,[["render",Xe],["__scopeId","data-v-a1ff3bfa"]]);var Fe=Ze},4275:function(e,s,t){t.r(s),t.d(s,{default:function(){return V}});var i=t(6768),o=t(4232),r=t(5130);const n=e=>((0,i.Qi)("data-v-6c18de9c"),e=e(),(0,i.jt)(),e),u={class:"hello"},l={key:0,class:"ui row"},a={class:"sixteen wide column"},d={class:"ui huge buttons"},c=n((()=>(0,i.Lk)("i",{class:"lock icon"},null,-1))),p={key:1,class:"ui container"},h={class:"ui divided list flex-column-reverse"},g={class:"item form"},m=n((()=>(0,i.Lk)("br",null,null,-1))),k=n((()=>(0,i.Lk)("br",null,null,-1))),b={class:"field"},v={class:"ui labeled input"},f={class:"ui label"},L=["placeholder"],_={class:"field button-field"},w=n((()=>(0,i.Lk)("br",{class:"thin-only"},null,-1))),$={key:0,class:"popular-resources"},y=n((()=>(0,i.Lk)("i",{class:"book icon"},null,-1))),x={class:"ui bulleted list"},C=["href"],R=["src"],I={class:"likes"},E=n((()=>(0,i.Lk)("i",{class:"red heart icon"},null,-1))),X={style:{position:"relative",top:"0.6em"}},U=["src","alt"],K={class:"ui buttons"},N=n((()=>(0,i.Lk)("i",{class:"sign-in icon"},null,-1))),G=["onClick"],W=["onClick"];function Q(e,s,t,n,Q,T){const Z=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("div",u,[e.uid?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("div",l,[(0,i.Lk)("div",a,[(0,i.Lk)("div",d,[(0,i.Lk)("button",{class:"ui orange button",onClick:s[0]||(s[0]=(...s)=>e.toggleLogin&&e.toggleLogin(...s))},[c,(0,i.eW)((0,o.v_)(e.$t("login.login_to_see_data")),1)])])])])),e.users&&e.toList(e.users).length>0?((0,i.uX)(),(0,i.CE)("div",p,[(0,i.Lk)("div",h,[(0,i.bo)((0,i.Lk)("div",g,[m,k,(0,i.Lk)("h4",null,(0,o.v_)(e.$t("groups.create_group")),1),(0,i.Lk)("div",b,[(0,i.Lk)("div",v,[(0,i.Lk)("label",f,(0,o.v_)(e.$t("groups.group_name")),1),(0,i.bo)((0,i.Lk)("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=s=>e.newName=s),onInput:s[2]||(s[2]=s=>e.filterInput("newName",s)),placeholder:e.$t("groups.enter_group_name")},null,40,L),[[r.Jo,e.newName]])])]),(0,i.Lk)("div",_,[(0,i.Lk)("a",{class:(0,o.C4)(["ui green button",{disabled:!e.newName}]),onClick:s[3]||(s[3]=s=>e.addGroup())},(0,o.v_)(e.$t("groups.create_group")),3)])],512),[[r.aG,e.uid&&e.users[e.uid]]]),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.searchBy(e.groups,e.mySearch),((s,t)=>(0,i.bo)(((0,i.uX)(),(0,i.CE)("div",{class:"item",key:s.idx},[(0,i.Lk)("h3",null,"〈"+(0,o.v_)(s.n)+"〉",1),(0,i.Lk)("p",null,[(0,i.eW)((0,o.v_)(s.intro),1),w,(0,i.eW)("    ")]),e.getTopResources(s.res).length>0?((0,i.uX)(),(0,i.CE)("div",$,[(0,i.Lk)("h4",null,[(0,i.eW)((0,o.v_)(e.$t("groups.popular_resources"))+"( Total:",1),y,(0,i.eW)((0,o.v_)((s.res||[]).length)+" "+(0,o.v_)(e.$t("groups.resources"))+" )",1)]),(0,i.Lk)("div",x,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.getTopResources(s.res),(s=>((0,i.uX)(),(0,i.CE)("a",{class:"resource-link",key:s.href,href:s.href,target:"_blank"},[(0,i.Lk)("img",{class:"favicon",src:e.getFavicon(s.href)},null,8,R),(0,i.Lk)("span",null,(0,o.v_)(s.n),1),(0,i.Lk)("span",I,"("+(0,o.v_)((s.likes||[]).length),1),E,(0,i.eW)(")")],8,C)))),128))])])):(0,i.Q3)("",!0),(0,i.Lk)("p",null,[(0,i.Lk)("span",X,(0,o.v_)(e.$t("groups.members")),1),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.members,(s=>((0,i.uX)(),(0,i.CE)("span",null,[e.isUser(s)?((0,i.uX)(),(0,i.Wv)(Z,{key:0,to:"/flag/"+s},{default:(0,i.k6)((()=>[(0,i.Lk)("img",{class:"ui avatar",src:e.users[s].photoURL,alt:e.users[s].name},null,8,U)])),_:2},1032,["to"])):(0,i.Q3)("",!0)])))),256))]),(0,i.Lk)("p",null,[(0,i.Lk)("div",K,[(0,i.bF)(Z,{class:"ui basic green button",to:"/group/"+s.idx},{default:(0,i.k6)((()=>[N,(0,i.eW)((0,o.v_)(e.$t("groups.go_group")),1)])),_:2},1032,["to"]),e.isUser(e.uid)&&!e.isMember(s.idx)?((0,i.uX)(),(0,i.CE)("a",{key:0,class:"ui green button",onClick:t=>e.join(s.idx)},(0,o.v_)(e.$t("groups.join_group")),9,G)):(0,i.Q3)("",!0),e.isUser(e.uid)&&e.isMember(s.idx)?((0,i.uX)(),(0,i.CE)("a",{key:1,class:"ui red basic button",onClick:t=>e.out(s.idx)},(0,o.v_)(e.$t("groups.out_group")),9,W)):(0,i.Q3)("",!0)])])])),[[r.aG,!s.hidden]]))),128))])])):(0,i.Q3)("",!0)])}t(4114),t(4603),t(7566),t(8721);var T=t(9034),Z=t(2134),F=t(4161),S=t(6808),M=(0,i.pM)({mixins:[T.A],name:"GroupsView",props:{uid:{type:String,required:!1},photoURL:{type:String,required:!1},users:{type:Object,required:!1,default:()=>({})},mySearch:{type:String,required:!1}},metaInfo:{title:"$t('login.auto_gp')"},data(){return{edit:!1,newIntro:"",newName:"",newResName:"",newHref:"",msg:"",groups:[]}},watch:{users(e){this.toList(e).length>0&&this.fetchGroupData()}},mounted(){this.uid&&this.fetchGroupData()},methods:{fetchGroupData(){(0,F.Jt)(S.sY).then((e=>{const s=e.val();this.groups=s||[],console.log("Groups data updated:",this.groups)}),(e=>{console.error("Error fetching group data:",e)}))},containsKeyword(e){return Z.R.some((s=>e.includes(s)))},filterInput(e,s){this.containsKeyword(s.target.value)?(alert("Input contains forbidden keywords."),this[e]=""):this[e]=s.target.value},loginGoogle(e,s){this.$emit("loginGoogle",e,s)},toggleLogin(){this.$emit("toggleLogin")},isUser(e){return e&&this.users[e]&&this.users[e].name},isMember(e){return(this.groups[e].members||[]).indexOf(this.uid)>-1},join(e){this.groups[e].members=this.groups[e].members||[],this.groups[e].members.push(this.uid),(0,F.hZ)((0,F.KR)(S.db,"groups"),this.groups).then(console.log(this.$t("groups.update_sucess")))},out(e){window.confirm(this.$t("groups.out_confirm"))&&(this.groups[e].members=this.groups[e].members||[],this.groups[e].members=this.groups[e].members.filter((e=>e!==this.uid)),(0,F.hZ)((0,F.KR)(S.db,"groups"),this.groups).then(console.log(this.$t("groups.update_sucess"))))},searchBy(e,s){return s?e.filter((function(e){return JSON.stringify(e).indexOf(s)>-1})):e},addChat(e){var s={uid:this.uid,n:(this.user.providerData||[{displayName:this.$t("login.anoymous")}])[0].displayName,t:this.msg,photoURL:this.photoURL||"",time:(new Date).getTime()};this.groups[e].chats=this.groups[e].chats||[],this.msg&&(this.groups[e].chats.push(s),this.msg=""),(0,F.hZ)((0,F.KR)(S.db,"groups/"+e),this.g).then(console.log(this.$t("groups.update_sucess")))},addGroup(){this.groups.push({n:this.newName,res:[],chats:[],idx:this.groups.length}),this.newName="",(0,F.hZ)((0,F.KR)(S.db,"groups"),this.groups).then(console.log(this.$t("groups.update_sucess")))},addRes(e){this.groups[e].res=this.groups[e].res||[],this.groups[e].res.push({n:this.newResName,href:this.newHref}),this.newResName="",this.newHref="",(0,F.hZ)((0,F.KR)(S.db,"groups"),this.groups).then(console.log(this.$t("groups.update_sucess")))},addIntro(e){this.groups[e].intro=this.newIntro,this.newIntro="",(0,F.hZ)((0,F.KR)(S.db,"groups"),this.groups).then(console.log(this.$t("groups.update_sucess")))},getTopResources(e){return e&&Array.isArray(e)?e.sort(((e,s)=>(s.likes||[]).length-(e.likes||[]).length)).slice(0,3):[]},getFavicon(e){try{const s=new URL(e).hostname;return`https://www.google.com/s2/favicons?domain=${s}&sz=32`}catch(s){return""}}}}),O=t(1241);const J=(0,O.A)(M,[["render",Q],["__scopeId","data-v-6c18de9c"]]);var V=J}}]);
//# sourceMappingURL=groups.ffb72c2a.js.map