!function(){var e=document.querySelector(".theme-switch"),t=document.querySelector("body"),o=document.querySelector("footer");"dark"===localStorage.getItem("theme")&&(t.classList.add("dark-theme"),o.classList.add("dark-theme"),e.checked=!0),e.addEventListener("change",(function(){this.checked?(localStorage.setItem("theme","dark"),t.classList.add("dark-theme"),o.classList.add("dark-theme")):(localStorage.setItem("theme","light"),t.classList.remove("dark-theme"),o.classList.remove("dark-theme"))}));var c=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.log(e)}},n=(document.querySelector("#search-form"),document.querySelector(".favorite-film-list")),a=document.querySelector(".btn-watched"),s=document.querySelector(".btn-queue"),r=c("watched"),i=c("queue");function l(e){var t=e.map((function(e){var t,o=e.id,c=e.title,n=e.poster_path,a=e.genres,s=e.release_date;return t=n?"https://www.themoviedb.org/t/p/w600_and_h900_bestv2".concat(n):"https://st4.depositphotos.com/21486874/31104/i/600/depositphotos_311048494-stock-photo-coming-soon-neon-light-announcement.jpg",'<li class="movie-item" movie-id = "'.concat(o,'">\n  <img src="').concat(t,'" alt="movie poster" loading="lazy" class="movie-item__img"/>\n  <h2 class="movie-item__title">').concat(c,'</h2>\n  <p class="movie-item__text">\n    <span class="movie-item__genre">').concat(a,'</span> |\n    <span class="movie-item__year">').concat(s.slice(0,4),"</span>\n  </p>\n</li>")})).join("");n.innerHTML=t}a.addEventListener("click",(function(){return l(r)})),s.addEventListener("click",(function(){return l(i)})),l(r)}();
//# sourceMappingURL=my-library.8f2a7856.js.map