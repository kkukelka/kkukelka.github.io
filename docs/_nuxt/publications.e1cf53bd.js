import{_ as h}from"./nuxt-link.b7ba9c0b.js";import p from"./ContentList.bfb4ba72.js";import{i as x,u,o as n,c as o,a as s,b as g,w as a,F as l,q as c,t as i,s as k}from"./entry.83b89d63.js";import"./ContentQuery.6852b9e9.js";import"./query.14e4ccc0.js";import"./preview.e92425c0.js";import"./utils.0b220545.js";const w={class:"text-gray-800"},b={class:"container max-w-4xl mx-auto sm:pt-10"},f=s("h1",{class:"text-3xl sm:text-4xl font-bold text-gray-700 leading-none pb-12"}," Publications ",-1),v={class:"text-gray-700 pb-12 space-y-8"},y={class:"flex sm:space-x-5"},L={class:"hidden sm:inline w-1/4"},B=["src","alt"],D={class:"sm:w-3/4"},P={class:"flex mb-2 sm:mb-0"},V={class:"sm:hidden w-1/4 mr-4 sm:mr-5"},C=["src","alt"],N={class:"w-3/4 sm:w-full"},$={class:"text-xl sm:text-xl font-bold tracking-wide group-hover:text-pink-800 transition-colors duration-150 ease-in mb-2"},q=s("h4",{class:"font-bold tracking-wide"},"Description:",-1),F={class:"sm:mb-2 line-clamp-3"},H=s("h4",{class:"font-bold tracking-wide inline sm:block"}," Publication Date: ",-1),K={class:"inline sm:block text-sm mb-2"},S={class:"inline-flex sm:block"},z=s("h4",{class:"font-bold tracking-wide inline sm:block"}," Available at: ",-1),A=["src","alt"],E=s("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",viewBox:"0 0 24 24",width:"24px",height:"24px",class:"ml-2 w-4 h-4 mr-1 fill-pink-800 sm:hidden"},[s("rect",{fill:"none",height:"24",width:"24"}),s("path",{d:"M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z"})],-1),G={class:"sm:hidden text-pink-800"},X=x({__name:"publications",setup(M){u(()=>({title:"Publications",meta:[{name:"description",content:"Published works by Kilian Kukelka"}]}));const m={path:"/publications",limit:10,sort:[{date:-1}]};return(j,I)=>{const _=h,d=p;return n(),o("div",w,[s("div",b,[f,s("section",v,[g(d,{query:m},{default:a(({list:r})=>[(n(!0),o(l,null,c(r,t=>(n(),o("li",{key:t._path,class:"list-none"},[s("div",y,[s("div",L,[s("img",{src:`/images/publications/${t.image}.webp`,alt:t.alt,class:"aspect-[5/8]"},null,8,B)]),s("div",D,[s("div",P,[s("div",V,[s("img",{src:`/images/publications/${t.image}.webp`,alt:t.alt,class:"aspect-[5/8]"},null,8,C)]),s("div",N,[s("h3",$,i(t.title),1),q,s("p",F,i(t.description),1)])]),H,s("p",K,i(new Date(t.publicationDate).toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"numeric"})),1),s("div",S,[z,(n(!0),o(l,null,c(t.distributors,e=>(n(),k(_,{key:e.key,to:e.link,target:"_blank",class:"sm:py-2 sm:px-1 group inline-flex items-center sm:block"},{default:a(()=>[s("img",{src:`/images/distributors/${e.key}.svg`,alt:e.alt,class:"hidden sm:inline w-20 duration-200 group-hover:scale-105"},null,8,A),E,s("span",G,i(e.alt),1)]),_:2},1032,["to"]))),128))])])])]))),128))]),_:1})])])])}}});export{X as default};
