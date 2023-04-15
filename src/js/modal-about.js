const card = document.querySelector('.movie-card');
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '481cbb6dba5121edc01136f73aa6b3c6';

function fetchFilms(id) {
  return fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}


const filmCardElements = document.querySelectorAll('[movie-id]');
console.log(filmCardElements)
filmCardElements.forEach(element => {
  element.addEventListener('click', event => {
    card.classList.remove('hidden')
    const idFilm = event.currentTarget.getAttribute('movie-id');
    fetchFilms(idFilm).then((data) => {
      fillModal(data);
     })
     
  });
});

const title = document.querySelector('.movie-card__info__title');
const text = document.querySelector('.movie-card__info__small-text');
const popularity = document.querySelector(".movie-card__info__details-text");
const originalTitle = document.querySelector(".original-title");
const genres = document.querySelector(".genres");
const poster = document.querySelector(".movie-card__img");

function fillModal(data) {
  title.innerHTML = data.title;
  text.innerHTML = data.overview;
  popularity.innerHTML = data.popularity;
  originalTitle.innerHTML = data.title;
   genres.innerHTML = data.genres.map(genre => genre.name).join(", ");
  console.log(data);
  poster.setAttribute('src', 'https://image.tmdb.org/t/p/w500' + data.poster_path)
};
 
const closeModal = document.querySelector(".movie-card__close-btn");
closeModal.addEventListener('click', () => {
   card.classList.add("hidden")
 })