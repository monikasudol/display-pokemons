import { takeEvery, call, put } from 'redux-saga/effects';
import {
  FETCH_POKEMONS,
  fetchPokemonsSuccess,
  fetchPokemonsFailure
} from './index';
import * as pokemonsApi from '../../api/pokemons';

export default function* () {
  yield takeEvery(FETCH_POKEMONS, onFetchingPokemons);
}

function* onFetchingPokemons(action){
  const { payload } = action;
  try {
    const pokemons = yield call(pokemonsApi.fetchPokemons, payload);
    yield put (fetchPokemonsSuccess(pokemons))
  } catch(e) {

  }
}