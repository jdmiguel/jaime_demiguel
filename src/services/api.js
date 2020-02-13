import { request } from ".";

/** Constants */
import { API_CHARACTERS, API_SPECIES } from "../utils/constants";

export const getCharactersService = page =>
  request(API_CHARACTERS, {
    method: "GET",
    params: {
      _page: page,
      _limit: 10
    }
  });

export const getCharactersBySearchService = query =>
  request(API_CHARACTERS, {
    method: "GET",
    params: {
      q: query
    }
  });

export const getCharactersByIdService = id =>
  request(`${API_CHARACTERS}${id}`, {
    method: "GET",
    params: {
      id
    }
  });

export const getSpeciesService = () => request(API_SPECIES);

export const createCharacterService = character =>
  request(API_CHARACTERS, {
    method: "POST",
    data: character
  });

export const editCharacterService = (id, character) =>
  request(`${API_CHARACTERS}${id}`, {
    method: "PUT",
    data: character
  });

export const removeCharacterService = id =>
  request(`${API_CHARACTERS}${id}`, {
    method: "DELETE"
  });

export const sortByCharactersService = sortBy =>
  request(API_CHARACTERS, {
    method: "GET",
    params: {
      _sort: sortBy,
      _order: "asc",
      _limit: 10
    }
  });
