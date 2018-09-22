import { handleActions, createAction } from  'redux-actions';

const initialState = {
  pokemons: [],
  shouldShowPokemonDetails: false
};

export const FETCH_POKEMONS = 'pokemons: fetch-pokemons';
const FETCH_POKEMONS_SUCCESS = 'pokemons: fetch-pokemons-success';
const FETCH_POKEMONS_FAILURE = 'pokemons: fetch-pokemons-failure';
const SEND_POKEMON_TO_DISPLAY = 'pokemons: send-pokemon-to-display';
const HIDE_POKEMON_INFO_DETAILS = 'pokemons: hide-pokemon-info-details';

export const pokemonsReducer = handleActions({
  [FETCH_POKEMONS_SUCCESS]: (state, { payload }) => ({
    ...state,
    pokemons: [...payload]
  }),

  [SEND_POKEMON_TO_DISPLAY]: (state, { payload }) => ({
    ...state,
    pokemonToDisplay: [...state.pokemons.filter(pokemon => pokemon.id === payload)],
    shouldShowPokemonDetails: true
  }),

  [HIDE_POKEMON_INFO_DETAILS]: (state) => ({
    ...state,
    shouldShowPokemonDetails: false
  })
}, initialState);

export const fetchPokemons = createAction(FETCH_POKEMONS);
export const sendPokemonToDisplay = createAction(SEND_POKEMON_TO_DISPLAY);
export const fetchPokemonsSuccess = createAction(FETCH_POKEMONS_SUCCESS);
export const fetchPokemonsFailure = createAction(FETCH_POKEMONS_FAILURE);
export const hidePokemonInfoDetails = createAction(HIDE_POKEMON_INFO_DETAILS);
