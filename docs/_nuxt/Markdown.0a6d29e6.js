import s from"./ContentSlot.ac0f4415.js";import{b as o,h as m,e as p,j as u}from"./entry.7b232bf3.js";import"./utils.ebaf3918.js";import"./preview.25c6d035.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=u(),{between:n,default:r}=m(),a=p(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:r,tags:a,between:n,parent:e}}});export{d as default};