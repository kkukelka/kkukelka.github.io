import s from"./ContentSlot.9852c78f.js";import{b as o,h as m,e as p,j as u}from"./entry.593d1569.js";import"./utils.b158dabf.js";import"./preview.a9f87aa5.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=u(),{between:n,default:r}=m(),a=p(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:r,tags:a,between:n,parent:e}}});export{d as default};