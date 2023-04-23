import {
  setToLocalStorage,
  getFromLocalStorage,
} from './local-storage-functions';
import { hideModalOnEscape, hideModal } from './closeModal';

const card = document.querySelector('.backdrop');
const body = document.querySelector('body');
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '481cbb6dba5121edc01136f73aa6b3c6';

const closeBtnEl = document.querySelector('.movie-card__close-btn');
const movieTitle = document.querySelector('.movie-card__info__title');

const text = document.querySelector('.movie-card__info__small-text');
const moviePopularity = document.querySelector(
  '.movie-card__info__details-text'
);
const originalTitle = document.querySelector('.original-title');
const movieGenres = document.querySelector('.genres');
const moviePoster = document.querySelector('.movie-card__img');

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
  filmCardElements.forEach(element => {
    element.addEventListener('click', event => {
      closeBtnEl.addEventListener('click', hideModal);
      card.classList.remove('hidden');
      body.classList.add('hide-scroll');
      const idFilm = event.currentTarget.getAttribute('movie-id');

      moviePoster.removeAttribute('src');

      fetchFilms(idFilm).then(data => {
        fillModal(data);
      });
    });
  });
  window.addEventListener('keydown', hideModalOnEscape);
  window.addEventListener('click', hideModalOnBackdropClick);
}

function fillModal({
  id,
  title,
  overview,
  popularity,
  genres,
  poster_path,
  release_date,
}) {
  movieTitle.innerHTML = title;

  text.innerHTML = overview;
  moviePopularity.innerHTML = popularity;
  originalTitle.innerHTML = title;
  const genreNames = genres.map(genre => genre.name).join(', ');
  movieGenres.innerHTML = genreNames;
  moviePoster.setAttribute(
    'src',
    'https://image.tmdb.org/t/p/w500' + poster_path
  );

  const filmDetails = {
    id,
    title,
    overview,
    popularity,
    genreNames,
    poster_path,
    release_date,
  };

  const addToWatchedBtnEl = document.querySelector(
    '.movie-card__button-watched'
  );
  const watchedFilms = getFromLocalStorage('watched') || [];
  const findFilmWatched = watchedFilms.find(el => el.id === filmDetails.id);
  let isFilmWatched;
  if (findFilmWatched === undefined) {
    isFilmWatched = false;
  } else {
    isFilmWatched = true;
  }
  if (isFilmWatched) {
    addToWatchedBtnEl.innerHTML = 'DELETE FROM WATCHED';
  } else {
    addToWatchedBtnEl.innerHTML = 'ADD TO WATCHED';
  }

  addToWatchedBtnEl.addEventListener('click', handleAddToWatchedFilms);

  function handleAddToWatchedFilms() {
    const list = getFromLocalStorage('watched') || [];
    const findFilm = list.find(el => el.id === filmDetails.id);
    let isThisFilmWatched;
    if (findFilm === undefined) {
      isThisFilmWatched = false;
    } else {
      isThisFilmWatched = true;
    }
    if (isThisFilmWatched) {
      console.log(filmDetails.id);
      removeWatchedFilms(filmDetails.id, list);
      return;
    } else {
      addToWatchedFilms(filmDetails, list);
    }
  }

  function addToWatchedFilms(film, list) {
    list.push(film);
    setToLocalStorage('watched', list);
    addToWatchedBtnEl.innerHTML = 'DELETE FROM WATCHED';
  }

  function removeWatchedFilms(id, list) {
    const onlyNotThisFilms = list.filter(el => el.id !== id);
    setToLocalStorage('watched', onlyNotThisFilms);
    addToWatchedBtnEl.innerHTML = 'ADD TO WATCHED';
  }

  const addToQueueBtnEl = document.querySelector('.movie-card__button-queue');
  const queueFilms = getFromLocalStorage('queue') || [];
  const findFilmQueue = queueFilms.find(el => el.id === filmDetails.id);
  let isFilmQueue;
  if (findFilmQueue === undefined) {
    isFilmQueue = false;
  } else {
    isFilmQueue = true;
  }
  if (isFilmQueue) {
    addToQueueBtnEl.innerHTML = 'DELETE FROM QUEUE';
  } else {
    addToQueueBtnEl.innerHTML = 'ADD TO QUEUE';
  }

  addToQueueBtnEl.addEventListener('click', handleAddToQueueFilms);

  function handleAddToQueueFilms() {
    const list = getFromLocalStorage('queue') || [];
    const findFilm = list.find(el => el.id === filmDetails.id);
    let isThisFilmQueue;
    if (findFilm === undefined) {
      isThisFilmQueue = false;
    } else {
      isThisFilmQueue = true;
    }
    if (isThisFilmQueue) {
      console.log(filmDetails.id);
      removeQueueFilms(filmDetails.id);
      return;
    } else {
      addToQueueFilms(filmDetails);
    }
  }

  function addToQueueFilms(film) {
    let listQueueFilms = getFromLocalStorage('queue') || [];
    listQueueFilms.push(film);
    setToLocalStorage('queue', listQueueFilms);
    listQueueFilms = [];
    addToQueueBtnEl.innerHTML = 'DELETE FROM QUEUE';
  }

  function removeQueueFilms(id) {
    let listQueueFilms = getFromLocalStorage('queue') || [];
    const onlyNotThisFilms = listQueueFilms.filter(el => el.id !== id);
    setToLocalStorage('queue', onlyNotThisFilms);
    listQueueFilms = [];
    addToQueueBtnEl.innerHTML = 'ADD TO QUEUE';
  }
}

function hideModalOnBackdropClick(e) {
  e.target === card && hideModal();
  // console.log(e.target);
  e.stopPropagation();
}
