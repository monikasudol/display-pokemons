import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../../../components/page';
import './styles.css';

const pages = [1 , 2, 3, 4, 5, 6, 7, 8]

class Pages extends Component {

  render() {
  
    return (
      <div className='pages'>
        {pages.length > 0 && pages.map((page, index) => 
          (
            <Page
              key={index}
              value={page}     
            />
          )
        )}
      </div>
    );
  }
}

export default Pages;
