import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemons, setCurrentPage } from '../../state/pokemons';
import classNames from 'classnames';
import './styles.css';

class Page extends Component {

  onFetchPokemons = () => {
    const { value } = this.props;
    this.props.fetchPokemons(value);
    this.props.setCurrentPage(value);
  };

  render() {
    const { value, lastPage, currentPage } = this.props;
    return (
      <React.Fragment>{(value === currentPage + 1 || value === currentPage - 1 || value === lastPage || value === 1 || value === currentPage) 
        && (
        <div onClick={this.onFetchPokemons} className={classNames('page', { 'active-page': value === currentPage})}>
          {value}
        </div>)}
        {(value !== lastPage && value !== 1 && value !== currentPage &&
          (value === currentPage + 2 || value === currentPage - 2)) && (
            <div onClick={this.onFetchPokemons} className='page_prev_or_next'>
             ...
            </div>)}
      </React.Fragment>
    );
  }
};

const mapDispatchToProps = {
  fetchPokemons,
  setCurrentPage
};

export default connect(null, mapDispatchToProps)(Page);
