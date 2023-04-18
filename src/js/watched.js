import {
  setToLocalStorage,
  getFromLocalStorage,
} from './local-storage-functions';
// import { makeMarkupPopularMov } from './homepage_main'
import { addEventlListenertoFilmCard } from './modal-about';



const watchedBtn = document.querySelector('.btn-watched');
const watchedList = document.querySelector('.film-list');
console.log(watchedList);

watchedBtn.addEventListener('click', handlerWatchedMovieBtn);


function handlerWatchedMovieBtn() {

    const watchedMovieList = getFromLocalStorage('watched');
    console.log(watchedMovieList);

    const markUp = makeMarkupPopularMov(watchedMovieList);
    watchedList.insertAdjacentHTML('afterbegin', markUp);
    addEventlListenertoFilmCard();


}

function makeMarkupPopularMov(movieData) {
    return movieData.map(({release_date, title, genreNames, poster_path, id}) => {

    //   const genresArr = genre_ids.map((id) => getGenreName(id));
    //   const genreResult = checkArrlength(genresArr).join(', ');
    //   if (release_date === undefined) {
    //       release_date = '';
    //    }
      return `<li class="movie-item"  movie-id="${id}">
        <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}" 
          alt="movie poster" loading="lazy" class="movie-item__img" />
        <h2 class="movie-item__title">${title}</h2>
        <p class="movie-item__text">
          <span class="movie-item__genre">${genreNames}</span> |
          <span class="movie-item__year">${release_date.slice(0, 4)}</span>
        </p>
      </li>`;
    })
    .join('');
}

