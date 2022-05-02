import React from 'react';
import Header from '../components/Header';
import Form from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}

export default Wallet;
