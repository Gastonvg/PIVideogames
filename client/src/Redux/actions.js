import {SET_VIDEOGAMES, SEARCH, ALL, ORDENALF, RATING, FILTERID, FILTERGEN} from './actionstypes'


export const setVideogames = (videogames) => ({
  type: SET_VIDEOGAMES,
  payload: videogames,
});
export const orderrating = (orden) => ({
  type: RATING,
  payload: orden
})
export function filterid(id) {
  return{
      type: FILTERID,
      payload: id,
  }
}

export const Search = (videogames) => ({
  type: SEARCH,
  payload: videogames,
});

export const All = () => ({
  type: ALL 
});

export function orderalf(orden) {
  return{
      type: ORDENALF,
      payload: orden,
  }
}

export function ordergen(orden) {
  return{
      type: FILTERGEN,
      payload: orden,
  }
}
