(function(e){function t(t){for(var a,r,i=t[0],o=t[1],s=t[2],l=0,h=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&h.push(c[r][0]),c[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);d&&d(t);while(h.length)h.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==c[i]&&(a=!1)}a&&(u.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},c={app:0},u=[];function i(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-73979d65":"f3b22131","chunk-2c789470":"a49bba90","chunk-35823db7":"1e1aa6d9","chunk-05883b0a":"bccc0d2b","chunk-02445909":"ea5506c2","chunk-705393e8":"d33b220d","chunk-0cd7291d":"42d6fbbf","chunk-339f7256":"3d59cfab","chunk-4d1e63cc":"fdbeac0b","chunk-54fad540":"d50202ac","chunk-e55003da":"a8e752f2","chunk-b58e5624":"2c2fa7f8"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-73979d65":1,"chunk-2c789470":1,"chunk-35823db7":1,"chunk-05883b0a":1,"chunk-02445909":1,"chunk-705393e8":1,"chunk-0cd7291d":1,"chunk-339f7256":1,"chunk-4d1e63cc":1,"chunk-54fad540":1,"chunk-e55003da":1,"chunk-b58e5624":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-73979d65":"0fc1c29e","chunk-2c789470":"c4cb8489","chunk-35823db7":"ec255bd3","chunk-05883b0a":"cab59e1c","chunk-02445909":"5e75f96d","chunk-705393e8":"44b2f8cf","chunk-0cd7291d":"9463f74c","chunk-339f7256":"374e52c5","chunk-4d1e63cc":"de98ff6b","chunk-54fad540":"3dd0c551","chunk-e55003da":"97946f77","chunk-b58e5624":"ef1a5c7f"}[e]+".css",c=o.p+a,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===c))return t()}var h=document.getElementsByTagName("style");for(i=0;i<h.length;i++){s=h[i],l=s.getAttribute("data-href");if(l===a||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete r[e],d.parentNode.removeChild(d),n(u)},d.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var u=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(e);var h=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",h.name="ChunkLoadError",h.type=a,h.request=r,n[1](h)}c[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/onlineclassesbd/",o.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var h=0;h<s.length;h++)t(s[h]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0c74":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",dark:""}},[n("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(t){e.show=!e.show}}}),n("div",{attrs:{app:""}},[n("h3",{staticClass:"cursive"},[e._v("Online Classes BD")])]),n("v-spacer"),n("div",{staticClass:"hidden-md-and-down"},[n("v-btn",{attrs:{text:"",to:"/"}},[e._v("Free Classes")]),n("v-btn",{attrs:{text:"",to:"/english"}},[e._v("English")]),n("v-btn",{attrs:{text:"",to:"/ict"}},[e._v("ICT")]),n("v-btn",{attrs:{text:"",to:"/varsity"}},[e._v("Varsity")])],1)],1),n("v-navigation-drawer",{staticClass:"navdrawer",attrs:{app:"",dark:"",temporary:""},on:{change:function(t){e.show=!e.show}},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("div",{staticClass:"text-right mt-2 mr-2"},[n("v-icon",{on:{click:function(t){e.show=!e.show}}},[e._v("mdi-close")])],1),n("v-list",[n("v-list-item",{attrs:{link:"",to:"/"}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"balooda"},[e._v(" Free Classes ")])],1)],1),n("v-list-item",{attrs:{link:"",to:"/english"}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"balooda"},[e._v(" English ")])],1)],1),n("v-list-item",{attrs:{link:"",to:"/ict"}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"balooda"},[e._v(" ICT ")])],1)],1),n("v-list-item",{attrs:{link:"",to:"/varsity"}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"balooda"},[e._v(" Varsity ")])],1)],1)],1)],1),n("v-main",{staticClass:"grey lighten-3"},[n("router-view")],1)],1)},c=[],u={name:"App",data:function(){return{show:!1}}},i=u,o=(n("8700"),n("2877")),s=n("6544"),l=n.n(s),h=n("7496"),d=n("40dc"),f=n("5bc1"),p=n("8336"),m=n("132d"),b=n("8860"),v=n("da13"),k=n("5d23"),g=n("f6c4"),y=n("f774"),w=n("2fa4"),C=Object(o["a"])(i,r,c,!1,null,"3e8f9b83",null),P=C.exports;l()(C,{VApp:h["a"],VAppBar:d["a"],VAppBarNavIcon:f["a"],VBtn:p["a"],VIcon:m["a"],VList:b["a"],VListItem:v["a"],VListItemContent:k["a"],VListItemTitle:k["c"],VMain:g["a"],VNavigationDrawer:y["a"],VSpacer:w["a"]});var _=n("2f62");a["a"].use(_["a"]);var x=new _["a"].Store({state:{},mutations:{},actions:{},modules:{}}),A=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));a["a"].use(A["a"]);var E=[{path:"/",name:"Home",component:function(){return Promise.all([n.e("chunk-73979d65"),n.e("chunk-35823db7"),n.e("chunk-05883b0a"),n.e("chunk-02445909")]).then(n.bind(null,"bb51"))}},{path:"/english",name:"English",meta:{requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-73979d65"),n.e("chunk-35823db7"),n.e("chunk-05883b0a"),n.e("chunk-705393e8"),n.e("chunk-339f7256")]).then(n.bind(null,"7c2c"))}},{path:"/ict",name:"ICT",meta:{requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-73979d65"),n.e("chunk-35823db7"),n.e("chunk-05883b0a"),n.e("chunk-705393e8"),n.e("chunk-4d1e63cc")]).then(n.bind(null,"c272"))}},{path:"/varsity",name:"Varsity",meta:{requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-73979d65"),n.e("chunk-35823db7"),n.e("chunk-05883b0a"),n.e("chunk-705393e8"),n.e("chunk-0cd7291d")]).then(n.bind(null,"92e5"))}},{path:"/login",name:"Auth",component:function(){return Promise.all([n.e("chunk-73979d65"),n.e("chunk-35823db7"),n.e("chunk-05883b0a"),n.e("chunk-705393e8"),n.e("chunk-54fad540")]).then(n.bind(null,"2fef"))}},{path:"/basicexam/:id",name:"ExamQuestion",meta:{requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-73979d65"),n.e("chunk-b58e5624")]).then(n.bind(null,"3589"))}},{path:"/exam/:examtype/:id",name:"ExamQuestionPremium",meta:{requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-73979d65"),n.e("chunk-2c789470")]).then(n.bind(null,"cf12"))}},{path:"/ranking/:ranktype/:id",name:"Ranking",meta:{requiresAuth:!0},component:function(){return Promise.all([n.e("chunk-73979d65"),n.e("chunk-35823db7"),n.e("chunk-e55003da")]).then(n.bind(null,"a936"))}}],V=new A["a"]({mode:"history",base:"/onlineclassesbd/",routes:E});V.beforeEach((function(e,t,n){var a=e.matched.some((function(e){return e.meta.requiresAuth})),r=e.matched.some((function(e){return e.meta.requiresAuthEnglish})),c=localStorage.getItem("currentUser");a?c?n():n({path:"/login",query:{redirect:e.fullPath}}):r?c?n():n({path:"/english",query:{redirect:e.fullPath}}):n()}));var O=V,j=n("f309");a["a"].use(j["a"]);var q=new j["a"]({}),S=n("2ef0"),T=n.n(S),I=n("9955"),L=n.n(I),B=n("14ba"),N=n.n(B),M=n("2ead"),D=n.n(M);a["a"].use(N.a),a["a"].use(L.a,{lodash:T.a}),a["a"].use(D.a),a["a"].config.productionTip=!1,new a["a"]({store:x,router:O,vuetify:q,render:function(e){return e(P)}}).$mount("#app")},8700:function(e,t,n){"use strict";n("0c74")}});