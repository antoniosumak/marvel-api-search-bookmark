import apiOrigin from './api';

export const getCharactersById = (ts, apikey, hash, id) => {
  return fetch(
    `${apiOrigin}/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`
  ).then((res) => res.json());
};
