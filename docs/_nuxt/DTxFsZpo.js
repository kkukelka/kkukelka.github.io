import{a8 as o,G as c,a9 as d,q as f,aa as v,ab as l,ac as i,N as h,ad as m}from"./Dz4AnRwM.js";function U(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=c(!1),n=c({});d(()=>{n.value=s.value?{}:m(a)});const r=t.push(n.value,e);return f(n,u=>{r.patch(u)}),h()&&(v(()=>{r.dispose()}),l(()=>{s.value=!0}),i(()=>{s.value=!1})),r}export{U as u};