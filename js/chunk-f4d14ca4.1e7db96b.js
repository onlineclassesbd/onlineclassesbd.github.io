(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4d14ca4"],{"13a5":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[!t.loading&&t.stimer?n("v-card",{staticClass:"py-5 my-3 text-center pa-2 current__event__container",attrs:{dark:""}},[n("h2",[t._v(t._s(t.crexm.chapter))]),n("h3",[t._v("Duration: "+t._s(t.crexm.time))]),n("h3",[t._v("Total Question: "+t._s(t.quantity))]),!t.show&&0==t.solution.length&&t.unknown&&this.ended>Date.now()?n("v-btn",{staticClass:"success",attrs:{large:""},on:{click:t.startExam}},[t._v("Start Exam")]):t._e()],1):t._e(),t.show||t.loading||t.retake||t.ssolution||t.unknown?t._e():n("v-card",{staticClass:"pb-5"},[n("v-card-title",{staticClass:"text-center"},[n("h2",{staticClass:"ma-auto"},[t._v("You Scored: "+t._s(t.result))])]),!t.retake&&!t.ssolution&&t.solution.length>0?n("v-card-actions",{staticClass:"mb-n3"},[n("v-btn",{staticClass:"mx-auto my-2 success",attrs:{large:"",tile:""},on:{click:function(e){t.solve=!t.solve}}},[t._v(t._s(t.solve?"Hide":"View")+" Solution")])],1):t._e(),t.solve&&t.solution.length>0?n("v-card-text",{staticClass:"text-center"},t._l(t.solution,(function(e,s){return n("v-card",{key:s,staticClass:"my-2 text-left black--text solution"},[n("v-card-text",[n("p",{domProps:{innerHTML:t._s("<span class=\n        'mr-1'>"+(s+1)+".</span>"+e.question)}}),n("p",{domProps:{innerHTML:t._s("<b class='mr-1'>Ans: </b>"+e.correct)}}),e.explain?n("p",{domProps:{innerHTML:t._s("<b class='mr-1'>Explanation: </b>"+e.explain)}}):t._e()])],1)})),1):t._e(),!t.retake&&!t.ssolution&&t.solution.length>0?n("v-card-actions",{staticClass:"mb-n3"},[n("v-btn",{staticClass:"mx-auto my-2 success",attrs:{to:"/freerank/"+this.$route.params.id,large:"",tile:""}},[t._v("View Your Rank")])],1):t._e(),!t.retake&&!t.ssolution&&t.solution.length>0?n("v-card-actions",[n("v-btn",{staticClass:"mx-auto success",attrs:{tile:"",large:""},on:{click:t.startRetake}},[t._v("Test Yourself Again")])],1):t._e(),!t.retake&&!t.ssolution&&t.solution.length>0?n("div",{staticClass:"text-center",staticStyle:{"font-size":"20px"}},[t._v(" Retake exam score will not be recorded ")]):t._e()],1),t.retake?n("div",[n("div",{staticClass:"py-4 text-center"},[n("h1",{},[t._v("Exam - "+t._s(this.$route.params.id))])]),t._l(t.solution,(function(e,s){return n("v-card",{key:s,staticClass:"my-3 transparent examcontainerq"},[n("v-card-text",{staticClass:"black--text"},[n("p",{domProps:{innerHTML:t._s(e.question)}}),n("v-radio-group",{model:{value:t.solution[s].selected,callback:function(e){t.$set(t.solution[s],"selected",e)},expression:"solution[i].selected"}},[e.a?n("v-radio",{attrs:{value:e.a},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.a)}})]},proxy:!0}],null,!0)}):t._e(),e.b?n("v-radio",{attrs:{value:e.b},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.b)}})]},proxy:!0}],null,!0)}):t._e(),e.c?n("v-radio",{attrs:{value:e.c},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.c)}})]},proxy:!0}],null,!0)}):t._e(),e.d?n("v-radio",{attrs:{value:e.d},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.d)}})]},proxy:!0}],null,!0)}):t._e()],1)],1)],1)})),n("v-card-actions",[n("v-btn",{staticClass:"mx-auto my-2 success",attrs:{large:"",tile:""},on:{click:t.retakeResult}},[t._v("Submit")])],1)],2):t._e(),t.questions.length>0&&t.show?n("div",[t._l(t.questions,(function(e,s){return n("v-card",{key:s,staticClass:"my-3"},[n("v-card-text",{staticClass:"black--text"},[n("p",{domProps:{innerHTML:t._s(e.question)}}),n("v-radio-group",{model:{value:t.questions[s].selected,callback:function(e){t.$set(t.questions[s],"selected",e)},expression:"questions[i].selected"}},[e.a?n("v-radio",{attrs:{value:e.a},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.a)}})]},proxy:!0}],null,!0)}):t._e(),e.b?n("v-radio",{attrs:{value:e.b},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.b)}})]},proxy:!0}],null,!0)}):t._e(),e.c?n("v-radio",{attrs:{value:e.c},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.c)}})]},proxy:!0}],null,!0)}):t._e(),e.d?n("v-radio",{attrs:{value:e.d},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.d)}})]},proxy:!0}],null,!0)}):t._e()],1)],1)],1)})),n("v-card-actions",{staticClass:"mb-5"},[n("v-btn",{staticClass:"mx-auto my-2 success",attrs:{large:"",tile:"",loading:t.eload},on:{click:t.submitAns}},[t._v("Submit")])],1)],2):t._e(),t.ssolution&&t.questions?n("div",[t._l(t.questions,(function(e,s){return n("v-card",{key:s,staticClass:"my-3 transparent examcontainerq"},[n("v-card-text",{staticClass:"black--text"},[n("p",{domProps:{innerHTML:t._s(e.question)}}),e.a?n("v-checkbox",{attrs:{readonly:"","input-value":e.a==e.selected,color:e.correct==e.a?"green":"red"},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.a)}})]},proxy:!0}],null,!0)}):t._e(),e.b?n("v-checkbox",{attrs:{readonly:"","input-value":e.b==e.selected,color:e.correct==e.b?"green":"red"},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.b)}})]},proxy:!0}],null,!0)}):t._e(),e.c?n("v-checkbox",{attrs:{readonly:"","input-value":e.c==e.selected,color:e.correct==e.c?"green":"red"},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.c)}})]},proxy:!0}],null,!0)}):t._e(),e.d?n("v-checkbox",{attrs:{readonly:"","input-value":e.d==e.selected,color:e.correct==e.d?"green":"red"},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.d)}})]},proxy:!0}],null,!0)}):t._e()],1)],1)})),n("v-card-actions",[n("v-btn",{staticClass:"mx-auto success",attrs:{to:"/freerank/"+this.$route.params.id,large:"",tile:""}},[t._v("View Your Rank")])],1)],2):t._e(),t.loading?n("div",{staticClass:"loader"},[n("v-progress-circular",{attrs:{size:80,width:7,color:"error",indeterminate:""}})],1):t._e(),t.show?n("div",{staticClass:"white--text fixed__timer"},[n("div",{staticClass:"red"},[t._v(t._s(t.minute)+" : "+t._s(t.second))])]):t._e()],1)},o=[],r=n("5530"),a=(n("d3b7"),n("7db0"),n("d81d"),n("13d5"),n("b0c0"),n("99af"),n("9146")),i={data:function(){return{quantity:0,solve:!1,timing:null,solutionv:!1,retake:!1,questions:[],solution:[],result:[],ssolution:!1,unknown:!1,loading:!0,eload:!1,minute:0,second:0,end:Date.now()+12e6,show:!1,url:"",solutionpdf:"",ended:null,inttime:109090,starttime:null,crexm:{},stimer:!0}},beforeRouteEnter:function(t,e,n){var s=localStorage.getItem("oidentity");s||n({path:"/collectname"}),n()},methods:{endalert:function(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},getQuestionLink:function(){var t=this;fetch(a.sscr+"freemodeltest").then((function(t){return t.json()})).then((function(e){var n=e.routines.find((function(e){return e.id==t.$route.params.id}));t.crexm=n,t.topic=n.topic,t.url="https://script.google.com/macros/s/AKfycbyUGKQeBFLAjQ9VHrGdQqWnYPBQZOzOzw609OMA2zm4VgX4K2QvJMK_lPGxrJAYThDV/exec?sheet="+n.exam,t.sheet=n.exam,t.inttime=6e4*n.time,t.end=n.time,t.ended=new Date(n.end).getTime();var s=localStorage.getItem("currentUser");fetch(t.url+"&type=check&phone="+s).then((function(t){return t.json()})).then((function(e){"exists"==e.message||t.ended<Date.now()?(t.result=e.result?e.result[1]:"Times Up",fetch(t.url+"&type=question").then((function(t){return t.json()})).then((function(e){t.solution=e,t.quantity=e.length})),t.loading=!1):(t.unknown=!0,fetch(t.url+"&type=question").then((function(t){return t.json()})).then((function(e){t.questions=e.map((function(t){return Object(r["a"])(Object(r["a"])({},t),{},{selected:""})})),t.quantity=t.questions.length,t.loading=!1})))}))}))},startExam:function(){this.showRemaining(Date.now()+6e4*this.end),this.autoSubmit(),this.show=!0,this.starttime=Date.now()},startRetake:function(){this.retake=!0,this.showRemaining()},retakeResult:function(){var t=this,e=this.solution.reduce((function(t,e){return e.correct==e.selected?t+=1:e.correct!=e.selected&&(t-=.25),t}),0);this.$swal({icon:"success",title:"Success",text:"You Scored ".concat(e)}).then((function(){t.retake=!1}))},submitAns:function(){var t=this;this.eload=!0;var e=this.questions.reduce((function(t,e){return e.correct==e.selected?t+=1:""!=e.correct&&e.correct!=e.selected&&(t-=.25),t}),0),n=localStorage.getItem("currentUser");fetch(this.url,{method:"POST",mode:"no-cors",cache:"no-cache",redirect:"follow",body:JSON.stringify({type:"mcq",email:n,score:e,duration:Date.now()-this.starttime})}).then((function(){var n=JSON.parse(localStorage.getItem("oidentity")),s=n.phone,o=n.name;fetch("https://script.google.com/macros/s/AKfycbykazn1sOG2GMHK7b7KU-t5kfemNUvpcW6xoEnXuCX8ZGBjZtBvcx__9QSZHb19VKG2/exec",{method:"POST",mode:"no-cors",cache:"no-cache",redirect:"follow",body:JSON.stringify({secret:"9f581815bfd280ed069c8c03fc9130bb47ad5cb9",phone:s,message:"Congrats+Dear+".concat(o,"%0aExam:+").concat(t.topic,"%0aYour+Scored:+").concat(e,"/").concat(t.quantity,"%0a@Shahriar+Sir")})}),clearTimeout(t.timing),t.eload=!1,t.$swal({icon:"success",title:"Success",text:"You Scored ".concat(e)}).then((function(){t.ssolution=!0,t.show=!1,t.stimer=!1}))}))},autoSubmit:function(){var t=this;this.timing=setTimeout((function(){t.show=!1,t.submitAns()}),this.inttime)},showRemaining:function(t){var e=this,n=setInterval((function(){var s=t-Date.now();if(s<0)clearInterval(n);else{var o=Math.floor(s/e._days),r=Math.floor(s%e._days/e._hours),a=Math.floor(s%e._hours/e._minutes),i=Math.floor(s%e._minutes/e._seconds);e.second=i<10?"0"+i:i,e.minute=a<10?"0"+a:a,e.hours=r<10?"0"+r:r,e.days=o<10?"0"+o:o}}),1e3)}},created:function(){this.getQuestionLink()},computed:{_seconds:function(){return 1e3},_minutes:function(){return 60*this._seconds},_hours:function(){return 60*this._minutes},_days:function(){return 24*this._hours}}},c=i,l=(n("233f"),n("2877")),u=n("6544"),d=n.n(u),m=n("8336"),v=n("b0af"),h=n("99d9"),_=n("ac7c"),f=n("a523"),p=n("490a"),b=n("67b6"),x=n("43a6"),y=Object(l["a"])(c,s,o,!1,null,"7b9ed99b",null);e["default"]=y.exports;d()(y,{VBtn:m["a"],VCard:v["a"],VCardActions:h["a"],VCardText:h["c"],VCardTitle:h["d"],VCheckbox:_["a"],VContainer:f["a"],VProgressCircular:p["a"],VRadio:b["a"],VRadioGroup:x["a"]})},"233f":function(t,e,n){"use strict";n("3172")},3172:function(t,e,n){}}]);