import {SEARCH, SET_VIDEOGAMES, ALL,  ORDENALF, RATING, FILTERID, FILTERGEN} from './actionstypes'

const initialState = {
    videogames:[],
    videogamesall: [],
    videogamespreordeno: [],
}

  
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VIDEOGAMES:
          return {
                ...state,
                videogames: action.payload,
                videogamesall: action.payload,
        };
        case SEARCH:
            return{
                ...state,
                videogames: action.payload
            };
        case ALL:
            const aregrar = state.videogamesall
            return{
                ...state,
                videogames: aregrar
            };
        case  ORDENALF: 
            const orderStateCopyAlpha = { ...state };
            const charactersToOrderAlpha = [...orderStateCopyAlpha.videogames];
            if (action.payload === "A") {
                charactersToOrderAlpha.sort((a, b) => a.name.charAt(0).localeCompare(b.name.charAt(0)));
            } else if (action.payload === "D") {
                charactersToOrderAlpha.sort((a, b) => b.name.charAt(0).localeCompare(a.name.charAt(0)));
            }
            return {
                ...state,
                videogames: charactersToOrderAlpha,
              };
        case RATING: 
              const orderStateCopy = { ...state };
              const charactersToOrder = [...orderStateCopy.videogames];
              if (action.payload === "A") {
                      charactersToOrder.sort((a, b) => a.rating - b.rating); 
              } else if (action.payload === "D") {
                       charactersToOrder.sort((a, b) => b.rating - a.rating); 
              }
               return {
                   ...state,
                   videogames: charactersToOrder,
            }; 
        case FILTERID:
            let paraordenarr = state.videogamesall
            let paraordenar = []
            if (action.payload === 'All') {
                 paraordenar = state.videogamesall;
            } else if (action.payload === 'database') {
                paraordenar = paraordenarr.filter((character) => typeof character.id === 'string');
            } else if (action.payload === 'api') {
                paraordenar = paraordenarr.filter((character)  => typeof character.id === 'number');
            }
           return {
                    ...state,
                     videogames: paraordenar,
                   };
        case FILTERGEN:
            let ordenargen = state.videogamesall
            let ordenar = []
            if (action.payload === 'All') {
                ordenar = state.videogamesall;
            } else {
                ordenar = ordenargen.filter(videojuego =>
                    videojuego.genres.some(genres => genres.name === action.payload)
                );
            }
            return {
                ...state,
                 videogames: ordenar,
               };
               
      default:
        return state;
    }
  };
export default reducer