import axios from "axios";
import { BASE_URL, API_KEY } from './constants';
const moviesGenres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
  { id: 10759, name: "Action & Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 10762, name: "Kids" },
  { id: 9648, name: "Mystery" },
  { id: 10763, name: "News" },
  { id: 10764, name: "Reality" },
  { id: 10765, name: "Sci-Fi & Fantasy" },
  { id: 10766, name: "Soap" },
  { id: 10767, name: "Talk" },
  { id: 10768, name: "War & Politics" },
  { id: 37, name: "Western" },
];
const filmsListEl = document.querySelector('.film-list');

async function fetchApi() {
   const POPULAR_MOVIES = 'language=en-US&sort_by=popularity.desc&include_adult=false';
  
   return await axios.get(`${BASE_URL}discover/movie?api_key=${API_KEY}&${POPULAR_MOVIES}`)
   }

async function getPopularMovies() {
   try {
      const movies = await fetchApi();
    
      const movieData = movies.data.results;
      console.log(movieData);

      filmsListEl.innerHTML = makeMarkupPopularMov(movieData);

   } catch (error) {
     console.log(error);
   }
}

getPopularMovies()

function getGenreName(genreId) {
  return moviesGenres.find(({ id }) => id === genreId).name;
}

function checkArrlength(arr) {
    let changedGenres = arr;
    if(arr.length > 2){
        changedGenres = arr.splice(0,2);
        changedGenres.push('Other');
        return changedGenres;
    }

  return changedGenres;
}

function makeMarkupPopularMov(movieData) {
    return movieData.map(({release_date, title, genre_ids, poster_path}) => {
      const genresArr = genre_ids.map((id) => getGenreName(id));
      const genreResult = checkArrlength(genresArr).join(', ');
      return `<li class="movie-item">
    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}" 
    alt="movie poster" loading="lazy" class="movie-item__img" />
    <h2 class="movie-item__title">${title}</h2>
    <p class="movie-item__text">
      <span class="movie-item__genre">${genreResult}</span> |
      <span class="movie-item__year">${release_date.slice(0, 4)}</span>
    </p>
  </li>`}).join('');
    }