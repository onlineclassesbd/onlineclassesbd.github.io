(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e489d3a"],{"4b1d":function(t,e,s){},"841c":function(t,e,s){"use strict";var a=s("d784"),n=s("825a"),r=s("1d80"),i=s("129f"),o=s("14c3");a("search",1,(function(t,e,s){return[function(e){var s=r(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,s):new RegExp(e)[t](String(s))},function(t){var a=s(e,t,this);if(a.done)return a.value;var r=n(t),l=String(this),c=r.lastIndex;i(c,0)||(r.lastIndex=0);var u=o(r,l);return i(r.lastIndex,c)||(r.lastIndex=c),null===u?-1:u.index}]}))},9146:function(t){t.exports=JSON.parse('{"sscr":"https://script.google.com/macros/s/AKfycbxNoPpc9QWveT-O9OM2M57R7cTCMcbXsgLhKNufuGnCM0soWjDlgd_3VCtpfXVQlr1p/exec?type="}')},"91b6":function(t,e,s){"use strict";s("4b1d")},eb2b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"leaderboard"},[s("v-container",[s("h1",{staticClass:"text-center"},[t._v("Leaderboard-"+t._s(this.$route.params.id))]),s("v-card",{staticClass:"mt-5 ma-auto transparent resultcontainer",attrs:{"max-width":"600px"}},[s("v-card-title",[s("v-text-field",{staticClass:"ma-auto",attrs:{label:"Search by Name/College","append-icon":"mdi-magnify"},on:{keyup:t.searchResult},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),s("v-card-text",[t.allresult.length>0?s("v-list",{staticClass:"transparent"},t._l(t.testResults,(function(e,a){return s("v-list-item",{key:a,class:t.getborderStyle(e.position)},[s("v-list-item-avatar",{staticClass:"mb-5"},[s("v-btn",{class:""+t.getStyle(e.position),attrs:{fab:"",small:"",dark:""}},[s("h2",[t._v(t._s(e.position))])])],1),s("v-list-item-content",[s("v-list-item-title",[s("b",[t._v(t._s(e.name))])]),s("v-list-item-subtitle",{staticClass:"black--text"},[t._v(" "+t._s(e.school)+" ")]),s("v-list-item-subtitle",{staticClass:"black--text"},[t._v(" "+t._s(e.duration)+" Minutes ")])],1),s("v-list-item-action",[s("button",{staticClass:"totalmarks"},[t._v(t._s(e.score))])])],1)})),1):s("div",{staticClass:"text-center"},[s("v-progress-circular",{staticClass:"ma-auto",attrs:{size:100,color:"primary",indeterminate:""}})],1)],1)],1)],1)],1)},n=[],r=(s("d3b7"),s("7db0"),s("d81d"),s("b0c0"),s("b680"),s("4de4"),s("caad"),s("2532"),s("841c"),s("ac1f"),s("9146")),i={data:function(){return{search:"",testResults:[],allresult:[],results:[]}},methods:{modeltestResults:function(){var t=this;fetch(r.sscr+"specialmodeltest").then((function(t){return t.json()})).then((function(e){var s=e.routines.find((function(e){return e.id==t.$route.params.id}));fetch("https://script.google.com/macros/s/AKfycbxWJDwdp1OKnGhcx4mwQU6rFTd67-StoxygjVogPhe51sVUZnl_zFkTthOko2hSldba/exec?sheet="+s.exam).then((function(t){return t.json()})).then((function(e){var s=e;t.testResults=s.sort((function(t,e){return t.duration-e.duration})).sort((function(t,e){return e.score-t.score})).map((function(e,s){return{position:s+1,name:e.name,school:e.school,duration:t.millisToMinutesAndSeconds(e.duration),score:e.score}})),t.allresult=t.testResults}))}))},millisToMinutesAndSeconds:function(t){var e=Math.floor(t/6e4),s=(t%6e4/1e3).toFixed(0);return e+":"+(s<10?"0":"")+s},searchResult:function(){var t=this;this.testResults=this.allresult.filter((function(e){if(e.school.toLowerCase().includes(t.search.toLowerCase())||e.name.toLowerCase().includes(t.search.toLowerCase()))return e}))},getStyle:function(t){return 1==t?"success":2==t?"orange darken-2":3==t?"indigo":""},getborderStyle:function(t){return 1==t?"s singleResult mb-2":2==t?"f singleResult mb-2":3==t?"d singleResult mb-2":"singleResult mb-2"}},created:function(){this.modeltestResults(),window.scrollTo(0,0)}},o=i,l=(s("91b6"),s("2877")),c=s("6544"),u=s.n(c),d=s("8336"),m=s("b0af"),f=s("99d9"),h=s("a523"),v=s("8860"),b=s("da13"),p=s("1800"),x=s("8270"),g=s("5d23"),C=s("490a"),V=s("8654"),_=Object(l["a"])(o,a,n,!1,null,"38e8f1d5",null);e["default"]=_.exports;u()(_,{VBtn:d["a"],VCard:m["a"],VCardText:f["c"],VCardTitle:f["d"],VContainer:h["a"],VList:v["a"],VListItem:b["a"],VListItemAction:p["a"],VListItemAvatar:x["a"],VListItemContent:g["a"],VListItemSubtitle:g["b"],VListItemTitle:g["c"],VProgressCircular:C["a"],VTextField:V["a"]})}}]);