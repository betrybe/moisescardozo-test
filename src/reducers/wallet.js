// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const typeAction = {
  walletAdd: 'walletAdd',
  walletRemove: 'walletRemove',
};
  // CRIAR LOGIA PARA NAO FICAR COM 1 OBJ VAZIO
const INIT_STATE = [];
const wallet = (state = INIT_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
  case typeAction.walletAdd:
    return [
      ...state, {
        ...payload,
      },
    ];
  default:
    return state;
  }
};
export default wallet;
