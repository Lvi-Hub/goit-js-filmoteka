import { fetchFilms, pageStart, page, resetPage } from './fetchFilms';
import debounce from 'lodash.debounce';

import { getGenreName, checkArrlength } from './homepage_main';
import { addEventlListenertoFilmCard } from './modal-about';

import Pagination from 'tui-pagination';
import { paginationContainer } from "./pagination";

import { showSpinner } from './show_spinner';

const searchFormEl = document.querySelector('#search-form');
const listEl = document.querySelector('.film-list');

let pageNumber = 1;

searchFormEl.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(event) {
        event.preventDefault();
        // const pagination = new Pagination(paginationContainer);
        // pagination.reset();
        const searchValue = event.currentTarget.elements.searchQuery.value;
        console.log(searchValue);
        

        if (searchValue === '') {
                listEl.innerHTML = '';
                showSpinner();
                emptySearchQuery();
                emptySearchImg();
                paginationContainer.classList.add('is-hidden');
                return console.log('ПУСТО!')
        } else {

                async function getFilms() {
                        try {

                                // resetPage();
                                paginationContainer.classList.remove('is-hidden');
                                const searchFilms = await fetchFilms(searchValue, pageNumber);
                                const pagination = await new Pagination(paginationContainer, {
                                          totalItems: searchFilms.data.total_results,
                                          itemsPerPage: 20,
                                          visiblePages: 5,
                                        //   pageLinks: 2,
                                          centerAlign: true,
                                        });

                                console.log(searchFilms);
                                console.log('ВСЕ ОК!')
                        
                                if (searchFilms.data.results.length === 0) {
                                        listEl.innerHTML = '';
                                        invalidSearchQuery()
                                        invalidSearchImage()
                                        paginationContainer.classList.add('is-hidden');
                                        return console.log('ПУСТО! Нічого не знайдено!')
                                
                                } else {
                                        

                                        pagination.on('beforeMove', async (event) => {
                                                paginationContainer.classList.remove('is-hidden');
                                                pageNumber = event.page;
                                                const searchFilms = await fetchFilms(searchValue, pageNumber);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                          listEl.innerHTML = createFilmsMarkup(searchFilms);
                                        });

                                        listEl.innerHTML = createFilmsMarkup(searchFilms);
                                        addEventlListenertoFilmCard()
                                }
                        
                        } catch {
                                listEl.innerHTML = '';
                                // paginationContainer.classList.add('is-hidden');
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
            posterPath = `https://st4.depositphotos.com/21486874/31104/i/600/depositphotos_311048494-stock-photo-coming-soon-neon-light-announcement.jpg`;
        }    
        return `<li class="movie-item" movie-id = "${id}">
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
        const invalidNotification = `<p class="search-notification"> Search result not successful. Enter the correct movie name. </p>`; 
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



function invalidSearchImage() { 
        const emptyNotification = `<li> <p class="search-section-notification"> OOPS! I don't understand you. Please, try again. </p> </li>`;
        listEl.insertAdjacentHTML('beforeend', emptyNotification); 
        const invalidImg = `<li class='bottom-img-wrap'><img src="https://kor.ill.in.ua/m/1260x900/2150529.jpg" alt="no-movie" loading="lazy" class="invalid-search-img" /> </li>`
        listEl.insertAdjacentHTML('beforeend', invalidImg);
        return
}

function emptySearchImg() {
        const emptyNotification = `<li> <p class="search-section-notification"> OOPS! I don't understand you. Please, try again. </p> </li>`;
        listEl.insertAdjacentHTML('beforeend', emptyNotification);
        const emptyImg = `<li class='bottom-img-wrap'><img src="https://kartinkin.net/pics/uploads/posts/2022-08/1660830950_1-kartinkin-net-p-oboi-s-dedpulom-krasivo-1.jpg" alt="no-movie" loading="lazy" class="invalid-search-img"/> </li>`
        listEl.insertAdjacentHTML('beforeend', emptyImg);
        return
}


