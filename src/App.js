import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import { fetchPokemons } from './state/pokemons';
import Pokemons from './modules/pokemons';
import './App.css';

class App extends Component {

  componentDidMount = () => {
    this.props.fetchPokemons(1);
  }

  render() {
    const { pokemons } = this.props;
    return (
      <div className="App">
        <Pokemons />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons
});

const mapDispatchToProps = {
  fetchPokemons
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
