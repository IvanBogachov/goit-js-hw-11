(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=document.querySelector(".btn"),u=document.querySelector(".gallery"),a=new URLSearchParams({_limit:9,_sort:"id"}),i=`https://jsonplaceholder.typicode.com/photos?${a}`;l.addEventListener("click",()=>{f().then(r=>d(r)).catch(r=>console.log(r))});console.log(i);function f(){return fetch(i).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function d(r){const o=r.map(s=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${s.url}">
        <img class="gallery-image"
        src="${s.thumbnailUrl}"
        alt="${s.url}"
        />
        </a>
        </li>
      `).join("");u.insertAdjacentHTML("beforeend",o)}
//# sourceMappingURL=commonHelpers.js.map
