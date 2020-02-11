import { request } from ".";

/** Constants */
import { API_CHARACTERS } from "../utils/constants";

export const getCharactersService = (page, limit = 10) =>
  request(`${API_CHARACTERS}`, {
    method: "GET",
    params: {
      _page: page,
      _limit: limit
    }
  });

export const getCharactersBySearchService = query =>
  request(`${API_CHARACTERS}`, {
    method: "GET",
    params: {
      q: query
    }
  });
