import axios from "axios";

import { BASE_URL, API_KEY } from './constants';

const SEARCH_URL = 'search/movie';

export const pageStart = 1;
export let page = pageStart;

export function fetchFilms(searchValue) {
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
        query: searchValue,
        page: 1,
    });
        try {
                return axios.get(`${BASE_URL}${SEARCH_URL}?${searchParams}`);      
            
        } catch (error) {
            throw new Error(error.message);
        };
}

export function resetPage() {
    page = pageStart;
};     

