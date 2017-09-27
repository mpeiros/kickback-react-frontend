import React, { Component } from 'react';
import ButtonList from './ButtonList'
import CreditCardForm from './CreditCardForm';

class App extends Component {
  render() {
    return (
      <div>
        <h1>DEPOSIT FUNDS</h1>
        <p>$2,100,312 won in the last 24 hours</p>
        <ButtonList />
        <CreditCardForm />
      </div>
    );
  }
}

export default App;
