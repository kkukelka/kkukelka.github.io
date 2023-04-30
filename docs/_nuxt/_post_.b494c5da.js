import h from"./ContentRenderer.4f4b1b64.js";import x from"./ContentDoc.6e4de281.js";import{u as g,q as f}from"./query.9e32b657.js";import{b,q as y,R as v,e as w,o as r,l as c,S as _,w as C,U as t,V as s,W as k,X as D,u as B}from"./entry.7e6487d2.js";import"./ContentRendererMarkdown.579875fe.js";import"./index.a6ef77ff.js";import"./preview.3a59b7d6.js";import"./ContentQuery.a80803c5.js";import"./utils.4efa5f86.js";const R=""+globalThis.__publicAssetsURL("images/profile-picture-128.jpg"),V={class:"container max-w-4xl mx-auto pb-20"},A={id:"post-head",class:"pt-8 sm:pt-10 pb-6 border-b-2 border-pink-800 mb-8"},N={class:"font-bold text-3xl sm:text-4xl text-pink-800"},S={class:"font-normal text-2xl sm:text-3xl text-pink-800 mb-6"},$=["src"],q={class:"flex items-center"},L=t("img",{class:"h-16 w-16 rounded-full mr-4",src:R,alt:"Author image"},null,-1),j={class:"flex flex-col"},O={class:"text-gray-800"},T={class:"font-bold"},U={class:"text-gray-800 font-light"},M=b({__name:"[post]",async setup(E){let o,i;const{path:l}=y(),{data:m}=([o,i]=v(()=>g(l,()=>f().where({_path:l}).findOne(),"$l2OplxRL7y")),o=await o,i(),o),p=w(()=>{var a;const n=new Date((a=m.value)==null?void 0:a.date);return n?n.toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"2-digit"}):""});return(n,a)=>{const d=h,u=x;return r(),c("main",null,[_(u,null,{default:C(({doc:e})=>[t("div",V,[t("div",A,[t("h1",N,s(e.title),1),t("h2",S,s(e.subtitle),1),e.image?(r(),c("img",{key:0,src:`/images/blog/${e.image}.jpg`,alt:"Blog post image",class:"mb-6"},null,8,$)):k("",!0),t("div",q,[L,t("div",j,[t("div",O,[D(" by "),t("span",T,s(e.author),1)]),t("div",U,s(B(p))+" - "+s(e.length)+" min read ",1)])])]),_(d,{value:e,class:"nuxt-content"},null,8,["value"])])]),_:1})])}}});export{M as default};