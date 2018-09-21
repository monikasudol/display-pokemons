import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pokemon from '../../components/pokemon';
import Pages from './pages';
import './styles.css';

class Pokemons extends Component {

  render() {
    const { pokemons } = this.props;
    return (
      <div className='pokemons'>
        {pokemons.length > 0 && pokemons.map((pokemon, index) => 
          (
            <Pokemon
              key={index}
              name={pokemon.name}
              img={pokemon.img}
              num={pokemon.num}
              type={pokemon.type}
            />
          )
        )}
        <Pages />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons.pokemons
});

export default connect(mapStateToProps, null)(Pokemons);
