import b from"./ContentRenderer.1d7acfdb.js";import{_ as v}from"./nuxt-link.ff766cda.js";import w from"./ContentDoc.e1577983.js";import{u as y,q as k}from"./query.3663ce8f.js";import{b as L,q as C,R as B,e as D,o as i,l,S as r,w as m,U as t,V as s,W as p,X as u,u as V}from"./entry.7b232bf3.js";import"./ContentRendererMarkdown.432533c1.js";import"./index.a6ef77ff.js";import"./preview.25c6d035.js";import"./ContentQuery.1622303d.js";import"./utils.ebaf3918.js";const N=""+globalThis.__publicAssetsURL("images/profile-picture-128.jpg"),R={class:"container max-w-4xl mx-auto pb-20"},A={id:"post-head",class:"pt-8 sm:pt-10 pb-6 border-b-2 border-pink-800 mb-8"},H={class:"font-bold text-3xl sm:text-4xl text-pink-800"},S={class:"font-normal text-2xl sm:text-3xl text-pink-800 mb-6"},T={class:"mb-6"},$=["src","alt"],q=["innerHTML"],M={class:"flex items-center"},j=t("img",{class:"h-16 w-16 rounded-full mr-4",src:N,alt:"Author image"},null,-1),O={class:"flex flex-col"},U={class:"text-gray-800"},z={class:"font-bold"},E={class:"text-gray-800 font-light"},G=t("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",viewBox:"0 0 24 24",width:"18px",height:"18px",class:"group-hover:fill-pink-800 inline align-text-bottom transition-colors duration-150 ease-in"},[t("rect",{fill:"none",height:"24",width:"24"}),t("path",{d:"M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z"})],-1),et=L({__name:"[post]",async setup(W){let o,_;const{path:c}=C(),{data:d}=([o,_]=B(()=>y(c,()=>k().where({_path:c}).findOne(),"$l2OplxRL7y")),o=await o,_(),o),h=D(()=>{var a;const n=new Date((a=d.value)==null?void 0:a.date);return n?n.toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"2-digit"}):""});return(n,a)=>{const x=b,g=v,f=w;return i(),l("main",null,[r(f,null,{default:m(({doc:e})=>[t("div",R,[t("div",A,[t("h1",H,s(e.title),1),t("h2",S,s(e.subtitle),1),t("figure",T,[e.image?(i(),l("img",{key:0,src:`/images/blog/${e.image}.jpg`,alt:e.alt||"Blog post image"},null,8,$)):p("",!0),e.attribution?(i(),l("figcaption",{key:1,class:"text-gray-500 text-xs text-right font-light mt-1.5",innerHTML:e.attribution},null,8,q)):p("",!0)]),t("div",M,[j,t("div",O,[t("div",U,[u(" by "),t("span",z,s(e.author),1)]),t("div",E,s(V(h))+" - "+s(e.length)+" min read ",1)])])]),r(x,{value:e,class:"nuxt-content"},null,8,["value"]),r(g,{to:"/blog",class:"group hover:text-pink-800 transition-colors duration-150 ease-in"},{default:m(()=>[G,u(" back ")]),_:1})])]),_:1})])}}});export{et as default};
