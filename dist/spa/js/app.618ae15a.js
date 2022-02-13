(()=>{"use strict";var e={9942:(e,t,a)=>{a(5363),a(71);var o=a(8880),s=a(9592),n=a(1543),l=a(6417),r=a(6249),i=a(8622),c=a(8229),d=a(6395);const u={config:{},lang:n.Z,plugins:{Notify:l.Z,Loading:r.Z,Dialog:i.Z,Meta:c.ZP,LocalStorage:d.Z}};var m=a(3673);function p(e,t,a,o,s,n){const l=(0,m.up)("router-view");return(0,m.wg)(),(0,m.j4)(l)}const g=(0,m.aZ)({name:"App"});g.render=p;const f=g;var v=a(2756),b=a(7083),h=a(9582),w=a(5301);const y=[{path:"/",component:()=>Promise.all([a.e(736),a.e(768)]).then(a.bind(a,4768)),children:[...w._j]}],k=(0,b.BC)((function(){const e=h.PO,t=(0,h.p7)({scrollBehavior:()=>({left:0,top:0}),routes:y,history:e("/")});return t}));async function W(e){const t="function"===typeof v.default?await(0,v.default)({}):v.default,{storeKey:o}=await Promise.resolve().then(a.bind(a,2756)),n="function"===typeof k?await k({store:t}):k;t.$router=n;const l=e(f);return l.use(s.Z,u),{app:l,store:t,storeKey:o,router:n}}const j="/";async function P({app:e,router:t,store:a,storeKey:o},s){let n=!1;const l=e=>{n=!0;const a=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=a},r=window.location.href.replace(window.location.origin,"");for(let c=0;!1===n&&c<s.length;c++)try{await s[c]({app:e,router:t,store:a,ssrContext:null,redirect:l,urlPath:r,publicPath:j})}catch(i){return i&&i.url?void(window.location.href=i.url):void console.error("[Quasar] boot error:",i)}!0!==n&&(e.use(t),e.use(a,o),e.mount("#q-app"))}W(o.ri).then((e=>Promise.all([Promise.resolve().then(a.bind(a,5474))]).then((t=>{const a=t.map((e=>e.default)).filter((e=>"function"===typeof e));P(e,a)}))))},5474:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r,api:()=>l});var o=a(7083),s=a(52),n=a.n(s);const l=n().create({baseURL:"http://localhost:8000"}),r=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=n(),e.config.globalProperties.$api=l}))},5301:(e,t,a)=>{a.d(t,{_j:()=>P,h:()=>j});var o={};a.r(o),a.d(o,{loadCounters:()=>f,setGoto:()=>g,setLoading:()=>u,setProjects:()=>m,setVerticalScroll:()=>p});var s={};a.r(s),a.d(s,{getGoto:()=>w,getLoading:()=>v,getProjects:()=>b,getVerticalScroll:()=>h});const n="HOME/SET_LOADING",l="HOME/SET_PROJECTS",r="HOME/SET_VERTICAL_SCROLL",i="HOME/SET_GO_TO";var c=a(52),d=a.n(c);const u=({commit:e},t)=>e(n,t),m=({commit:e},t)=>e(l,t),p=({commit:e},t)=>e(r,t),g=({commit:e},t)=>e(i,t);async function f({dispatch:e}){try{e("setLoading",!0);const{data:t}=await d().get("https://api.github.com/users/menezedouglas/repos");let a=0;for(let e=0;e<t.length;e++){const o=await d().get(`https://api.github.com/repos/menezedouglas/${t[e].name}/stats/commit_activity`);for(let e=0;e<o.data.length;e++)a+=o.data[e].total}return e("setProjects",t),e("setLoading",!1),Promise.resolve({repositories:t.length,commits:a})}catch(t){return e("setProjects",[]),e("setLoading",!1),Promise.reject(t)}}const v=({loading:e})=>e,b=({projects:e})=>e,h=({verticalScroll:e})=>e,w=({goTo:e})=>e,y={[n](e,t){e.loading=t},[l](e,t){e.projects=t},[r](e,t){e.verticalScroll=t},[i](e,t){e.goTo=t}};var k=a(1959);const W={loading:(0,k.iH)(!1),verticalScroll:(0,k.iH)(0),goTo:(0,k.iH)(0),projects:(0,k.iH)([])},j={actions:o,getters:s,mutations:y,state:W,namespaced:!0};a(8383);a(71);const P=[{name:"Início",path:"/",component:()=>Promise.resolve().then(a.bind(a,8383))}]},7725:(e,t,a)=>{a.d(t,{r:()=>y,h:()=>u});var o={};a.r(o),a.d(o,{setPages:()=>l});var s={};a.r(s),a.d(s,{getPages:()=>r});const n="menu/set_pages",l=({commit:e},t)=>e(n,t),r=({pages:e})=>e,i={[n](e,t){e.pages=t}};var c=a(1959);const d={pages:(0,c.iH)([{icon:"home",label:"Início",route:"/"}])},u={actions:o,getters:s,mutations:i,state:d,namespaced:!0};var m=a(3673);const p=(0,m.HX)("data-v-28b858d6"),g=p(((e,t,a,o,s,n)=>{const l=(0,m.up)("q-route-tab"),r=(0,m.up)("q-tabs");return(0,m.wg)(),(0,m.j4)(r,{align:"right","inline-label":""},{default:p((()=>[((0,m.wg)(!0),(0,m.j4)(m.HY,null,(0,m.Ko)(e.pages,(({route:t,icon:a,label:o},s)=>((0,m.wg)(),(0,m.j4)(l,{key:s,to:t,label:e.isMobile()?null:o,icon:a},null,8,["to","label","icon"])))),128))])),_:1})})),f=(0,m.aZ)({name:"menuList",computed:{pages:{set(e){this.$store.dispatch("menu/setPages",e)},get(){return this.$store.getters["menu/getPages"]}}},methods:{isMobile(){return this.$q.platform.is.mobile}}});var v=a(7547),b=a(208),h=a(7518),w=a.n(h);f.render=g,f.__scopeId="data-v-28b858d6";const y=f;w()(f,"components",{QTabs:v.Z,QRouteTab:b.Z})},2756:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var o=a(7083),s=a(5250),n=a(5301),l=a(7725);const r={home:n.h,menu:l.h},i=(0,o.h)((function(){return(0,s.MT)({modules:r,strict:!1})}))},8383:(e,t,a)=>{a.r(t),a.d(t,{default:()=>re});var o=a(3673);function s(e,t,a,s,n,l){const r=(0,o.up)("welcome"),i=(0,o.up)("skills"),c=(0,o.up)("about"),d=(0,o.up)("credits");return(0,o.wg)(),(0,o.j4)("div",null,[(0,o.Wm)(r),(0,o.Wm)(i),(0,o.Wm)(c),(0,o.Wm)(d)])}const n=(0,o.HX)("data-v-41afc740");(0,o.dD)("data-v-41afc740");const l={class:"welcome"},r={class:"row full-height"},i={class:"col-md col-12 relative-position"},c={class:"col-md-8 col-12 relative-position"},d={class:"absolute-center"},u=(0,o.Wm)("small",null,"Olá!",-1),m=(0,o.Wm)("span",null,"Me chamo Douglas 😉",-1),p=(0,o.Wm)("small",null,"Full Stack Developer",-1),g=(0,o.Uk)("Em breve");(0,o.Cn)();const f=n(((e,t,a,s,f,v)=>{const b=(0,o.up)("q-img"),h=(0,o.up)("q-separator"),w=(0,o.up)("q-tooltip"),y=(0,o.up)("q-btn"),k=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(k,{class:"q-pa-md half-page bg-xiketic"},{default:n((()=>[(0,o.Wm)("div",l,[(0,o.Wm)("div",r,[(0,o.Wm)("div",i,[(0,o.Wm)(b,{src:"undraw_developer_activity.svg",class:"welcome-logo"})]),(0,o.Wm)("div",c,[(0,o.Wm)("div",d,[u,m,p,(0,o.Wm)(h,{class:"q-my-sm bg-transparent"}),(0,o.Wm)(y,{outline:"",color:"purple",label:"Inicie uma conversa comigo",onClick:t[1]||(t[1]=t=>e.contactFormDialog=!e.contactFormDialog)},{default:n((()=>[(0,o.Wm)(w,null,{default:n((()=>[g])),_:1})])),_:1})])])])])])),_:1})})),v=(0,o.aZ)({name:"welcome"});var b=a(4379),h=a(4027),w=a(5869),y=a(8240),k=a(2406),W=a(7518),j=a.n(W);v.render=f,v.__scopeId="data-v-41afc740";const P=v;j()(v,"components",{QPage:b.Z,QImg:h.Z,QSeparator:w.Z,QBtn:y.Z,QTooltip:k.Z});const S=(0,o.HX)("data-v-55aad4f6");(0,o.dD)("data-v-55aad4f6");const _={class:"absolute-center"},q={class:"row"},C=(0,o.Wm)("div",{class:"col-12 text-center text-white"},[(0,o.Wm)("div",{class:"text-h5"},"Douglas Menezes"),(0,o.Wm)("small",null,"FULL STACK DEVELOPER")],-1),x={class:"col-12 q-mb-lg"},O=(0,o.Wm)("div",{class:"col-12 text-center text-grey-6 q-my-xl"},[(0,o.Wm)("p",null,[(0,o.Uk)(" Design inspirado em "),(0,o.Wm)("a",{href:"https://portifolio-seven-smoky.vercel.app/"}," Jessika Miranda ツ ")])],-1),T=(0,o.Wm)("div",{class:"col-12 text-grey-8 text-center"},[(0,o.Wm)("small",null,[(0,o.Uk)(" Douglas Menezes Evangelista da Silva "),(0,o.Wm)("br"),(0,o.Uk)(" Desenvolvimento de Software "),(0,o.Wm)("br"),(0,o.Uk)(" CNPJ 36.044.262/0001-03 "),(0,o.Wm)("br"),(0,o.Uk)(" © MIT License. ")])],-1);(0,o.Cn)();const Z=S(((e,t,a,s,n,l)=>{const r=(0,o.up)("socials"),i=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(i,{class:"q-pa-md bg-xiketic"},{default:S((()=>[(0,o.Wm)("div",_,[(0,o.Wm)("div",q,[C,(0,o.Wm)("div",x,[(0,o.Wm)(r)]),O,T])])])),_:1})}));var E=a(2323);const L=(0,o.HX)("data-v-723406c8");(0,o.dD)("data-v-723406c8");const H={class:"socials"};(0,o.Cn)();const D=L(((e,t,a,s,n,l)=>{const r=(0,o.up)("q-tooltip");return(0,o.wg)(),(0,o.j4)("div",H,[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(e.socials,(({label:t,logo:a,url:s},n)=>((0,o.wg)(),(0,o.j4)("div",{key:n,class:"social-item",onClick:t=>e.redirect(s)},[(0,o.Wm)("i",{class:a},[e.$q.platform.is.mobile?(0,o.ry)("",!0):((0,o.wg)(),(0,o.j4)(r,{key:0},{default:L((()=>[(0,o.Uk)((0,E.zw)(t),1)])),_:2},1024))],2)],8,["onClick"])))),128))])})),M=(0,o.aZ)({name:"social",data(){return{socials:[{label:"github",logo:"fab fa-github",url:"https://github.com/menezedouglas"},{label:"linkedin",logo:"fab fa-linkedin",url:"https://www.linkedin.com/in/menezedouglas/"},{label:"codepen",logo:"fab fa-codepen",url:"https://codepen.io/menezedouglas"}]}},methods:{redirect(e){window.open(e)}}});M.render=D,M.__scopeId="data-v-723406c8";const A=M;j()(M,"components",{QTooltip:k.Z});const I=(0,o.aZ)({name:"credits",components:{socials:A}});I.render=Z,I.__scopeId="data-v-55aad4f6";const z=I;j()(I,"components",{QPage:b.Z});const N=(0,o.HX)("data-v-4b3cb23c");(0,o.dD)("data-v-4b3cb23c");const Q={class:"row"},U={class:"col-12 text-center"},B={class:"row"},F={class:"col-12 q-mt-xl"},K={class:"skills"},R={class:"skills-label"},$=(0,o.Wm)("div",{class:"col-12"},[(0,o.Wm)("small",{class:"text-grey-6 q-pa-md"}," * Adquirindo conhecimento sobre... ")],-1);(0,o.Cn)();const J=N(((e,t,a,s,n,l)=>{const r=(0,o.up)("q-chip"),i=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(i,{class:"q-pa-md half-page bg-white"},{default:N((()=>[(0,o.Wm)("div",Q,[(0,o.Wm)("div",U,[(0,o.Wm)(r,{dense:"",outline:"","text-color":"purple",class:"q-mt-lg",label:"Habilidades (Skills)"})])]),(0,o.Wm)("div",B,[(0,o.Wm)("div",F,[(0,o.Wm)("div",K,[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(e.skills,(({label:e,icon:t},a)=>((0,o.wg)(),(0,o.j4)("div",{key:a,class:"skills-item"},[(0,o.Wm)("i",{class:t+" skills-icon"},null,2),(0,o.Wm)("span",R,(0,E.zw)(e),1)])))),128))])]),$])])),_:1})})),V=(0,o.aZ)({name:"skills",data(){return{skills:[{label:"Laravel",icon:"fab fa-laravel"},{label:"GitHub",icon:"fab fa-github"},{label:"PHP",icon:"fab fa-php"},{label:"NodeJS",icon:"fab fa-node"},{label:"NPM",icon:"fab fa-npm"},{label:"Docker",icon:"fab fa-docker"},{label:"Javascript",icon:"fab fa-js"},{label:"HTML5",icon:"fab fa-html5"},{label:"CSS3",icon:"fab fa-css3"},{label:"SASS/SCSS",icon:"fab fa-sass"},{label:"Bootstrap",icon:"fab fa-bootstrap"},{label:"VueJS",icon:"fab fa-vuejs"},{label:"Ubuntu",icon:"fab fa-ubuntu"},{label:"React *",icon:"fab fa-react"}]}}});var X=a(7030);V.render=J,V.__scopeId="data-v-4b3cb23c";const G=V;j()(V,"components",{QPage:b.Z,QChip:X.Z});const Y=(0,o.HX)("data-v-051a3cca");(0,o.dD)("data-v-051a3cca");const ee={class:"row half-page"},te={class:"col-md-4 col-12 flex items-center justify-center q-pa-lg"},ae=(0,o.Wm)("div",{class:"col-md-8 col-12 q-my-auto q-pa-lg"},[(0,o.Wm)("div",{class:"text-h5 text-white q-my-md"},"Sobre mim"),(0,o.Wm)("p",{class:"about-text"}," Sou um profissional dedicado, com vontade em fazer parte da equipe, junto crescermos e evoluirmos. Sou amigável, compreensivo, atencioso e gosto de trabalhar em equipe. "),(0,o.Wm)("p",{class:"about-text"}," Trabalho com desenvolvimento de sistemas e sites modernos, responsivos e que irão atender suas necessidades específicas. Utilizo o melhor framework PHP disponível atualmente (Laravel), bem como NodeJS e Bootstrap. Venho me empenhando para ganhar experiência em desenvolvimento mobile com React Native e Expo, com a finalidade de atender as necessidades atuais do mercado mundial. ")],-1);(0,o.Cn)();const oe=Y(((e,t,a,s,n,l)=>{const r=(0,o.up)("q-img"),i=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(i,{class:"half-page bg-xiketic"},{default:Y((()=>[(0,o.Wm)("div",ee,[(0,o.Wm)("div",te,[(0,o.Wm)(r,{src:"me.jpg",class:"profile-image"})]),ae])])),_:1})})),se=(0,o.aZ)({name:"about"});se.render=oe,se.__scopeId="data-v-051a3cca";const ne=se;j()(se,"components",{QPage:b.Z,QImg:h.Z});const le=(0,o.aZ)({name:"home",components:{welcome:P,credits:z,skills:G,about:ne}});le.render=s;const re=le}},t={};function a(o){var s=t[o];if(void 0!==s)return s.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,a),n.exports}a.m=e,(()=>{var e=[];a.O=(t,o,s,n)=>{if(!o){var l=1/0;for(c=0;c<e.length;c++){for(var[o,s,n]=e[c],r=!0,i=0;i<o.length;i++)(!1&n||l>=n)&&Object.keys(a.O).every((e=>a.O[e](o[i])))?o.splice(i--,1):(r=!1,n<l&&(l=n));r&&(e.splice(c--,1),t=s())}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[o,s,n]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,o)=>(a.f[o](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+e+".00835c7b.js"})(),(()=>{a.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{736:"697223b7",768:"ab70d875"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="app.douglasmenezes:";a.l=(o,s,n,l)=>{if(e[o])e[o].push(s);else{var r,i;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+n){r=u;break}}r||(i=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",t+n),r.src=o),e[o]=[s];var m=(t,a)=>{r.onerror=r.onload=null,clearTimeout(p);var s=e[o];if(delete e[o],r.parentNode&&r.parentNode.removeChild(r),s&&s.forEach((e=>e(a))),t)return t(a)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=m.bind(null,r.onerror),r.onload=m.bind(null,r.onload),i&&document.head.appendChild(r)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.p="/"})(),(()=>{var e=(e,t,a,o)=>{var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var n=n=>{if(s.onerror=s.onload=null,"load"===n.type)a();else{var l=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=l,i.request=r,s.parentNode.removeChild(s),o(i)}};return s.onerror=s.onload=n,s.href=t,document.head.appendChild(s),s},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var s=a[o],n=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(n===e||n===t))return s}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){s=l[o],n=s.getAttribute("data-href");if(n===e||n===t)return s}},o=o=>new Promise(((s,n)=>{var l=a.miniCssF(o),r=a.p+l;if(t(l,r))return s();e(o,r,s,n)})),s={143:0};a.f.miniCss=(e,t)=>{var a={768:1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=o(e).then((()=>{s[e]=0}),(t=>{throw delete s[e],t})))}})(),(()=>{var e={143:0};a.f.j=(t,o)=>{var s=a.o(e,t)?e[t]:void 0;if(0!==s)if(s)o.push(s[2]);else{var n=new Promise(((a,o)=>s=e[t]=[a,o]));o.push(s[2]=n);var l=a.p+a.u(t),r=new Error,i=o=>{if(a.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var n=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.src;r.message="Loading chunk "+t+" failed.\n("+n+": "+l+")",r.name="ChunkLoadError",r.type=n,r.request=l,s[1](r)}};a.l(l,i,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,o)=>{var s,n,[l,r,i]=o,c=0;for(s in r)a.o(r,s)&&(a.m[s]=r[s]);if(i)var d=i(a);for(t&&t(o);c<l.length;c++)n=l[c],a.o(e,n)&&e[n]&&e[n][0](),e[l[c]]=0;return a.O(d)},o=self["webpackChunkapp_douglasmenezes"]=self["webpackChunkapp_douglasmenezes"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=a.O(void 0,[736],(()=>a(9942)));o=a.O(o)})();