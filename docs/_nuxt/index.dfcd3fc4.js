import{_ as p}from"./nuxt-link.fc86f5a7.js";import l from"./ContentList.7f8e5e09.js";import{i as m,u as d,o as s,c as n,a as o,b as u,w as a,F as h,q as x,s as g,t as e}from"./entry.97f74d1e.js";import"./ContentQuery.6772da07.js";import"./query.2367348d.js";import"./preview.1d708ec9.js";import"./utils.16ea4c7f.js";const b={class:"text-gray-800"},f={class:"container max-w-4xl mx-auto sm:pt-10 pb-12 sm:pb-24"},y=o("h1",{class:"text-3xl sm:text-4xl font-bold text-gray-700 leading-none pb-12"}," Blog ",-1),k={class:"text-gray-700 pb-12 space-y-8"},B={class:"text-lg font-bold tracking-wide group-hover:text-pink-800 transition-colors duration-150 ease-in"},w={class:"mb-0.5"},v={class:"text-sm font-light"},G=m({__name:"index",setup(L){d(()=>({title:"Blog",meta:[{name:"description",content:"A place to spout out my thoughts."}]}));const r={path:"/blog",limit:10,sort:[{date:-1}]};return(C,D)=>{const i=p,c=l;return s(),n("div",b,[o("div",f,[y,o("section",k,[u(c,{query:r},{default:a(({list:_})=>[(s(!0),n(h,null,x(_,t=>(s(),g(i,{key:t._path,to:t._path,class:"block pl-5 border-l-4 border-gray-600 group hover:border-pink-800 cursor-pointer transition-colors duration-150 ease-in"},{default:a(()=>[o("h3",B,e(t.title),1),o("p",w,e(t.subtitle),1),o("p",v,e(new Date(t.date).toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"numeric"}))+" - "+e(t.length)+" minute read ",1)]),_:2},1032,["to"]))),128))]),_:1})])])])}}});export{G as default};