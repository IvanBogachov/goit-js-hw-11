import{i as u,S as p}from"./assets/vendor-f33cd494.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const f of n.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const a={info:"Please enter a value in the search field!",warning:"Sorry, there are no images matching your search query. Please try again!",error:"Sorry, there are no connection to the server. Please try again later! ",exception:"Exception: We have some issue with connection. Please try again later! "},s={green:"#59a10d",orange:"#ffa000",red:"#ef4040"};function c(e,t){u.info({position:"topRight",backgroundColor:`${t}`,message:`${e}`})}const m={method:"GET"},g="45418693-8ae3627eda45814ae2d20cf49",h="https://pixabay.com/api/?";function y(e){try{const t=new URLSearchParams({key:g,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(h+t,m).then(o=>{if(!o.ok){c(a.error,s.orange);return}return o.json()}).catch(o=>{c(`${a.exception} ERROR:  ${o}`,s.orange)})}catch(t){c(`${a.exception} ERROR:  ${t}`,s.orange)}}const L=new p(".gallery a",{captionsData:"alt",captionDelay:250});function S(e,t){t.innerHTML=E(e),L.refresh()}function E(e){return e.hits.map(({webformatURL:t,largeImageURL:o,tags:i,likes:r,views:n,comments:f,downloads:d})=>`
            <li class="gallery-item hvr-grow">
                <a class="gallery-link" href="${o}">
                    <figure class="gallery-figure ">
                        <img class="gallery-image" src="${t}" alt="${i}" loading="lazy">
                        <figcaption class="gallery-figcaption">
                            <ul class="img-content-wrapper">
                                <li>Likes<span>${r}</span></li>
                                <li>Views<span>${n}</span></li>
                                <li>Comments<span>${f}</span></li>
                                <li>Downloads<span>${d}</span></li>
                            </ul>
                        </figcaption>
                    </figure>
                </a>
            </li>
          `).join("")}const $=document.querySelector(".search-form"),l=document.querySelector(".gallery");document.createElement("div");$.addEventListener("submit",w);function w(e){e.preventDefault(),u.destroy(),l.innerHTML="",P();const t=new FormData(e.target),{search:o}=Object.fromEntries(t.entries());if(!o.trim()){c(a.info,s.red),l.innerHTML="";return}y(o.trim()).then(i=>{O(i)&&S(i,l)}).catch(i=>{c(a.exception+i,s.orange)}).finally(()=>{e.target.reset()})}function P(){const e=document.createElement("div");e.classList.add("loader"),l.append(e)}function O(e){return e?e&&e.totalHits===0?(c(a.warning,s.red),l.innerHTML="",!1):!0:(l.innerHTML="",!1)}
//# sourceMappingURL=commonHelpers.js.map
