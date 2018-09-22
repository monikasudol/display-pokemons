import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemons } from '../../state/pokemons';
import './styles.css';

class Page extends Component {

  onFetchingPokemons = () => {
    const { value } = this.props;
    this.props.fetchPokemons(value);
  };

  render() {
    const { value } = this.props;
    return (
      <div onClick={this.onFetchingPokemons} className='page'>
      {value}
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchPokemons
}

export default connect(null, mapDispatchToProps)(Page);
