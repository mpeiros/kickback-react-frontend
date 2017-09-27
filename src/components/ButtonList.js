import React, { Component } from 'react';

class ButtonList extends Component {
  state = {
    funds: ['$5', '$10', '$20', '$40', '$100', '$250', '$1000'],
    selected: 0
  };

  selectButton({ target }) {
    this.setState({ selected: this.state.funds.indexOf(target.value) });
  }

  renderButtons() {
    return this.state.funds.map((amount, index) => {
      return (
        <button 
          key={index}
          className={
            this.state.selected === index ?
            "btn waves-effect waves-light light-green" :
            "btn waves-effect waves-light blue-grey darken-4"
          }
          onClick={this.selectButton.bind(this)}
          value={amount}
          style={{ margin: '5px' }}
        >
          {amount}
        </button>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderButtons()}
      </div>
    );
  }
}

export default ButtonList;
