import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import { fetchPokemons } from './state/pokemons';
import Pokemons from './modules/pokemons';
import Pages from './modules/pokemons/pages';
import PokemonInfoDetails from './components/pokemon-info-details';
import './App.css';

class App extends Component {

  componentDidMount = () => {
    this.props.fetchPokemons(1);
  }

  render() {
    const { pokemons, pokemonToDisplay, shouldShowPokemonDetails } = this.props;
    return (
      <div className="App">
        <Pokemons pokemons={pokemons} />
        {shouldShowPokemonDetails && (
          <PokemonInfoDetails pokemonToDisplay={pokemonToDisplay} />
        )}
        <Pages />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
  pokemonToDisplay: state.pokemons.pokemonToDisplay,
  shouldShowPokemonDetails: state.pokemons.shouldShowPokemonDetails
});

const mapDispatchToProps = {
  fetchPokemons
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
