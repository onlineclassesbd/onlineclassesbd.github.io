(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ceaa6d5"],{"2c64":function(t,e,n){},"3d86":function(t,e,n){},"3e65":function(t,e,n){"use strict";n("a25e")},"43a6":function(t,e,n){"use strict";var i=n("5530"),s=(n("a9e3"),n("ec29"),n("3d86"),n("c37a")),o=n("604c"),a=n("8547"),r=n("58df"),c=Object(r["a"])(a["a"],o["a"],s["a"]);e["a"]=c.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},s["a"].options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=s["a"].options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var t=s["a"].options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="legend",t):null},onClick:o["a"].options.methods.onClick}})},5311:function(t,e,n){"use strict";var i=n("5607"),s=n("2b0e");e["a"]=s["a"].extend({name:"rippleable",directives:{ripple:i["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},"67b6":function(t,e,n){"use strict";var i=n("5530"),s=(n("b0c0"),n("2c64"),n("ba87")),o=n("9d26"),a=n("c37a"),r=n("7e2b"),c=n("a9ad"),u=n("4e82"),l=n("5311"),d=n("7560"),h=n("fe09"),p=n("80d2"),m=n("58df"),f=n("d9f7"),v=Object(m["a"])(r["a"],c["a"],l["a"],Object(u["a"])("radioGroup"),d["a"]);e["a"]=v.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return h["a"].options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return a["a"].options.computed.computedId.call(this)},hasLabel:a["a"].options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return h["a"].options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return h["a"].options.methods.genInput.call(this,"radio",t)},genLabel:function(){return this.hasLabel?this.$createElement(s["a"],{on:{click:h["b"]},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(p["r"])(this,"label")||this.label):null},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(o["a"],this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(Object(i["a"])({name:this.computedName,value:this.value},this.attrs$)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){var e={staticClass:"v-radio",class:this.classes,on:Object(f["c"])({click:this.onChange},this.listeners$)};return t("div",e,[this.genRadio(),this.genLabel()])}})},"6ca7":function(t,e,n){},8547:function(t,e,n){"use strict";var i=n("2b0e"),s=n("80d2");e["a"]=i["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:s["i"]}}})},9146:function(t){t.exports=JSON.parse('{"sscr":"https://script.google.com/macros/s/AKfycbxNoPpc9QWveT-O9OM2M57R7cTCMcbXsgLhKNufuGnCM0soWjDlgd_3VCtpfXVQlr1p/exec?type="}')},a25e:function(t,e,n){},ac7c:function(t,e,n){"use strict";var i=n("5530"),s=(n("d3b7"),n("25f0"),n("6ca7"),n("ec29"),n("9d26")),o=n("c37a"),a=n("fe09");e["a"]=a["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(s["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(i["a"])(Object(i["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},cf12:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[!t.loading&&t.stimer?n("v-card",{staticClass:"text-center my-3 pa-2 py-5 current__event__container",attrs:{dark:""}},[n("h2",[t._v(t._s(t.crexm.chapter))]),n("p",[t._v("Duration: "+t._s(t.crexm.time))]),n("p",[t._v("Total Question: "+t._s(t.quantity))]),!t.show&&0==t.solution.length&&t.unknown&&this.ended>Date.now()?n("v-btn",{staticClass:"success",attrs:{large:""},on:{click:t.startExam}},[t._v("Start Exam")]):t._e()],1):t._e(),t.show||t.loading||t.retake||t.ssolution?t._e():n("v-card",{staticClass:"pb-5"},[n("v-card-title",{staticClass:"text-center"},[n("h2",{staticClass:"ma-auto"},[t._v("You Scored: "+t._s(t.result))])]),!t.retake&&!t.ssolution&&t.solution.length>0?n("v-card-actions",{staticClass:"mb-n3"},[n("v-btn",{staticClass:"success mx-auto my-2",attrs:{large:"",tile:""},on:{click:function(e){t.solve=!t.solve}}},[t._v(t._s(t.solve?"Hide":"View")+" Solution")])],1):t._e(),t.solve&&t.solution.length>0?n("v-card-text",{staticClass:"text-center"},t._l(t.solution,(function(e,i){return n("v-card",{key:i,staticClass:"my-2 text-left black--text solution"},[n("v-card-text",[n("p",{domProps:{innerHTML:t._s("<span class=\n        'mr-1'>"+(i+1)+".</span>"+e.question)}}),n("p",{domProps:{innerHTML:t._s("<b class='mr-1'>Ans: </b>"+e.correct)}}),e.explain?n("p",{domProps:{innerHTML:t._s("<b class='mr-1'>Explanation: </b>"+e.explain)}}):t._e()])],1)})),1):t._e(),!t.retake&&!t.ssolution&&t.solution.length>0?n("v-card-actions",{staticClass:"mb-n3"},[n("v-btn",{staticClass:"success mx-auto my-2",attrs:{to:"/ranking/"+this.$route.params.examtype+"/"+this.$route.params.id,large:"",tile:""}},[t._v("View Your Rank")])],1):t._e(),!t.retake&&!t.ssolution&&t.solution.length>0?n("v-card-actions",[n("v-btn",{staticClass:"success mx-auto",attrs:{tile:"",large:""},on:{click:t.startRetake}},[t._v("Test Yourself Again")])],1):t._e(),!t.retake&&!t.ssolution&&t.solution.length>0?n("div",{staticClass:"text-center"},[t._v(" Retake exam score will not be recorded ")]):t._e()],1),t.retake?n("div",[n("div",{staticClass:"py-4 text-center"},[n("h1",{},[t._v("Exam - "+t._s(this.$route.params.id))])]),t._l(t.solution,(function(e,i){return n("v-card",{key:i,staticClass:"my-3 transparent examcontainerq"},[n("v-card-text",{staticClass:"black--text"},[n("p",{domProps:{innerHTML:t._s(e.question)}}),n("v-radio-group",{model:{value:t.solution[i].selected,callback:function(e){t.$set(t.solution[i],"selected",e)},expression:"solution[i].selected"}},[e.a?n("v-radio",{attrs:{value:e.a},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.a)}})]},proxy:!0}],null,!0)}):t._e(),e.b?n("v-radio",{attrs:{value:e.b},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.b)}})]},proxy:!0}],null,!0)}):t._e(),e.c?n("v-radio",{attrs:{value:e.c},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.c)}})]},proxy:!0}],null,!0)}):t._e(),e.d?n("v-radio",{attrs:{value:e.d},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.d)}})]},proxy:!0}],null,!0)}):t._e()],1)],1)],1)})),n("v-card-actions",[n("v-btn",{staticClass:"success mx-auto my-2",attrs:{large:"",tile:""},on:{click:t.retakeResult}},[t._v("Submit")])],1)],2):t._e(),t.questions.length>0&&t.show?n("div",[t._l(t.questions,(function(e,i){return n("v-card",{key:i,staticClass:"my-3"},[n("v-card-text",{staticClass:"black--text"},[n("p",{domProps:{innerHTML:t._s(e.question)}}),n("v-radio-group",{model:{value:t.questions[i].selected,callback:function(e){t.$set(t.questions[i],"selected",e)},expression:"questions[i].selected"}},[e.a?n("v-radio",{attrs:{value:e.a},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.a)}})]},proxy:!0}],null,!0)}):t._e(),e.b?n("v-radio",{attrs:{value:e.b},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.b)}})]},proxy:!0}],null,!0)}):t._e(),e.c?n("v-radio",{attrs:{value:e.c},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.c)}})]},proxy:!0}],null,!0)}):t._e(),e.d?n("v-radio",{attrs:{value:e.d},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.d)}})]},proxy:!0}],null,!0)}):t._e()],1)],1)],1)})),n("v-card-actions",{staticClass:"mb-5"},[n("v-btn",{staticClass:"success mx-auto my-2",attrs:{large:"",tile:"",loading:t.eload},on:{click:t.submitAns}},[t._v("Submit")])],1)],2):t._e(),t.ssolution&&t.questions?n("div",t._l(t.questions,(function(e,i){return n("v-card",{key:i,staticClass:"my-3 transparent examcontainerq"},[n("v-card-text",{staticClass:"black--text"},[n("p",{domProps:{innerHTML:t._s(e.question)}}),e.a?n("v-checkbox",{attrs:{readonly:"","input-value":e.a==e.correct||e.a==e.selected,color:e.correct==e.a?"green":"red"},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.a)}})]},proxy:!0}],null,!0)}):t._e(),e.b?n("v-checkbox",{attrs:{readonly:"","input-value":e.b==e.correct||e.b==e.selected,color:e.correct==e.b?"green":"red"},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.b)}})]},proxy:!0}],null,!0)}):t._e(),e.c?n("v-checkbox",{attrs:{readonly:"","input-value":e.c==e.correct||e.c==e.selected,color:e.correct==e.c?"green":"red"},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.c)}})]},proxy:!0}],null,!0)}):t._e(),e.d?n("v-checkbox",{attrs:{readonly:"","input-value":e.d==e.correct||e.d==e.selected,color:e.correct==e.d?"green":"red"},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.d)}})]},proxy:!0}],null,!0)}):t._e()],1),n("v-card-actions",[n("v-btn",{staticClass:"success mx-auto",attrs:{to:"/ranking/free/"+this.$route.params.id,large:"",tile:""}},[t._v("View Your Rank")])],1)],1)})),1):t._e(),t.loading?n("div",{staticClass:"loader"},[n("v-progress-circular",{attrs:{size:80,width:7,color:"error",indeterminate:""}})],1):t._e(),t.show?n("div",{staticClass:"white--text fixed__timer"},[n("div",{staticClass:"primary"},[t._v(t._s(t.minute)+" : "+t._s(t.second))])]):t._e()],1)},s=[],o=n("5530"),a=(n("d3b7"),n("7db0"),n("d81d"),n("13d5"),n("5319"),n("ac1f"),n("9146")),r={data:function(){return{quantity:0,solve:!1,timing:null,solutionv:!1,retake:!1,questions:[],solution:[],result:[],ssolution:!1,unknown:!1,loading:!0,eload:!1,minute:0,second:0,end:Date.now()+12e6,show:!1,url:"",solutionpdf:"",ended:null,inttime:109090,starttime:null,crexm:{},stimer:!0}},methods:{endalert:function(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},getQuestionLink:function(){var t=this;fetch(a.sscr+this.$route.params.examtype).then((function(t){return t.json()})).then((function(e){var n=e.routines.find((function(e){return e.id==t.$route.params.id}));t.crexm=n,t.url="https://script.google.com/macros/s/AKfycbxftpcKlHIof7iQ-ITPAgl7n2gmSRzxugekq4ygwn0ye3HA2MFvcrnOF3B3iyjS1SqN/exec?sheet="+n.exam,t.sheet=n.exam,t.inttime=6e4*n.time,t.end=n.time,t.ended=new Date(n.end).getTime();var i=localStorage.getItem("currentUser");fetch(t.url+"&type=check&phone="+i).then((function(t){return t.json()})).then((function(e){"exists"==e.message||t.ended<Date.now()?(t.result=e.result?e.result[1]:"Times Up",fetch(t.url+"&type=question").then((function(t){return t.json()})).then((function(e){t.solution=e,t.quantity=e.length})),t.loading=!1):(t.unknown=!0,fetch(t.url+"&type=question").then((function(t){return t.json()})).then((function(e){t.questions=e.map((function(t){return Object(o["a"])(Object(o["a"])({},t),{},{selected:""})})),t.quantity=t.questions.length,t.loading=!1})))}))}))},startExam:function(){this.showRemaining(Date.now()+6e4*this.end),this.autoSubmit(),this.show=!0,this.starttime=Date.now()},startRetake:function(){this.retake=!0,this.showRemaining()},retakeResult:function(){var t=this,e=this.solution.reduce((function(t,e){return e.correct==e.selected&&(t+=1),t}),0);this.$swal({icon:"success",title:"Success",text:"You Scored ".concat(e)}).then((function(){t.retake=!1}))},submitAns:function(){var t=this;this.eload=!0;var e=this.questions.reduce((function(t,e){return e.correct==e.selected&&(t+=1),t}),0),n=localStorage.getItem("free-".concat(this.$route.params.id));if(n)this.$swal({icon:"success",title:"Success",text:"You Scored ".concat(e)}).then((function(){t.$router.replace("/ranking/"+t.$route.params.examtype+"/"+t.$route.params.id)}));else{var i=localStorage.getItem("currentUser");fetch(this.url,{method:"POST",mode:"no-cors",cache:"no-cache",redirect:"follow",body:JSON.stringify({type:"mcq",email:i,score:e,duration:Date.now()-this.starttime})}).then((function(){localStorage.setItem("exam".concat(t.$route.params.id),"submited"),clearTimeout(t.timing),t.eload=!1,t.$swal({icon:"success",title:"Success",text:"You Scored ".concat(e)}).then((function(){t.ssolution=!0,t.show=!1,t.stimer=!1}))}))}},autoSubmit:function(){var t=this;this.timing=setTimeout((function(){t.show=!1,t.submitAns()}),this.inttime)},showRemaining:function(t){var e=this,n=setInterval((function(){var i=t-Date.now();if(i<0)clearInterval(n);else{var s=Math.floor(i/e._days),o=Math.floor(i%e._days/e._hours),a=Math.floor(i%e._hours/e._minutes),r=Math.floor(i%e._minutes/e._seconds);e.second=r<10?"0"+r:r,e.minute=a<10?"0"+a:a,e.hours=o<10?"0"+o:o,e.days=s<10?"0"+s:s}}),1e3)}},created:function(){this.getQuestionLink()},computed:{_seconds:function(){return 1e3},_minutes:function(){return 60*this._seconds},_hours:function(){return 60*this._minutes},_days:function(){return 24*this._hours}}},c=r,u=(n("3e65"),n("2877")),l=n("6544"),d=n.n(l),h=n("8336"),p=n("b0af"),m=n("99d9"),f=n("ac7c"),v=n("a523"),b=n("490a"),g=n("67b6"),_=n("43a6"),y=Object(u["a"])(c,i,s,!1,null,"2345995e",null);e["default"]=y.exports;d()(y,{VBtn:h["a"],VCard:p["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCheckbox:f["a"],VContainer:v["a"],VProgressCircular:b["a"],VRadio:g["a"],VRadioGroup:_["a"]})},ec29:function(t,e,n){},fe09:function(t,e,n){"use strict";n.d(e,"b",(function(){return r}));n("d3b7"),n("25f0"),n("4de4");var i=n("c37a"),s=n("5311"),o=n("8547"),a=n("58df");function r(t){t.preventDefault()}e["a"]=Object(a["a"])(i["a"],s["a"],o["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,n=this.internalValue;return this.isMultiple?!!Array.isArray(n)&&n.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,n):Boolean(n):this.valueComparator(n,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=i["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:r},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:r},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,n=this.internalValue;if(this.isMultiple){Array.isArray(n)||(n=[]);var i=n.length;n=n.filter((function(n){return!t.valueComparator(n,e)})),n.length===i&&n.push(e)}else n=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(n,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(n,e)?null:e:!n;this.validate(!0,n),this.internalValue=n,this.hasColor=n}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);