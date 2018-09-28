import React, { Component } from 'react';
import './styles.css';

class PokemonEvolution extends Component {

  render() {
    const { name, num, className } = this.props;
    return (
      <div className={`pokemon-evolution ${className}`}>
        #{num} {name}
      </div>
    );
  }
}

export default PokemonEvolution;
