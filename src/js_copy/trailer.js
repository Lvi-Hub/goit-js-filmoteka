// import * as basicLightbox from 'basiclightbox';

let trailer;
const mainContainer = document.querySelector(".header-list");

export default function onTrailerClick() {
  mainContainer.addEventListener('click', watchTrailer);
}

function watchTrailer(e) {
  e.preventDefault();
  if (e.target.closest('.card-link')?.querySelector('.movie-card__img') === undefined) {
    return;
  }
  fetchTrailer(e.target.closest('.movie-card__img').id)
    .then(renderTrailer)
    .catch(error => {
      console.log(error);
    });
}

function fetchTrailer(movie_id, lang) {
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const API_KEY = '481cbb6dba5121edc01136f73aa6b3c6';

  return fetch(`${BASE_URL}/movie/${movie_id}/videos?api_key=${API_KEY}&language=${lang}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
}

function renderTrailer(data) {
  let key = '';
  data.forEach(obj => {
    if (obj.name.includes('Official')) {
      key = obj.key;
    }
  });

  createTrailerLink(key);

  window.addEventListener('keydown', closeTrailerByEsc);
  function closeTrailerByEsc(e) {
    if (e.code === 'Escape') {
      trailer.close();
      window.removeEventListener('keydown', closeTrailerByEsc);
    }
  }
}

function createTrailerLink(key) {
  trailer = basicLightbox.create(`
    <iframe width="320" height="240" src='https://www.youtube.com/embed/${key}' 
    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
    picture-in-picture" allowfullscreen class="trailer_video"></iframe>
  `);

  setTimeout(() => {
    const trailerBtn = document.querySelector('.movie-card__img');
    trailerBtn.addEventListener('click', showTrailer);
  }, 300);

  function showTrailer() {
    trailer.show();
  }
}

  