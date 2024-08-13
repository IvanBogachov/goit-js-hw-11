import{i as d,S as g}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();const c={info:"Please enter a value in the search field!",warning:"Sorry, there are no images matching your search query. Please try again!",error:"Sorry, there are no connection to the server. Please try again later! ",exception:"Exception: We have some issue with connection. Please try again later! "},l={green:"#59a10d",orange:"#ffa000",red:"#ef4040"};function f(r,t){d.info({position:"topRight",backgroundColor:`${t}`,message:`${r}`})}const m={method:"GET"},y="45418693-8ae3627eda45814ae2d20cf49",h="https://pixabay.com/api/?";async function L(r){try{const t=new URLSearchParams({key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),a=await fetch(h+t,m).then();if(!a.ok){f(c.error,l.orange);return}return await a.json()}catch(t){f(`${c.exception} ERROR:  ${t}`,l.orange)}}const S=new g(".gallery a",{captionsData:"alt",captionDelay:250});function w(r,t){t.innerHTML=E(r),S.refresh()}function E(r){return r.hits.map(({webformatURL:t,largeImageURL:a,tags:o,likes:e,views:n,comments:s,downloads:p})=>`
            <li class="gallery-item hvr-grow">
                <a class="gallery-link" href="${a}">
                    <figure class="gallery-figure ">
                        <img class="gallery-image" src="${t}" alt="${o}" loading="lazy">
                        <figcaption class="gallery-figcaption">
                            <ul class="img-content-wrapper">
                                <li>Likes<span>${e}</span></li>
                                <li>Views<span>${n}</span></li>
                                <li>Comments<span>${s}</span></li>
                                <li>Downloads<span>${p}</span></li>
                            </ul>
                        </figcaption>
                    </figure>
                </a>
            </li>
          `).join("")}const P=document.querySelector(".search-form"),i=document.querySelector(".gallery"),u=document.createElement("div");P.addEventListener("submit",$);async function $(r){r.preventDefault(),d.destroy(),i.innerHTML="",b();const t=new FormData(r.target),{search:a}=Object.fromEntries(t.entries());if(!a.trim()){f(c.info,l.red),i.innerHTML="";return}try{const o=await L(a.trim());O(o)&&w(o,i)}catch(o){f(c.exception+o,l.orange)}r.target.reset()}function b(){u.classList.add("loader"),i.append(u)}function O(r){return r?r&&r.totalHits===0?(f(c.warning,l.red),i.innerHTML="",!1):!0:(i.innerHTML="",!1)}
//# sourceMappingURL=commonHelpers.js.map
