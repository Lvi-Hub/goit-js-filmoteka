import { hideModalOnEscape, hideModalOnCLick, hideModal} from './closeModal';

const card = document.querySelector('.backdrop');
const body = document.querySelector('body');
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '481cbb6dba5121edc01136f73aa6b3c6';

// const backdropEl = document.querySelector(".backdrop");
const closeBtnEl = document.querySelector(".movie-card__close-btn");
const modalEl = document.querySelector(".movie-card");
const title = document.querySelector('.movie-card__info__title');
const text = document.querySelector('.movie-card__info__small-text');
const popularity = document.querySelector(".movie-card__info__details-text");
const originalTitle = document.querySelector(".original-title");
const genres = document.querySelector(".genres");
const poster = document.querySelector(".movie-card__img");

function fetchFilms(id) {
  return fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function addEventlListenertoFilmCard() {
 const filmCardElements = document.querySelectorAll('[movie-id]');
// console.log(filmCardElements)
filmCardElements.forEach(element => {
  // console.log(`element ${element}`);
  element.addEventListener('click', event => {
    closeBtnEl.addEventListener("click", hideModal);
    card.classList.remove('hidden')
    body.classList.add('hide-scroll')
    const idFilm = event.currentTarget.getAttribute('movie-id');
    poster.removeAttribute('src');
    fetchFilms(idFilm).then((data) => {
      fillModal(data);
     })
     ;
  });
}); 
window.addEventListener("keydown", hideModalOnEscape);
window.addEventListener("click", hideModalOnCLick)

}


function fillModal(data) {
  
  poster.setAttribute('src', 'https://image.tmdb.org/t/p/w500' + data.poster_path);
  title.innerHTML = data.title;
  text.innerHTML = data.overview;
  popularity.innerHTML = data.popularity;
  originalTitle.innerHTML = data.title;
   genres.innerHTML = data.genres.map(genre => genre.name).join(", ");
  //  setTimeout(
  //  window.addEventListener("click", hideModalOnCLick), 100)
  // console.log(data);
};
 
// const closeModal = document.querySelector(".movie-card__close-btn");
// closeModal.addEventListener('click', () => {
//    card.classList.add("hidden")
//  })