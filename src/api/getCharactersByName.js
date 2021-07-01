import apiOrigin from './api';

export const getCharactersByName = (ts, apikey, hash, name) => {
  return fetch(
    `${apiOrigin}?limit=52&ts=${ts}&nameStartsWith=${name}&apikey=${apikey}&hash=${hash}`
  ).then((res) => res.json());
};
