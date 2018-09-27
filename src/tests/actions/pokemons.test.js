import {
  fetchPokemons,
  fetchPokemonsSuccess,
  fetchPokemonsFailure,
  setCurrentPage
} from '../../state/pokemons';
import pokemons from '../fixtures/pokemons';

const FETCH_POKEMONS = 'pokemons: fetch-pokemons';
const FETCH_POKEMONS_SUCCESS = 'pokemons: fetch-pokemons-success';
const FETCH_POKEMONS_FAILURE = 'pokemons: fetch-pokemons-failure';
const SET_CURRENT_PAGE = 'pokemons: set-current-page';

test('should create fetch-pokemons action', () => {
  const action = fetchPokemons();
  expect(action).toEqual({ type: FETCH_POKEMONS })
});

test('should create setCurrentPage action', () => {
  const action = setCurrentPage();
  expect(action).toEqual({ type: SET_CURRENT_PAGE })
});

test('should create fetch-pokemons-success action', () => {
  const action = fetchPokemonsSuccess(pokemons);
  expect(action).toEqual({
    type: FETCH_POKEMONS_SUCCESS,
    payload: pokemons
  })
});

test('should create fetch-pokemons-failure action', () => {
  const action = fetchPokemonsFailure();
  expect(action).toEqual({ type: FETCH_POKEMONS_FAILURE })
});
