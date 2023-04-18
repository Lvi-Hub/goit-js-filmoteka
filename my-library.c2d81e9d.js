!function(){var e=document.querySelector(".theme-switch"),t=document.querySelector("body"),n=document.querySelector("footer");"dark"===localStorage.getItem("theme")&&(t.classList.add("dark-theme"),n.classList.add("dark-theme"),e.checked=!0),e.addEventListener("change",(function(){this.checked?(localStorage.setItem("theme","dark"),t.classList.add("dark-theme"),n.classList.add("dark-theme")):(localStorage.setItem("theme","light"),t.classList.remove("dark-theme"),n.classList.remove("dark-theme"))}));var o=document.querySelector(".btnTeam"),r=document.querySelector(".backdrop-footer"),c=document.querySelector("body"),i=document.querySelector(".modal__button");function d(){r.classList.add("is-hidden"),s()}function a(e){"Escape"!==e.key&&e.target!==r||(r.classList.add("is-hidden"),s())}function s(){document.removeEventListener("keydown",a),r.removeEventListener("click",a),i.removeEventListener("click",d),c.classList.remove("noScroll")}o.addEventListener("click",(function(){return r.classList.remove("is-hidden"),void document.querySelector("body").classList.add("noScroll")})),document.addEventListener("keydown",a),r.addEventListener("click",a),r.addEventListener("click",d);var l=function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(e){console.log(e)}},u=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.log(e)}},m=document.querySelector(".backdrop"),v=document.querySelector(".movie-card__close-btn"),h=(document.querySelector(".movie-card"),document.querySelector("body"));function p(e){"Escape"===e.code&&y()}function L(e){e.target===m&&y(),console.log(e.target),e.stopPropagation()}function y(){m.classList.add("hidden"),window.removeEventListener("mousedown",p),window.removeEventListener("click",L),v.removeEventListener("click",L),h.classList.remove("hide-scroll")}var f=document.querySelector(".backdrop"),E=document.querySelector("body"),_=document.querySelector(".movie-card__close-btn"),g=document.querySelector(".movie-card__info__title"),S=document.querySelector(".movie-card__info__small-text"),k=document.querySelector(".movie-card__info__details-text"),q=document.querySelector(".original-title"),b=document.querySelector(".genres"),w=document.querySelector(".movie-card__img");function T(){document.querySelectorAll("[movie-id]").forEach((function(e){e.addEventListener("click",(function(e){_.addEventListener("click",y),f.classList.remove("hidden"),E.classList.add("hide-scroll");var t,n=e.currentTarget.getAttribute("movie-id");w.removeAttribute("src"),(t=n,fetch("".concat("https://api.themoviedb.org/3/","movie/").concat(t,"?api_key=").concat("481cbb6dba5121edc01136f73aa6b3c6")).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))).then((function(e){!function(e){var t=e.id,n=e.title,o=e.overview,r=e.popularity,c=e.genres,i=e.poster_path,d=e.release_date;g.innerHTML=n,S.innerHTML=o,k.innerHTML=r,q.innerHTML=n;var a=c.map((function(e){return e.name})).join(", ");b.innerHTML=a,w.setAttribute("src","https://image.tmdb.org/t/p/w500"+i);var s={id:t,title:n,overview:o,popularity:r,genreNames:a,poster_path:i,release_date:d},m=document.querySelector(".movie-card__button-watched"),v=u("watched")||[],h=v.every((function(e){return e.id!==s.id}));m.innerHTML=h?"ADD TO WATCHED":"DELETE FROM WATCHED";var p=function(){if(h)return v.push(s),l("watched",v),void(m.innerHTML="DELETE FROM WATCHED");console.log("film is already added!")},L=function(){p(s)};m.addEventListener("click",L);var y=document.querySelector(".movie-card__button-queue"),f=u("queue")||[],E=f.every((function(e){return e.id!==s.id}));y.innerHTML=E?"ADD TO QUEUE":"DELETE FROM QUEUE";var _=function(){if(E)return f.push(s),l("queue",f),void(y.innerHTML="DELETE FROM QUEUE");console.log("film is already added!")},T=function(){_(s)};y.addEventListener("click",T)}(e)}))}))})),window.addEventListener("keydown",p),window.addEventListener("click",M)}function M(e){e.target===f&&y(),e.stopPropagation()}document.querySelector("#search-form");var H=document.querySelector(".favorite-film-list"),D=document.querySelector(".btn-watched"),A=document.querySelector(".btn-queue"),O=u("watched"),U=u("queue");function I(e){var t,n,o,r=e.map((function(e){var t,n=e.id,o=e.title,r=e.poster_path,c=e.genreNames,i=e.release_date;return t=r?"https://www.themoviedb.org/t/p/w600_and_h900_bestv2".concat(r):"https://st4.depositphotos.com/21486874/31104/i/600/depositphotos_311048494-stock-photo-coming-soon-neon-light-announcement.jpg",'<li class="movie-item" movie-id = "'.concat(n,'">\n  <img src="').concat(t,'" alt="movie poster" loading="lazy" class="movie-item__img"/>\n  <h2 class="movie-item__title">').concat(o,'</h2>\n  <p class="movie-item__text">\n    <span class="movie-item__genre">').concat(c,'</span> |\n    <span class="movie-item__year">').concat(i.slice(0,4),"</span>\n  </p>\n</li>")})).join("");H.innerHTML=r,t=document.createElement("div"),n=document.createElement("div"),(o=document.querySelector(".section")).prepend(t),t.prepend(n),n.innerHTML="\n      <div></div>\n      <div></div>\n    ",console.log(o),t.classList.add("backdrop-spinner"),n.classList.add("lds-ripple"),setTimeout((function(){t.remove()}),1e3),T()}D.addEventListener("click",(function(){return I(O)})),A.addEventListener("click",(function(){return I(U)})),I(O)}();
//# sourceMappingURL=my-library.c2d81e9d.js.map