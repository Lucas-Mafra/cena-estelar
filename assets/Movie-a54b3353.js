import{G as a,r as v,C as g,u as p,j as e,L as N}from"./index-01c0ccb0.js";import{H as w}from"./Header-fb599c9c.js";function M(n){return a({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"}}]})(n)}function _(n){return a({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6zm8.9 5v-10.5l1.7 3.8c.1.3.5.5.8.6l4.2.5-3.1 2.8c-.3.2-.4.6-.3 1 0 .2.5 2.2.8 4.1l-3.6-2.1c-.2-.2-.3-.2-.5-.2z"}}]})(n)}function y(n){return a({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.855 20.966c-.224 0-.443-.05-.646-.146l-.104-.051-4.107-2.343-4.107 2.344-.106.053c-.488.228-1.085.174-1.521-.143-.469-.34-.701-.933-.586-1.509l.957-4.642-1.602-1.457-1.895-1.725-.078-.082c-.375-.396-.509-.97-.34-1.492.173-.524.62-.912 1.16-1.009l.102-.018 4.701-.521 1.946-4.31.06-.11c.262-.473.764-.771 1.309-.771.543 0 1.044.298 1.309.77l.06.112 1.948 4.312 4.701.521.104.017c.539.1.986.486 1.158 1.012.17.521.035 1.098-.34 1.494l-.078.078-3.498 3.184.957 4.632c.113.587-.118 1.178-.59 1.519-.252.182-.556.281-.874.281zm-8.149-6.564c-.039.182-.466 2.246-.845 4.082l3.643-2.077c.307-.175.684-.175.99 0l3.643 2.075-.849-4.104c-.071-.346.045-.705.308-.942l3.1-2.822-4.168-.461c-.351-.039-.654-.26-.801-.584l-1.728-3.821-1.726 3.821c-.146.322-.45.543-.801.584l-4.168.461 3.1 2.822c.272.246.384.617.302.966z"}}]})(n)}function G(){const{allMovies:n}=v.useContext(g),{id:o}=p(),d=n.find(i=>i.id===parseInt(o,10)),{name:c,description:m,longDescription:h,rating:l,media:x,genres:t}=d;window.document.title=c;const u=()=>{if(t.length===1)return e.jsxs("span",{className:"genres",children:["Gênero: ",t]});if(t.length>1){const i=`${t.slice(0,-1).join(", ")} e ${t.slice(-1)}`;return e.jsxs("span",{className:"genres",children:["Gêneros: ",i]})}return null},j=()=>{const i=parseFloat(l,10),r=[];for(let s=1;s<=5;s+=1)i>=s?r.push(e.jsx(M,{id:"fullStar"},s)):i+.5>=s?r.push(e.jsx(_,{id:"halfStar"},s)):r.push(e.jsx(y,{id:"emptyStar"},s));return e.jsxs("div",{className:"content_rating",children:[e.jsx("span",{className:"stars",children:r}),e.jsx("span",{className:"rating",children:l})]})},f=()=>{const i=()=>t.length<1?t:t[Math.floor(Math.random()*t.length)];return n?n.filter(s=>s.genres.includes(i())).slice(0,6).map(s=>e.jsx(N,{to:`/cena-estelar/movie/${s.id}`,children:e.jsx("img",{src:s.img,alt:`front banner of ${s.name}`})},s.id)):null};return e.jsxs("main",{className:"mainContainer content",children:[e.jsxs("div",{className:"overview_container",children:[e.jsx("section",{className:"content_overview",children:e.jsx("div",{className:"content_summary",children:e.jsxs("div",{className:"content_thumbnail",children:[e.jsx("figure",{children:e.jsx("img",{src:x,alt:c})}),e.jsx("figcaption",{children:c}),e.jsxs("div",{className:"summary_side",children:[e.jsx("div",{className:"content_infos",children:u()}),e.jsx("div",{className:"content_rating",children:j()})]})]})})}),e.jsxs("section",{className:"content_review",children:[e.jsxs("div",{className:"review_title__wrap",children:[e.jsx("h2",{children:c}),e.jsx("small",{children:e.jsx("q",{children:m})})]}),e.jsx("p",{children:h})]})]}),e.jsxs("aside",{className:"recommendation",children:[e.jsx("h2",{children:"Filmes relacionados"}),e.jsx("div",{className:"recommended",children:f()})]})]})}function B(){return e.jsx("div",{children:e.jsx(G,{})})}function z(){return e.jsxs(e.Fragment,{children:[e.jsx(w,{}),e.jsx(B,{})]})}export{z as default};
