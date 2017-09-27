import React, { Component } from 'react';

class CreditCardForm extends Component {
  state = {
    cardNumber: '',
    name: '',
    date: '',
    cvc: ''
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  handleInputChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input 
            type="text" 
            name="cardNumber"
            value={this.state.cardNumber} 
            onChange={this.handleInputChange.bind(this)}
          />
          <input 
            type="text" 
            name="name"
            value={this.state.name} 
            onChange={this.handleInputChange.bind(this)}
          />
          <input 
            type="text" 
            name="date"
            value={this.state.date} 
            onChange={this.handleInputChange.bind(this)}
          />
         <input 
            type="text" 
            name="cvc"
            value={this.state.cvc} 
            onChange={this.handleInputChange.bind(this)}
          />
          <button className="btn waves-effect waves-light light-green" type="submit">
            Deposit funds
          </button>
        </form>
      </div>
    );
  }
}

export default CreditCardForm;
