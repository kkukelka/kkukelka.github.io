import s from"./ContentSlot.e1050668.js";import{b as o,h as m,e as p,j as u}from"./entry.0c2a9bfd.js";import"./utils.8cf9337f.js";import"./preview.faa45218.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=u(),{between:n,default:r}=m(),a=p(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:r,tags:a,between:n,parent:e}}});export{d as default};