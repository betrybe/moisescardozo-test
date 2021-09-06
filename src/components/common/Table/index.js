import React from 'react';

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

export default function TableWallet() {
  return (
    <table>
      <tr>
        {tableHeader.map((texto) => (
          <th key={ texto }>{texto}</th>
        ))}
      </tr>
      {tableValue.map((item) => (
        <tr key={ item.desc }>
          <td>{item.desc}</td>
          <td>{item.tag}</td>
          <td>{item.pag}</td>
          <td>{item.valor}</td>
          <td>{item.coin}</td>
          <td>{item.cambio}</td>
          <td>{item.convertido}</td>
          <td>{item.moedaExt}</td>
          <td>
            update /delete
          </td>
        </tr>
      ))}
    </table>

  );
}
