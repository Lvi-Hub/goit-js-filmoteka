import {
  setToLocalStorage,
  getFromLocalStorage,
} from './local-storage-functions';

import Pagination from 'tui-pagination';
// import { paginationContainer } from "./pagination";
const queuePaginationContainer = document.querySelector(
  '[js-queue-pagination]'
);
const watchedPaginationContainer = document.querySelector(
  '[js-watched-pagination]'
);

import { addEventlListenertoFilmCard } from './modal-about';

import { showSpinner } from './show_spinner';

// import {
//   onSearchFormSubmit
// } from './searchFilm';

const filmsListLibraryEl = document.querySelector('.favorite-film-list');
const watchBtnEl = document.querySelector('.btn-watched');
const queueBtnEl = document.querySelector('.btn-queue');

const moviesToWatch = getFromLocalStorage('watched') || [];
const moviesInQueue = getFromLocalStorage('queue') || [];

//const moviesToWatch = getFromLocalStorage('watched');
//const moviesInQueue = getFromLocalStorage('queue');

// console.log(moviesToWatch);

// if (moviesToWatch === undefined) {
//   moviesToWatch = [];
// }

// if (moviesInQueue === undefined) {
//   moviesInQueue = [];
// }

const chunkSize = 20;
const queueArray = [];
const watchedArray = [];
let pageNumber = 1;

const queueOptions = {
  totalItems: (moviesInQueue || []).length,
  page: pageNumber,
  itemsPerPage: 20,
  centerAlign: true,

  visiblePages: 5,
};

const toWatchOptions = {
  totalItems: (moviesToWatch || []).length,
  page: pageNumber,
  itemsPerPage: 20,
  centerAlign: true,

  visiblePages: 5,
};

while ((moviesInQueue || []).length > 0) {
  queueArray.push(moviesInQueue.slice(0, chunkSize));
  moviesInQueue.splice(0, chunkSize);
}

while ((moviesToWatch || []).length > 0) {
  watchedArray.push(moviesToWatch.slice(0, chunkSize));
  moviesToWatch.splice(0, chunkSize);
}

const queuePagination = new Pagination(queuePaginationContainer, queueOptions);
const toWatchPagination = new Pagination(
  watchedPaginationContainer,
  toWatchOptions
);

// searchFormEl.addEventListener('submit', onSearchFormSubmit);
watchBtnEl.addEventListener('click', () => {
  queuePaginationContainer.classList.add('is-hidden');
  queuePagination.off();
  createandShowFilmsMarkup(getFromLocalStorage('watched'));
  // console.log(getFromLocalStorage('watched').length);

  if ((getFromLocalStorage('watched') || []).length < 21) {
    watchedPaginationContainer.classList.add('is-hidden');
  } else {
    watchedPaginationContainer.classList.remove('is-hidden');

    toWatchPagination.on('beforeMove', event => {
      createandShowFilmsMarkup(watchedArray[event.page - 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

queueBtnEl.addEventListener('click', () => {
  createandShowFilmsMarkup(queueArray[0]);
  watchedPaginationContainer.classList.add('is-hidden');
  toWatchPagination.off();
  createandShowFilmsMarkup(getFromLocalStorage('queue'));

  if ((getFromLocalStorage('queue') || []).length < 21) {
    queuePaginationContainer.classList.add('is-hidden');
  } else {
    queuePaginationContainer.classList.remove('is-hidden');

    queuePagination.on('beforeMove', event => {
      createandShowFilmsMarkup(queueArray[event.page - 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

createandShowFilmsMarkup(watchedArray[0]);
queuePaginationContainer.classList.add('is-hidden');
queuePagination.off();

if ((getFromLocalStorage('watched') || []).length < 21) {
  watchedPaginationContainer.classList.add('is-hidden');
} else {
  watchedPaginationContainer.classList.remove('is-hidden');

  toWatchPagination.on('beforeMove', event => {
    createandShowFilmsMarkup(watchedArray[event.page - 1]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function createandShowFilmsMarkup(searchFilms) {
  try {
    const filmsMarkup = searchFilms
      .map(({ id, title, poster_path, genreNames, release_date }) => {
        let posterPath;
        if (poster_path) {
          posterPath = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`;
        } else {
          posterPath = `https://st4.depositphotos.com/21486874/31104/i/600/depositphotos_311048494-stock-photo-coming-soon-neon-light-announcement.jpg`;
        }
        return `<li class="movie-item" movie-id="${id}">
  <img src="${posterPath}" alt="movie poster" loading="lazy" class="movie-item__img"/>
  <h2 class="movie-item__title">${title}</h2>
  <p class="movie-item__text">
    <span class="movie-item__genre">${genreNames}</span> |
    <span class="movie-item__year">${release_date.slice(0, 4)}</span>
  </p>
</li>`;
      })
      .join('');
    filmsListLibraryEl.innerHTML = filmsMarkup;
    showSpinner();
    addEventlListenertoFilmCard();
  } catch (error) {
    console.log('LocalStorage is empty');
  }
}
