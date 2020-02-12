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

export const createNewCharacterService = character =>
  request(API_CHARACTERS, {
    method: "POST",
    params: character
  });
