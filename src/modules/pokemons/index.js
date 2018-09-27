import React, { Component } from 'react';
import { connect } from 'react-redux';
import PokemonInfoDetails from '../../components/pokemon-info-details';
import Pokemon from '../../components/pokemon';
import './styles.css';

export class Pokemons extends Component {

  render() {
    const { pokemons, pokemonToDisplay, shouldShowPokemonDetails } = this.props;
    return (
      <div className='pokemons'>     
        {pokemons.length > 0 && pokemons.map((pokemon, index) =>
          (
            <Pokemon
              id={pokemon.id}
              key={index}
              name={pokemon.name}
              img={pokemon.img}
              num={pokemon.num}
              type={pokemon.type}
              nextEvolution={pokemon.nextEvolution}
              height={pokemon.height}
              weight={pokemon.weight}
              candy={pokemon.candy}
              candy_count={pokemon.candy_count}
              egg={pokemon.egg}
              spawn_chance={pokemon.spawn_chance}
              avg_spawns={pokemon.avg_spawns}
              multipliers={pokemon.multipliers}
              weakness={pokemon.weakness}
            />
          )
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons.pokemons,
});

export default connect(mapStateToProps, null)(Pokemons);
