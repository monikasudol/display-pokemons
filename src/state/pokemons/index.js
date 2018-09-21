import { handleActions, createAction } from  'redux-actions';

const initialState = {
  pokemons: []
};

export const FETCH_POKEMONS = 'pokemons: fetch-pokemons';
const FETCH_POKEMONS_SUCCESS = 'pokemons: fetch-pokemons-success';
const FETCH_POKEMONS_FAILURE = 'pokemons: fetch-pokemons-failure';


export const pokemonsReducer = handleActions({
  [FETCH_POKEMONS_SUCCESS]: (state, { payload }) => ({
    ...state,
    pokemons: [...payload]
  })
}, initialState);

export const fetchPokemons = createAction(FETCH_POKEMONS);
export const fetchPokemonsSuccess = createAction(FETCH_POKEMONS_SUCCESS);
export const fetchPokemonsFailure = createAction(FETCH_POKEMONS_FAILURE);
