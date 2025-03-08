import{a1 as $,U as W,m as M,J,S as H}from"./CwEyYzB6.js";import{g as k,b as O,c as j,d as S,o as q,f as F,i as x,k as L,l as G}from"./DzKcJRni.js";import{p as Z}from"./C-v3KzvZ.js";import{u as Y}from"./p5MpZL09.js";const V="memory",Q=()=>{const t=new Map;return{name:V,getInstance:()=>t,hasItem(r){return t.has(r)},getItem(r){return t.get(r)??null},getItemRaw(r){return t.get(r)??null},setItem(r,n){t.set(r,n)},setItemRaw(r,n){t.set(r,n)},removeItem(r){t.delete(r)},getKeys(){return[...t.keys()]},clear(){t.clear()},dispose(){t.clear()}}};function X(t){return!t||typeof t.then!="function"?Promise.resolve(t):t}function p(t,...r){try{return X(t(...r))}catch(n){return Promise.reject(n)}}function ee(t){const r=typeof t;return t===null||r!=="object"&&r!=="function"}function te(t){const r=Object.getPrototypeOf(t);return!r||r.isPrototypeOf(Object)}function P(t){if(ee(t))return String(t);if(te(t)||Array.isArray(t))return JSON.stringify(t);if(typeof t.toJSON=="function")return P(t.toJSON());throw new Error("[unstorage] Cannot stringify value!")}const D="base64:";function re(t){return typeof t=="string"?t:D+ae(t)}function ne(t){return typeof t!="string"||!t.startsWith(D)?t:ie(t.slice(D.length))}function ie(t){return globalThis.Buffer?Buffer.from(t,"base64"):Uint8Array.from(globalThis.atob(t),r=>r.codePointAt(0))}function ae(t){return globalThis.Buffer?Buffer.from(t).toString("base64"):globalThis.btoa(String.fromCodePoint(...t))}const se=["has","hasItem","get","getItem","getItemRaw","set","setItem","setItemRaw","del","remove","removeItem","getMeta","setMeta","removeMeta","getKeys","clear","mount","unmount"];function oe(t,r){if(r=E(r),!r)return t;const n={...t};for(const a of se)n[a]=(c="",...l)=>t[a](r+c,...l);return n.getKeys=(a="",...c)=>t.getKeys(r+a,...c).then(l=>l.map(o=>o.slice(r.length))),n}function w(t){var r;return t&&((r=t.split("?")[0])==null?void 0:r.replace(/[/\\]/g,":").replace(/:+/g,":").replace(/^:|:$/g,""))||""}function ue(...t){return w(t.join(":"))}function E(t){return t=w(t),t?t+":":""}function ce(t,r){if(r===void 0)return!0;let n=0,a=t.indexOf(":");for(;a>-1;)n++,a=t.indexOf(":",a+1);return n<=r}function le(t,r){return r?t.startsWith(r)&&t[t.length-1]!=="$":t[t.length-1]!=="$"}const fe="memory",me=()=>{const t=new Map;return{name:fe,getInstance:()=>t,hasItem(r){return t.has(r)},getItem(r){return t.get(r)??null},getItemRaw(r){return t.get(r)??null},setItem(r,n){t.set(r,n)},setItemRaw(r,n){t.set(r,n)},removeItem(r){t.delete(r)},getKeys(){return[...t.keys()]},clear(){t.clear()},dispose(){t.clear()}}};function he(t={}){const r={mounts:{"":t.driver||me()},mountpoints:[""],watching:!1,watchListeners:[],unwatch:{}},n=e=>{for(const i of r.mountpoints)if(e.startsWith(i))return{base:i,relativeKey:e.slice(i.length),driver:r.mounts[i]};return{base:"",relativeKey:e,driver:r.mounts[""]}},a=(e,i)=>r.mountpoints.filter(s=>s.startsWith(e)||i&&e.startsWith(s)).map(s=>({relativeBase:e.length>s.length?e.slice(s.length):void 0,mountpoint:s,driver:r.mounts[s]})),c=(e,i)=>{if(r.watching){i=w(i);for(const s of r.watchListeners)s(e,i)}},l=async()=>{if(!r.watching){r.watching=!0;for(const e in r.mounts)r.unwatch[e]=await U(r.mounts[e],c,e)}},o=async()=>{if(r.watching){for(const e in r.unwatch)await r.unwatch[e]();r.unwatch={},r.watching=!1}},g=(e,i,s)=>{const u=new Map,f=m=>{let d=u.get(m.base);return d||(d={driver:m.driver,base:m.base,items:[]},u.set(m.base,d)),d};for(const m of e){const d=typeof m=="string",A=w(d?m:m.key),y=d?void 0:m.value,I=d||!m.options?i:{...i,...m.options},v=n(A);f(v).items.push({key:A,value:y,relativeKey:v.relativeKey,options:I})}return Promise.all([...u.values()].map(m=>s(m))).then(m=>m.flat())},h={hasItem(e,i={}){e=w(e);const{relativeKey:s,driver:u}=n(e);return p(u.hasItem,s,i)},getItem(e,i={}){e=w(e);const{relativeKey:s,driver:u}=n(e);return p(u.getItem,s,i).then(f=>$(f))},getItems(e,i={}){return g(e,i,s=>s.driver.getItems?p(s.driver.getItems,s.items.map(u=>({key:u.relativeKey,options:u.options})),i).then(u=>u.map(f=>({key:ue(s.base,f.key),value:$(f.value)}))):Promise.all(s.items.map(u=>p(s.driver.getItem,u.relativeKey,u.options).then(f=>({key:u.key,value:$(f)})))))},getItemRaw(e,i={}){e=w(e);const{relativeKey:s,driver:u}=n(e);return u.getItemRaw?p(u.getItemRaw,s,i):p(u.getItem,s,i).then(f=>ne(f))},async setItem(e,i,s={}){if(i===void 0)return h.removeItem(e);e=w(e);const{relativeKey:u,driver:f}=n(e);f.setItem&&(await p(f.setItem,u,P(i),s),f.watch||c("update",e))},async setItems(e,i){await g(e,i,async s=>{if(s.driver.setItems)return p(s.driver.setItems,s.items.map(u=>({key:u.relativeKey,value:P(u.value),options:u.options})),i);s.driver.setItem&&await Promise.all(s.items.map(u=>p(s.driver.setItem,u.relativeKey,P(u.value),u.options)))})},async setItemRaw(e,i,s={}){if(i===void 0)return h.removeItem(e,s);e=w(e);const{relativeKey:u,driver:f}=n(e);if(f.setItemRaw)await p(f.setItemRaw,u,i,s);else if(f.setItem)await p(f.setItem,u,re(i),s);else return;f.watch||c("update",e)},async removeItem(e,i={}){typeof i=="boolean"&&(i={removeMeta:i}),e=w(e);const{relativeKey:s,driver:u}=n(e);u.removeItem&&(await p(u.removeItem,s,i),(i.removeMeta||i.removeMata)&&await p(u.removeItem,s+"$",i),u.watch||c("remove",e))},async getMeta(e,i={}){typeof i=="boolean"&&(i={nativeOnly:i}),e=w(e);const{relativeKey:s,driver:u}=n(e),f=Object.create(null);if(u.getMeta&&Object.assign(f,await p(u.getMeta,s,i)),!i.nativeOnly){const m=await p(u.getItem,s+"$",i).then(d=>$(d));m&&typeof m=="object"&&(typeof m.atime=="string"&&(m.atime=new Date(m.atime)),typeof m.mtime=="string"&&(m.mtime=new Date(m.mtime)),Object.assign(f,m))}return f},setMeta(e,i,s={}){return this.setItem(e+"$",i,s)},removeMeta(e,i={}){return this.removeItem(e+"$",i)},async getKeys(e,i={}){var A;e=E(e);const s=a(e,!0);let u=[];const f=[];let m=!0;for(const y of s){(A=y.driver.flags)!=null&&A.maxDepth||(m=!1);const I=await p(y.driver.getKeys,y.relativeBase,i);for(const v of I){const _=y.mountpoint+w(v);u.some(b=>_.startsWith(b))||f.push(_)}u=[y.mountpoint,...u.filter(v=>!v.startsWith(y.mountpoint))]}const d=i.maxDepth!==void 0&&!m;return f.filter(y=>(!d||ce(y,i.maxDepth))&&le(y,e))},async clear(e,i={}){e=E(e),await Promise.all(a(e,!1).map(async s=>{if(s.driver.clear)return p(s.driver.clear,s.relativeBase,i);if(s.driver.removeItem){const u=await s.driver.getKeys(s.relativeBase||"",i);return Promise.all(u.map(f=>s.driver.removeItem(f,i)))}}))},async dispose(){await Promise.all(Object.values(r.mounts).map(e=>N(e)))},async watch(e){return await l(),r.watchListeners.push(e),async()=>{r.watchListeners=r.watchListeners.filter(i=>i!==e),r.watchListeners.length===0&&await o()}},async unwatch(){r.watchListeners=[],await o()},mount(e,i){if(e=E(e),e&&r.mounts[e])throw new Error(`already mounted at ${e}`);return e&&(r.mountpoints.push(e),r.mountpoints.sort((s,u)=>u.length-s.length)),r.mounts[e]=i,r.watching&&Promise.resolve(U(i,c,e)).then(s=>{r.unwatch[e]=s}).catch(console.error),h},async unmount(e,i=!0){var s,u;e=E(e),!(!e||!r.mounts[e])&&(r.watching&&e in r.unwatch&&((u=(s=r.unwatch)[e])==null||u.call(s),delete r.unwatch[e]),i&&await N(r.mounts[e]),r.mountpoints=r.mountpoints.filter(f=>f!==e),delete r.mounts[e])},getMount(e=""){e=w(e)+":";const i=n(e);return{driver:i.driver,base:i.base}},getMounts(e="",i={}){return e=w(e),a(e,i.parents).map(u=>({driver:u.driver,base:u.mountpoint}))},keys:(e,i={})=>h.getKeys(e,i),get:(e,i={})=>h.getItem(e,i),set:(e,i,s={})=>h.setItem(e,i,s),has:(e,i={})=>h.hasItem(e,i),del:(e,i={})=>h.removeItem(e,i),remove:(e,i={})=>h.removeItem(e,i)};return h}function U(t,r,n){return t.watch?t.watch((a,c)=>r(a,n+c)):()=>{}}async function N(t){typeof t.dispose=="function"&&await p(t.dispose)}function ge(t={}){const r=pe(n,t.operators);function n(a,c){return typeof c!="object"||c instanceof RegExp?r.$eq(a,c):Object.keys(c||{}).every(l=>{const o=c[l];if(l.startsWith("$")&&r[l]){const g=r[l];return typeof g=="function"?g(a,o):!1}return n(k(a,l),o)})}return n}function pe(t,r={}){return{$match:(n,a)=>t(n,a),$eq:(n,a)=>a instanceof RegExp?a.test(n):n===a,$ne:(n,a)=>a instanceof RegExp?!a.test(n):n!==a,$not:(n,a)=>!t(n,a),$and:(n,a)=>(j(a,"$and requires an array as condition"),a.every(c=>t(n,c))),$or:(n,a)=>(j(a,"$or requires an array as condition"),a.some(c=>t(n,c))),$in:(n,a)=>O(a).some(c=>Array.isArray(n)?t(n,{$contains:c}):t(n,c)),$contains:(n,a)=>(n=Array.isArray(n)?n:String(n),O(a).every(c=>n.includes(c))),$icontains:(n,a)=>{if(typeof a!="string")throw new TypeError("$icontains requires a string, use $contains instead");return n=String(n).toLocaleLowerCase(),O(a).every(c=>n.includes(c.toLocaleLowerCase()))},$containsAny:(n,a)=>(j(a,"$containsAny requires an array as condition"),n=Array.isArray(n)?n:String(n),a.some(c=>n.includes(c))),$exists:(n,a)=>a?typeof n<"u":typeof n>"u",$type:(n,a)=>typeof n===String(a),$regex:(n,a)=>{if(!(a instanceof RegExp)){const c=String(a).match(/\/(.*)\/([dgimsuy]*)$/);a=c!=null&&c[1]?new RegExp(c[1],c[2]||""):new RegExp(a)}return a.test(String(n||""))},$lt:(n,a)=>n<a,$lte:(n,a)=>n<=a,$gt:(n,a)=>n>a,$gte:(n,a)=>n>=a,...r||{}}}function de(t){const r=ge(),n=(l,{query:o,before:g,after:h})=>{const e=typeof o=="string"?{_path:o}:o,i=l.findIndex(u=>r(u,e));g=g??1,h=h??1;const s=new Array(g+h).fill(null,0);return i===-1?s:s.map((u,f)=>l[i-g+f+ +(f>=g)]||null)},a=[(l,o)=>{const g=l.result.filter(h=>O(o.where).every(e=>r(h,e)));return{...l,result:g,total:g.length}},(l,o)=>O(o.sort).forEach(g=>F(l.result,g)),function(o,g,h){var e;if(g.surround){let i=n(((e=o.result)==null?void 0:e.length)===1?h:o.result,g.surround);i=S(x(g.without))(i),i=S(L(g.only))(i),o.surround=i}return o}],c=[(l,o)=>{if(o.skip)return{...l,result:l.result.slice(o.skip),skip:o.skip}},(l,o)=>{if(o.limit)return{...l,result:l.result.slice(0,o.limit),limit:o.limit}},function(o,g,h){var e,i,s;if(g.dirConfig){const u=((e=o.result[0])==null?void 0:e._path)||((s=(i=g.where)==null?void 0:i.find(f=>f._path))==null?void 0:s._path);if(typeof u=="string"){const f=h.find(m=>m._path===W(u,"_dir"));f&&(o.dirConfig={_path:f._path,...x(["_"])(f)})}}return o},(l,o)=>({...l,result:S(x(o.without))(l.result)}),(l,o)=>({...l,result:S(L(o.only))(l.result)})];return async l=>{const o=await t(),g=l.params(),h={result:o,limit:0,skip:0,total:o.length},e=a.reduce((s,u)=>u(s,g,o)||s,h);if(g.count)return{result:e.result.length};const i=c.reduce((s,u)=>u(s,g,o)||s,e);return g.first?{...q(["skip","limit","total"])(i),result:i.result[0]}:i}}function z(t){const r=de(t);return async n=>{var l;n.params().first&&n.withDirConfig();const a=n.params(),c=await r(n);return a.surround?c==null?void 0:c.surround:(c!=null&&c.dirConfig&&(c.result={_path:(l=c.dirConfig)==null?void 0:l._path,...c.result,_dir:c.dirConfig}),c==null?void 0:c.result)}}var C={exports:{}},ye=C.exports,B;function we(){return B||(B=1,function(t,r){(function(n,a,c){t.exports=c(),t.exports.default=c()})("slugify",ye,function(){var n=JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E'","Ը":"Y'","Թ":"T'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C'","Կ":"K","Հ":"H","Ձ":"D'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P'","Ք":"Q'","Օ":"O''","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"'","’":"'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}`),a=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');function c(l,o){if(typeof l!="string")throw new Error("slugify: string argument expected");o=typeof o=="string"?{replacement:o}:o||{};var g=a[o.locale]||{},h=o.replacement===void 0?"-":o.replacement,e=o.trim===void 0?!0:o.trim,i=l.normalize().split("").reduce(function(s,u){var f=g[u];return f===void 0&&(f=n[u]),f===void 0&&(f=u),f===h&&(f=" "),s+f.replace(o.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")},"");return o.strict&&(i=i.replace(/[^A-Za-z0-9\s]/g,"")),e&&(i=i.trim()),i=i.replace(/\s+/g,h),o.lower&&(i=i.toLowerCase()),i}return c.extend=function(l){Object.assign(n,l)},c})}(C)),C.exports}we();const ve=t=>t.split(/[\s-]/g).map(Z).join(" ");function Ie(t,r){const{navigation:n}=M().public.content;if(n===!1)return[];const a=l=>({...Ee(["title",...n.fields])(l),...Oe(l==null?void 0:l.navigation)?l.navigation:{}}),c=t.sort((l,o)=>l._path.localeCompare(o._path)).reduce((l,o)=>{var f;const g=o._path.substring(1).split("/"),h=o._id.split(":").slice(1),e=!!((f=h[h.length-1])!=null&&f.match(/([1-9][0-9]*\.)?index.md/g)),i=m=>({title:m.title,_path:m._path,_file:m._file,children:[],...a(m),...m._draft?{_draft:!0}:{}}),s=i(o);if(e){const m=r[s._path];if(typeof(m==null?void 0:m.navigation)<"u"&&!(m!=null&&m.navigation))return l;if(o._path!=="/"){const d=i(o);s.children.push(d)}m&&Object.assign(s,a(m))}return g.length===1?(l.push(s),l):(g.slice(0,-1).reduce((m,d,A)=>{const y="/"+g.slice(0,A+1).join("/"),I=r[y];if(typeof(I==null?void 0:I.navigation)<"u"&&!I.navigation)return[];let v=m.find(_=>_._path===y);return v||(v={title:ve(d),_path:y,_file:o._file,children:[],...I&&a(I)},m.push(v)),v.children},l).push(s),l)},[]);return T(c)}const Ae=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function T(t){var n;t.forEach(a=>{a._file=a._file.split(".").slice(0,-1).join(".")});const r=t.sort((a,c)=>Ae.compare(a._file,c._file));for(const a of r)(n=a.children)!=null&&n.length?T(a.children):delete a.children,delete a._file;return t}function Ee(t){return r=>(r=r||{},t&&t.length?t.filter(n=>typeof r[n]<"u").reduce((n,a)=>Object.assign(n,{[a]:r[a]}),{}):r)}function Oe(t){return Object.prototype.toString.call(t)==="[object Object]"}const _e=t=>H(t,M().public.content.api.baseURL),$e=oe(he({driver:Q()}),"@content");function Se(t){async function r(){const n=new Set(await t.getKeys("cache:")),a=Y().getPreviewToken();if(a){const l=await t.getItem(`${a}$`).then(h=>h||{});if(Array.isArray(l.ignoreSources)){const h=l.ignoreSources.map(e=>`cache:${e.trim()}:`);for(const e of n)h.some(i=>e.startsWith(i))&&n.delete(e)}const o=await t.getKeys(`${a}:`),g=await Promise.all(o.map(h=>t.getItem(h)));for(const h of g)n.delete(`cache:${h._id}`),h.__deleted||n.add(`${a}:${h._id}`)}return await Promise.all(Array.from(n).map(l=>t.getItem(l)))}return{storage:t,fetch:z(r),query:n=>G(z(r),{initialParams:n,legacy:!0})}}let R=null,K=null;async function Ke(){return K?await K:R||(K=Pe(),R=await K),R}async function Pe(){const t=J(),{content:r}=M().public,n=Se($e),a=await n.storage.getItem("integrity");if(r.integrity!==+(a||0)){const{contents:c,navigation:l}=await $fetch(_e(r.integrity?`cache.${r.integrity}.json`:"cache.json"));await Promise.all(c.map(o=>n.storage.setItem(`cache:${o._id}`,o))),await n.storage.setItem("navigation",l),await n.storage.setItem("integrity",r.integrity)}return await t.callHook("content:storage",n.storage),n}async function De(t){const r=await Ke();if(!Y().getPreviewToken()&&Object.keys(t||{}).length===0)return r.storage.getItem("navigation");const n=await r.query(t).where({_partial:!1,navigation:{$ne:!1}}).find(),c=(await r.query().where({_path:/\/_dir$/i,_partial:!0}).find()).reduce((l,o)=>{var h;((h=o.title)==null?void 0:h.toLowerCase())==="dir"&&(o.title=void 0);const g=o._path.split("/").slice(0,-1).join("/")||"/";return l[g]={...o,...o.body},l},{});return Ie(n,c)}export{$e as contentStorage,Se as createDB,De as generateNavigation,Ke as useContentDatabase};
