import{h as p,z as m,k as A,B as l,H as w}from"./entry.00f191bc.js";const S=["p","h1","h2","h3","h4","h5","h6","li"];function f(r,t){return r.type===t||typeof r.type=="object"&&r.type.tag===t||r.tag===t}function s(r){return f(r,"text")||f(r,Symbol.for("v-txt"))}function y(r){var t;return Array.isArray(r.children)||typeof r.children=="string"?r.children:typeof((t=r.children)==null?void 0:t.default)=="function"?r.children.default():[]}function a(r){if(!r)return"";if(Array.isArray(r))return r.map(a).join("");if(s(r))return r.children||r.value||"";const t=y(r);return Array.isArray(t)?t.map(a).filter(Boolean).join(""):""}function c(r,t=[]){if(Array.isArray(r))return r.flatMap(n=>c(n,t));let e=r;return t.some(n=>n==="*"||f(r,n))&&(e=y(r)||r,!Array.isArray(e)&&S.some(n=>f(r,n))&&(e=[e])),e}function h(r,t=[]){return r=Array.isArray(r)?r:[r],t.length?r.flatMap(e=>h(c(e,[t[0]]),t.slice(1))).filter(e=>!(s(e)&&a(e).trim()==="")):r}function g(r,t=[]){return typeof t=="string"&&(t=t.split(",").map(e=>e.trim()).filter(Boolean)),t.length?h(r,t).reduce((e,n)=>(s(n)?typeof e[e.length-1]=="string"?e[e.length-1]+=n.children:e.push(n.children):e.push(n),e),[]):r}const C=p({name:"MDCSlot",functional:!0,props:{name:{type:String,default:"default"},unwrap:{type:[Boolean,String],default:!1},use:{type:Function,default:void 0}},setup(r){const{parent:t}=w(),{default:e}=m(),n=A(()=>typeof r.unwrap=="string"?r.unwrap.split(" "):["*"]);return{fallbackSlot:e,tags:n,parent:t}},render({use:r,unwrap:t,fallbackSlot:e,tags:n,parent:i}){var o;try{let u=r;return typeof r=="string"&&(u=(i==null?void 0:i.slots[r])||((o=i==null?void 0:i.parent)==null?void 0:o.slots[r]),console.warn(`Please set :use="$slots.${r}" in <MDCSlot> component to enable reactivity`)),u?t?g(u(),n):[u()]:e?e():l("div")}catch{return l("div")}}}),_=p({props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},render(r){return l(C,r)}});export{_ as default};
