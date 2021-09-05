import React from 'react';
import Box from '../../layout/Box';
import Button from '../Button';
import './Style/index.css';

export default function FormWallet() {
  return (
    <Box styleProp="formWallet">
      <form className="">
        <label className="" htmlFor="valor">
          Valor:
          <input
            className=""
            type="numeric"
            name="valor"
            id="valor"
          />
        </label>
        <label className="" htmlFor="moeda">
          Moeda:
          <select
            className=""
            name="moeda"
            id="moeda"
          >
            <option value="USD">USD</option>
            <option value="BRL">BRL</option>
            <option value="CAD">CAD</option>
            <option value="UER">UER</option>

          </select>
        </label>
        <label className="" htmlFor="pagamento">
          Método de pagamento:
          <select
            className=""
            name="pagamento"
            id="pagamento"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Credito">Cartão de credito</option>
            <option value="Debito">Cartão de debito</option>
          </select>
        </label>
        <label className="" htmlFor="tag">
          Tag:
          <select
            className=""
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
        <label className="" htmlFor="descricao">
          Descrição:
          <input
            className=""
            type="text"
            name="descricao"
            id="descricao"
          />
        </label>
        <Button>
          Adicionar despesas
        </Button>
      </form>
    </Box>
  );
}
