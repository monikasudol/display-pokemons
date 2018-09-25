import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { fetchPokemons, setCurrentPage } from '../../../state/pokemons';
import Page from '../../../components/page';
import './styles.css';

const pages = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

class Pages extends Component {
  
  onFetchPokemonsFromPreviousPage = () => {
    const value = this.props.currentPage - 1;
    if(value){
      this.props.fetchPokemons(value);
      this.props.setCurrentPage(value);
    }
  };
  
  onFetchPokemonsFromSubsequentPage = () => {
    const value = this.props.currentPage + 1;
    if(value !== pages.length + 1){
      this.props.fetchPokemons(value);
      this.props.setCurrentPage(value);
    };
  };

  render() {
  const { currentPage } = this.props;
    return (
      <div className='pages'>
      <FaArrowCircleLeft
        className='pages-icon-arrow'
        onClick={this.onFetchPokemonsFromPreviousPage}
        disabled={currentPage === 1}/>
        {pages.length > 0 && pages.map((page, index) => 
          (
            <Page
              key={index}
              value={page}
              lastPage={pages[pages.length-1]}
              currentPage={this.props.currentPage}
            />
          )
        )}
        <FaArrowCircleRight
          className='pages-icon-arrow'
          onClick={this.onFetchPokemonsFromSubsequentPage}
          disabled={currentPage === pages[pages.length - 1]}/>
      </div>
    );
  }
};

const mapDispatchToProps = {
  fetchPokemons,
  setCurrentPage
};

export default connect(null, mapDispatchToProps)(Pages);
