(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab2794aa"],{"03a8":function(t,e,a){},"0fd9":function(t,e,a){"use strict";var n=a("ade3"),s=a("5530"),r=(a("13d5"),a("caad"),a("2532"),a("99af"),a("b64b"),a("5319"),a("ac1f"),a("4ec9"),a("d3b7"),a("3ca3"),a("ddb0"),a("159b"),a("4b85"),a("2b0e")),i=a("d9f7"),c=a("80d2"),o=["sm","md","lg","xl"],u=["start","end","center"];function l(t,e){return o.reduce((function(a,n){return a[t+Object(c["D"])(n)]=e(),a}),{})}var d=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},f=l("align",(function(){return{type:String,default:null,validator:d}})),v=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},m=l("justify",(function(){return{type:String,default:null,validator:v}})),h=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},g=l("alignContent",(function(){return{type:String,default:null,validator:h}})),b={align:Object.keys(f),justify:Object.keys(m),alignContent:Object.keys(g)},p={align:"align",justify:"justify",alignContent:"align-content"};function _(t,e,a){var n=p[t];if(null!=a){if(e){var s=e.replace(t,"");n+="-".concat(s)}return n+="-".concat(a),n.toLowerCase()}}var y=new Map;e["a"]=r["a"].extend({name:"v-row",functional:!0,props:Object(s["a"])(Object(s["a"])(Object(s["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:v}},m),{},{alignContent:{type:String,default:null,validator:h}},g),render:function(t,e){var a=e.props,s=e.data,r=e.children,c="";for(var o in a)c+=String(a[o]);var u=y.get(c);return u||function(){var t,e;for(e in u=[],b)b[e].forEach((function(t){var n=a[t],s=_(e,t,n);s&&u.push(s)}));u.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(n["a"])(t,"align-".concat(a.align),a.align),Object(n["a"])(t,"justify-".concat(a.justify),a.justify),Object(n["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),y.set(c,u)}(),t(a.tag,Object(i["a"])(s,{staticClass:"row",class:u}),r)}})},"24eb":function(t,e,a){"use strict";a("03a8")},"4ec9":function(t,e,a){"use strict";var n=a("6d61"),s=a("6566");t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),s)},6062:function(t,e,a){"use strict";var n=a("6d61"),s=a("6566");t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),s)},"62ad":function(t,e,a){"use strict";var n=a("ade3"),s=a("5530"),r=(a("13d5"),a("a9e3"),a("b64b"),a("5319"),a("ac1f"),a("4ec9"),a("d3b7"),a("3ca3"),a("ddb0"),a("caad"),a("159b"),a("2ca0"),a("4b85"),a("2b0e")),i=a("d9f7"),c=a("80d2"),o=["sm","md","lg","xl"],u=function(){return o.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),l=function(){return o.reduce((function(t,e){return t["offset"+Object(c["D"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return o.reduce((function(t,e){return t["order"+Object(c["D"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(u),offset:Object.keys(l),order:Object.keys(d)};function v(t,e,a){var n=t;if(null!=a&&!1!==a){if(e){var s=e.replace(t,"");n+="-".concat(s)}return"col"!==t||""!==a&&!0!==a?(n+="-".concat(a),n.toLowerCase()):n.toLowerCase()}}var m=new Map;e["a"]=r["a"].extend({name:"v-col",functional:!0,props:Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({cols:{type:[Boolean,String,Number],default:!1}},u),{},{offset:{type:[String,Number],default:null}},l),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var a=e.props,s=e.data,r=e.children,c=(e.parent,"");for(var o in a)c+=String(a[o]);var u=m.get(c);return u||function(){var t,e;for(e in u=[],f)f[e].forEach((function(t){var n=a[t],s=v(e,t,n);s&&u.push(s)}));var s=u.some((function(t){return t.startsWith("col-")}));u.push((t={col:!s||!a.cols},Object(n["a"])(t,"col-".concat(a.cols),a.cols),Object(n["a"])(t,"offset-".concat(a.offset),a.offset),Object(n["a"])(t,"order-".concat(a.order),a.order),Object(n["a"])(t,"align-self-".concat(a.alignSelf),a.alignSelf),t)),m.set(c,u)}(),t(a.tag,Object(i["a"])(s,{class:u}),r)}})},6566:function(t,e,a){"use strict";var n=a("9bf2").f,s=a("7c73"),r=a("e2cc"),i=a("0366"),c=a("19aa"),o=a("2266"),u=a("7dd0"),l=a("2626"),d=a("83ab"),f=a("f183").fastKey,v=a("69f3"),m=v.set,h=v.getterFor;t.exports={getConstructor:function(t,e,a,u){var l=t((function(t,n){c(t,l,e),m(t,{type:e,index:s(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=n&&o(n,t[u],{that:t,AS_ENTRIES:a})})),v=h(e),g=function(t,e,a){var n,s,r=v(t),i=b(t,e);return i?i.value=a:(r.last=i={index:s=f(e,!0),key:e,value:a,previous:n=r.last,next:void 0,removed:!1},r.first||(r.first=i),n&&(n.next=i),d?r.size++:t.size++,"F"!==s&&(r.index[s]=i)),t},b=function(t,e){var a,n=v(t),s=f(e);if("F"!==s)return n.index[s];for(a=n.first;a;a=a.next)if(a.key==e)return a};return r(l.prototype,{clear:function(){var t=this,e=v(t),a=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete a[n.index],n=n.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,a=v(e),n=b(e,t);if(n){var s=n.next,r=n.previous;delete a.index[n.index],n.removed=!0,r&&(r.next=s),s&&(s.previous=r),a.first==n&&(a.first=s),a.last==n&&(a.last=r),d?a.size--:e.size--}return!!n},forEach:function(t){var e,a=v(this),n=i(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:a.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),r(l.prototype,a?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),d&&n(l.prototype,"size",{get:function(){return v(this).size}}),l},setStrong:function(t,e,a){var n=e+" Iterator",s=h(e),r=h(n);u(t,e,(function(t,e){m(this,{type:n,target:t,state:s(t),kind:e,last:void 0})}),(function(){var t=r(this),e=t.kind,a=t.last;while(a&&a.removed)a=a.previous;return t.target&&(t.last=a=a?a.next:t.state.first)?"keys"==e?{value:a.key,done:!1}:"values"==e?{value:a.value,done:!1}:{value:[a.key,a.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),a?"entries":"values",!a,!0),l(e)}}},"68e9":function(t,e,a){},"6d61":function(t,e,a){"use strict";var n=a("23e7"),s=a("da84"),r=a("94ca"),i=a("6eeb"),c=a("f183"),o=a("2266"),u=a("19aa"),l=a("861d"),d=a("d039"),f=a("1c7e"),v=a("d44e"),m=a("7156");t.exports=function(t,e,a){var h=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),b=h?"set":"add",p=s[t],_=p&&p.prototype,y=p,x={},C=function(t){var e=_[t];i(_,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!l(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:function(t,a){return e.call(this,0===t?0:t,a),this})},k=r(t,"function"!=typeof p||!(g||_.forEach&&!d((function(){(new p).entries().next()}))));if(k)y=a.getConstructor(e,t,h,b),c.REQUIRED=!0;else if(r(t,!0)){var S=new y,w=S[b](g?{}:-0,1)!=S,j=d((function(){S.has(1)})),O=f((function(t){new p(t)})),M=!g&&d((function(){var t=new p,e=5;while(e--)t[b](e,e);return!t.has(-0)}));O||(y=e((function(e,a){u(e,y,t);var n=m(new p,e,y);return void 0!=a&&o(a,n[b],{that:n,AS_ENTRIES:h}),n})),y.prototype=_,_.constructor=y),(j||M)&&(C("delete"),C("has"),h&&C("get")),(M||w)&&C(b),g&&_.clear&&delete _.clear}return x[t]=y,n({global:!0,forced:y!=p},x),v(y,t),g||a.setStrong(y,t,h),y}},"84ac":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"timer__container white--text"},[a("div",[a("h2",[t._v(t._s(t.days))]),a("p",[t._v("days")])]),a("div",[a("h2",[t._v(t._s(t.hours))]),a("p",[t._v("hours")])]),a("div",[a("h2",[t._v(t._s(t.minute))]),a("p",[t._v("minute")])]),a("div",[a("h2",[t._v(t._s(t.second))]),a("p",[t._v("second")])])])},s=[],r={props:{end:{required:!0}},data:function(){return{days:0,hours:0,minute:0,second:0}},methods:{showRemaining:function(){var t=this,e=setInterval((function(){var a=t.end-Date.now();if(a<0)clearInterval(e);else{var n=Math.floor(a/t._days),s=Math.floor(a%t._days/t._hours),r=Math.floor(a%t._hours/t._minutes),i=Math.floor(a%t._minutes/t._seconds);t.second=i<10?"0"+i:i,t.minute=r<10?"0"+r:r,t.hours=s<10?"0"+s:s,t.days=n<10?"0"+n:n}}))}},computed:{_seconds:function(){return 1e3},_minutes:function(){return 60*this._seconds},_hours:function(){return 60*this._minutes},_days:function(){return 24*this._hours}},mounted:function(){this.showRemaining()}},i=r,c=(a("24eb"),a("2877")),o=Object(c["a"])(i,n,s,!1,null,"6fd8ee17",null);e["a"]=o.exports},9146:function(t){t.exports=JSON.parse('{"sscr":"https://script.google.com/macros/s/AKfycbxNoPpc9QWveT-O9OM2M57R7cTCMcbXsgLhKNufuGnCM0soWjDlgd_3VCtpfXVQlr1p/exec?type="}')},"9d87":function(t,e,a){"use strict";a("68e9")},f889:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",{staticClass:"transparent",attrs:{flat:""}},[a("v-card-text",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[t.upcoming?a("v-card",{staticClass:"text-center partexam nearest"},[a("v-card",{staticClass:"px-3 pt-4 mx-auto transparent",attrs:{"max-width":"600",flat:""}},[t.upcoming.start>Date.now()?a("Timer",{attrs:{end:t.upcoming.start}}):t.upcoming.end>Date.now()?a("h1",{staticClass:"mx-auto text-center red--text ongoing"},[t._v(" ONGOING... ")]):t._e()],1),a("v-card-title",[a("h2",{staticClass:"ma-auto balooda"},[t._v(" "+t._s(t.upcoming.topic)+" ")])]),a("v-card-subtitle",[a("h3",{staticClass:"ma-auto balooda"},[t._v(" "+t._s(t.upcoming.subject)+" ")])]),a("v-card-text",[a("h2",[t._v("Starting Time")]),a("h3",{staticClass:"my-2"},[t._v(" "+t._s(t._f("moment")(t.upcoming.start,"MMMM Do YYYY, h:mm:ss a"))+" ")]),a("h2",[t._v("Ending Time")]),a("h3",{staticClass:"mt-2"},[t._v(" "+t._s(t._f("moment")(t.upcoming.end,"MMMM Do YYYY, h:mm:ss a"))+" ")]),t.upcoming.end<Date.now()?a("h1",{staticClass:"my-3 red--text"},[t._v(" Ended ")]):t._e(),a("h2",{staticClass:"mt-2"},[t._v(" Per Question marks: 1 "),a("br"),t._v(" Per Question Time: 1 minute "),a("br")]),a("h2",{staticClass:"my-1 red--text"},[t._v(" Total Marks: "+t._s(t.upcoming.total_marks)+" ")]),a("h2",{staticClass:"mt-2 red--text"},[t._v("Negative mark: 0.25")])]),a("v-card-actions",[t.authenticated?a("div",{staticClass:"mx-auto"},[t.upcoming.start<Date.now()?a("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:"",to:"/freemodeltest/"+t.upcoming.id}},[t._v("Start Exam")]):a("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.upcomingalert}},[t._v("Start Exam")]),a("v-btn",{staticClass:"mx-2 my-2 success",attrs:{dark:"",large:"",tile:"",to:"/freerank/"+t.upcoming.id}},[t._v("Leaderboard")]),t.upcoming.end<Date.now()?a("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:"",href:t.upcoming.solve_sheet,target:"_blank"}},[t._v("Solve Sheet")]):a("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.endalert}},[t._v("Solve Sheet")])],1):a("div",{staticClass:"mx-auto"},[a("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.authToggle}},[t._v("Start Exam")]),a("v-btn",{staticClass:"mx-2 my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.authToggle}},[t._v("Leaderboard")]),a("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.authToggle}},[t._v("Solve Sheet")])],1)])],1):t._e()],1),a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"mb-3 subject__filters"},[a("button",{class:"subject__button "+(""==t.se&&"activebtn"),on:{click:function(e){return t.selectSubject("")}}},[t._v(" All ")]),t._l(t.subjects,(function(e,n){return a("button",{key:n,class:"subject__button "+(t.se==e&&"activebtn"),on:{click:function(a){return t.selectSubject(e)}}},[t._v(" "+t._s(e)+" ")])}))],2)]),t._l(t.exams,(function(e,n){return a("v-col",{key:n,attrs:{cols:"12"}},[a("v-card",{staticClass:"text-center partexam"},[a("v-card-title",[a("h2",{staticClass:"ma-auto balooda"},[t._v(t._s(e.topic))])]),a("v-card-subtitle",[a("h3",{staticClass:"ma-auto balooda"},[t._v(" "+t._s(e.subject)+" ")])]),a("v-card-text",[a("h2",[t._v("Starting Time")]),a("h3",{staticClass:"my-2"},[t._v(" "+t._s(t._f("moment")(e.start,"MMMM Do YYYY, h:mm:ss a"))+" ")]),a("h2",[t._v("Ending Time")]),a("h3",{staticClass:"mt-2"},[t._v(" "+t._s(t._f("moment")(e.end,"MMMM Do YYYY, h:mm:ss a"))+" ")]),e.end<Date.now()?a("h1",{staticClass:"my-3 red--text"},[t._v("Ended")]):t._e(),a("h2",{staticClass:"mt-2"},[t._v(" Per Question marks: 1 "),a("br"),t._v(" Per Question Time: 1 minute "),a("br")]),a("h2",{staticClass:"my-1 red--text"},[t._v("Total Marks: "+t._s(e.total_marks))]),a("h2",{staticClass:"my-1 red--text"},[t._v("Negative mark: 0.25")])]),a("v-card-actions",[t.authenticated?a("div",{staticClass:"mx-auto"},[e.start<Date.now()?a("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:"",to:"/freemodeltest/"+e.id}},[t._v("Start Exam")]):a("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.upcomingalert}},[t._v("Start Exam")]),a("v-btn",{staticClass:"mx-2 my-2 success",attrs:{dark:"",large:"",tile:"",to:"/freerank/"+e.id}},[t._v("Leaderboard")]),e.end<Date.now()?a("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:"",href:e.solve_sheet,target:"_blank"}},[t._v("Solve Sheet")]):a("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.endalert}},[t._v("Solve Sheet")])],1):a("div",{staticClass:"mx-auto"},[a("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.authToggle}},[t._v("Start Exam")]),a("v-btn",{staticClass:"mx-2 my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.authToggle}},[t._v("Leaderboard")]),a("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.authToggle}},[t._v("Solve Sheet")])],1)])],1)],1)}))],2),t.exams.length<1?a("div",{staticClass:"mt-10 text-center"},[a("v-progress-circular",{attrs:{size:100,width:10,color:"success my-2",indeterminate:""}})],1):t._e()],1)],1)],1)},s=[],r=(a("6062"),a("d3b7"),a("3ca3"),a("ddb0"),a("d81d"),a("25f0"),a("4de4"),a("caad"),a("2532"),a("84ac")),i=a("9146"),c={components:{Timer:r["a"]},data:function(){return{exams:[],all:[],authuser:!1,upcoming:null,subjects:new Set,authenticated:!0,se:""}},methods:{userFound:function(){this.authuser=!1,this.$swal({icon:"success",text:"Access Granted"}),this.authenticated=!0},getRoutineInfo:function(){var t=this;fetch(i.sscr+"freemodeltest").then((function(t){return t.json()})).then((function(e){t.exams=e.routines.map((function(e){return t.subjects.add(e.subject),{id:e.id.toString(),topic:e.topic,question:e.question,subject:e.subject,start:new Date(e.start).getTime(),end:new Date(e.end).getTime(),solve_sheet:e.solve_sheet,total_marks:e.total_marks}})).sort((function(t,e){return t.start-e.start})),t.all=t.exams,t.upcoming=t.exams.filter((function(t){return t.end>Date.now()}))[0]}))},selectSubject:function(t){this.se=t,this.exams=this.all.filter((function(e){if(e.subject.toLowerCase().includes(t.toLowerCase()))return e}))},endalert:function(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},upcomingalert:function(){this.$swal({icon:"warning",title:"Upcomming",text:"Wait till starting Date."})},authToggle:function(){this.dialog=!1,this.authuser=!this.authuser}},created:function(){this.getRoutineInfo()}},o=c,u=(a("9d87"),a("2877")),l=a("6544"),d=a.n(l),f=a("8336"),v=a("b0af"),m=a("99d9"),h=a("62ad"),g=a("a523"),b=a("490a"),p=a("0fd9"),_=Object(u["a"])(o,n,s,!1,null,"ca30341c",null);e["default"]=_.exports;d()(_,{VBtn:f["a"],VCard:v["a"],VCardActions:m["a"],VCardSubtitle:m["b"],VCardText:m["c"],VCardTitle:m["d"],VCol:h["a"],VContainer:g["a"],VProgressCircular:b["a"],VRow:p["a"]})}}]);