(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{172:function(t,e,r){t.exports=r.p+"img/profile-picture-128.12099b0.jpg"},173:function(t,e,r){var content=r(178);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("a510a2fc",content,!0,{sourceMap:!1})},176:function(t,e,r){var map={"./direction-through-comparison.md":[189,7],"./dopamine-exhaustion.md":[190,8],"./lining-up-for-things.md":[191,9],"./the-gamble-of-excess.md":[192,10]};function o(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],o=e[0];return r.e(e[1]).then((function(){return r.t(o,7)}))}o.keys=function(){return Object.keys(map)},o.id=176,t.exports=o},177:function(t,e,r){"use strict";var o=r(173);r.n(o).a},178:function(t,e,r){(e=r(44)(!1)).push([t.i,'.content[data-v-46bf260e] ol{list-style-type:decimal;margin-left:1.5rem}.content[data-v-46bf260e] ul{list-style-type:disc;margin-left:1.5rem}.content[data-v-46bf260e] h3{font-size:1.25rem;letter-spacing:.025em;margin-bottom:.5rem;font-weight:600}.content[data-v-46bf260e] p{margin-bottom:1.25rem}.content[data-v-46bf260e] code{--bg-opacity:1;background-color:#e2e8f0;background-color:rgba(226,232,240,var(--bg-opacity));padding-left:.25rem;padding-right:.25rem;font-family:Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;border-radius:.25rem;border-width:1px;--border-opacity:1;border-color:#cbd5e0;border-color:rgba(203,213,224,var(--border-opacity))}.content[data-v-46bf260e] blockquote{border-left-width:4px;--border-opacity:1;border-color:#cbd5e0;border-color:rgba(203,213,224,var(--border-opacity));padding-left:1rem;font-style:italic;margin-left:1rem}.content[data-v-46bf260e] blockquote,.content[data-v-46bf260e] hr{margin-top:2rem;margin-bottom:2rem}',""]),t.exports=e},195:function(t,e,r){"use strict";r.r(e);r(22),r(23),r(10),r(116),r(35);var o=r(3),n=r(84),c=r(85),l=r(86),d=r(66),f=r(14),m=r(67);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=Object(d.a)(t);if(e){var n=Object(d.a)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return Object(l.a)(this,r)}}var v=function(t,e,r,desc){var o,n=arguments.length,c=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(n<3?o(c):n>3?o(e,r,c):o(e,r))||c);return n>3&&c&&Object.defineProperty(e,r,c),c},y=function(t){Object(c.a)(r,t);var e=h(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(m.Vue),x=y=v([Object(m.Component)({asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.params,e.next=3,r(176)("./".concat(o.post,".md"));case 3:return n=e.sent,e.abrupt("return",{post:n});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.post.attributes.title,meta:[{hid:"description",name:"description",content:this.post.attributes.short},{hid:"og-title",property:"og:title",content:this.post.attributes.title},{hid:"og-description",property:"og:description",content:this.post.attributes.short},{hid:"og-image",property:"og:image",content:"~/assets/imgs/blog/".concat(this.post.attributes.image)},{hid:"og-url",property:"og:url",content:"https://kiliankukelka.com/blog"+this.post.attributes.slug}],link:[{rel:"canonical",href:"https://kiliankukelka.com/blog"+this.post.attributes.slug}]}},name:"BlogPostPage"})],y),_=(r(177),r(19)),component=Object(_.a)(x,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bg-gray-200"},[o("div",{staticClass:"container mx-auto"},[o("div",{staticClass:"pt-8 sm:pt-10 pb-6 border-b-2 border-red-400 mb-10",attrs:{id:"post-head"}},[o("h1",{staticClass:"font-bold text-3xl sm:text-4xl text-red-500"},[t._v("\n        "+t._s(t.post.attributes.title)+"\n      ")]),t._v(" "),o("h2",{staticClass:"font-normal text-2xl sm:text-3xl text-red-400 mb-6"},[t._v("\n        "+t._s(t.post.attributes.subtitle)+"\n      ")]),t._v(" "),o("div",{staticClass:"flex items-center"},[o("img",{staticClass:"h-16 w-16 rounded-full mr-4",attrs:{src:r(172),alt:""}}),t._v(" "),o("div",{staticClass:"flex flex-col"},[o("div",{staticClass:"text-gray-800"},[t._v("\n            by\n            "),o("span",{staticClass:"font-bold"},[t._v(t._s(t.post.attributes.author))])]),t._v(" "),o("div",{staticClass:"text-gray-800"},[t._v("\n            "+t._s(t.post.attributes.date)+" - "+t._s(t.post.attributes.length)+" min read\n          ")])])])]),t._v(" "),o("div",{staticClass:"content text-gray-900",domProps:{innerHTML:t._s(t.post.html)}})])])}),[],!1,null,"46bf260e",null);e.default=component.exports}}]);