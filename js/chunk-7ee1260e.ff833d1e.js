(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ee1260e"],{"21fe":function(t,a,s){},ae6a:function(t,a,s){"use strict";s("21fe")},b9c8:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-container",[s("v-card",{staticClass:"transparent",attrs:{flat:""}},[s("v-card-text",[s("v-row",[s("v-col",{attrs:{cols:"12"}},[t.upcoming?s("v-card",{staticClass:"text-center partexam nearest"},[s("v-card",{staticClass:"px-3 pt-4 mx-auto transparent",attrs:{"max-width":"600",flat:""}},[t.upcoming.start>Date.now()?s("Timer",{attrs:{end:t.upcoming.start}}):t.upcoming.end>Date.now()?s("h1",{staticClass:"mx-auto text-center red--text ongoing"},[t._v(" ONGOING... ")]):t._e()],1),s("v-card-title",[s("h2",{staticClass:"ma-auto balooda"},[t._v(" "+t._s(t.upcoming.topic)+" ")])]),s("v-card-subtitle",[s("h3",{staticClass:"ma-auto balooda"},[t._v(" "+t._s(t.upcoming.subject)+" ")])]),s("v-card-text",[s("h2",[t._v("Starting Time")]),s("h3",{staticClass:"my-2"},[t._v(" "+t._s(t._f("moment")(t.upcoming.start,"MMMM Do YYYY, h:mm:ss a"))+" ")]),s("h2",[t._v("Ending Time")]),s("h3",{staticClass:"mt-2"},[t._v(" "+t._s(t._f("moment")(t.upcoming.end,"MMMM Do YYYY, h:mm:ss a"))+" ")]),t.upcoming.end<Date.now()?s("h1",{staticClass:"my-3 red--text"},[t._v(" Ended ")]):t._e(),s("h2",{staticClass:"mt-2"},[t._v(" Per Question marks: 1 "),s("br"),t._v(" Per Question Time: 1 minute "),s("br")]),s("h2",{staticClass:"my-1 red--text"},[t._v(" Total Marks: "+t._s(t.upcoming.total_marks)+" ")]),s("h2",{staticClass:"mt-2 red--text"},[t._v("Negative mark: 0.25")])]),s("v-card-actions",[t.authenticated?s("div",{staticClass:"mx-auto"},[t.upcoming.start<Date.now()?s("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:"",to:"/specialmodeltest/"+t.upcoming.id}},[t._v("Start Exam")]):s("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.upcomingalert}},[t._v("Start Exam")]),s("v-btn",{staticClass:"mx-2 my-2 success",attrs:{dark:"",large:"",tile:"",to:"/specialrank/"+t.upcoming.id}},[t._v("Leaderboard")]),t.upcoming.end<Date.now()?s("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:"",href:t.upcoming.solve_sheet,target:"_blank"}},[t._v("Solve Sheet")]):s("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.endalert}},[t._v("Solve Sheet")])],1):s("div",{staticClass:"mx-auto"},[s("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.authToggle}},[t._v("Start Exam")]),s("v-btn",{staticClass:"mx-2 my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.authToggle}},[t._v("Leaderboard")]),s("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.authToggle}},[t._v("Solve Sheet")])],1)])],1):t._e()],1),s("v-col",{attrs:{cols:"12"}},[s("div",{staticClass:"mb-3 subject__filters"},[s("button",{class:"subject__button "+(""==t.se&&"activebtn"),on:{click:function(a){return t.selectSubject("")}}},[t._v(" All ")]),t._l(t.subjects,(function(a,e){return s("button",{key:e,class:"subject__button "+(t.se==a&&"activebtn"),on:{click:function(s){return t.selectSubject(a)}}},[t._v(" "+t._s(a)+" ")])}))],2)]),t._l(t.exams,(function(a,e){return s("v-col",{key:e,attrs:{cols:"12"}},[s("v-card",{staticClass:"text-center partexam"},[s("v-card-title",[s("h2",{staticClass:"ma-auto balooda"},[t._v(t._s(a.topic))])]),s("v-card-subtitle",[s("h3",{staticClass:"ma-auto balooda"},[t._v(" "+t._s(a.subject)+" ")])]),s("v-card-text",[s("h2",[t._v("Starting Time")]),s("h3",{staticClass:"my-2"},[t._v(" "+t._s(t._f("moment")(a.start,"MMMM Do YYYY, h:mm:ss a"))+" ")]),s("h2",[t._v("Ending Time")]),s("h3",{staticClass:"mt-2"},[t._v(" "+t._s(t._f("moment")(a.end,"MMMM Do YYYY, h:mm:ss a"))+" ")]),a.end<Date.now()?s("h1",{staticClass:"my-3 red--text"},[t._v("Ended")]):t._e(),s("h2",{staticClass:"mt-2"},[t._v(" Per Question marks: 1 "),s("br"),t._v(" Per Question Time: 1 minute "),s("br")]),s("h2",{staticClass:"my-1 red--text"},[t._v("Total Marks: "+t._s(a.total_marks))]),s("h2",{staticClass:"my-1 red--text"},[t._v("Negative mark: 0.25")])]),s("v-card-actions",[t.authenticated?s("div",{staticClass:"mx-auto"},[a.start<Date.now()?s("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:"",to:"/specialmodeltest/"+a.id}},[t._v("Start Exam")]):s("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.upcomingalert}},[t._v("Start Exam")]),s("v-btn",{staticClass:"mx-2 my-2 success",attrs:{dark:"",large:"",tile:"",to:"/specialrank/"+a.id}},[t._v("Leaderboard")]),a.end<Date.now()?s("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:"",href:a.solve_sheet,target:"_blank"}},[t._v("Solve Sheet")]):s("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.endalert}},[t._v("Solve Sheet")])],1):s("div",{staticClass:"mx-auto"},[s("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.authToggle}},[t._v("Start Exam")]),s("v-btn",{staticClass:"mx-2 my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.authToggle}},[t._v("Leaderboard")]),s("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.authToggle}},[t._v("Solve Sheet")])],1)])],1)],1)}))],2),t.exams.length<1?s("div",{staticClass:"mt-10 text-center"},[s("v-progress-circular",{attrs:{size:100,width:10,color:"success my-2",indeterminate:""}})],1):t._e()],1)],1),s("v-dialog",{attrs:{"max-width":"600"},model:{value:t.authuser,callback:function(a){t.authuser=a},expression:"authuser"}},[s("ParticularAccess",{attrs:{asseccType:"specialmodeltest"},on:{userFound:t.userFound}})],1)],1)},c=[],i=(s("6062"),s("d3b7"),s("3ca3"),s("ddb0"),s("d81d"),s("25f0"),s("4de4"),s("caad"),s("2532"),s("84ac")),n=s("8f3c"),r=s("9146"),l={components:{Timer:i["a"],ParticularAccess:n["a"]},data:function(){return{exams:[],all:[],authuser:!1,upcoming:null,subjects:new Set,authenticated:!1,se:""}},methods:{userFound:function(){this.authuser=!1,this.$swal({icon:"success",text:"Access Granted"}),this.authenticated=!0},getRoutineInfo:function(){var t=this;fetch(r.sscr+"specialmodeltest").then((function(t){return t.json()})).then((function(a){t.exams=a.routines.map((function(a){return t.subjects.add(a.subject),{id:a.id.toString(),topic:a.topic,question:a.question,subject:a.subject,start:new Date(a.start).getTime(),end:new Date(a.end).getTime(),solve_sheet:a.solve_sheet,total_marks:a.total_marks}})).sort((function(t,a){return t.start-a.start})),t.all=t.exams,t.upcoming=t.exams.filter((function(t){return t.end>Date.now()}))[0]}))},selectSubject:function(t){this.se=t,this.exams=this.all.filter((function(a){if(a.subject.toLowerCase().includes(t.toLowerCase()))return a}))},endalert:function(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},upcomingalert:function(){this.$swal({icon:"warning",title:"Upcomming",text:"Wait till starting Date."})},authToggle:function(){this.dialog=!1,this.authuser=!this.authuser}},created:function(){this.getRoutineInfo()},mounted:function(){this.authenticated=!!localStorage.getItem("specialmodeltest")}},o=l,u=(s("ae6a"),s("2877")),m=s("6544"),d=s.n(m),v=s("8336"),h=s("b0af"),_=s("99d9"),g=s("62ad"),b=s("a523"),C=s("169a"),p=s("490a"),f=s("0fd9"),k=Object(u["a"])(o,e,c,!1,null,"59b0644a",null);a["default"]=k.exports;d()(k,{VBtn:v["a"],VCard:h["a"],VCardActions:_["a"],VCardSubtitle:_["b"],VCardText:_["c"],VCardTitle:_["d"],VCol:g["a"],VContainer:b["a"],VDialog:C["a"],VProgressCircular:p["a"],VRow:f["a"]})}}]);