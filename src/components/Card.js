import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Card.css';

class Card extends Component {
  renderText() {
    if (this.props.text) {
      return (
        <div className="card_content-text">{this.props.text}</div>
      )
    }
  }

  renderEmoji() {
    if (this.props.emoji) {
      return(
        <div className="card_content-emoji">{this.props.emoji}</div>
      )
    }
  }
  render() {
    return(
      <div className="card">
        {this.renderText()}
        {this.renderEmoji()}
        <button onClick={(e) => this.props.onDelete(this.props.id, e)}>Delete card</button>
      </div>
    )
  }
}


Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card
