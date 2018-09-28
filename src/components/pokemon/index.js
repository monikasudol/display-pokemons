import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendPokemonToDisplay } from '../../state/pokemons';
import Type from '../type';
import './styles.css';

class Pokemon extends Component {

  sendPokemonToDisplay = () => {
    this.props.sendPokemonToDisplay(this.props.id);
  }

  render() {
    const { name,
      img,
      num,
      type
     } = this.props;
    return (
      <div className='pokemon'
        onClick={this.sendPokemonToDisplay}>
        <img src={img} className='pokemon-image' />
        <div className='pokemon-name'>
          #{num} {name}
        </div>
        <div className='pokemon-types'>
          {type.map((type, index) => (
            <Type type={type} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  sendPokemonToDisplay
};

export default connect(null, mapDispatchToProps)(Pokemon);
