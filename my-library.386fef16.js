!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,o){n[e]=o},o.parcelRequired7c6=i),i("9VC5X"),i("aZhHc");var s=i("lFpdU"),a=i("1VFfL"),l=i("glb9E"),c=i("cjYxE"),r=document.querySelector("[js-queue-pagination]"),d=document.querySelector("[js-watched-pagination]"),p=(document.querySelector("#search-form"),document.querySelector(".favorite-film-list")),u=document.querySelector(".btn-watched"),m=document.querySelector(".btn-queue"),f=(0,s.getFromLocalStorage)("watched")||[],g=(0,s.getFromLocalStorage)("queue")||[];console.log(g);for(var h=[],v=[],w={totalItems:g.length,page:1,itemsPerPage:20,centerAlign:!0,visiblePages:5},_={totalItems:f.length,page:1,itemsPerPage:20,centerAlign:!0,visiblePages:5};g.length>0;)h.push(g.slice(0,20)),g.splice(0,20);for(;f.length>0;)v.push(f.slice(0,20)),f.splice(0,20);console.log(h),console.log(v),console.log(f);var b=new(e(a))(r,w),L=new(e(a))(d,_);function y(e){var o=e.map((function(e){var o,t=e.id,n=e.title,i=e.poster_path,s=e.genreNames,a=e.release_date;return o=i?"https://www.themoviedb.org/t/p/w600_and_h900_bestv2".concat(i):"https://st4.depositphotos.com/21486874/31104/i/600/depositphotos_311048494-stock-photo-coming-soon-neon-light-announcement.jpg",'<li class="movie-item" movie-id = "'.concat(t,'">\n  <img src="').concat(o,'" alt="movie poster" loading="lazy" class="movie-item__img"/>\n  <h2 class="movie-item__title">').concat(n,'</h2>\n  <p class="movie-item__text">\n    <span class="movie-item__genre">').concat(s,'</span> |\n    <span class="movie-item__year">').concat(a.slice(0,4),"</span>\n  </p>\n</li>")})).join("");p.innerHTML=o,(0,c.showSpinner)(),(0,l.addEventlListenertoFilmCard)()}u.addEventListener("click",(function(){y(v[0]),r.classList.add("is-hidden"),d.classList.remove("is-hidden"),b.off(),L.on("beforeMove",(function(e){y(v[e.page-1]),window.scrollTo({top:0,behavior:"smooth"})}))})),m.addEventListener("click",(function(){y(h[0]),r.classList.remove("is-hidden"),d.classList.add("is-hidden"),L.off(),b.on("beforeMove",(function(e){y(h[e.page-1]),window.scrollTo({top:0,behavior:"smooth"})}))})),y(v[0]),r.classList.add("is-hidden"),d.classList.remove("is-hidden"),b.off(),L.on("beforeMove",(function(e){y(v[e.page-1]),window.scrollTo({top:0,behavior:"smooth"})}))}();
//# sourceMappingURL=my-library.386fef16.js.map
