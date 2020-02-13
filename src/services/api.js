import { request } from ".";

/** Constants */
import { API_CHARACTERS, API_SPECIES } from "../utils/constants";

export const getCharactersService = (page, limit = 10) =>
  request(API_CHARACTERS, {
    method: "GET",
    params: {
      _page: page,
      _limit: limit
    }
  });

export const getCharactersBySearchService = query =>
  request(API_CHARACTERS, {
    method: "GET",
    params: {
      q: query
    }
  });

export const getSpeciesService = () => request(API_SPECIES);

export const createCharacterService = character =>
  request(API_CHARACTERS, {
    method: "POST",
    data: character
  });

export const deleteCharacterService = id =>
  request(API_CHARACTERS, {
    method: "DELETE",
    params: {
      id
    }
  });
