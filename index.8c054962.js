console.log("https://api.themoviedb.org/3/"),console.log("481cbb6dba5121edc01136f73aa6b3c6");const e=document.querySelector(".movie-card");document.querySelectorAll("[data-film]").forEach((a=>{a.addEventListener("click",(a=>{e.classList.remove("hidden");const d=a.currentTarget.getAttribute("data-film");var l;(l=d,fetch(`https://api.themoviedb.org/3/movie/${l}?api_key=481cbb6dba5121edc01136f73aa6b3c6`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))).then((e=>{!function(e){t.innerHTML=e.title,o.innerHTML=e.overview,r.innerHTML=e.popularity,c.innerHTML=e.title,n.innerHTML=e.genres.map((e=>e.name)).join(", "),console.log(e),i.setAttribute("src","https://image.tmdb.org/t/p/w500"+e.poster_path)}(e)}))}))}));const t=document.querySelector(".movie-card__info__title"),o=document.querySelector(".movie-card__info__small-text"),r=document.querySelector(".movie-card__info__details-text"),c=document.querySelector(".original-title"),n=document.querySelector(".genres"),i=document.querySelector(".movie-card__img");document.querySelector(".movie-card__close-btn").addEventListener("click",(()=>{e.classList.add("hidden")}));
//# sourceMappingURL=index.8c054962.js.map
