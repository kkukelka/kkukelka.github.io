(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{215:function(t,e,r){t.exports=r.p+"98cb591270496270571c569feca67576.svg"},237:function(t,e,r){"use strict";r.r(e);r(29);var n=r(2),c=r(0).default.extend({asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("posts").sortBy("createdAt","desc").fetch();case 2:return r=e.sent,e.abrupt("return",{posts:r});case 4:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Blog | Kilian Kukelka",meta:[{hid:"description",name:"description",content:"A collection of essays about pretty much everything that colludes with my brain."}]}}}),l=r(21),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-gray-200"},[n("div",{staticClass:"container mx-auto py-8 sm:py-16 flex flex-col"},[n("ul",{staticClass:"px-0 lg:px-24 xl:px-40 grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-6"},t._l(t.posts,(function(e){return n("li",{key:e.title,staticClass:"h-64 bg-gray-100 hover:bg-red-100 border border-red-200"},[n("nuxt-link",{staticClass:"flex flex-col p-8 justify-between h-full",attrs:{to:"/blog/"+e.slug}},[n("div",[n("h2",{staticClass:"text-2xl font-bold text-red-400 border-b border-red-300 mb-2 pb-1 tracking-wide"},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),n("h3",{staticClass:"text-red-400 text-lg tracking-wide"},[t._v("\n              "+t._s(e.subtitle)+"\n            ")])]),t._v(" "),n("div",{staticClass:"flex justify-between items-center"},[n("span",{staticClass:"text-red-500 px-2 py-1 border rounded-lg tracking-wide border-red-300"},[t._v("\n              "+t._s(new Date(e.createdAt).toLocaleDateString("en-GB")))]),t._v(" "),n("img",{staticClass:"h-8 w-8",attrs:{src:r(215),alt:""}})])])],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);