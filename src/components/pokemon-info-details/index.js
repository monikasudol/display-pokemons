import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hidePokemonInfoDetails } from '../../state/pokemons';
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
              <img src={pokemonToDisplay[0].img} />
            </div>
            <div className='pokemon-info-details-description'>
              <span>Type: {pokemonToDisplay[0].type.map((type, index) => (
                <Type key={index} type={type} />
              ))}
              </span>
              <span>Height: {pokemonToDisplay[0].height}</span>
              <span>Weight: {pokemonToDisplay[0].height}</span>
              <span>Weaknesses: {pokemonToDisplay[0].weaknesses.map((type, index) => (
                <Type key={index} type={type} />
              ))}
              </span>
            </div>
            <button className='pokemon-info-details-exit-button' onClick={this.props.hidePokemonInfoDetails}>Close</button>
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
