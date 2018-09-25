import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import { connect } from 'react-redux';
import PokemonInfoDetails from '../pokemon-info-details';
import { sendPokemonToDisplay } from '../../state/pokemons';
import Type from '../type';
import './styles.css';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPokemonDetails: false
    }
  };

  showPokemonDetails = () => {
    this.setState({
      showPokemonDetails: true
    })
  };

  sendPokemonToDisplay = () => {
    this.props.sendPokemonToDisplay(this.props.id);
  }

  render() {
    const { name,
      img,
      num,
      type,
      nextEvolution,
      height,
      weight,
      candy,
      candy_count,
      egg,
      spawn_chance,
      avg_spawns,
      multipliers,
      weakness } = this.props;
    const { showPokemonDetails } = this.state;
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
