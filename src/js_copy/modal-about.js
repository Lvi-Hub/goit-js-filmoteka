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
const modalEl = document.querySelector('.movie-card');
const title = document.querySelector('.movie-card__info__title');
const text = document.querySelector('.movie-card__info__small-text');
const popularity = document.querySelector('.movie-card__info__details-text');
const originalTitle = document.querySelector('.original-title');
const genres = document.querySelector('.genres');
const poster = document.querySelector('.movie-card__img');

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
      poster.removeAttribute('src');
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
  title.innerHTML = title;
  text.innerHTML = overview;
  popularity.innerHTML = popularity;
  originalTitle.innerHTML = title;
  genreNames = genres.map(genre => genre.name).join(', ');
  genres.innerHTML = genreNames;
  poster.setAttribute('src', 'https://image.tmdb.org/t/p/w500' + poster_path);

  const filmDetails = {
    id,
    title,
    overview,
    popularity,
    genreNames,
    poster_path,
    release_date,
  };

  const addToWatched = document.querySelector('.movie-card__button-watched');
  const watchedFilms = getFromLocalStorage('watched') || [];
  const isFilmNoWatched = watchedFilms.every(el => el.id !== filmDetails.id);
  if (!isFilmNoWatched) {
    addToWatched.innerHTML = 'DELETE FROM WATCHED';
  } else {
    addToWatched.innerHTML = 'ADD TO WATCHED';
  }
  const addToWatchedFilms = () => {
    if (isFilmNoWatched) {
      watchedFilms.push(filmDetails);
      setToLocalStorage('watched', watchedFilms);
      addToWatched.innerHTML = 'DELETE FROM WATCHED';
      return;
    } else {
      console.log('film is already added!');
    }
  };
  const handleAddToWatchedFilms = () => {
    addToWatchedFilms(filmDetails);
  };
  addToWatched.addEventListener('click', handleAddToWatchedFilms);

  const addToQueue = document.querySelector('.movie-card__button-queue');
  const queueFilms = getFromLocalStorage('queue') || [];
  const isFilmNoQueue = queueFilms.every(el => el.id !== filmDetails.id);
  if (!isFilmNoQueue) {
    addToQueue.innerHTML = 'DELETE FROM QUEUE';
  } else {
    addToQueue.innerHTML = 'ADD TO QUEUE';
  }
  const addToQueueFilms = () => {
    if (isFilmNoQueue) {
      queueFilms.push(filmDetails);
      setToLocalStorage('queue', queueFilms);
      addToQueue.innerHTML = 'DELETE FROM QUEUE';
      return;
    } else {
      console.log('film is already added!');
    }
  };
  const handleAddToQueueFilms = () => {
    addToQueueFilms(filmDetails);
  };
  addToQueue.addEventListener('click', handleAddToQueueFilms);
}

function hideModalOnBackdropClick(e) {
  e.target === card && hideModal();
  // console.log(e.target);
  e.stopPropagation();
}
//
