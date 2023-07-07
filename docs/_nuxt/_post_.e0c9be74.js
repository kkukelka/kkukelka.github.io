import M from"./ContentRenderer.ffca9604.js";import{_ as H}from"./nuxt-link.0dfdd058.js";import N from"./ContentDoc.a62c88d9.js";import{r as T,f as $,u as B,g as A,h as S,i as V,j,k as R,l as k,o as m,c as h,b as g,w as C,a as e,t as l,m as L,d as D,n as I}from"./entry.fb919864.js";import{u as O,q}from"./query.65f27e23.js";import"./ContentRendererMarkdown.ebdf1616.js";import"./index.a6ef77ff.js";import"./preview.545cad8e.js";import"./ContentQuery.37b19a83.js";import"./utils.c2855050.js";function E(x,a){const i=T({});return $(()=>{const r=A(x),{title:t,titleTemplate:p,...d}=r;i.value={title:t,titleTemplate:p,meta:S(d)}}),B(i,a)}const P=""+globalThis.__publicAssetsURL("images/profile-picture-128.webp"),U={class:"container max-w-4xl mx-auto pb-20"},z={id:"post-head",class:"sm:pt-10 pb-6 border-b-2 border-pink-800 mb-8"},G={class:"font-bold text-3xl sm:text-4xl text-pink-800"},J={class:"font-normal text-2xl sm:text-3xl text-pink-800 mb-6"},F={class:"mb-6"},K=["src","alt"],Q=["innerHTML"],W={class:"flex items-center"},X=e("img",{width:"64",height:"64",class:"h-16 w-16 rounded-full mr-4",src:P,alt:"Author image"},null,-1),Y={class:"flex flex-col"},Z={class:"text-gray-800"},tt={class:"font-bold"},et={class:"text-gray-800 font-light"},ot=e("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",viewBox:"0 0 24 24",width:"18px",height:"18px",class:"group-hover:fill-pink-800 inline align-text-bottom transition-colors duration-150 ease-in"},[e("rect",{fill:"none",height:"24",width:"24"}),e("path",{d:"M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z"})],-1),dt=V({__name:"[post]",async setup(x){var f,v,b,w;let a,i;const{path:r}=j(),{data:t}=([a,i]=R(()=>O(r,()=>q().where({_path:r}).findOne(),"$l2OplxRL7y")),a=await a,i(),a),p=k(()=>{var n;const s=new Date((n=t.value)==null?void 0:n.date);return s?s.toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"2-digit"}):""}),d=k(()=>{var s,n,c,u,_,o,y;return{"@context":"https://schema.org","@type":"BlogPosting",headline:(s=t.value)==null?void 0:s.title,image:`/images/blog/${(n=t.value)==null?void 0:n.image}.jpg`,datePublished:(c=t.value)==null?void 0:c.date,dateModified:(u=t.value)==null?void 0:u.updatedAt,description:(_=t.value)==null?void 0:_.description,author:(o=t.value)==null?void 0:o.author,wordCount:(y=t.value)==null?void 0:y.wordCount}});return B(()=>({script:[{type:"application/ld+json",children:JSON.stringify(d.value)}]})),E({title:(f=t.value)==null?void 0:f.title,ogTitle:(v=t.value)==null?void 0:v.title,description:(b=t.value)==null?void 0:b.description,ogDescription:(w=t.value)==null?void 0:w.description,ogImage:()=>{var s;return`/images/blog/${(s=t.value)==null?void 0:s.image}.jpg`},twitterCard:"summary_large_image"}),(s,n)=>{const c=M,u=H,_=N;return m(),h("main",null,[g(_,null,{default:C(({doc:o})=>[e("div",U,[e("div",z,[e("h1",G,l(o.title),1),e("h2",J,l(o.subtitle),1),e("figure",F,[o.image?(m(),h("img",{key:0,width:"640",height:"426",src:`/images/blog/${o.image}.webp`,alt:o.alt||"Blog post image"},null,8,K)):L("",!0),o.attribution?(m(),h("figcaption",{key:1,class:"text-gray-500 text-xs text-right font-light mt-1.5",innerHTML:o.attribution},null,8,Q)):L("",!0)]),e("div",W,[X,e("div",Y,[e("div",Z,[D(" by "),e("span",tt,l(o.author),1)]),e("div",et,l(I(p))+" - "+l(o.length)+" min read ",1)])])]),g(c,{value:o,class:"nuxt-content"},null,8,["value"]),g(u,{to:"/blog",class:"group hover:text-pink-800 transition-colors duration-150 ease-in"},{default:C(()=>[ot,D(" back ")]),_:1})])]),_:1})])}}});export{dt as default};
