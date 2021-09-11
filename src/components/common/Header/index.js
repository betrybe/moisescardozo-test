import React from 'react';
import { useSelector } from 'react-redux';
import Box from '../../layout/Box';
import './Style/index.css';

export default function Header() {
  const userStore = useSelector((state) => state.user);
  const tamanhoStore = userStore.length;
  const headerUserName = tamanhoStore > 1 ? userStore[1].email : 'Usuario@Teste.com';
  return (
    <Box styleProp="header">
      <Box styleProp="headerImgContainer">
        <img className="headerImg" src="/img/trybeLogo.png" alt="Logo" />
      </Box>
      <Box styleProp="headerUser">
        {/* <p>{userStore[1].email}</p> */}
        <p>{headerUserName}</p>
        <p> despesas: 000,00</p>
      </Box>
    </Box>
  );
}
