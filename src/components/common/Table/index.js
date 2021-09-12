import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Box from '../../layout/Box';

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

const DumbData = [{ id: '0',
  descricao: 'descricao.value',
  tag: 'tag.value',
  pagamento: 'pagamento.value',
  valor: 'valor.value',
  code: 'moedaInfo.code',
  moeda: 'coinNames[0]',
  cambio: 'moedaInfo.ask',
  convertido: 'valorConvertido',
  moeda_base: 'coinNames[1]',
  code_base: 'moedaInfo.codein' }];

export default function TableWallet() {
  // const Api = 'https://economia.awesomeapi.com.br/json/all';
  const [name, setName] = useState();
  const walletStorage = useSelector((state) => state.wallet);
  // console.log('store wallet',walletStorage)

  // const convertido = async () => {
  //   const res = await fetch(`https://economia.awesomeapi.com.br/${DumbData[0].code}/`);
  //   const data = await res.json();
  //   setName(data[0].bid);
  //   console.log(name);
  // };
  useEffect(() => {
    setName(walletStorage)
  }, [walletStorage]);
  console.log('name',name)
  return (
    <Box styleProp="">
      <table>
        <thead>
          <tr>
            {tableHeader.map((texto) => (
              <th key={ texto }>{texto}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {walletStorage.map((item) => (
            <tr key={ item.id }>
              <td>{item.descricao}</td>
              <td>{item.tag}</td>
              <td>{item.pagamento}</td>
              <td>{item.valor}</td>
              <td>{item.moeda}</td>
              <td>{item.cambio}</td>
              <td>{item.convertido}</td>
              <td>{item.moeda_base}</td>
              <td>
                update /delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
}
