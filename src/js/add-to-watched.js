import {
  setToLocalStorage,
  getFromLocalStorage,
} from './local-storage-functions';

export const addToWatchedFilms = (movieData, idFilm) => {
  const addToWatchedBtnEl = document.querySelector(
    '.movie-card__button-watched'
  );

  const handleAddToWatchedBtn = () => {
    const selectedFilm = movieData.find(film => film.id === idFilm);
    console.log(selectedFilm);
    const watchedFilms = getFromLocalStorage('watched') || [];
    // console.log(selectedFilm);
    if (addToWatchedBtnEl.textContent === 'ADD TO WATCHED') {
      watchedFilms.push(selectedFilm);
      setToLocalStorage('watched', watchedFilms);
      addToWatchedBtnEl.textContent = 'DELETE FROM WATCHED';
    }
  };

  addToWatchedBtnEl.addEventListener('click', handleAddToWatchedBtn);
};

// // const watchedBtnEl = document.querySelector('.btn-watched');

// export const addToWatchedFilms = (filmsData, idFilm) => {
//   try {
//     let watchedFilms;
//     if (localStorage.getItem('watchedFilms') === null) {
//       watchedFilms = [];
//       localStorage.setItem('watchedFilms', JSON.stringify(watchedFilms));
//     }
//     watchedFilms = JSON.parse(localStorage.getItem('watchedFilms'));
//     watchedFilms.forEach(film => {
//       if (Number(film[idFilm]) === Number(idFilm)) {
//         addToWatchedBtnEl.textContent = 'DELETE FROM WATCHED';
//       }
//     });
//     addToWatchedBtnEl.addEventListener('click', () => {
//       filmsData.forEach(film => {
//         if (Number(film.id) === Number(idFilm)) {
//           watchedFilms.push(film);
//           addToWatchedBtnEl.textContent = 'DELETE FROM WATCHED';
//         }
//       });
//       localStorage.setItem('watchedFilms', JSON.stringify(watchedFilms));
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// const handleWatchedBtnClick = () => {};
// watchedBtnEl.addEventListener('click', handleWatchedBtnClick);
