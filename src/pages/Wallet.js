import React from 'react';
import Header from '../components/common/Header';
import FormWallet from '../components/common/Forms/wallet';
import TableWallet from '../components/common/Table';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <FormWallet />
        <TableWallet />
        * Valores de cambio são arredondados em 3 casas decimais
      </>
    );
  }
}

export default Wallet;
