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

const DumbData = [{ descricao: 'Gasto',
  tag: 'lazer',
  pagamento: 'debito',
  valor: '2,00',
  code: 'ARS',
  moeda: 'Peso Argentino',
  cambio: '0,5',
  convertido: '1',
  moeda_base: 'Real Brasileiro',
  condein: 'BRL' }];

export default function TableWallet() {
  // const Api = 'https://economia.awesomeapi.com.br/json/all';
  const [name, setName] = useState([]);

  const convertido = async () => {
    const res = await fetch(`https://economia.awesomeapi.com.br/${DumbData[0].code}/`);
    const data = await res.json();
    setName(data[0].bid);
    console.log(name);
  };

  useEffect(() => {
    convertido();
  }, []);
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
                <td>{item.moeda_base}</td>
                <td>
                  update /delete
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Box>
  );
}
