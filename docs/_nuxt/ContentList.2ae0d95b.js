import d from"./ContentQuery.06819bbc.js";import{h as c,z as h,B as p}from"./entry.00f191bc.js";import"./query.7f6fde5c.js";import"./preview.b9f2fcbc.js";const r=(u,t)=>p("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:u,data:t},null,2)),l=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(u){const t=h(),{path:f,query:o}=u,n={...o||{},path:f||(o==null?void 0:o.path)||"/"};return p(d,n,{default:t!=null&&t.default?({data:e,refresh:a,isPartial:m})=>t.default({list:e,refresh:a,isPartial:m,...this.$attrs}):e=>r("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):r("default",e==null?void 0:e.data),"not-found":e=>{var a;return t!=null&&t["not-found"]?(a=t==null?void 0:t["not-found"])==null?void 0:a.call(t,e):r("not-found",e==null?void 0:e.data)}})}}),y=l,S=y;export{S as default};
