import M from"./ContentRenderer.eb963c4a.js";import{_ as $}from"./nuxt-link.e5380ccf.js";import H from"./ContentDoc.4cd14e50.js";import{C as N,R as S,v as B,S as T,U as V,b as j,q as A,V as R,e as k,o as m,l as g,W as h,w as C,X as e,Y as l,Z as L,$ as D,u as q}from"./entry.0c2a9bfd.js";import{u as I,q as O}from"./query.a11bdd7e.js";import"./ContentRendererMarkdown.9832e90f.js";import"./index.a6ef77ff.js";import"./preview.faa45218.js";import"./ContentQuery.c190b9a9.js";import"./utils.8cf9337f.js";function U(x,a){const i=N({});return S(()=>{const r=T(x),{title:t,titleTemplate:p,...d}=r;i.value={title:t,titleTemplate:p,meta:V(d)}}),B(i,a)}const E=""+globalThis.__publicAssetsURL("images/profile-picture-128.jpg"),P={class:"container max-w-4xl mx-auto pb-20"},z={id:"post-head",class:"sm:pt-10 pb-6 border-b-2 border-pink-800 mb-8"},G={class:"font-bold text-3xl sm:text-4xl text-pink-800"},J={class:"font-normal text-2xl sm:text-3xl text-pink-800 mb-6"},W={class:"mb-6"},X=["src","alt"],Y=["innerHTML"],Z={class:"flex items-center"},F=e("img",{width:"64",height:"64",class:"h-16 w-16 rounded-full mr-4",src:E,alt:"Author image"},null,-1),K={class:"flex flex-col"},Q={class:"text-gray-800"},tt={class:"font-bold"},et={class:"text-gray-800 font-light"},ot=e("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",viewBox:"0 0 24 24",width:"18px",height:"18px",class:"group-hover:fill-pink-800 inline align-text-bottom transition-colors duration-150 ease-in"},[e("rect",{fill:"none",height:"24",width:"24"}),e("path",{d:"M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z"})],-1),dt=j({__name:"[post]",async setup(x){var f,v,b,w;let a,i;const{path:r}=A(),{data:t}=([a,i]=R(()=>I(r,()=>O().where({_path:r}).findOne(),"$l2OplxRL7y")),a=await a,i(),a),p=k(()=>{var n;const s=new Date((n=t.value)==null?void 0:n.date);return s?s.toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"2-digit"}):""}),d=k(()=>{var s,n,c,u,_,o,y;return{"@context":"https://schema.org","@type":"BlogPosting",headline:(s=t.value)==null?void 0:s.title,image:`/images/blog/${(n=t.value)==null?void 0:n.image}.jpg`,datePublished:(c=t.value)==null?void 0:c.date,dateModified:(u=t.value)==null?void 0:u.updatedAt,description:(_=t.value)==null?void 0:_.description,author:(o=t.value)==null?void 0:o.author,wordCount:(y=t.value)==null?void 0:y.wordCount}});return B(()=>({script:[{type:"application/ld+json",children:JSON.stringify(d.value)}]})),U({title:(f=t.value)==null?void 0:f.title,ogTitle:(v=t.value)==null?void 0:v.title,description:(b=t.value)==null?void 0:b.description,ogDescription:(w=t.value)==null?void 0:w.description,ogImage:()=>{var s;return`/images/blog/${(s=t.value)==null?void 0:s.image}.jpg`},twitterCard:"summary_large_image"}),(s,n)=>{const c=M,u=$,_=H;return m(),g("main",null,[h(_,null,{default:C(({doc:o})=>[e("div",P,[e("div",z,[e("h1",G,l(o.title),1),e("h2",J,l(o.subtitle),1),e("figure",W,[o.image?(m(),g("img",{key:0,width:"640",height:"426",src:`/images/blog/${o.image}.jpg`,alt:o.alt||"Blog post image"},null,8,X)):L("",!0),o.attribution?(m(),g("figcaption",{key:1,class:"text-gray-500 text-xs text-right font-light mt-1.5",innerHTML:o.attribution},null,8,Y)):L("",!0)]),e("div",Z,[F,e("div",K,[e("div",Q,[D(" by "),e("span",tt,l(o.author),1)]),e("div",et,l(q(p))+" - "+l(o.length)+" min read ",1)])])]),h(c,{value:o,class:"nuxt-content"},null,8,["value"]),h(u,{to:"/blog",class:"group hover:text-pink-800 transition-colors duration-150 ease-in"},{default:C(()=>[ot,D(" back ")]),_:1})])]),_:1})])}}});export{dt as default};
