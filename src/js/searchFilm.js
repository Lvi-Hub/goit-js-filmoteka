import { fetchFilms, pageStart, page, resetPage } from './fetchFilms';
import debounce from 'lodash.debounce';

import { getGenreName, checkArrlength } from './homepage_main';

const searchFormEl = document.querySelector('#search-form');
const listEl = document.querySelector('.film-list');

searchFormEl.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(event) {
        event.preventDefault();

        const searchValue = event.currentTarget.elements.searchQuery.value;
        console.log(searchValue);
        

        if (searchValue === '') {
                listEl.innerHTML = '';
                emptySearchQuery();
                return console.log('ПУСТО!')
        } else {

                async function getFilms() {
                        try {
                                resetPage();
                                const searchFilms = await fetchFilms(searchValue);
                                console.log(searchFilms);
                                console.log('ВСЕ ОК!')
                        
                                if (searchFilms.data.results.length === 0) {
                                        listEl.innerHTML = '';
                                        invalidSearchQuery()
                                        return console.log('ПУСТО! Нічого не знайдено!')
                                
                                } else {
                                        listEl.innerHTML = createFilmsMarkup(searchFilms);
                                }
                        
                        } catch {
                                listEl.innerHTML = '';
                                return console.log('CATCH!')
                        }
              
                }
                getFilms();
        }
}
 

function createFilmsMarkup(searchFilms) {
    const filmsMarkup = searchFilms.data.results.map(({ id, title, poster_path, genre_ids, release_date }) => {
        const genresArr = genre_ids.map((id) => getGenreName(id));
        const genreResult = checkArrlength(genresArr).join(', ');
        let posterPath;
        if (poster_path) {     
            posterPath =  `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`;
        } else {
            posterPath = `https://cdn11.bigcommerce.com/s-1812kprzl2/images/stencil/original/products/426/5082/no-image__12882.1665668288.jpg?c=2`;
        }    
        return `<li class="movie-item" id = "${id}">
  <img src="${posterPath}" alt="movie poster" loading="lazy" class="movie-item__img"/>
  <h2 class="movie-item__title">${title}</h2>
  <p class="movie-item__text">
    <span class="movie-item__genre">${genreResult}</span> |
    <span class="movie-item__year">${release_date.slice(0, 4)}</span>
  </p>
</li>` ;
    }).join(''); 
        return filmsMarkup;
}


function invalidSearchQuery() {
        const invalidNotification = `<p class="search-notification"> Search result not successful. Enter the correct movie name. </p>;`; 
        searchFormEl.insertAdjacentHTML('beforeend', invalidNotification);
        const removeInvalidNotification = debounce(() => {searchFormEl.lastElementChild.remove();
  }, 2500);
        return removeInvalidNotification();
}

function emptySearchQuery() {
        const emptySearchNotification = `<p class="search-notification"> Search result not successful. Enter a movie name and try again. </p>`;
        searchFormEl.insertAdjacentHTML('beforeend', emptySearchNotification);
        const removeEmptySearchNotification = debounce(() => {searchFormEl.lastElementChild.remove();
        }, 2500);
        return removeEmptySearchNotification();
}