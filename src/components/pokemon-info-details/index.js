import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import { hidePokemonInfoDetails } from '../../state/pokemons';
import PokemonEvolution from '../pokemon-evolution';
import Type from '../type';
import './styles.css';

class PokemonInfoInDetails extends Component {

  render() {
    const { pokemonToDisplay } = this.props;
    console.log(pokemonToDisplay);
    return (
      <div className='pokemon-info-details'>
        {pokemonToDisplay && (
          <React.Fragment >
            <div className='pokemon-info-details-picture-and-name'>
              <span><b># {pokemonToDisplay[0].num} {pokemonToDisplay[0].name}</b></span>
              <img className='pokemon-info-details-picture' src={pokemonToDisplay[0].img} />
            </div>
            <div className='pokemon-info-details-description'>
              <span className='pokemon-info-details_data'>Type: {pokemonToDisplay[0].type.map((type, index) => (
                <Type key={index} type={type} />
              ))}
              </span>
              <span className='pokemon-info-details_data'>Height: <b>{pokemonToDisplay[0].height}</b></span>
              <span className='pokemon-info-details_data'>Weight: <b>{pokemonToDisplay[0].height}</b></span>
              <span className='pokemon-info-details_data'>Weaknesses: {pokemonToDisplay[0].weaknesses.map((type, index) => (
                <Type key={index} type={type} />
              ))}
              </span>
              <span className='pokemon-info-details_data'>Spawn time: <b>{pokemonToDisplay[0].spawn_time}</b></span>
              <span className='pokemon-info-details_data'>Spawn chance: <b>{pokemonToDisplay[0].spawn_chance}</b></span>
              <span className='pokemon-info-details_data'>Egg: <b>{pokemonToDisplay[0].egg}</b></span>
              {pokemonToDisplay[0].avg_spawn && (<span className='pokemon-info-details_data'>Avg spawn: <b>{pokemonToDisplay[0].avg_spawn}</b></span>)}
              <span className='pokemon-info-details_data'>Candy: <b>{pokemonToDisplay[0].candy}</b></span>
              {pokemonToDisplay[0].candy_count && (
                <span className='pokemon-info-details_data'>Candy count: <b>{pokemonToDisplay[0].candy_count}</b></span>)}
              {(pokemonToDisplay[0].multipliers && pokemonToDisplay[0].multipliers.length > 0) && (
                <span className='pokemon-info-details_data'>Multiplayers: {pokemonToDisplay[0].multipliers.map((multi, index) => (
                  <span className='pokemon-info-details_data' key={index}><b>{multi}</b></span>
                ))}</span>
              )}
              {(pokemonToDisplay[0].next_evolution && pokemonToDisplay[0].next_evolution.length > 0) && (
                <span className='pokemon-info-details_data'>Next evolution: {pokemonToDisplay[0].next_evolution.map((multi, index) => (
                  <PokemonEvolution className='next' key={index} name={multi.name} num={multi.num} />
                ))}
                </span>
              )}
              {(pokemonToDisplay[0].prev_evolution && pokemonToDisplay[0].prev_evolution.length > 0) && (
                <span className='pokemon-info-details_data'>Next evolution: {pokemonToDisplay[0].prev_evolution.map((multi, index) => (
                  <PokemonEvolution className='prev' key={index} name={multi.name} num={multi.num} />
                ))}
                </span>
              )}
            </div>
            <FaTimes
              className='pokemon-info-details__icon-exit'
              onClick={this.props.hidePokemonInfoDetails} />
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = {
  hidePokemonInfoDetails
};

export default connect(null, mapDispatchToProps)(PokemonInfoInDetails);
