import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '../../layout/Box';
import Button from '../Button';
import './Style/index.css';
import './Style/inputSize.css';
import actions from '../../../actions';

export default function FormWallet() {
  const Api = 'https://economia.awesomeapi.com.br/json/all';
  const [name, setName] = useState([]);
  const [coinInfo, setCoinInfo] = useState(0);
  // pegando tamanho do storageWallet usado pra criar a ID
  const walletStorage = useSelector((state) => state.wallet);
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

  const saveDespesas = (e) => {
    e.preventDefault();
    const { valor, moeda, pagamento, tag, descricao } = e.target.elements;

    const moedaInfo = coinInfo[moeda.value];
    const valorConvertido = moedaInfo.ask * valor.value;
    const coinNames = moedaInfo.name.split('/');
    // pengando o ultimo id disponivel e para criar um novo id
    const lastId = walletStorage[walletStorage.length - 1].id;
    const id = lastId + 1;
    dispatch(actions.walletAdd({ id,
      descricao: descricao.value,
      tag: tag.value,
      pagamento: pagamento.value,
      valor: valor.value,
      code: moedaInfo.code,
      moeda: coinNames[0],
      cambio: parseFloat(moedaInfo.ask).toFixed(2),
      convertido: valorConvertido.toFixed(2),
      moeda_base: coinNames[1],
      code_base: moedaInfo.codein }));
  };
  useEffect(() => {
    getAllCoins();
  }, []);

  return (
    <Box styleProp="formWallet">
      <form className="formWallet__Menu" onSubmit={ saveDespesas }>
        <label className="formWallet__Label col-1" htmlFor="valor">
          Valor:
          <input
            // className="formWallet__Input col-5 "
            className="formWallet__Input col-5 "
            type="number"
            inputMode="numeric"
            pattern="[0-9]"
            name="valor"
            id="valor"
            required
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
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label className="formWallet__Label col-1" htmlFor="tag">
          Tag:
          <select
            className="formWallet__Input formSelect fild_md col-7"
            name="tag"
            id="tag"
          >
            <option value="Lazer">lazer</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label className="formWallet__Label col-3" htmlFor="descricao">
          Descrição:
          <input
            className="formWallet__Input fild_lg col-6"
            type="text"
            name="descricao"
            id="descricao"
            required
          />
        </label>
        <Box styleProp="formWalletContainer__Button col-1">
          <Button styleButtonProp="formWalletButton" btnType={ false }>
            Adicionar despesa
          </Button>
        </Box>
      </form>
    </Box>
  );
}
