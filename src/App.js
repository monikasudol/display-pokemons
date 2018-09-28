import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const { pokemons,
      pokemonToDisplay,
      currentPage,
      shouldShowPokemonDetails
    } = this.props;
    return (
      <div className='App'>
        <Pokemons pokemons={pokemons} />
        {shouldShowPokemonDetails && (
          <PokemonInfoDetails pokemonToDisplay={pokemonToDisplay} />
        )}
        <Pages currentPage={currentPage} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
  pokemonToDisplay: state.pokemons.pokemonToDisplay,
  shouldShowPokemonDetails: state.pokemons.shouldShowPokemonDetails,
  currentPage: state.pokemons.currentPage
});

const mapDispatchToProps = {
  fetchPokemons
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
