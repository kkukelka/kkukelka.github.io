import{q as f,h as p,e as v,j as g,u as d}from"./query.b7221c1c.js";import{a as l,_ as h,b as _,t as y,e as w,f as C,h as P,i as r}from"./entry.c7cda4e2.js";import{_ as $}from"./nuxt-link.4f0b524d.js";import{w as c,s as N,u as j}from"./utils.70c52510.js";import{u as T}from"./preview.6ccf8bd9.js";const D=async e=>{const{content:t}=l().public;typeof(e==null?void 0:e.params)!="function"&&(e=f(e));const a=e.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${p(a)}.${t.integrity}`}/${v(a)}.json`):c(`/navigation/${p(a)}.${t.integrity}.json`);if(N())return(await h(()=>import("./client-db.13961ffb.js"),["./client-db.13961ffb.js","./entry.c7cda4e2.js","./entry.5d523a12.css","./query.b7221c1c.js","./utils.70c52510.js","./preview.6ccf8bd9.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:g(a),previewToken:T().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},Q=_({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=y(e),a=w(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&C("dd-navigation").value){const{navigation:n}=j();return{navigation:n}}const{data:s}=await d(`content-navigation-${p(a.value)}`,()=>D(a.value));return{navigation:s}},render(e){const t=P(),{navigation:a}=e,s=o=>r($,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),m=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}});export{Q as default};