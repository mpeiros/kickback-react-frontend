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
      <div className="row" style={{ marginTop: '25px' }}>
        <form onSubmit={this.handleSubmit.bind(this)} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input 
                type="text" 
                name="cardNumber"
                placeholder="Credit card number"
                value={this.state.cardNumber} 
                onChange={this.handleInputChange.bind(this)}
                className="blue-grey darken-4 center-align"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input 
                type="text" 
                name="name"
                placeholder="Name on card"
                value={this.state.name} 
                onChange={this.handleInputChange.bind(this)}
                className="blue-grey darken-4 center-align"
              />
            </div>
            <div className="input-field col s3">
              <input 
                type="text" 
                name="date"
                placeholder="MM/YY"
                value={this.state.date} 
                onChange={this.handleInputChange.bind(this)}
                className="blue-grey darken-4 center-align"
              />
            </div>
            <div className="input-field col s3">
              <input 
                type="text" 
                name="cvc"
                placeholder="CVC"
                value={this.state.cvc} 
                onChange={this.handleInputChange.bind(this)}
                className="blue-grey darken-4 center-align"
              />
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <button
                className="btn waves-effect waves-light light-green"
                type="submit"
                style={{ width: '100%' }}
              >
                Deposit funds
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreditCardForm;
