import{f as y,j as d,l as w,m as g,n as D,e as H,q,s as S,v as u}from"./CwEyYzB6.js";import _ from"./CbxGNFTT.js";import b from"./DGdBnmzc.js";import{u as j}from"./BzJC_7VK.js";import"./CL7mMUEZ.js";import"./C-v3KzvZ.js";import"./CxYJgpPD.js";import"./p5MpZL09.js";import"./DzKcJRni.js";const a=(p,s=y())=>{const e=d(p),f=g();w(()=>d(p),(n=e)=>{if(!s.path||!n)return;const t=Object.assign({},(n==null?void 0:n.head)||{});t.meta=[...t.meta||[]],t.link=[...t.link||[]];const r=t.title||(n==null?void 0:n.title);r&&(t.title=r),f.public.content.host;const c=(t==null?void 0:t.description)||(n==null?void 0:n.description);c&&t.meta.filter(l=>l.name==="description").length===0&&t.meta.push({name:"description",content:c}),t!=null&&t.image||(n==null||n.image),D(()=>j(t))},{immediate:!0})},x=H({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(p){const{contentHead:s}=g().public.content,e=q(),{tag:f,excerpt:m,path:n,query:t,head:r}=p,c=r===void 0?s:r,l={...t||{},path:n||(t==null?void 0:t.path)||S(y().path),find:"one"},v=(o,i)=>u("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return u(b,l,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:C})=>{var h;return c&&a(o),(h=e.default)==null?void 0:h.call(e,{doc:o,refresh:i,isPartial:C,excerpt:m,...this.$attrs})}:({data:o})=>(c&&a(o),u(_,{value:o,excerpt:m,tag:f,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):v("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||u("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||u("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),P=x;export{P as default};
