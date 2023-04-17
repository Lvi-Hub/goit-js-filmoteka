import { hideModalOnEscape, hideModalOnCLick, hideModal } from './closeModal';

const card = document.querySelector('.backdrop');
const body = document.querySelector('body');
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '481cbb6dba5121edc01136f73aa6b3c6';

// const backdropEl = document.querySelector(".backdrop");
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
  // console.log(filmCardElements)
  filmCardElements.forEach(element => {
    // console.log(`element ${element}`);
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
  window.addEventListener('click', hideModalOnCLick);
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
  addToWatched.addEventListener('click', () => console.log(filmDetails));
  //  setTimeout(
  //  window.addEventListener("click", hideModalOnCLick), 100)
  // console.log(data);
}

// const closeModal = document.querySelector(".movie-card__close-btn");
// closeModal.addEventListener('click', () => {
//    card.classList.add("hidden")
//  })
