import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '../../layout/Box';
import Button from '../Button';
import './Style/index.css';
import './Style/inputSize.css';
import actions from '../../../actions';

export default function FormWallet() {
  const Api = 'https://economia.awesomeapi.com.br/json/all';
  const [name, setName] = useState([]);
  const [despesas, setDespesas] = useState('');
  const [coinInfo, setCoinInfo] = useState(0);
  // Storage do Wallet
  const dispatch = useDispatch();
  // pegando somente o codigo das moedas
  const getAllCoins = async () => {
    const res = await fetch(Api);
    const data = await res.json();
    const names = Object.getOwnPropertyNames(data);
    setName(names);
    setCoinInfo(data);
  };
  // const n = Object(dados.USD)

  // for (let i = 0; i < name.length; i++) {
  //   // const code = dados[name[i]];
  //   const code = Object(dados[name[i]]);
  // }

  function setStorage() {
    const storage = despesas;
    dispatch(actions.walletAdd(storage));
  }
  const saveDespesas = (e) => {
    e.preventDefault();
    const { valor, moeda, pagamento, tag, descricao } = e.target.elements;
    const moedaInfo = coinInfo[moeda.value];
    const valorConvertido = moedaInfo.ask * valor.value;
    const coinNames = moedaInfo.name.split('/');
    setDespesas(
      { descricao: descricao.value,
        tag: tag.value,
        pagamento: pagamento.value,
        valor: valor.value,
        code: moedaInfo.code,
        moeda: coinNames[0],
        cambio: moedaInfo.ask,
        convertido: valorConvertido,
        moeda_base: coinNames[1],
        code_base: moedaInfo.codein },
    );
    if (despesas.length !== 0) {
      setStorage();
    }
  };
  useEffect(() => {
    getAllCoins();
  }, [setName]);

  return (
    <Box styleProp="formWallet">
      <form className="formWallet__Menu" onSubmit={ saveDespesas }>
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
            {name.map((nameOpt) => (
              <option key={ nameOpt } value={ nameOpt }>{nameOpt}</option>
            ))}
            {/* <option value="USD">USD</option>
            <option value="BRL">BRL</option>
            <option value="CAD">CAD</option>
            <option value="UER">UER</option> */}

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
          <Button styleButtonProp="formWalletButton" type="submit">
            Adicionar despesas
          </Button>
        </Box>
      </form>
    </Box>
  );
}
