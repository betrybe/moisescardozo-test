import React from 'react';
import { useSelector } from 'react-redux';

import Box from '../../layout/Box';
import './Style/index.css';

export default function Header() {
  const userStore = useSelector((state) => state.user);
  const walletStore = useSelector((state) => state.wallet);
  const tamanhoStore = userStore.length;
  const headerUserName = tamanhoStore > 1 ? userStore[1].email : 'Usuario@Teste.com';

  const despesaTotal = walletStore.reduce((total, valor) => total + +valor.convertido, 0);

  return (
    <Box styleProp="header">
      <Box styleProp="headerImgContainer">
        <img className="headerImg" src="/img/trybeLogo.png" alt="Logo" />
      </Box>
      <Box styleProp="headerUser">
        {/* <p>{userStore[1].email}</p> */}
        <p>{headerUserName}</p>
        <p>
          despesas:
          R$
          {despesaTotal.toFixed(2)}
        </p>
      </Box>
    </Box>
  );
}
