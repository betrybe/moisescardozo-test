import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../../actions';
import Box from '../../layout/Box';
import Button from '../Button';
import './Style/index.css';

const tableHeader = [
  'Descrição',
  'Tag',
  'Método de Pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor Convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

export default function TableWallet() {
  // const Api = 'https://economia.awesomeapi.com.br/json/all';
  const walletStorage = useSelector((state) => state.wallet);
  const [name, setName] = useState([walletStorage]);
  const dispatch = useDispatch();

  function handleRemove(itemId) {
    const newList = name.filter((item) => item.id !== itemId);
    setName(newList);
    dispatch(actions.walletRemove(newList));
    console.log(name);
  }
  useEffect(() => {
    setName(walletStorage);
  }, [walletStorage]);

  return (
    <Box styleProp="">
      <table className="table">
        <thead className="table_header">
          <tr className="">
            {tableHeader.map((texto) => (
              <th key={ texto }>{texto}</th>
            ))}
          </tr>
        </thead>
        <tbody className="table_body">
          {walletStorage.map((item) => (
            <tr key={ item.id } className="table_body-row">
              <td>{item.descricao}</td>
              <td>{item.tag}</td>
              <td>{item.pagamento}</td>
              <td>{item.valor}</td>
              <td>{item.moeda}</td>
              <td>{item.cambio}</td>
              <td>{item.convertido}</td>
              <td>{item.moeda_base}</td>
              <td>
                <Button onClick={ () => handleRemove(item.id) }>Deletar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
}
