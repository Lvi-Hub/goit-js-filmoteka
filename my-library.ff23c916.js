!function(){var e=document.querySelector(".theme-switch"),t=document.querySelector("body"),o=document.querySelector("footer");"dark"===localStorage.getItem("theme")&&(t.classList.add("dark-theme"),o.classList.add("dark-theme"),e.checked=!0),e.addEventListener("change",(function(){this.checked?(localStorage.setItem("theme","dark"),t.classList.add("dark-theme"),o.classList.add("dark-theme")):(localStorage.setItem("theme","light"),t.classList.remove("dark-theme"),o.classList.remove("dark-theme"))}));var n=function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(e){console.log(e)}},r=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.log(e)}},c=document.querySelector(".backdrop"),i=document.querySelector(".movie-card__close-btn"),a=(document.querySelector(".movie-card"),document.querySelector("body"));function d(e){"Escape"===e.code&&l()}function s(e){e.target===c&&l(),console.log(e.target),e.stopPropagation()}function l(){c.classList.add("hidden"),window.removeEventListener("mousedown",d),window.removeEventListener("click",s),i.removeEventListener("click",s),a.classList.remove("hide-scroll")}var u=document.querySelector(".backdrop"),m=document.querySelector("body"),v=document.querySelector(".movie-card__close-btn"),h=(document.querySelector(".movie-card"),document.querySelector(".movie-card__info__title"),document.querySelector(".movie-card__info__small-text")),g=(document.querySelector(".movie-card__info__details-text"),document.querySelector(".original-title")),_=(document.querySelector(".genres"),document.querySelector(".movie-card__img"));function f(){document.querySelectorAll("[movie-id]").forEach((function(e){e.addEventListener("click",(function(e){v.addEventListener("click",l),u.classList.remove("hidden"),m.classList.add("hide-scroll");var t,o=e.currentTarget.getAttribute("movie-id");_.removeAttribute("src"),(t=o,fetch("".concat("https://api.themoviedb.org/3/","movie/").concat(t,"?api_key=").concat("481cbb6dba5121edc01136f73aa6b3c6")).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))).then((function(e){!function(e){var t=e.id,o=e.title,c=e.overview,i=e.popularity,a=e.genres,d=e.poster_path,s=e.release_date;o.innerHTML=o,h.innerHTML=c,i.innerHTML=i,g.innerHTML=o,genreNames=a.map((function(e){return e.name})).join(", "),a.innerHTML=genreNames,_.setAttribute("src","https://image.tmdb.org/t/p/w500"+d);var l={id:t,title:o,overview:c,popularity:i,genreNames:genreNames,poster_path:d,release_date:s},u=document.querySelector(".movie-card__button-watched"),m=r("watched")||[],v=m.every((function(e){return e.id!==l.id}));u.innerHTML=v?"ADD TO WATCHED":"DELETE FROM WATCHED";var f=function(){if(v)return m.push(l),n("watched",m),void(u.innerHTML="DELETE FROM WATCHED");console.log("film is already added!")},y=function(){f(l)};u.addEventListener("click",y);var p=document.querySelector(".movie-card__button-queue"),E=r("queue")||[],L=E.every((function(e){return e.id!==l.id}));p.innerHTML=L?"ADD TO QUEUE":"DELETE FROM QUEUE";var S=function(){if(L)return E.push(l),n("queue",E),void(p.innerHTML="DELETE FROM QUEUE");console.log("film is already added!")},q=function(){S(l)};p.addEventListener("click",q)}(e)}))}))})),window.addEventListener("keydown",d),window.addEventListener("click",y)}function y(e){e.target===u&&l(),e.stopPropagation()}var p=document.querySelector(".btn-watched"),E=document.querySelector(".film-list");console.log(E),p.addEventListener("click",(function(){var e=r("watched");console.log(e);var t=(o=e,o.map((function(e){var t=e.release_date,o=e.title,n=e.genreNames,r=e.poster_path,c=e.id;return'<li class="movie-item"  movie-id="'.concat(c,'">\n        <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2').concat(r,'" \n          alt="movie poster" loading="lazy" class="movie-item__img" />\n        <h2 class="movie-item__title">').concat(o,'</h2>\n        <p class="movie-item__text">\n          <span class="movie-item__genre">').concat(n,'</span> |\n          <span class="movie-item__year">').concat(t.slice(0,4),"</span>\n        </p>\n      </li>")})).join(""));var o;E.insertAdjacentHTML("afterbegin",t),f()}))}();
//# sourceMappingURL=my-library.ff23c916.js.map
