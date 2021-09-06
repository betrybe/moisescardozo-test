import React from 'react';
import Box from '../../layout/Box';
import Button from '../Button';
import TableWallet from '../Table';
import './Style/index.css';
import './Style/inputSize.css';

export default function FormWallet() {
  return (
    <Box styleProp="formWallet">
      <form className="formWallet__Menu">
        <label className="formWallet__Label col-1" htmlFor="valor">
          Valor:
          <input
            className="formWallet__Input col-5"
            type="numeric"
            name="valor"
            id="valor"
          />
        </label>
        <label className="formWallet__Label col-2" htmlFor="moeda">
          Moeda:
          <select
            className="formWallet__Input formSelect col-5"
            name="moeda"
            id="moeda"
          >
            <option value="USD">USD</option>
            <option value="BRL">BRL</option>
            <option value="CAD">CAD</option>
            <option value="UER">UER</option>

          </select>
        </label>
        <label className="formWallet__Label col-2" htmlFor="pagamento">
          Método de pagamento:
          <select
            className="formWallet__Input formSelect fild_md col-6"
            name="pagamento"
            id="pagamento"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Credito">Cartão de credito</option>
            <option value="Debito">Cartão de debito</option>
          </select>
        </label>
        <label className="formWallet__Label col-1" htmlFor="tag">
          Tag:
          <select
            className="formWallet__Input formSelect fild_md col-7"
            name="tag"
            id="tag"
          >
            <option value="Lazer">Lazer</option>
            <option value="Alimentaçao">Alimentação</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saude">Saúde</option>
          </select>
        </label>
        <label className="formWallet__Label col-3" htmlFor="descricao">
          Descrição:
          <input
            className="formWallet__Input fild_lg col-6"
            type="text"
            name="descricao"
            id="descricao"
          />
        </label>
        <Box styleProp="formWalletContainer__Button col-1">
          <Button styleButtonProp="formWalletButton">
            Adicionar despesas
          </Button>
        </Box>
      </form>
      <TableWallet />
    </Box>
  );
}
