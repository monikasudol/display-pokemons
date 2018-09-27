import { pokemonsReducer } from '../../state/pokemons';
import pokemons from '../fixtures/pokemons';

const FETCH_POKEMONS_SUCCESS = 'pokemons: fetch-pokemons-success';
const SET_NEW_CURRENT_PAGE = 'pokemons: set-new-current-page';

test('should add fetched new pokemons', () => {

  const action = {
    type: FETCH_POKEMONS_SUCCESS,
    payload: pokemons.pokemons
  };
  const state = pokemonsReducer(pokemons.pokemons, action);
});

test('should set new current page', () => {
  const newCurrentPage = 2;

  const action = {
    type: SET_NEW_CURRENT_PAGE,
    payload: newCurrentPage
  };
  const state = pokemonsReducer(newCurrentPage, action);
});
