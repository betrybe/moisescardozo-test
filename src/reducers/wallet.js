// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const typeAction = {
  walletAdd: 'walletAdd',
  walletRemove: 'walletRemove',
};
  // CRIAR LOGIA PARA NAO FICAR COM 1 OBJ VAZIO
const INIT_STATE = [{ id: 0,
  descricao: 'Valor teste',
  tag: 'Trabalho',
  pagamento: 'Dinheiro',
  valor: 100,
  code: 'usd',
  moeda: 'Dólar Americano',
  cambio: 5.249,
  convertido: 524.9,
  moeda_base: 'Real Brasileiro',
  code_base: 'BRL' }];
const wallet = (state = INIT_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
  case typeAction.walletAdd:
    return [
      ...state, {
        ...payload,
      },
    ];
  case typeAction.walletRemove:
    console.log('state', state);
    return payload;
    // return {
    //   ...state,
    //   list: state.filter((item) => item.id !== payload.id),
    // };
  default:
    return state;
  }
};
export default wallet;
