import React, { Component } from 'react';
import creditCardUtils from 'creditcardutils'

class CreditCardForm extends Component {
  state = {
    cardNumber: '',
    name: '',
    date: '',
    cvc: '',
    errors: [],
    success: false
  };

  handleSubmit(event) {
    event.preventDefault();

    var errs = [];

    const formattedNumber = creditCardUtils.formatCardNumber(this.state.cardNumber);

    if (!creditCardUtils.validateCardNumber(formattedNumber)) {
      errs.push('Enter a valid card number');
    }

    const expiry = creditCardUtils.parseCardExpiry(this.state.date);

    if (!creditCardUtils.validateCardExpiry(expiry.month, expiry.year)) {
      errs.push('Enter a valid expiration date');
    }

    const cardType = creditCardUtils.parseCardType(formattedNumber);

    if (!creditCardUtils.validateCardCVC(this.state.cvc, cardType)) {
      errs.push('Enter a valid CVC');
    }

    if (this.state.name === '') {
      errs.push('You must enter a name');
    }

    this.setState({ errors: errs });

    if (errs.length === 0) {
      this.setState({ success: true });
    }
  }

  handleInputChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  renderErrors() {
    return this.state.errors.map((error, index) => {
      return <p key={index} className="white-text">{error}</p>;
    })
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
                className="blue-grey darken-4 center-align white-text"
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
                className="blue-grey darken-4 center-align white-text"
              />
            </div>
            <div className="input-field col s3">
              <input 
                type="text" 
                name="date"
                placeholder="MM/YY"
                value={this.state.date} 
                onChange={this.handleInputChange.bind(this)}
                className="blue-grey darken-4 center-align white-text"
              />
            </div>
            <div className="input-field col s3">
              <input 
                type="text" 
                name="cvc"
                placeholder="CVC"
                value={this.state.cvc} 
                onChange={this.handleInputChange.bind(this)}
                className="blue-grey darken-4 center-align white-text"
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
        <div className="row">
          {this.renderErrors()}
          {this.state.success ? <p className="white-text">Successful Deposit</p> : ''}
        </div>
      </div>
    );
  }
}

export default CreditCardForm;
