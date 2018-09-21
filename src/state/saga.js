import pokemonsSaga from './pokemons/saga';

export default function* () {
  yield* pokemonsSaga();
}
