import React from 'react';
import Header from '../components/common/Header';
import FormWallet from '../components/common/Forms/wallet';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormWallet />
        TrybeWallet
      </div>
    );
  }
}

export default Wallet;
