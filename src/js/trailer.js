import axios from "axios";
import * as basicLightbox from 'basiclightbox'

const mainContainer = document.querySelector(".film-list");

mainContainer.addEventListener('click', watchTrailer);

function watchTrailer(e) {
  e.preventDefault();
  const movieItemImg = e.target.closest('.movie-item')?.querySelector('.movie-item__img');
  if (!movieItemImg) {
    return;
  }
  const id = movieItemImg.closest('.movie-item').getAttribute('movie-id');
  fetchTrailer(id)
    .then(renderTrailer)
    .catch(error => {
      console.log(error);
    });
}

const fetchTrailer = async (id) => {
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const API_KEY = '481cbb6dba5121edc01136f73aa6b3c6';

  try {
    const response = await axios.get(`${BASE_URL}movie/${id}/videos?api_key=${API_KEY}`);
    const data = response.data;
    return data.results;
  } catch (err) {
    console.error(err);
  }
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
  let trailer;
  

   trailer = basicLightbox.create(`
        <iframe width="320" height="240" src='https://www.youtube.com/embed/${key}' 
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
        picture-in-picture" allowfullscreen class="trailer_video"></iframe>
      `);

      const trailerBtn = document.querySelector('.btn-trailer');
      trailerBtn.addEventListener('click', showTrailer);
  
  
    function showTrailer() {
      trailer.show();
    }
  
}
