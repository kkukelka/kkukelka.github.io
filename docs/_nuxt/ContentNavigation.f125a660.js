import{q as f,h as p,e as v,j as g,u as d}from"./query.a11bdd7e.js";import{a as l,_ as h,b as _,t as y,e as w,f as C,h as P,i as r}from"./entry.0c2a9bfd.js";import{_ as $}from"./nuxt-link.e5380ccf.js";import{w as c,s as N,u as j}from"./utils.8cf9337f.js";import{u as T}from"./preview.faa45218.js";const D=async e=>{const{content:t}=l().public;typeof(e==null?void 0:e.params)!="function"&&(e=f(e));const a=e.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${p(a)}.${t.integrity}`}/${v(a)}.json`):c(`/navigation/${p(a)}.${t.integrity}.json`);if(N())return(await h(()=>import("./client-db.80e07fa8.js"),["./client-db.80e07fa8.js","./entry.0c2a9bfd.js","./entry.e123606d.css","./query.a11bdd7e.js","./utils.8cf9337f.js","./preview.faa45218.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:g(a),previewToken:T().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},Q=_({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=y(e),a=w(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&C("dd-navigation").value){const{navigation:n}=j();return{navigation:n}}const{data:s}=await d(`content-navigation-${p(a.value)}`,()=>D(a.value));return{navigation:s}},render(e){const t=P(),{navigation:a}=e,s=o=>r($,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),m=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}});export{Q as default};
