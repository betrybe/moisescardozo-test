import React from 'react';
import Box from '../../layout/Box';
import './Style/index.css';

export default function Header() {
  return (
    <Box styleProp="header">
      <img className="headerImg" src="/img/trybeLogo.png" alt="Logo" />
      <Box styleProp="headerUser">
        <p>email@email.com</p>
        <p> despesas: 000,00</p>
      </Box>
    </Box>
  );
}
