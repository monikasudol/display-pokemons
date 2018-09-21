import React, { Component } from 'react';
import './styles.css';

class Type extends Component {

  render() {
    const { type } = this.props;
    return (
      <div className={`type ${type}`}>
        {type}
      </div>
    );
  }
}

export default Type;
