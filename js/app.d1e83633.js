(function(t){function e(e){for(var a,r,s=e[0],o=e[1],u=e[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);h&&h(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i={app:0},c=[];function s(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-73979d65":"f3b22131","chunk-2c789470":"a49bba90","chunk-35823db7":"1e1aa6d9","chunk-16a4b338":"0dbaa731","chunk-66aa8bcd":"3b15c47e","chunk-54fad540":"d50202ac","chunk-6dcb8acc":"aa35e2fe","chunk-3810efdf":"6baf57af","chunk-409ad679":"ed6889bc","chunk-d12a5668":"b5f3762a","chunk-e55003da":"a8e752f2","chunk-e69e85da":"8ff216da"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={"chunk-73979d65":1,"chunk-2c789470":1,"chunk-35823db7":1,"chunk-16a4b338":1,"chunk-66aa8bcd":1,"chunk-54fad540":1,"chunk-6dcb8acc":1,"chunk-3810efdf":1,"chunk-409ad679":1,"chunk-d12a5668":1,"chunk-e55003da":1,"chunk-e69e85da":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-73979d65":"0fc1c29e","chunk-2c789470":"c4cb8489","chunk-35823db7":"ec255bd3","chunk-16a4b338":"860c8417","chunk-66aa8bcd":"d3f791e1","chunk-54fad540":"3dd0c551","chunk-6dcb8acc":"88121145","chunk-3810efdf":"16b1664b","chunk-409ad679":"7a7ebb58","chunk-d12a5668":"f9f4d0f5","chunk-e55003da":"97946f77","chunk-e69e85da":"39751ec3"}[t]+".css",i=o.p+a,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===i)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||i,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[t],h.parentNode.removeChild(h),n(c)},h.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(h);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[t]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/onlineclassesbd/",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var h=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",dark:"",height:"80px"}},[a("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){t.show=!t.show}}}),a("div",{attrs:{app:""}},[a("router-link",{staticClass:"row",attrs:{to:"/"}},[a("img",{staticStyle:{height:"60px"},attrs:{src:n("cf05"),alt:""}}),a("img",{staticClass:"mt-4 ml-n12",staticStyle:{height:"60px"},attrs:{src:n("7095"),alt:""}})])],1),a("v-spacer"),a("div",{staticClass:"hidden-md-and-down"},[a("v-btn",{attrs:{text:"",to:"/"}},[t._v("Free Classes")]),a("v-menu",{attrs:{"offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{text:""}},"v-btn",r,!1),n),[t._v(" English ")])]}}])},[a("v-list",[a("v-list-item",{attrs:{to:"/course/english"}},[a("v-list-item-title",[t._v("English 1st Paper")])],1),a("v-list-item",{attrs:{to:"/course/grammar"}},[a("v-list-item-title",[t._v("English Grammar(A-Z)")])],1)],1)],1),a("v-btn",{attrs:{text:"",to:"/course/ict"}},[t._v("ICT")]),a("v-menu",{attrs:{"offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{text:""}},"v-btn",r,!1),n),[t._v(" Varsity ")])]}}])},[a("v-list",[a("v-list-item",{attrs:{to:"/course/all_varsity_medical"}},[a("v-list-item-title",[t._v("All Varsity + Medical English")])],1),a("v-list-item",{attrs:{to:"/course/chittagong_special"}},[a("v-list-item-title",[t._v("Chittagong University Special")])],1),a("v-list-item",{attrs:{to:"/course/medical_english_a_z"}},[a("v-list-item-title",[t._v("Medical English A-Z")])],1)],1)],1)],1)],1),a("v-navigation-drawer",{staticClass:"navdrawer",attrs:{app:"",dark:"",temporary:""},on:{change:function(e){t.show=!t.show}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("div",{staticClass:"text-right mt-2 mr-2"},[a("v-icon",{on:{click:function(e){t.show=!t.show}}},[t._v("mdi-close")])],1),a("v-list",[a("v-list-item",{attrs:{link:"",to:"/"}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"balooda"},[t._v(" Free Classes ")])],1)],1),a("v-menu",{attrs:{"offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-list-item",t._g(t._b({attrs:{link:""}},"v-list-item",r,!1),n),[a("v-list-item-content",[a("v-list-item-title",{staticClass:"balooda"},[t._v(" English ")])],1)],1)]}}])},[a("v-list",[a("v-list-item",{attrs:{to:{name:"Course",params:{type:"english"}}}},[a("v-list-item-title",[t._v("English 1st Paper")])],1),a("v-list-item",{attrs:{to:{name:"Course",params:{type:"grammar"}}}},[a("v-list-item-title",[t._v("English Grammar(A-Z)")])],1)],1)],1),a("v-list-item",{attrs:{link:"",to:"/course/ict"}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"balooda"},[t._v(" ICT ")])],1)],1),a("v-menu",{attrs:{"offset-y":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-list-item",t._g(t._b({attrs:{link:""}},"v-list-item",r,!1),n),[a("v-list-item-content",[a("v-list-item-title",{staticClass:"balooda"},[t._v(" Varsity ")])],1)],1)]}}])},[a("v-list",[a("v-list-item",{attrs:{to:"/course/all_varsity_medical"}},[a("v-list-item-title",[t._v("All Varsity + Medical English")])],1),a("v-list-item",{attrs:{to:"/course/chittagong_special"}},[a("v-list-item-title",[t._v("Chittagong University Special")])],1),a("v-list-item",{attrs:{to:"/course/medical_english_a_z"}},[a("v-list-item-title",[t._v("Medical English A-Z")])],1)],1)],1)],1)],1),a("v-main",{staticClass:"grey lighten-3"},[a("router-view",{key:t.$route.fullPath})],1)],1)},i=[],c={name:"App",data:function(){return{show:!1}}},s=c,o=(n("c7cc"),n("2877")),u=n("6544"),l=n.n(u),d=n("7496"),h=n("40dc"),m=n("5bc1"),f=n("8336"),v=n("132d"),p=n("8860"),b=n("da13"),k=n("5d23"),g=n("f6c4"),y=n("e449"),_=n("f774"),w=n("2fa4"),C=Object(o["a"])(s,r,i,!1,null,"403b8660",null),E=C.exports;l()(C,{VApp:d["a"],VAppBar:h["a"],VAppBarNavIcon:m["a"],VBtn:f["a"],VIcon:v["a"],VList:p["a"],VListItem:b["a"],VListItemContent:k["a"],VListItemTitle:k["c"],VMain:g["a"],VMenu:y["a"],VNavigationDrawer:_["a"],VSpacer:w["a"]});var x=n("2f62");a["a"].use(x["a"]);var A=new x["a"].Store({state:{},mutations:{},actions:{},modules:{}}),P=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));a["a"].use(P["a"]);var S=[{path:"/",name:"Home",component:function(){return Promise.all([n.e("chunk-73979d65"),n.e("chunk-35823db7"),n.e("chunk-16a4b338")]).then(n.bind(null,"bb51"))}},{path:"/english",name:"English",meta:{requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-73979d65"),n.e("chunk-35823db7"),n.e("chunk-66aa8bcd"),n.e("chunk-6dcb8acc"),n.e("chunk-409ad679")]).then(n.bind(null,"7c2c"))}},{path:"/course/:type",name:"Course",props:!0,component:function(){return Promise.all([n.e("chunk-73979d65"),n.e("chunk-35823db7"),n.e("chunk-66aa8bcd"),n.e("chunk-6dcb8acc"),n.e("chunk-3810efdf")]).then(n.bind(null,"4dec"))}},{path:"/varsity",name:"Varsity",meta:{requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-73979d65"),n.e("chunk-35823db7"),n.e("chunk-66aa8bcd"),n.e("chunk-6dcb8acc"),n.e("chunk-d12a5668")]).then(n.bind(null,"92e5"))}},{path:"/login",name:"Auth",component:function(){return Promise.all([n.e("chunk-73979d65"),n.e("chunk-35823db7"),n.e("chunk-66aa8bcd"),n.e("chunk-54fad540")]).then(n.bind(null,"2fef"))}},{path:"/basicexam/:id",name:"ExamQuestion",meta:{requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-73979d65"),n.e("chunk-e69e85da")]).then(n.bind(null,"3589"))}},{path:"/exam/:examtype/:id",name:"ExamQuestionPremium",meta:{requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-73979d65"),n.e("chunk-2c789470")]).then(n.bind(null,"cf12"))}},{path:"/ranking/:ranktype/:id",name:"Ranking",meta:{requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-73979d65"),n.e("chunk-35823db7"),n.e("chunk-e55003da")]).then(n.bind(null,"a936"))}}],V=new P["a"]({mode:"history",base:"/onlineclassesbd/",routes:S});V.beforeEach((function(t,e,n){var a=t.matched.some((function(t){return t.meta.requiresAuth})),r=t.matched.some((function(t){return t.meta.requiresAuthEnglish})),i=localStorage.getItem("currentUser");a?i?n():n({path:"/login",query:{redirect:t.fullPath}}):r?i?n():n({path:"/english",query:{redirect:t.fullPath}}):n()}));var O=V,j=n("f309");a["a"].use(j["a"]);var q=new j["a"]({}),T=n("2ef0"),M=n.n(T),I=n("9955"),L=n.n(I),N=n("14ba"),B=n.n(N),U=n("2ead"),Z=n.n(U);a["a"].use(B.a),a["a"].use(L.a,{lodash:M.a}),a["a"].use(Z.a),a["a"].config.productionTip=!1,new a["a"]({store:A,router:O,vuetify:q,render:function(t){return t(E)}}).$mount("#app")},7095:function(t,e,n){t.exports=n.p+"img/logoleft.6321c84c.png"},"815a":function(t,e,n){},c7cc:function(t,e,n){"use strict";n("815a")},cf05:function(t,e,n){t.exports=n.p+"img/logo.5fe389a3.png"}});