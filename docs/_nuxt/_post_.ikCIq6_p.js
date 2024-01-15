import L from"./ContentRenderer.oWZkZ48z.js";import{_ as V}from"./nuxt-link.AVe9xqpy.js";import A from"./ContentDoc.IpLXYUAD.js";import{u as B,f as T,g as j,h as N,i as C,o as _,c as g,b as d,w as x,a as t,t as r,j as D,d as f,k as S}from"./entry.twmvgiwD.js";import{u as $,q as R}from"./query.QE40jh_R.js";import{u as H}from"./vue.f36acd1f.BYRuRh8i.js";import"./ContentRendererMarkdown.vue.m0dsZiIe.js";import"./index.1dSrIji7.js";import"./preview.ODLEAzRq.js";import"./ContentQuery.GQNih3QT.js";function O(v,s){const{title:c,titleTemplate:u,...e}=v;return H({title:c,titleTemplate:u,_flatMeta:e},{...s,transform(i){const h=B({...i._flatMeta});return delete i._flatMeta,{...i,meta:h}}})}const Z=""+globalThis.__publicAssetsURL("images/profile-picture-128.webp"),q={class:"container max-w-4xl mx-auto pb-20"},E={id:"post-head",class:"sm:pt-10 pb-6 border-b-2 border-pink-800 mb-8"},J={class:"font-bold text-3xl sm:text-4xl text-pink-800"},P={class:"font-normal text-2xl sm:text-3xl text-pink-800 mb-6"},z={class:"mb-6"},G=["src","alt"],I=["innerHTML"],U={class:"flex items-center"},F=t("img",{width:"64",height:"64",class:"h-16 w-16 rounded-full mr-4",src:Z,alt:"Author image"},null,-1),K={class:"flex flex-col"},Q={class:"text-gray-800"},W={class:"font-bold"},X={class:"text-gray-800 font-light"},Y={class:"flex justify-center mt-8"},tt=t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 group-hover:fill-pink-800 inline transition-colors duration-150 ease-in"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"})],-1),et=t("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",viewBox:"0 0 24 24",width:"18px",height:"18px",class:"group-hover:fill-pink-800 inline align-text-bottom transition-colors duration-150 ease-in"},[t("rect",{fill:"none",height:"24",width:"24"}),t("path",{d:"M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z"})],-1),pt=T({__name:"[post]",async setup(v){var b,w,k,y;let s,c;const{path:u}=j(),{data:e}=([s,c]=N(()=>$(u,()=>R().where({_path:u}).findOne(),"$l2OplxRL7y")),s=await s,c(),s),i=C(()=>{var n;const a=new Date((n=e.value)==null?void 0:n.publishedDate);return a?a.toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"2-digit"}):""}),h=C(()=>{var a,n,m,l,p,o,M;return{"@context":"https://schema.org","@type":"BlogPosting",headline:(a=e.value)==null?void 0:a.title,image:`/images/blog/${(n=e.value)==null?void 0:n.image}.jpg`,datePublished:(m=e.value)==null?void 0:m.publishedDate,dateModified:(l=e.value)==null?void 0:l.updatedAt,description:(p=e.value)==null?void 0:p.description,author:(o=e.value)==null?void 0:o.author,wordCount:(M=e.value)==null?void 0:M.wordCount}});return H(()=>({script:[{type:"application/ld+json",children:JSON.stringify(h.value)}]})),O({title:(b=e.value)==null?void 0:b.title,ogTitle:(w=e.value)==null?void 0:w.title,description:(k=e.value)==null?void 0:k.description,ogDescription:(y=e.value)==null?void 0:y.description,ogImage:()=>{var a;return`/images/blog/${(a=e.value)==null?void 0:a.image}.jpg`},twitterCard:"summary_large_image"}),(a,n)=>{const m=L,l=V,p=A;return _(),g("main",null,[d(p,null,{default:x(({doc:o})=>[t("div",q,[t("div",E,[t("h1",J,r(o.title),1),t("h2",P,r(o.subtitle),1),t("figure",z,[o.image?(_(),g("img",{key:0,width:"640",height:"426",src:`/images/blog/${o.image}.webp`,alt:o.alt||"Blog post image"},null,8,G)):D("",!0),o.attribution?(_(),g("figcaption",{key:1,class:"text-gray-500 text-xs text-right font-light mt-1.5",innerHTML:o.attribution},null,8,I)):D("",!0)]),t("div",U,[F,t("div",K,[t("div",Q,[f(" by "),t("span",W,r(o.author),1)]),t("div",X,r(S(i))+" - "+r(o.length)+" min read ",1)])])]),d(m,{value:o,class:"nuxt-content"},null,8,["value"]),t("section",Y,[d(l,{to:"https://paypal.me/kiliankukelka?country.x=AT&locale.x=de_DE",target:"_blank",class:"bg-pink-700 text-white font-bold px-4 py-2 rounded-md hover:bg-pink-600"},{default:x(()=>[f(" Tip Jar "),tt]),_:1})]),d(l,{to:"/blog",class:"group hover:text-pink-800 transition-colors duration-150 ease-in"},{default:x(()=>[et,f(" back ")]),_:1})])]),_:1})])}}});export{pt as default};
