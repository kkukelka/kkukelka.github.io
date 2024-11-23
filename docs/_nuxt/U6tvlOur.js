import{_ as h}from"./Cxa1c2ij.js";import g from"./i559ku90.js";import{e as u,o as i,c as o,a as s,b as x,w as a,F as c,r as m,t as l,k}from"./KpLvUoCi.js";import{u as w}from"./ePa-iX6u.js";import"./Bh9JWNei.js";import"./BbqaOCSh.js";import"./CswJzt-0.js";const b={class:"text-gray-800"},f={class:"container max-w-4xl mx-auto sm:pt-10"},v={class:"text-gray-700 pb-12 space-y-8"},y={class:"flex sm:space-x-5"},D={class:"hidden sm:inline w-1/4"},L=["src","alt"],B={class:"sm:w-3/4"},P={class:"flex mb-2 sm:mb-0"},V={class:"sm:hidden w-1/4 mr-4 sm:mr-5"},$=["src","alt"],C={class:"w-3/4 sm:w-full"},N={class:"text-xl sm:text-xl font-bold tracking-wide group-hover:text-pink-800 transition-colors duration-150 ease-in mb-2"},F={class:"sm:mb-2 line-clamp-3 leading-snug"},H={class:"inline sm:block text-sm mb-2"},K={class:"inline-flex sm:block"},S=["src","alt"],q={class:"sm:hidden text-pink-800"},Q=u({__name:"publications",setup(z){w(()=>({title:"Publications",meta:[{name:"description",content:"Published works by Kilian Kukelka"}]}));const r={path:"/publications",limit:10,sort:[{publishedDate:-1}]};return(A,t)=>{const d=h,_=g;return i(),o("div",b,[s("div",f,[t[4]||(t[4]=s("h1",{class:"text-3xl sm:text-4xl font-bold text-gray-700 leading-none pb-12"}," Publications ",-1)),s("section",v,[x(_,{query:r},{default:a(({list:p})=>[(i(!0),o(c,null,m(p,e=>(i(),o("li",{key:e._path,class:"list-none"},[s("div",y,[s("div",D,[s("img",{src:`/images/publications/${e.image}.webp`,alt:e.alt,class:"aspect-[5/8]"},null,8,L)]),s("div",B,[s("div",P,[s("div",V,[s("img",{src:`/images/publications/${e.image}.webp`,alt:e.alt,class:"aspect-[5/8]"},null,8,$)]),s("div",C,[s("h3",N,l(e.title),1),t[0]||(t[0]=s("h4",{class:"font-bold tracking-wide"},"Description:",-1)),s("p",F,l(e.description),1)])]),t[3]||(t[3]=s("h4",{class:"font-bold tracking-wide inline sm:block"}," Publication Date: ",-1)),s("p",H,l(new Date(e.publicationDate).toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"numeric"})),1),s("div",K,[t[2]||(t[2]=s("h4",{class:"font-bold tracking-wide inline sm:block"}," Available at: ",-1)),(i(!0),o(c,null,m(e.distributors,n=>(i(),k(d,{key:n.key,to:n.link,target:"_blank",class:"sm:py-2 sm:px-1 group inline-flex items-center sm:block"},{default:a(()=>[s("img",{src:`/images/distributors/${n.key}.svg`,alt:n.alt,class:"hidden sm:inline w-20 duration-200 group-hover:scale-105"},null,8,S),t[1]||(t[1]=s("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",viewBox:"0 0 24 24",width:"24px",height:"24px",class:"ml-2 w-4 h-4 mr-1 fill-pink-800 sm:hidden"},[s("rect",{fill:"none",height:"24",width:"24"}),s("path",{d:"M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z"})],-1)),s("span",q,l(n.alt),1)]),_:2},1032,["to"]))),128))])])])]))),128))]),_:1})])])])}}});export{Q as default};