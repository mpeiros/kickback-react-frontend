import React, { Component } from 'react';

class ButtonList extends Component {
  state = {
    funds: ['$5', '$10', '$20', '$40', '$100', '$250', '$1000']
  };

  renderButtons() {
    return this.state.funds.map(amount => {
      return <button className="btn waves-effect waves-light">{amount}</button>
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
