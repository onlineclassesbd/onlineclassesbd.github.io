(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01e87c24"],{"03a8":function(t,e,s){},"0c18":function(t,e,s){},"20f0":function(t,e,s){t.exports=s.p+"img/222775401_574208856912916_9038594067576137731_n.78104647.jpg"},"24eb":function(t,e,s){"use strict";s("03a8")},"332c":function(t,e,s){},"4bd4":function(t,e,s){"use strict";var a=s("5530"),i=(s("caad"),s("2532"),s("07ac"),s("4de4"),s("159b"),s("7db0"),s("58df")),r=s("7e2b"),n=s("3206");e["a"]=Object(i["a"])(r["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,s=function(t){return t.$watch("hasError",(function(s){e.$set(e.errorBag,t._uid,s)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=s(t)))})):a.valid=s(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var s=this.watchers.find((function(t){return t._uid===e._uid}));s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"4c18":function(t,e,s){t.exports=s.p+"img/english1st.bbbee3e2.jpg"},5217:function(t,e,s){t.exports=s.p+"img/hscgrammar.5f77db40.jpg"},"6db8":function(t,e,s){t.exports=s.p+"img/varsitymedical.0e67a820.jpg"},"84ac":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"timer__container white--text"},[s("div",[s("h2",[t._v(t._s(t.days))]),s("p",[t._v("days")])]),s("div",[s("h2",[t._v(t._s(t.hours))]),s("p",[t._v("hours")])]),s("div",[s("h2",[t._v(t._s(t.minute))]),s("p",[t._v("minute")])]),s("div",[s("h2",[t._v(t._s(t.second))]),s("p",[t._v("second")])])])},i=[],r={props:{end:{required:!0}},data:function(){return{days:0,hours:0,minute:0,second:0}},methods:{showRemaining:function(){var t=this,e=setInterval((function(){var s=t.end-Date.now();if(s<0)clearInterval(e);else{var a=Math.floor(s/t._days),i=Math.floor(s%t._days/t._hours),r=Math.floor(s%t._hours/t._minutes),n=Math.floor(s%t._minutes/t._seconds);t.second=n<10?"0"+n:n,t.minute=r<10?"0"+r:r,t.hours=i<10?"0"+i:i,t.days=a<10?"0"+a:a}}))}},computed:{_seconds:function(){return 1e3},_minutes:function(){return 60*this._seconds},_hours:function(){return 60*this._minutes},_days:function(){return 24*this._hours}},mounted:function(){this.showRemaining()}},n=r,o=(s("24eb"),s("2877")),c=Object(o["a"])(n,a,i,!1,null,"6fd8ee17",null);e["a"]=c.exports},"8f3c":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"accesscontroll",attrs:{dark:""}},[a("div",{staticClass:"text-center"},[a("img",{staticClass:"mx-auto",attrs:{src:s("b543"),alt:"",height:"180"}})]),a("v-card-title",[a("h3",{staticClass:"text-center mx-auto mt-n10 mb-4"},[t._v(" Enter your purchased information ")])]),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{hint:"e.g. example@exmple.com",placeholder:"e.g. example@exmple.com",label:"E-mail",outlined:"",dense:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email","string"===typeof e?e.trim():e)},expression:"user.email"}}),a("v-text-field",{attrs:{placeholder:"Phone Number",prefix:"+880",outlined:"",dense:""},model:{value:t.user.phone,callback:function(e){t.$set(t.user,"phone","string"===typeof e?e.trim():e)},expression:"user.phone"}})],1),t.msg?a("v-alert",{staticClass:"error white--text"},[t._v(t._s(t.msg))]):t._e()],1),a("v-card-actions",{staticClass:"mt-n3"},[a("v-btn",{staticClass:"mx-auto success",attrs:{large:"",loading:t.loading,tile:""},on:{click:t.checkAndAccess}},[t._v("Submit")])],1),a("v-dialog",{attrs:{"max-width":"600"},model:{value:t.msg,callback:function(e){t.msg=e},expression:"msg"}},[a("v-card",["chittagong_special"==this.$route.params.type?a("v-card-text",{staticClass:"pa-3 black--text"},[a("v-img",{attrs:{src:s("20f0")}}),a("p",{staticClass:"mt-2"},[t._v(" 𝐇𝐞𝐥𝐥𝐨 𝟐𝟎𝟐𝟎 𝐁𝐚𝐭𝐜𝐡 🔥🔥 তোমাদের মধ্যে কারা এমন আছো যাদের টার্গেট 𝗖𝗵𝗶𝘁𝘁𝗮𝗴𝗼𝗻𝗴 𝗨𝗻𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆 ? ")]),a("p",[t._v("বা 𝗖𝗵𝗶𝘁𝘁𝗮𝗴𝗼𝗻𝗴 𝗨𝗻𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆 তে পড়তে ইচ্ছুক ?")]),a("p",[t._v(' এমন যারা আছো শুধু মাত্র তাদের জন্য "𝗖𝗵𝗶𝘁𝘁𝗮𝗴𝗼𝗻𝗴 𝗨𝗻𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆 𝗦𝗽𝗲𝗰𝗶𝗮𝗹 "একটা ব্যাচ করতে চাচ্ছি যেখানে তোমাকে শুধু মাত্র 𝗖𝗵𝗶𝘁𝘁𝗮𝗴𝗼𝗻𝗴 𝗨𝗻𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆 এর 𝗔𝗱𝗺𝗶𝘀𝘀𝗶𝗼𝗻 𝗧𝗲𝘀𝘁 এর জন্য পড়ানো হবে । আর হ্যা এটা কিন্তু শুধু মাত্র এইচএসসি ২০২০ এর শিক্ষার্থীদের জন্য । ( ২১,২২ ব্যাচের জন্য আমার আলাদা 𝗩𝗮𝗿𝘀𝗶𝘁𝘆+𝗠𝗲𝗱𝗶𝗰𝗮𝗹 𝗔𝗱𝗺𝗶𝘀𝘀𝗶𝗼𝗻 ব্যাচ আছে ) ')]),a("p",[t._v("কোর্সটির বিস্তারিত -")]),a("p",[t._v(" 💥কোর্স এর মেয়াদ : 𝗔𝗱𝗺𝗶𝘀𝘀𝗶𝗼𝗻 𝗧𝗲𝘀𝘁 এর আগ পর্যন্ত । যতদিন 𝗔𝗱𝗺𝗶𝘀𝘀𝗶𝗼𝗻 𝗧𝗲𝘀𝘁 হচ্ছেনা , ততোদিন ক্লাস চলবে। ")]),a("p",[t._v("💥কোর্স ফি : শুধু মাত্র ৩৯৯ টাকা 🔥")]),a("p",[t._v(" 💥 কোর্সে থাকছে সর্বমোট ৩৫ টি 𝗖𝗹𝗮𝘀𝘀 🔥 এছাড়া 𝗲𝘅𝘁𝗿𝗮 𝗰𝗹𝗮𝘀𝘀 এবং 𝘀𝗼𝗹𝘃𝗲 𝗰𝗹𝗮𝘀𝘀 তো থাকছেই। সাথে অবশ্যই অবশ্যই সব টপিকের 𝗣𝗿𝗮𝗰𝘁𝗶𝗰𝗲 𝘀𝗵𝗲𝗲𝘁 , 𝗵𝗮𝗻𝗱 𝗻𝗼𝘁𝗲 𝗽𝗿𝗼𝘃𝗶𝗱𝗲 করা হবে। ")]),a("p",[t._v("💥 ২৫ টি 𝗣𝗗𝗙 𝗦𝗵𝗲𝗲𝘁")]),a("p",[t._v(" 💥 থাকছে 𝗧𝗼𝘁𝗮𝗹 ৫০ টি 𝗘𝘅𝗮𝗺 🔥 𝗱𝗮𝗶𝗹𝘆 𝗲𝘅𝗮𝗺 ছাড়া ও 𝘄𝗲𝗲𝗸𝗹𝘆 𝗲𝘅𝗮𝗺 এবং 𝗺𝗼𝗻𝘁𝗵𝗹𝘆 𝗲𝘅𝗮𝗺 এর সুযোগ। ")]),a("p"),a("p",[t._v("💥কোর্সে যা যা পড়ানো হবে")]),a("p",[t._v(" ১) 𝗔𝗱𝗺𝗶𝘀𝘀𝗶𝗼𝗻 𝗚𝗿𝗮𝗺𝗺𝗮𝗿 (𝗔-𝗭 ) ২) 𝗩𝗼𝗰𝗮𝗯𝘂𝗹𝗮𝗿𝘆 ( 𝗔- 𝗭 ) 💥 ক্লাস হবে সপ্তাহে ৬ দিন। প্রতিদিন ক্লাস এবং প্রতিদিন 𝗲𝘅𝗮𝗺. 💥ক্লাস হবে 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗹𝗶𝘃𝗲 এবং 𝘇𝗼𝗼𝗺 এ ।‌ সকল ক্লাস এর রেকর্ড 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝘀𝗲𝗰𝗿𝗲𝘁 𝗴𝗿𝗼𝘂𝗽 এ 𝘀𝗮𝘃𝗲 করা থাকবে। ফলে প্রয়োজনে নিজের সুবিধামত করে নিতে পারবে। ")]),a("p",[t._v("এছাড়া এই কোর্সে থাকছে -")]),a("p",[t._v(" 🔥 যেখানে তোমরা সব 𝗰𝗹𝗮𝘀𝘀 , 𝗣𝗗𝗙 𝘀𝗵𝗲𝗲𝘁 , 𝗵𝗮𝗻𝗱 𝗻𝗼𝘁𝗲 , 𝗽𝗿𝗮𝗰𝘁𝗶𝗰𝗲 𝘀𝗵𝗲𝗲𝘁 সব কিছু সহজেই খুঁজে পাবে , নিজেকে যাচাই করতে 𝗲𝘅𝗮𝗺 দিতে পারবে যেকোনো সময়।থাকছে 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗗𝗶𝘀𝗰𝘂𝘀𝘀𝗶𝗼𝗻 𝗚𝗿𝗼𝘂𝗽 💥 এবং 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝗚𝗿𝗼𝘂𝗽 💥 যেখানে তোমরা তোমাদের পড়াশোনা /ক্লাস সংক্রান্ত সকল বিষয় 𝗱𝗶𝘀𝗰𝘂𝘀𝘀 করতে পারবে খুব সহজেই। ")]),a("p",[t._v(" 💥𝗩𝗮𝗿𝘀𝗶𝘁𝘆 𝗔𝗱𝗺𝗶𝘀𝘀𝗶𝗼𝗻 এর উপর নেয়া 𝗳𝗿𝗲𝗲 𝗰𝗹𝗮𝘀𝘀 / 𝗱𝗲𝗺𝗼 𝗰𝗹𝗮𝘀𝘀 𝗹𝗶𝗻𝗸 - 𝗵𝘁𝘁𝗽𝘀://𝗺.𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸.𝗰𝗼𝗺/𝗴𝗿𝗼𝘂𝗽𝘀/𝗥𝗼𝗮𝗱𝘁𝗼𝗽𝘂𝗯𝗹𝗶𝗰𝘂𝗻𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆/𝗽𝗲𝗿𝗺𝗮𝗹𝗶𝗻𝗸/𝟭𝟮𝟱𝟴𝟭𝟲𝟮𝟮𝟮𝟳𝟵𝟰𝟵𝟱𝟯𝟭/ ")]),a("p",[t._v("💥𝗖𝗵𝗶𝘁𝘁𝗮𝗴𝗼𝗻𝗴 𝗨𝗻𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆 𝘀𝗽𝗲𝗰𝗶𝗮𝗹 𝗳𝗿𝗲𝗲 𝗖𝗹𝗮𝘀𝘀 𝗹𝗶𝗻𝗸 :")]),a("p",[t._v(" 𝗖𝗹𝗮𝘀𝘀 𝟭 : "),a("a",{attrs:{href:"https://m.facebook.com/groups/Roadtopublicuniversity/permalink/\n1162026764229745/","aria-invalid":"true",target:"_blank"}},[t._v("𝗵𝘁𝘁𝗽𝘀://𝗺.𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸.𝗰𝗼𝗺/𝗴𝗿𝗼𝘂𝗽𝘀/𝗥𝗼𝗮𝗱𝘁𝗼𝗽𝘂𝗯𝗹𝗶𝗰𝘂𝗻𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆/𝗽𝗲𝗿𝗺𝗮𝗹𝗶𝗻𝗸/𝟭𝟭𝟲𝟮𝟬𝟮𝟲𝟳𝟲𝟰𝟮𝟮𝟵𝟳𝟰𝟱/ ")])]),a("p",[t._v(" 𝗖𝗹𝗮𝘀𝘀 𝟮 :"),a("a",{attrs:{href:"https://m.facebook.com/groups/Roadtopublicuniversity/permalink/\n1162656610833427/",target:"_blank",rel:"noopener","aria-invalid":"true"}},[t._v("𝗵𝘁𝘁𝗽𝘀://𝗺.𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸.𝗰𝗼𝗺/𝗴𝗿𝗼𝘂𝗽𝘀/𝗥𝗼𝗮𝗱𝘁𝗼𝗽𝘂𝗯𝗹𝗶𝗰𝘂𝗻𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆/𝗽𝗲𝗿𝗺𝗮𝗹𝗶𝗻𝗸/𝟭𝟭𝟲𝟮𝟲𝟱𝟲𝟲𝟭𝟬𝟴𝟯𝟯𝟰𝟮𝟳/ ")])]),a("p",[t._v(" 𝗖𝗹𝗮𝘀𝘀 𝟯 :"),a("a",{attrs:{href:"https://m.facebook.com/groups/Roadtopublicuniversity/permalink/\n1163274694104952/",target:"_blank",rel:"noopener","aria-invalid":"true"}},[t._v("𝗵𝘁𝘁𝗽𝘀://𝗺.𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸.𝗰𝗼𝗺/𝗴𝗿𝗼𝘂𝗽𝘀/𝗥𝗼𝗮𝗱𝘁𝗼𝗽𝘂𝗯𝗹𝗶𝗰𝘂𝗻𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆/𝗽𝗲𝗿𝗺𝗮𝗹𝗶𝗻𝗸/𝟭𝟭𝟲𝟯𝟮𝟳𝟰𝟲𝟵𝟰𝟭𝟬𝟰𝟵𝟱𝟮/ ")])]),a("p",[t._v(" 𝗖𝗹𝗮𝘀𝘀 𝟱 : "),a("a",{attrs:{href:" https://m.facebook.com/groups/Roadtopublicuniversity/permalink/\n1164652437300511/",target:"_blank",rel:"noopener","aria-invalid":"true"}},[t._v("𝗵𝘁𝘁𝗽𝘀://𝗺.𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸.𝗰𝗼𝗺/𝗴𝗿𝗼𝘂𝗽𝘀/𝗥𝗼𝗮𝗱𝘁𝗼𝗽𝘂𝗯𝗹𝗶𝗰𝘂𝗻𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆/𝗽𝗲𝗿𝗺𝗮𝗹𝗶𝗻𝗸/𝟭𝟭𝟲𝟰𝟲𝟱𝟮𝟰𝟯𝟳𝟯𝟬𝟬𝟱𝟭𝟭/")])]),a("p",[t._v(" 𝗖𝗹𝗮𝘀𝘀 𝟲 : "),a("a",{attrs:{href:"https://m.facebook.com/groups/Roadtopublicuniversity/permalink/\n1165276227238132/",target:"_blank",rel:"noopener","aria-invalid":"true"}},[t._v("𝗵𝘁𝘁𝗽𝘀://𝗺.𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸.𝗰𝗼𝗺/𝗴𝗿𝗼𝘂𝗽𝘀/𝗥𝗼𝗮𝗱𝘁𝗼𝗽𝘂𝗯𝗹𝗶𝗰𝘂𝗻𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆/𝗽𝗲𝗿𝗺𝗮𝗹𝗶𝗻𝗸/𝟭𝟭𝟲𝟱𝟮𝟳𝟲𝟮𝟮𝟳𝟮𝟯𝟴𝟭𝟯𝟮/ ")])]),a("p",[t._v(" 𝗖𝗹𝗮𝘀𝘀 𝟳 :"),a("a",{attrs:{href:"https://m.facebook.com/groups/Roadtopublicuniversity/permalink/\n1166466940452394/",target:"_blank",rel:"noopener","aria-invalid":"true"}},[t._v("𝗵𝘁𝘁𝗽𝘀://𝗺.𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸.𝗰𝗼𝗺/𝗴𝗿𝗼𝘂𝗽𝘀/𝗥𝗼𝗮𝗱𝘁𝗼𝗽𝘂𝗯𝗹𝗶𝗰𝘂𝗻𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆/𝗽𝗲𝗿𝗺𝗮𝗹𝗶𝗻𝗸/𝟭𝟭𝟲𝟲𝟰𝟲𝟲𝟵𝟰𝟬𝟰𝟱𝟮𝟯𝟵𝟰/ ")])]),a("p",[t._v(" এছাড়া এই গ্ৰূপে 𝗩𝗮𝗿𝘀𝗶𝘁𝘆 𝗔𝗱𝗺𝗶𝘀𝘀𝗶𝗼𝗻 এর উপরআমার আরো অসংখ্য ফ্রি ক্লাস নেওয়া আছে । চাইলে খুব সহজেই সেগুলো ও দেখে নিতে পারো। ")]),a("p",[t._v("💥ভর্তির নিয়মাবলী :")]),a("p",[t._v(" বিকাশ , নগদ : 𝟎𝟏𝟔𝟖𝟓𝟑𝟓𝟐𝟐𝟎𝟐 ,𝟎𝟏𝟕𝟔𝟐𝟔𝟓𝟐𝟕𝟕𝟐 (𝘀𝗲𝗻𝗱 𝗺𝗼𝗻𝗲𝘆 𝗼𝗻𝗹𝘆 ) এর মাধ্যমে কোর্স ফি 𝗦𝗲𝗻𝗱 করে 𝟎𝟏𝟕𝟔𝟐𝟔𝟓𝟐𝟕𝟕𝟐 এই 𝗻𝘂𝗺𝗯𝗲𝗿 এ কল দিতে হবে । পরবর্তীতে তোমাকে 𝗰𝗼𝘂𝗿𝘀𝗲 𝗴𝗿𝗼𝘂𝗽 এ 𝗮𝗱𝗱 করে দেয়া হবে। এছাড়া ভর্তি সংক্রান্ত অন্য কোনো তথ্য বা আরো বিস্তারিত জানতে কল করতে পারো 𝟎𝟏𝟕𝟔𝟐𝟔𝟓𝟐𝟕𝟕𝟐 এই 𝗻𝘂𝗺𝗯𝗲𝗿 এ। ")])],1):t._e(),"ict"==this.$route.params.type?a("v-card-text",{staticClass:"pa-3 black--text"},[a("v-img",{attrs:{src:s("b52d")}}),a("p",[t._v("কাদের জন্য প্রযোজ্য❓")]),a("p",[t._v(" ✅ এইচএসসি এবং এডমিশন উভয়ের জন্যই প্রযোজ্য।প্রতিটি অধ্যায়ের বেসিক টু এডভান্স সব পড়ানো হবে।মডেল টেস্ট থাকবে, থাকবে সলভ ক্লাসও।এক কথায় আইসিটি এর A to Z ")]),a("p",[t._v("ভর্তি ফি কত ❓")]),a("p",[t._v("✅ মাত্র ১২০০৳ এবং একসাথে পরিশোধ করতে হবে।")]),a("p",[t._v("ক্লাসের মাধ্যম কি❓")]),a("p",[t._v(" ✅ ক্লাস হবে লাইভে,ফেসবুক সিক্রেট গ্রুপে।সলভ ক্লাস হবে জুমে।প্রতিটি ক্লাসের ভিডিও সিক্রেট গ্রুপে থাকবে। যোহেতু ভিডিও গ্রুপে সেভ থাকবে ফলে কোনো টপিক বুঝতে অসুবিধা হলে বা কোনো ক্লাস মিস করলে অবশ্যই পরে দেখতে পারবেন। ")]),a("p",[t._v(" ভর্তির জন্য 01685-352202 এই নাম্বারে ১২০০৳বিকাশে সেন্ড মানি করবেন।(যদি লিমিট শেষ দেখায় তবে কল দিবেন।এমনি কল দেওয়ার কোনো প্রয়োজন নেই।) তারপর যে নাম্বার থেকে সেন্ড মানি করেছেন তার শেষ দুই ডিজিট ও নিজের নাম লিখে 01685-352202 নাম্বারে ম্যাসেজ করবেন।আপনার দায়িত্ব শেষ।ক্লাস শুরু হওয়ার আগেই আপনাকে ম্যাসেজ /কল করে গ্রুপে এড করে দেওয়া হবে। ")])],1):t._e(),"all_varsity_medical"==this.$route.params.type?a("v-card-text",{staticClass:"pa-3 black--text"},[a("v-img",{attrs:{src:s("6db8")}}),a("p",{staticClass:"mt-2"},[t._v(" 𝐇𝐒𝐂 𝟐𝟎𝟐𝟏 ব্যাচের জন্য 𝐀𝐝𝐯𝐚𝐧𝐜𝐞𝐝 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲 𝐀𝐝𝐦𝐢𝐬𝐬𝐢𝐨𝐧 + 𝐌𝐞𝐝𝐢𝐜𝐚𝐥 𝐄𝐧𝐠𝐥𝐢𝐬𝐡 নতুন ব্যাচে ভর্তি চলছে........ ")]),a("p",[t._v("✅ কোর্সের স্থিতিকালঃ")]),a("p",[t._v(" ১ বছর +++ * যতদিন ২০২১ ব্যাচের এক্সাম না হয় ততবার সব ব্যাচে ক্লাস করতে পারবে একবার ভর্তি হয়ে। কোর্স ফি - ১৬০০ টাকা মাত্র ")]),a("p",[t._v("★কোর্সে যা কিছু থাকবেঃ")]),a("p",[t._v("১)𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲 𝐀𝐝𝐦𝐢𝐬𝐬𝐢𝐨𝐧 𝐆𝐫𝐚𝐦𝐦𝐚𝐫 (𝐀-𝐙)।"),a("em")]),a("p",[t._v("২)𝐕𝐨𝐜𝐚𝐛𝐮𝐥𝐚𝐫𝐲 (𝐀-𝐙)। ৩)সপ্তাহে প্রতিদিন ক্লাস।")]),a("p",[t._v("৪)𝐏𝐃𝐅 ফাইল ও প্রেকটিস শীট।")]),a("p",[t._v("৫)𝟐𝟎𝟎+ এক্সক্লুসিভ মডেল টেস্ট।")]),a("p",[t._v("৬)প্রতিটি লাইভ ক্লাসের রেকর্ড ভার্সন।")]),a("p",[t._v("৭) লিখিত ( 𝐀--𝐙)। ক্লাসের মাধ্যমঃ 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐯𝐞 + 𝐙𝐨𝐨𝐦 𝐀𝐩𝐩")]),a("p",[t._v(" 𝐁𝐤𝐚𝐬𝐡 : 𝟎𝟏𝟔𝟖𝟓𝟑𝟓𝟐𝟐𝟎𝟐 (𝐬𝐞𝐧𝐝 𝐌𝐨𝐧𝐞𝐲 𝐨𝐧𝐥𝐲 ) ভর্তির জন্য কল করুনঃ 𝟎𝟏𝟕𝟔𝟐𝟔𝟓𝟐𝟕𝟕𝟐 ")])],1):t._e(),"grammar"==this.$route.params.type?a("v-card-text",{staticClass:"pa-3 black--text"},[a("v-img",{attrs:{src:s("5217")}}),a("p",{staticClass:"mt-2"},[t._v("𝗛𝗲𝗹𝗹𝗼 𝗛𝗦𝗖 𝟮𝟬𝟮𝟮 𝐇𝐒𝐂 𝐆𝐫𝐚𝐦𝐦𝐚𝐫 ( 𝐀--𝐙)")]),a("p",[t._v("নতুন ব্যাচ কাদের জন্য : 𝐇𝐒𝐂 𝟏𝐬𝐭 + 𝟐𝐧𝐝 𝐘𝐞𝐚𝐫")]),a("p",[t._v("ক্লাস হবে : 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐯𝐞 এ / 𝐒𝐭𝐫𝐞𝐚𝐦𝐲𝐚𝐫𝐝 সলভ ক্লাস")]),a("p",[t._v(" 𝐙𝐨𝐨𝐦 𝐩𝐫𝐨 তে কি পড়ানো হবে: 𝐇𝐒𝐂 𝐄𝐧𝐠𝐥𝐢𝐬𝐡 𝐆𝐫𝐚𝐦𝐦𝐚𝐫 এর সব কিছু। সব গুলো ক্লাসের রেকর্ড থাকবে সো তোমাদের সময় মতো করে নিতে পারবা৷ মজার ব্যাপার এই নতুন ব্যাচে লিখিত সহ থাকবে মানে ১০০/১০০. এই ব্যাচে আমার সাথে থাকবেন ৩৭ জন Co-ordinators যাদের তত্ত্বাবধানে থাকবে স্পেশাল গ্রুপ। মানে একজন গাইড করবে ৫০ জনকে। ")]),a("p",[t._v(" কিভাবে গাইড করবে? শীট, ক্লাসের পড়া, এক্সাম সব কিছু দিয়ে সাপোর্ট দেওয়া সাথে সাজেশন বই সলভ করা। ")]),a("p",[t._v("কি থাকছে এই ব্যাচে :")]),a("p",[t._v("ক্লাস সংখ্যা : ১৯ টি (Facebook Live ) সলভ ক্লাস ।")]),a("p",[t._v("১১ টি ( Zoom) Exam ।")]),a("p",[t._v("16টি ( লিখিত সহ) সাজেশন :")]),a("p",[t._v(" ✅ এই ছাড়া থাকবে স্পেশাল App যেখান সব ক্লাস , ক্লাসের pdf sheet , handnote দেওয়া থাকবে । App থেকে যেকোনো সময় ক্লাস করতে পারবে, sheet , handnote দেখতে পারবে। ")]),a("p",[t._v(" কোর্স ফি : ১৬০০ টাকা ক্লাসের কিছু অংশ দেখে নিতে চাইলে নিচের লিংকে চলে যাও তাহলে ৫ টা টপিক ফ্রি তে করতে পারবে। "),a("img",{attrs:{src:"https://static.xx.fbcdn.net/images/emoji.php/v9/t7f/1/16/1f60a.png",alt:"😊",width:"16",height:"16"}})]),a("p",[a("span",{attrs:{role:"gridcell"}},[a("a",{staticStyle:{"list-style-type":"none"},attrs:{tabindex:"0",role:"link",href:"https://www.facebook.com/groups/Roadtopublicuniversity/permalink/1199679123797842/?sfnsn=mo",target:"_blank",rel:"noopener"}},[t._v("https://www.facebook.com/groups/Roadtopublicuniversity/permalink/1199679123797842/?sfnsn=mo")])])]),a("p",[a("span",{attrs:{role:"gridcell"}},[t._v(" বিকাশ : ১। 01685352202 ( send Money) ")]),a("span",{attrs:{role:"gridcell"}},[t._v("২। 01750243615 (send Money) ৩। 01762652")]),t._v("772 ( send Money) "),a("img",{attrs:{src:"https://static.xx.fbcdn.net/images/emoji.php/v9/tac/1/16/1f4cc.png",alt:"📌",width:"16",height:"16"}})]),a("p",[t._v("নগদ : ১। 01762652772 ( send Money) 2। 01685352202 ( send Money)")]),a("p",[t._v("বিকাশ/ নগদে পেমেন্ট করে আমাকে কল দিয়ে কনফার্ম করে নিবেন।")]),a("p",[t._v(" যোগাযোগ : 01685352202 ( shahriar sir) যত বেশী পারো সবাইকে মেনশন করে জানাই দাও। সময় খুবই কম পরে আফসোস করতে হবে। ")])],1):t._e(),"english"==this.$route.params.type?a("v-card-text",{staticClass:"pa-3 black--text"},[a("v-img",{attrs:{src:s("4c18")}}),a("p",{staticClass:"mt-2"},[t._v(" ২০২১ সালের সেরা গিফট 🔥🔥 HSC English 1st Paper ( A--Z) যেখানে সব কিছু শুরু করে শেষ করানো হবে ইনশাআল্লাহ। ")]),a("p",[t._v(" এই কোর্সটা যাদের আর্থিক সমস্যা আছে তাদের কথা চিন্তা করে নেওয়া। HSC 1st + 2nd Yr সবাই করতে পারবে। ")]),a("p",[t._v("ক্লাস হবে : Facebook Live এ / Streamyard")]),a("p",[t._v(" সলভ ক্লাস : Zoom pro তে সব গুলো ক্লাসের রেকর্ড থাকবে সো তোমাদের সময় মতো করে নিতে পারবা৷ ")]),a("p",[t._v(" কি পড়ানো হবে: HSC English 1st এর সব কিছু। টার্গেট একটায় 100 মার্কসের মধ্যে 87++ পাওয়ানো। আমি কথায় না কাজে বিশ্বাসী। ")]),a("p",[t._v("কোর্স ফি : ১২০০ টাকা. সবার আর্থিক সমস্যার কথা চিন্তা করে নেওয়া।")]),a("p",[t._v(" কি পাচ্ছেন : ১২ বছর যা পান নাই তার ডাবল কিছু পাবেন ইনশাআল্লাহ কথা দিলাম। ")]),a("p",[a("strong",[t._v("***")]),t._v(" শীট, PDF, সাজেশন এবং Model Test এর সুবিধা।")]),a("p",[t._v("লাইভ ক্লাস : ৩০ টা।")]),a("p",[t._v("PDF : ১৭ টা।")]),a("p",[t._v("মডেল টেস্ট : ২০ টা।")]),a("p",[t._v(" এই ছাড়া থাকছে special suggestion 🔥🔥🔥 ও হ্যা.. with clues/ without clues / Rearranging sentence এর উপর স্পেশাল ক্লাস + শীট। সময় খুবই কম এবং যা করতে হবে তা খুব তাড়াতাড়ি করতে হবে পরে জায়গা হবেনা। ")]),a("p",[t._v(" বিকাশ : ১। 01762652772 (send Money) ২। 01685352202 ( send money) বিকাশ করে আমাকে কল দিয়ে কনফার্ম করে নিবেন। ")]),a("p",[t._v(" যোগাযোগ : 01685352202 ( shahriar sir) যত বেশী পারো সবাইকে মেনশন করে জানাই দাও। সময় খুবই কম পরে আফসোস করতে হবে। সবাই সবাইকে জানাই দাও মেনশন করে। ")])],1):t._e(),"SpecialCourse"==this.$route.name?a("v-card-text",{staticClass:"pa-3 black--text"},[a("v-img",{attrs:{src:s("6db8")}})],1):t._e()],1)],1)],1)},i=[],r=(s("d3b7"),s("99af"),{props:{asseccType:{type:String}},data:function(){return{user:{},valid:!0,loading:!1,msg:""}},methods:{checkAndAccess:function(){var t=this;if(this.$refs.form.validate()){this.loading=!0;var e=this.user.phone.substr(this.user.phone.length-10,this.user.phone.length);fetch("https://script.google.com/macros/s/AKfycbwL_E9TuIT2w6vUXmrgsHCr155YAkZKhZ6wTaw0mvFnG7zLDTeW7alHJrNPeyus0AKVEQ/exec?type=".concat(this.asseccType,"&phone=").concat(e)).then((function(t){return t.json()})).then((function(e){"exists"==e.message?(localStorage.setItem(t.asseccType,t.asseccType),t.$emit("userFound")):t.msg="Your Information Doesn't Exists",t.loading=!1})).catch((function(e){console.log(e),t.loading=!1}))}},initialize:function(){this.user.email=localStorage.getItem("currentUser")}},created:function(){this.initialize()}}),n=r,o=(s("a770"),s("2877")),c=s("6544"),l=s.n(c),u=s("5530"),d=s("ade3"),h=(s("caad"),s("0c18"),s("10d2")),p=s("afdd"),v=s("9d26"),m=s("f2e7"),_=s("7560"),f=s("2b0e"),g=f["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),b=s("58df"),x=s("d9bd"),C=Object(b["a"])(h["a"],m["a"],g).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(d["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(p["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(v["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(v["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(u["a"])(Object(u["a"])({},h["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||_["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(x["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),y=s("8336"),k=s("b0af"),w=s("99d9"),S=s("169a"),$=s("4bd4"),T=s("adda"),j=s("8654"),B=Object(o["a"])(n,a,i,!1,null,"0a6898e0",null);e["a"]=B.exports;l()(B,{VAlert:C,VBtn:y["a"],VCard:k["a"],VCardActions:w["a"],VCardText:w["c"],VCardTitle:w["d"],VDialog:S["a"],VForm:$["a"],VImg:T["a"],VTextField:j["a"]})},9146:function(t){t.exports=JSON.parse('{"sscr":"https://script.google.com/macros/s/AKfycbxNoPpc9QWveT-O9OM2M57R7cTCMcbXsgLhKNufuGnCM0soWjDlgd_3VCtpfXVQlr1p/exec?type="}')},a770:function(t,e,s){"use strict";s("332c")},afdd:function(t,e,s){"use strict";var a=s("8336");e["a"]=a["a"]},b52d:function(t,e,s){t.exports=s.p+"img/ict.aa310ee1.jpg"},b543:function(t,e,s){t.exports=s.p+"img/tralogo.f93d58ee.png"},b9c8:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-card",{staticClass:"transparent",attrs:{flat:""}},[s("v-card-text",[s("v-row",[s("v-col",{attrs:{cols:"12"}},[t.upcoming?s("v-card",{staticClass:"text-center partexam nearest"},[s("v-card",{staticClass:"px-3 pt-4 mx-auto transparent",attrs:{"max-width":"600",flat:""}},[t.upcoming.start>Date.now()?s("Timer",{attrs:{end:t.upcoming.start}}):t.upcoming.end>Date.now()?s("h1",{staticClass:"mx-auto text-center red--text ongoing"},[t._v(" ONGOING... ")]):t._e()],1),s("v-card-title",[s("h2",{staticClass:"ma-auto balooda"},[t._v(" "+t._s(t.upcoming.topic)+" ")])]),s("v-card-subtitle",[s("h3",{staticClass:"ma-auto balooda"},[t._v(" "+t._s(t.upcoming.subject)+" ")])]),s("v-card-text",[s("h2",[t._v("Starting Time")]),s("h3",{staticClass:"my-2"},[t._v(" "+t._s(t._f("moment")(t.upcoming.start,"MMMM Do YYYY, h:mm:ss a"))+" ")]),s("h2",[t._v("Ending Time")]),s("h3",{staticClass:"mt-2"},[t._v(" "+t._s(t._f("moment")(t.upcoming.end,"MMMM Do YYYY, h:mm:ss a"))+" ")]),t.upcoming.end<Date.now()?s("h1",{staticClass:"my-3 red--text"},[t._v(" Ended ")]):t._e(),s("h2",{staticClass:"mt-2"},[t._v(" Per Question marks: 1 "),s("br"),t._v(" Per Question Time: 1 minute "),s("br")]),s("h2",{staticClass:"my-1 red--text"},[t._v(" Total Marks: "+t._s(t.upcoming.total_marks)+" ")]),s("h2",{staticClass:"mt-2 red--text"},[t._v("Negative mark: 0.25")])]),s("v-card-actions",[t.authenticated?s("div",{staticClass:"mx-auto"},[t.upcoming.start<Date.now()?s("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:"",to:"/specialmodeltest/"+t.upcoming.id}},[t._v("Start Exam")]):s("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.upcomingalert}},[t._v("Start Exam")]),s("v-btn",{staticClass:"mx-2 my-2 success",attrs:{dark:"",large:"",tile:"",to:"/specialrank/"+t.upcoming.id}},[t._v("Leaderboard")]),t.upcoming.end<Date.now()?s("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:"",href:t.upcoming.solve_sheet,target:"_blank"}},[t._v("Solve Sheet")]):s("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.endalert}},[t._v("Solve Sheet")])],1):s("div",{staticClass:"mx-auto"},[s("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.authToggle}},[t._v("Start Exam")]),s("v-btn",{staticClass:"mx-2 my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.authToggle}},[t._v("Leaderboard")]),s("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.authToggle}},[t._v("Solve Sheet")])],1)])],1):t._e()],1),s("v-col",{attrs:{cols:"12"}},[s("div",{staticClass:"mb-3 subject__filters"},[s("button",{class:"subject__button "+(""==t.se&&"activebtn"),on:{click:function(e){return t.selectSubject("")}}},[t._v(" All ")]),t._l(t.subjects,(function(e,a){return s("button",{key:a,class:"subject__button "+(t.se==e&&"activebtn"),on:{click:function(s){return t.selectSubject(e)}}},[t._v(" "+t._s(e)+" ")])}))],2)]),t._l(t.exams,(function(e,a){return s("v-col",{key:a,attrs:{cols:"12"}},[s("v-card",{staticClass:"text-center partexam"},[s("v-card-title",[s("h2",{staticClass:"ma-auto balooda"},[t._v(t._s(e.topic))])]),s("v-card-subtitle",[s("h3",{staticClass:"ma-auto balooda"},[t._v(" "+t._s(e.subject)+" ")])]),s("v-card-text",[s("h2",[t._v("Starting Time")]),s("h3",{staticClass:"my-2"},[t._v(" "+t._s(t._f("moment")(e.start,"MMMM Do YYYY, h:mm:ss a"))+" ")]),s("h2",[t._v("Ending Time")]),s("h3",{staticClass:"mt-2"},[t._v(" "+t._s(t._f("moment")(e.end,"MMMM Do YYYY, h:mm:ss a"))+" ")]),e.end<Date.now()?s("h1",{staticClass:"my-3 red--text"},[t._v("Ended")]):t._e(),s("h2",{staticClass:"mt-2"},[t._v(" Per Question marks: 1 "),s("br"),t._v(" Per Question Time: 1 minute "),s("br")]),s("h2",{staticClass:"my-1 red--text"},[t._v("Total Marks: "+t._s(e.total_marks))]),s("h2",{staticClass:"my-1 red--text"},[t._v("Negative mark: 0.25")])]),s("v-card-actions",[t.authenticated?s("div",{staticClass:"mx-auto"},[e.start<Date.now()?s("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:"",to:"/specialmodeltest/"+e.id}},[t._v("Start Exam")]):s("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.upcomingalert}},[t._v("Start Exam")]),s("v-btn",{staticClass:"mx-2 my-2 success",attrs:{dark:"",large:"",tile:"",to:"/specialrank/"+e.id}},[t._v("Leaderboard")]),e.end<Date.now()?s("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:"",href:e.solve_sheet,target:"_blank"}},[t._v("Solve Sheet")]):s("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.endalert}},[t._v("Solve Sheet")])],1):s("div",{staticClass:"mx-auto"},[s("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.authToggle}},[t._v("Start Exam")]),s("v-btn",{staticClass:"mx-2 my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.authToggle}},[t._v("Leaderboard")]),s("v-btn",{staticClass:"my-2 success",attrs:{dark:"",large:"",tile:""},on:{click:t.authToggle}},[t._v("Solve Sheet")])],1)])],1)],1)}))],2),t.exams.length<1?s("div",{staticClass:"mt-10 text-center"},[s("v-progress-circular",{attrs:{size:100,width:10,color:"success my-2",indeterminate:""}})],1):t._e()],1)],1),s("v-dialog",{attrs:{"max-width":"600"},model:{value:t.authuser,callback:function(e){t.authuser=e},expression:"authuser"}},[s("ParticularAccess",{attrs:{asseccType:"specialmodeltest"},on:{userFound:t.userFound}})],1)],1)},i=[],r=(s("6062"),s("d3b7"),s("3ca3"),s("ddb0"),s("d81d"),s("25f0"),s("4de4"),s("caad"),s("2532"),s("84ac")),n=s("8f3c"),o=s("9146"),c={components:{Timer:r["a"],ParticularAccess:n["a"]},data:function(){return{exams:[],all:[],authuser:!1,upcoming:null,subjects:new Set,se:""}},methods:{userFound:function(){this.authuser=!1,this.$swal({icon:"success",text:"Access Granted"}),this.authenticated=!0},getRoutineInfo:function(){var t=this;fetch(o.sscr+"specialmodeltest").then((function(t){return t.json()})).then((function(e){t.exams=e.routines.map((function(e){return t.subjects.add(e.subject),{id:e.id.toString(),topic:e.topic,question:e.question,subject:e.subject,start:new Date(e.start).getTime(),end:new Date(e.end).getTime(),solve_sheet:e.solve_sheet,total_marks:e.total_marks}})).sort((function(t,e){return t.start-e.start})),t.all=t.exams,t.upcoming=t.exams.filter((function(t){return t.end>Date.now()}))[0]}))},selectSubject:function(t){this.se=t,this.exams=this.all.filter((function(e){if(e.subject.toLowerCase().includes(t.toLowerCase()))return e}))},endalert:function(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},upcomingalert:function(){this.$swal({icon:"warning",title:"Upcomming",text:"Wait till starting Date."})},authToggle:function(){this.dialog=!1,this.authuser=!this.authuser}},created:function(){this.getRoutineInfo()},mounted:function(){this.authenticated=!!localStorage.getItem("specialmodeltest")}},l=c,u=(s("d267"),s("2877")),d=s("6544"),h=s.n(d),p=s("8336"),v=s("b0af"),m=s("99d9"),_=s("62ad"),f=s("a523"),g=s("169a"),b=s("490a"),x=s("0fd9"),C=Object(u["a"])(l,a,i,!1,null,"0bdbc54f",null);e["default"]=C.exports;h()(C,{VBtn:p["a"],VCard:v["a"],VCardActions:m["a"],VCardSubtitle:m["b"],VCardText:m["c"],VCardTitle:m["d"],VCol:_["a"],VContainer:f["a"],VDialog:g["a"],VProgressCircular:b["a"],VRow:x["a"]})},d267:function(t,e,s){"use strict";s("eb19")},eb19:function(t,e,s){}}]);