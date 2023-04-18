import {
  setToLocalStorage,
  getFromLocalStorage,
} from './local-storage-functions';

import {
  onSearchFormSubmit,
  invalidSearchQuery,
  emptySearchQuery,
  invalidSearchImage,
  emptySearchImg,
} from './searchFilm';

const searchFormEl = document.querySelector('#search-form');
const filmsListLibraryEl = document.querySelector('.favorite-film-list');
const watchBtnEl = document.querySelector('.btn-watched');
const queueBtnEl = document.querySelector('.btn-queue');

const moviesToWatch = getFromLocalStorage('watched');
const moviesInQueue = getFromLocalStorage('queue');
let pageNumber = 1;

searchFormEl.addEventListener('submit', onSearchFormSubmit);
watchBtnEl.addEventListener('click', () =>
  createandShowFilmsMarkup(moviesToWatch)
);
queueBtnEl.addEventListener('click', () =>
  createandShowFilmsMarkup(moviesInQueue)
);

createandShowFilmsMarkup(moviesToWatch);

function createandShowFilmsMarkup(searchFilms) {
  const filmsMarkup = searchFilms
    .map(({ id, title, poster_path, genres, release_date }) => {
      let posterPath;
      if (poster_path) {
        posterPath = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`;
      } else {
        posterPath = `https://st4.depositphotos.com/21486874/31104/i/600/depositphotos_311048494-stock-photo-coming-soon-neon-light-announcement.jpg`;
      }
      return `<li class="movie-item" movie-id = "${id}">
  <img src="${posterPath}" alt="movie poster" loading="lazy" class="movie-item__img"/>
  <h2 class="movie-item__title">${title}</h2>
  <p class="movie-item__text">
    <span class="movie-item__genre">${genres}</span> |
    <span class="movie-item__year">${release_date.slice(0, 4)}</span>
  </p>
</li>`;
    })
    .join('');
  filmsListLibraryEl.innerHTML = filmsMarkup;
}
