function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},s=o.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in i){var o=i[e];delete i[e];var s={id:e,exports:{}};return t[e]=s,o.call(s.exports,s,s.exports),s.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,o){i[e]=o},o.parcelRequired7c6=s),s("4S0r6"),s("7bYU0");var n=s("bAF63"),a=s("fb9GJ"),l=s("ghSiQ"),r=s("lj9Ab");const d=document.querySelector("[js-queue-pagination]"),c=document.querySelector("[js-watched-pagination]"),g=document.querySelector(".favorite-film-list"),m=document.querySelector(".btn-watched"),h=document.querySelector(".btn-queue"),p=(0,n.getFromLocalStorage)("watched")||[],u=(0,n.getFromLocalStorage)("queue")||[],f=[],v=[];const w={totalItems:(u||[]).length,page:1,itemsPerPage:20,centerAlign:!0,visiblePages:5},L={totalItems:(p||[]).length,page:1,itemsPerPage:20,centerAlign:!0,visiblePages:5};for(;(u||[]).length>0;)f.push(u.slice(0,20)),u.splice(0,20);for(;(p||[]).length>0;)v.push(p.slice(0,20)),p.splice(0,20);const b=new(e(a))(d,w),_=new(e(a))(c,L);function S(e){try{const o=e.map((({id:e,title:o,poster_path:t,genreNames:i,release_date:s})=>{let n;return n=t?`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${t}`:"https://st4.depositphotos.com/21486874/31104/i/600/depositphotos_311048494-stock-photo-coming-soon-neon-light-announcement.jpg",`<li class="movie-item" movie-id="${e}">\n  <img src="${n}" alt="movie poster" loading="lazy" class="movie-item__img"/>\n  <h2 class="movie-item__title">${o}</h2>\n  <p class="movie-item__text">\n    <span class="movie-item__genre">${i}</span> |\n    <span class="movie-item__year">${s.slice(0,4)}</span>\n  </p>\n</li>`})).join("");g.innerHTML=o,(0,r.showSpinner)(),(0,l.addEventlListenertoFilmCard)()}catch(e){console.log("LocalStorage is empty")}}m.addEventListener("click",(()=>{d.classList.add("is-hidden"),b.off(),S((0,n.getFromLocalStorage)("watched")),((0,n.getFromLocalStorage)("watched")||[]).length<21?c.classList.add("is-hidden"):(c.classList.remove("is-hidden"),_.on("beforeMove",(e=>{S(v[e.page-1]),window.scrollTo({top:0,behavior:"smooth"})})))})),h.addEventListener("click",(()=>{S(f[0]),c.classList.add("is-hidden"),_.off(),S((0,n.getFromLocalStorage)("queue")),((0,n.getFromLocalStorage)("queue")||[]).length<21?d.classList.add("is-hidden"):(d.classList.remove("is-hidden"),b.on("beforeMove",(e=>{S(f[e.page-1]),window.scrollTo({top:0,behavior:"smooth"})})))})),S(v[0]),d.classList.add("is-hidden"),b.off(),((0,n.getFromLocalStorage)("watched")||[]).length<21?c.classList.add("is-hidden"):(c.classList.remove("is-hidden"),_.on("beforeMove",(e=>{S(v[e.page-1]),window.scrollTo({top:0,behavior:"smooth"})})));
//# sourceMappingURL=my-library.5270f400.js.map