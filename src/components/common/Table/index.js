import React, { useState, useEffect } from 'react';
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
const tableValue = [
  { desc: '2',
    tag: '2',
    pag: '2',
    valor: '2',
    coin: '2',
    cambio: '2',
    convertido: '2',
    moedaExt: '2',
    upDel: '2' },
];
const DumbData = [{ descricao: '11',
  moeda: 'GBP',
  pagamento: 'Debito',
  tag: 'Alimentaçao',
  valor: '1' }];
export default function TableWallet() {
  const Api = 'https://economia.awesomeapi.com.br/json/all';
  const [name, setName] = useState([]);
  const [dados, setDados] = useState([]);

  const getAllCoins = async () => {
    const res = await fetch(Api);
    const data = await res.json();
    setDados(data);
  };
  const convertido = async () => {
    const res = await fetch(`https://economia.awesomeapi.com.br/${DumbData[0].moeda}/`);
    const data = await res.json();
    setName(data[0].bid);
    // return conver;
  };

  useEffect(() => {
    getAllCoins();
    convertido();
  }, []);
  return (
    <Box>
      <table>
        <tr>
          {tableHeader.map((texto) => (
            <th key={ texto }>{texto}</th>
          ))}
        </tr>
        {DumbData.map((item) => {
          const a = convertido.conver;
          console.log(a);
          return (

            <tr key={ item.descricao }>
              <td>{item.descricao}</td>
              <td>{item.tag}</td>
              <td>{item.pagamento}</td>
              <td>{item.valor}</td>
              <td>{item.moeda}</td>
              <td>{item.cambio}</td>
              <td>{item.convertido}</td>
              <td>{item.moedaExt}</td>
              <td>
                update /delete
              </td>
            </tr>
          );
        })}
      </table>
    </Box>
  );
}
