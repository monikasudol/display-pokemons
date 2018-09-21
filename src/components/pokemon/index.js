import React, { Component } from 'react';
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
  }

  render() {
    const { name, img, num, type } = this.props;
    const { showPokemonDetails } = this.state;
    return (
      <div className='pokemon'

        onClick={this.showPokemonDetails}>

        <img src={img} />
        <div className='pokemon-name'>
          #{num} {name}
        </div>
        <div className='pokemon-types'>
          {type.map((type, index) => (
            <Type type={type} key={index} />
          ))}
        </div>
        {/* {showPokemonDetails && (
          <div className='pokemon-details'>
          </div>
        )} */}
      </div>
    );
  }
}

export default Pokemon;
