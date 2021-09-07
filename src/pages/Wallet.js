import React from 'react';
import Header from '../components/common/Header';
import FormWallet from '../components/common/Forms/wallet';
import TableWallet from '../components/common/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormWallet />
        <TableWallet />
        TrybeWallet
      </div>
    );
  }
}

export default Wallet;
