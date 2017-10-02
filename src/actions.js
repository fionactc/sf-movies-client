import axios from 'axios';

export const FETCH_TITLES = 'FETCH_TITLES';
export const FETCH_MOVIE  = 'FETCH_MOVIE';

const ROOT_URL = 'https://infinite-shelf-48737.herokuapp.com/api';

export function fetchTitles(searchTerm) {
  const request = axios.get(`${ROOT_URL}/titles?searchTerm=${searchTerm}`)
  return {
    type: FETCH_TITLES,
    payload: request
  }
}

export function fetchMovie(title) {
  if (title) {
    const request = axios.get(`${ROOT_URL}/movie?title=${title}`)
    return {
      type: FETCH_MOVIE,
      payload: request
    }
  }
}
