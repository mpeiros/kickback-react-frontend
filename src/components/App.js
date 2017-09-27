import React, { Component } from 'react';
import ButtonList from './ButtonList'
import CreditCardForm from './CreditCardForm';

class App extends Component {
  render() {
    return (
      <div className="container blue-grey darken-2">
        <div className="row">
          <div className="col m8 offset-m2">
            <div className="card-panel center-align blue-grey darken-3">
              <h1 className="white-text">DEPOSIT FUNDS</h1>
              <p className="white-text">$2,100,312 won in the last 24 hours</p>
              <ButtonList />
              <CreditCardForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
