!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,o){n[e]=o},o.parcelRequired7c6=i),i("9VC5X"),i("aZhHc");var s=i("lFpdU"),a=i("1VFfL"),c=i("glb9E"),l=i("cjYxE"),r=document.querySelector("[js-queue-pagination]"),d=document.querySelector("[js-watched-pagination]"),g=(document.querySelector("#search-form"),document.querySelector(".favorite-film-list")),m=document.querySelector(".btn-watched"),u=document.querySelector(".btn-queue"),h=(0,s.getFromLocalStorage)("watched")||[],p=(0,s.getFromLocalStorage)("queue")||[];console.log(h);for(var f=[],v=[],w={totalItems:(p||[]).length,page:1,itemsPerPage:20,centerAlign:!0,visiblePages:5},L={totalItems:(h||[]).length,page:1,itemsPerPage:20,centerAlign:!0,visiblePages:5};(p||[]).length>0;)f.push(p.slice(0,20)),p.splice(0,20);for(;(h||[]).length>0;)v.push(h.slice(0,20)),h.splice(0,20);var _=new(e(a))(r,w),b=new(e(a))(d,L);function y(e){try{var o=e.map((function(e){var o,t=e.id,n=e.title,i=e.poster_path,s=e.genreNames,a=e.release_date;return o=i?"https://www.themoviedb.org/t/p/w600_and_h900_bestv2".concat(i):"https://st4.depositphotos.com/21486874/31104/i/600/depositphotos_311048494-stock-photo-coming-soon-neon-light-announcement.jpg",'<li class="movie-item" movie-id="'.concat(t,'">\n  <img src="').concat(o,'" alt="movie poster" loading="lazy" class="movie-item__img"/>\n  <h2 class="movie-item__title">').concat(n,'</h2>\n  <p class="movie-item__text">\n    <span class="movie-item__genre">').concat(s,'</span> |\n    <span class="movie-item__year">').concat(a.slice(0,4),"</span>\n  </p>\n</li>")})).join("");g.innerHTML=o,(0,l.showSpinner)(),(0,c.addEventlListenertoFilmCard)()}catch(e){console.log("LocalStorage is empty")}}m.addEventListener("click",(function(){r.classList.add("is-hidden"),_.off(),((0,s.getFromLocalStorage)("watched")||[]).length<21?d.classList.add("is-hidden"):(d.classList.remove("is-hidden"),b.on("beforeMove",(function(e){y(v[e.page-1]),window.scrollTo({top:0,behavior:"smooth"})})))})),u.addEventListener("click",(function(){y(f[0]),d.classList.add("is-hidden"),b.off(),((0,s.getFromLocalStorage)("queue")||[]).length<21?r.classList.add("is-hidden"):(r.classList.remove("is-hidden"),_.on("beforeMove",(function(e){y(f[e.page-1]),window.scrollTo({top:0,behavior:"smooth"})})))})),y(v[0]),r.classList.add("is-hidden"),_.off(),((0,s.getFromLocalStorage)("watched")||[]).length<21?d.classList.add("is-hidden"):(d.classList.remove("is-hidden"),b.on("beforeMove",(function(e){y(v[e.page-1]),window.scrollTo({top:0,behavior:"smooth"})})))}();
//# sourceMappingURL=my-library.87a95745.js.map
